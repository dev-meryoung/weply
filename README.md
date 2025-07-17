# ▶️ 플레이리스트 공유 플랫폼 서비스 | 위플리

<img width="1200" alt="weply" src="https://github.com/user-attachments/assets/feadf140-86a2-4be1-8929-0b33c8b84c6d">

## 🗂️ 프로젝트 소개

> `위플리`는 유튜브, Vimeo, SoundCloud 등 다양한 플랫폼의 영상 콘텐츠를 링크 기반 플레이리스트로 정리하고, 이를 공유하거나 구독해 취향이 맞는 사용자들과 네트워킹할 수 있도록 만든 소셜 플레이리스트 플랫폼입니다.

## 🗓️ 프로젝트 기간

| 종류 | 기간 |
| :-- | :-- |
| 기획 및 설계 | 2024. 08. 19. ~ 2024. 08. 23. |
| 디자인 | 2024. 08. 23. ~ 2024. 08. 25. |
| 퍼블리싱 및 기능 구현 | 2024. 08. 26. ~ 2024. 09. 09. |

## 🔗 배포 링크

### [▶️ 위플리](https://tpj3test.web.app/)

#### 👤 테스트 계정
- ID : `test1234`
- PW : `test1234`

## 📚 기술 스택

| 기술 | 도입 이유 |
| :-- | :-- |
| `React` | 프로젝트에서 사용되는 UI 요소를 독립적이고 재사용 가능한 컴포넌트 단위로 개발하여, 애플리케이션의 유지보수성과 재사용성을 높이기 위해 도입되었습니다. |
| `TypeScript` | 코드에 타입을 명시하여 개발 단계에서 오류를 미리 잡고, 변수나 함수의 의도를 명확하게 만들어 코드의 안정성과 협업 효율성을 높이기 위해 도입되었습니다. |
| `Zustand` | 사용자 인증 상태 등 여러 컴포넌트가 공유하는 전역 상태를 간결하고 직관적인 방식으로 관리하여, 복잡한 설정 없이도 효율적인 상태 관리를 구현하기 위해 도입되었습니다. |
| `TanStack Query` | API 데이터 로딩, 캐싱, 동기화 등 복잡한 서버 상태 관련 로직을 선언적으로 관리하여 비동기 코드의 복잡도를 낮추고, 서버 데이터 관리를 효율화하기 위해 도입되었습니다. |
| `Emotion` | 스타일을 해당 컴포넌트 파일에 함께 두어 응집도를 높이고, 변수를 활용한 동적 스타일링을 쉽게 구현하여 유지보수성과 개발 편의성을 높이기 위해 도입되었습니다. |
| `Firebase` | 별도의 백엔드 서버를 직접 구축하고 배포하는 대신, Firebase가 제공하는 인증 및 데이터베이스를 활용하여 핵심 기능 구현에 집중하기 위해 도입되었습니다. |
| `Vite` | 빠른 개발 서버 속도와 최적화된 빌드 성능을 통해 개발 경험을 향상시키고, 경로 별칭과 같은 편의 기능을 활용해 생산성을 높이기 위해 도입되었습니다. |
| `Husky`<br/>`lint-staged` | 팀원들이 커밋하기 전에 자동으로 코드 컨벤션을 검사하고 수정하도록 강제하여, 전체 코드베이스의 일관성과 품질을 사람의 개입 없이 높은 수준으로 유지하기 위해 도입되었습니다. |

## ✨ 주요 기능

### 1️⃣ 플레이리스트 탐색

#### ◼️ 메인 페이지

- 최신순, 좋아요순, 댓글순으로 전체 플레이리스트를 정렬하여 볼 수 있으며, 무한 스크롤을 통해 목록을 확인할 수 있습니다.

| 메인 페이지 |
| :--: |
| <img width="300px" alt="main" src="https://github.com/user-attachments/assets/694350f2-75b7-4061-9bd6-d29a6546cffa" /> |

#### ◼️ 검색 플레이리스트

- 플레이리스트 제목 또는 해시태그로 원하는 콘텐츠를 검색할 수 있습니다.

| 검색 결과 페이지 |
| :--: |
| <img width="300px" alt="search" src="https://github.com/user-attachments/assets/942e0206-7b25-430d-a07e-8b5b70438a2b" /> |

#### ◼️ 인기 플레이리스트

- 사용자가 선택한 관심 해시태그 기반으로 인기 플레이리스트 목록을 확인할 수 있습니다.

| 인기 페이지 |
| :--: |
| <img width="300px" alt="best" src="https://github.com/user-attachments/assets/2a259075-66d9-4359-b4ec-9ea7f7616c66" /> |

#### ◼️ 플레이리스트 상세 페이지

- 마음에 드는 플레이리스트에 '좋아요'를 누르고, 이후에 좋아요 누른 플레이리스트를 확인할 수 있습니다.
- 플레이리스트의 링크를 복사하여 외부로 공유할 수 있습니다.
- 다른 사람의 플레이리스트를 저장하고, 이후 저장한 목록을 확인할 수 있습니다.
- 다른 사용자의 채널을 팔로우할 수 있습니다.
- 플레이리스트에 댓글을 작성하여 다른 사용자들과 소통할 수 있습니다.

| 좋아요 | 공유 | 저장 | 팔로우 |
| :--: | :--: | :--: | :--: |
| <img width="300px" alt="like" src="https://github.com/user-attachments/assets/7ee9ee40-8724-4704-96cb-cb74e6751372" /> | <img width="300px" alt="share" src="https://github.com/user-attachments/assets/b67bf135-f851-4ccd-bc0b-b095e2f8d6cc" /> | <img width="300px" alt="save" src="https://github.com/user-attachments/assets/7c4ee084-9bac-4413-9c14-2b99a7704e49" /> | <img width="300px" alt="follow" src="https://github.com/user-attachments/assets/fb9b5ef3-3afd-478c-96c1-d67302dc0849" /> |

| 댓글 추가 및 삭제 | 미니 플레이리스트 확인 |
| :--: | :--: |
| <img width="300px" alt="comment" src="https://github.com/user-attachments/assets/b5764462-fc5c-4448-a768-78bb473f6cc8" /> | <img width="300px" alt="mini" src="https://github.com/user-attachments/assets/4dabea4a-fe5a-4452-a258-dba8a5976c3c" /> |

### 2️⃣ 마이페이지

#### ◼️ 플레이리스트 생성

| 플레이리스트 생성 |
| :--: |
| <img width="300px" alt="create" src="https://github.com/user-attachments/assets/c7302e0f-6d82-4901-8506-23cdfb948d58" /> |

#### ◼️ 나의 플레이리스트 목록

- 사용자가 직접 생성, 저장, '좋아요'한 플레이리스트를 탭으로 구분하여 확인할 수 있습니다.

| 마이플리 필터링 | 마이플리 공개여부 변경 | 마이플리 수정 | 마이플리 삭제 |
| :--: | :--: | :--: | :--: |
| <img width="300px" alt="filter" src="https://github.com/user-attachments/assets/6c1b1f22-5643-4106-8682-4ed166082b10" /> | <img width="300px" alt="change" src="https://github.com/user-attachments/assets/e3881f44-7243-4e46-b9db-7d5c4bc396e4" /> | <img width="300px" alt="edit" src="https://github.com/user-attachments/assets/6b9c157f-9f52-4d08-aed0-f6cf5ba51b19" /> | <img width="300px" alt="delete" src="https://github.com/user-attachments/assets/bae2c5aa-50b5-4126-b3f0-7239e4b134bc" /> |

| 저장된 플리 필터링 | 저장 취소|
| :--: | :--: |
| <img width="300px" alt="save filter" src="https://github.com/user-attachments/assets/4b0c36a5-a5f4-4b56-be7e-40a2da3b97fb" /> | <img width="300px" alt="save cancel" src="https://github.com/user-attachments/assets/1bae3b91-b0f7-45ec-8ed5-1cf1fbba465a" /> |

| '좋아요'한 플리 필터링 | 좋아요 취소 |
| :--: | :--: |
| <img width="300px" alt="like filter" src="https://github.com/user-attachments/assets/49a49ca2-9e6a-4cb5-93fa-1e7a0a4fb31e" /> | <img width="300px" alt="like cancel" src="https://github.com/user-attachments/assets/5d6cb0a6-38dd-45fa-a3ea-e7f8b18f33f3" /> |

#### ◼️ 프로필 관리

- 채널 이름, 프로필 이미지를 설정하고 수정할 수 있습니다.
- 본인을 팔로우하는 채널과 내가 팔로우하는 채널의 목록을 관리할 수 있습니다.
- 사용자가 작성한 댓글 목록을 확인하고 삭제할 수 있습니다.

| 프로필 수정 |
| :--: |
| <img width="300px" alt="profile edit" src="https://github.com/user-attachments/assets/5a46b5a7-762b-4c06-9046-09904b2e814a" /> |

| 팔로워 목록 확인 및 팔로워 삭제 | 팔로잉 목록 확인 및 언팔로우 |
| :--: | :--: |
| <img width="300px" alt="follower list" src="https://github.com/user-attachments/assets/acb1927b-1ca9-43d3-adbd-dae92a1e4539" /> | <img width="300px" alt="following list" src="https://github.com/user-attachments/assets/d96eac06-f8d2-45cf-9230-515fdd8d5bcb" /> |

| 댓글 삭제 | 로그아웃 |
| :--: | :--: |
| <img width="300px" alt="comment delete" src="https://github.com/user-attachments/assets/6e30daf8-d8bf-4ebf-8a95-908c24e7cb19" /> | <img width="300px" alt="logout" src="https://github.com/user-attachments/assets/2599d464-6e45-4317-96b9-3aef982ed49f" /> |

### 3️⃣ Firebase Authentication 기반 사용자 인증

#### ◼️ 회원가입 및 로그인

- 자체 계정 및 구글 소셜 로그인을 사용해 로그인할 수 있습니다.

| 회원가입 | 로그인 | 구글 로그인 |
| :--: | :--: | :--: |
| <img width="300px" alt="join" src="https://github.com/user-attachments/assets/4f4baff0-85d1-4f78-a51f-0b15a9f807ba" /> | <img width="300px" alt=login src="https://github.com/user-attachments/assets/53fee800-fc89-4be8-8eb9-cfeb1b8ed220"> | <img width="300px" alt="g-login" src="https://github.com/user-attachments/assets/61c1e3a3-a7d1-4d44-a8e5-e154935600ab"> | 

#### ◼️ 선호 해시태그 선택

- 최초 로그인 시 관심 해시태그를 선택하여 개인화된 콘텐츠를 추천받을 수 있습니다.

| 선호 해시태그 선택 |
| :--: |
| <img width="300px" alt="hashtag" src="https://github.com/user-attachments/assets/8ea38d95-fe0a-49ab-a262-dddc5106e78b" /> |

## 🤝 협업 방식

### 1️⃣ Git Flow 브랜치 전략

-   `main` : 실제 서비스가 배포되는 안정적인 코드가 병합되는 배포용 브랜치
-   `develop` : 기능 개발이 모두 완료된 코드를 모아 통합하고, 기능별 동작을 확인하는 개발 통합 브랜치
-   `feature/기능명` : 각 기능을 개별적으로 개발하는 기능 브랜치

<img width="800" alt="git flow" src="https://github.com/user-attachments/assets/1cbcb156-7a6b-4195-8ab8-e2234bf5bd87">

### 2️⃣ Slack 채널 내 GitHub 봇 적용

-   GitHub 레포지토리와 Slack의 연동을 통해 새로운 이슈와 작업 상황을 실시간으로 공유해 즉각적인 피드백이 가능했습니다.

## 🧑‍💻 팀원 소개

| 권혜지 | 김대영 | 김성현 | 김수민 | 이동혁 |
|:--:|:--:|:--:|:--:|:--:|
| <img src="https://avatars.githubusercontent.com/u/92978022?v=4" width="150" height="150" alt="hyeppyy" /> | <img src="https://avatars.githubusercontent.com/u/106634493?v=4" width="150" height="150" alt="dev-meryoung" /> | <img src="https://avatars.githubusercontent.com/u/34756233?v=4" width="150" height="150" alt="kimisadev27" /> | <img src="https://avatars.githubusercontent.com/u/95954000?v=4" width="150" height="150" alt="ssuminii" /> | <img src="https://avatars.githubusercontent.com/u/89085298?v=4" width="150" height="150" alt="LfromTheE" /> |
| [@hyeppyy](https://github.com/hyeppyy) | [@dev-meryoung](https://github.com/dev-meryoung) | [@kimisadev27](https://github.com/kimisadev27) | [@ssuminii](https://github.com/ssuminii) | [@LfromTheE](https://github.com/LfromTheE) |

## 🙋‍♂️ 담당 역할 및 기여 내역

### 1️⃣ 프로젝트 초기 개발 환경 세팅

- 프로젝트 구조 설계 및 디렉토리 구조화
- ESLint, Prettier, Husky, lint-staged 설정을 통한 코드 품질 관리 환경 구축

### 2️⃣ 플레이리스트 좋아요, 저장 기능 구현

- Zustand와 TanStack Query 기반의 낙관적 업데이트 처리

### 3️⃣ 플레이리스트 목록 조회 및 검색 기능 구현

- 검색 키워드(제목, 해시태그)에 따른 결과 필터링 기능 구현
- 필터링(최신순, 좋아요순, 댓글순) 기준에 따른 정렬 기능 구현
- 무한 스크롤 로직을 이용한 데이터 패칭 Hook 별도 분리

### 4️⃣ UI/UX 관련 작업

- 프로젝트 로고 디자인
- 메인 페이지, 검색 결과 페이지 구현
- 공통 UI 컴포넌트(Button, Filter 등) 구현

## 📦 설치 및 실행

### 1️⃣ 설치 과정

#### ◼️ 프로젝트 클론
```
git clone https://github.com/dev-meryoung/weply.git
cd weply
```

#### ◼️ 종속성 설치
```
npm install
```

#### ◼️ 환경 변수 설정(.env)
```
VITE_FIREBASE_API_KEY=여기에_발급받은_API_KEY를_입력
VITE_FIREBASE_AUTH_DOMAIN=여기에_발급받은_AUTH_DOMAIN을_입력
VITE_FIREBASE_PROJECT_ID=여기에_발급받은_PROJECT_ID를_입력
VITE_FIREBASE_STORAGE_BUCKET=여기에_발급받은_STORAGE_BUCKET을_입력
VITE_FIREBASE_MESSAGING_SENDER_ID=여기에_발급받은_MESSAGING_SENDER_ID를_입력
VITE_FIREBASE_APP_ID=여기에_발급받은_APP_ID를_입력
VITE_FIREBASE_MEASUREMENT_ID=여기에_발급받은_MEASUREMENT_ID를_입력
```

### 2️⃣ 실행

#### ◼️ 개발 서버 실행
```
npm run dev
```

#### ◼️ 배포용 빌드 실행
```
npm run build
```

## 📁 디렉토리 구조

```
weply/
├── public/                # index.html에서 직접 참조되는 정적 파일
└── src/                   # 애플리케이션 소스 코드
    ├── api/               # API 요청 함수 (Firebase 연동)
    ├── assets/            # 컴포넌트 내부에서 참조하는 이미지, 아이콘 등
    ├── components/        # 재사용 가능한 공통 UI 컴포넌트
    ├── constants/         # 애플리케이션에서 사용되는 상수
    ├── hooks/             # 공통 로직을 관리하는 커스텀 React 훅
    ├── layout/            # 페이지의 공통 레이아웃 (헤더, 네비게이션 바 등)
    ├── pages/             # 라우터에 연결되는 페이지 단위 컴포넌트
    ├── store/             # Zustand를 이용한 전역 상태 관리
    ├── styles/            # 전역 스타일, 테마, Reset CSS
    ├── types/             # 공통으로 사용되는 TypeScript 타입 정의
    ├── utils/             # 순수 함수 및 유틸리티 함수
    ├── App.tsx            # 애플리케이션 최상위 컴포넌트 (라우팅 정의)
    ├── firebase.ts        # Firebase 초기화 및 설정
    └── main.tsx           # 애플리케이션 진입점 (DOM 렌더링)
.
├── .env.example           # [추가 필요] Firebase API 키 등 환경 변수 예시 파일
├── .eslintrc.cjs          # ESLint 설정
├── .prettierrc.cjs        # Prettier 설정
├── index.html             # 애플리케이션 HTML 템플릿
├── package.json           # 프로젝트 종속성 및 스크립트 관리
└── vite.config.ts         # Vite 설정

```