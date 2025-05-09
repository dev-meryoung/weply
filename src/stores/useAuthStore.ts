import { User, onAuthStateChanged } from 'firebase/auth';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  arrayRemove,
} from 'firebase/firestore';
import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import defaultProfile from '/images/profile_default.png';
import { auth, db } from '@/firebase/firebaseConfig';

interface AuthState {
  user: User | null;
  userId: string;
  profileImage: string;
  channelName: string;
  likedPlaylist: number[];
  savedPlaylist: number[];
  channelFollower: string[];
  channelFollowing: string[];
  tags: string[];
  isFirstLogin: boolean;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  fetchUserData: (userId: string) => void;
  getIsFirstLogin: () => boolean;
  addLikedPlaylistItem: (playlistId: number) => void;
  addSavedPlaylistItem: (playlistId: number) => void;
  removeLikedPlaylistItem: (playlistId: number) => void;
  removeSavedPlaylistItem: (playlistId: number) => void;
  removeFollowing: (userId: string, removeChannel: string) => Promise<void>;
  removeFollower: (userId: string, removeChannel: string) => Promise<void>;
}

type AuthPersist = (
  config: StateCreator<AuthState>,
  options: PersistOptions<AuthState>
) => StateCreator<AuthState>;

const INIT_VALUES = {
  user: {
    user: null,
    userId: '',
    profileImage: '',
    channelName: '',
    likedPlaylist: [],
    savedPlaylist: [],
    channelFollower: [],
    channelFollowing: [],
    tags: [],
  },
};

export const useAuthStore = create<AuthState>(
  (persist as AuthPersist)(
    (set, get) => ({
      user: null,
      userId: '',
      profileImage: '',
      channelName: '',
      likedPlaylist: [],
      savedPlaylist: [],
      channelFollower: [],
      channelFollowing: [],
      tags: [],
      isFirstLogin: true,
      setUser: (user) => set({ user }),
      clearUser: () => set(INIT_VALUES.user),
      fetchUserData: async (id) => {
        const userDocRef = doc(db, 'users', id);
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          set({
            profileImage: data?.profileImg || defaultProfile,
            channelName: data?.channelName || '',
            likedPlaylist: data?.likedPlaylist || [],
            savedPlaylist: data?.savedPlaylist || [],
            channelFollower: data?.channelFollower || [],
            channelFollowing: data?.channelFollowing || [],
            tags: data?.tags || [],
            isFirstLogin: data?.isFirstLogin,
          });
        }
      },
      getIsFirstLogin: () => get().isFirstLogin,
      addLikedPlaylistItem: (playlistId) =>
        set((state) => ({
          likedPlaylist: [...state.likedPlaylist, playlistId],
        })),
      addSavedPlaylistItem: (playlistId) =>
        set((state) => ({
          savedPlaylist: [...state.savedPlaylist, playlistId],
        })),
      removeLikedPlaylistItem: (playlistId) =>
        set((state) => ({
          likedPlaylist: state.likedPlaylist.filter((i) => i !== playlistId),
        })),
      removeSavedPlaylistItem: (playlistId) =>
        set((state) => ({
          savedPlaylist: state.savedPlaylist.filter((i) => i !== playlistId),
        })),

      removeFollowing: async (userId: string, removeChannel: string) => {
        const userDocRef = doc(db, 'users', userId);
        await updateDoc(userDocRef, {
          channelFollowing: arrayRemove(removeChannel),
        });
        set((state) => ({
          channelFollowing: state.channelFollowing.filter(
            (userId) => userId !== removeChannel
          ),
        }));
      },

      removeFollower: async (userId: string, removeChannel: string) => {
        const userDocRef = doc(db, 'users', userId);
        await updateDoc(userDocRef, {
          channelFollower: arrayRemove(removeChannel),
        });
        set((state) => ({
          channelFollower: state.channelFollower.filter(
            (userId) => userId !== removeChannel
          ),
        }));
      },
    }),
    {
      name: 'auth-storage',
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);

export const updateFirstLogin = async (userId: string, tags: string[]) => {
  const userDocRef = doc(db, 'users', userId);
  await updateDoc(userDocRef, {
    isFirstLogin: false,
    tags,
  });
};

onAuthStateChanged(auth, async (user) => {
  const { setUser, fetchUserData } = useAuthStore.getState();
  setUser(user);
  if (user) {
    const email = user.email || '';
    const userId = email.split('@')[0];

    const usersCollectionRef = collection(db, 'users');
    const userQuery = query(usersCollectionRef, where('uid', '==', user.uid));
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      useAuthStore.setState({ userId });

      fetchUserData(userId);
    } else {
      console.error('User not found in Firestore');
    }
  } else {
    useAuthStore.getState().clearUser();
  }
});
