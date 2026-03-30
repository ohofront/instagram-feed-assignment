# 📸 연봉인상 Instagram Feed UI Project

인스타그램 스타일의 게시물 피드 UI를 구현한 프로젝트입니다.
이미지 캐러셀, 좋아요 인터랙션, 무한 스크롤 등 실제 서비스와 유사한 사용자 경험을 목표로 개발했습니다.

---

## 🔗 GitHub

👉 [https://github.com/ohofront/instagram-feed-assignment.git](https://github.com/ohofront/instagram-feed-assignment.git)

---

## 🚀 실행 방법

```bash
git clone https://github.com/ohofront/instagram-feed-assignment.git
npm install
npm run dev
```

👉 [http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

---

## 🏗️ 아키텍처 설명

### 📁 폴더 구조

```bash
src/
  components/
    feed/
      PostFeed.tsx
      PostList.tsx
      PostCard.tsx
      PostHeader.tsx
      PostImage.tsx
      PostActions.tsx

  hooks/
    useInfinitePosts.ts

  utils/
    formatPostDate.ts

  data/
    mockPosts.ts

  types/
    post.ts
```

---

### 🔹 설계 전략

#### 1. 컴포넌트 단위 책임 분리

- PostCard → 게시물 전체 UI
- PostHeader → 프로필/작성자/날짜
- PostImage → 이미지 캐러셀
- PostActions → 좋아요 및 인터랙션

👉 UI와 기능을 분리하여 재사용성과 유지보수성 확보

---

#### 2. 데이터 구조 설계

```ts
type Post = {
  id: number;
  author: {
    name: string;
    profileImage: string;
  };
  createdAt: string;
  images: string[];
  caption: string;
  liked: boolean;
  likeCount: number;
};
```

👉 `images` 배열 구조로 설계하여 캐러셀 확장성 고려

---

#### 3. 상태 관리 전략

- useState 기반 로컬 상태 관리
- 좋아요 상태 → 상위 컴포넌트에서 관리
- 무한 스크롤 → custom hook으로 분리

👉 UI와 로직을 분리하여 유지보수성 향상

---

#### 4. 유틸 함수 분리

```ts
formatPostDate();
```

👉 날짜 포맷 로직을 utils로 분리하여 재사용성과 가독성 확보

---

#### 5. 무한 스크롤 설계

- Intersection Observer 사용
- 마지막 요소 감지 후 데이터 로드

👉 scroll 이벤트 대비 성능 최적화

---

## ⚙️ 주요 기능

### 1. 게시물 피드

- 카드 형태 게시물 렌더링
- 사용자 정보 및 날짜 표시

---

### 2. 이미지 캐러셀

- 좌/우 이동 버튼
- 현재 이미지 인덱스 표시 (1/N)
- dot indicator

---

### 3. 좋아요 기능

- 상태 토글
- 좋아요 수 실시간 반영

---

### 4. 무한 스크롤

- 스크롤 하단 도달 시 자동 데이터 로드

---

## ⚠️ 직면한 문제와 해결 방법

### 1. 이미지 높이 깨짐 문제

**문제**
aspect-ratio와 height 충돌로 이미지가 찌그러짐

**해결**

- aspect-ratio 제거
- height: auto 적용
- 부모 컨테이너 overflow 제어

---

### 2. 캐러셀 상태 관리 문제

**문제**
이미지 index 관리 필요

**해결**

- useState로 index 관리
- 배열 기반 렌더링 구조 적용

---

### 3. 무한 스크롤 중복 호출 문제

**문제**
observer가 여러 번 실행됨

**해결**

- loading, hasMore 조건 추가
- observer 재등록 방지

---

### 4. 좋아요 상태 유지 문제

**문제**
데이터 추가 시 기존 상태 초기화

**해결**

```ts
prev.map(post => ...)
```

👉 id 기반 상태 업데이트 방식 적용

---

## 📸 실행 화면 예시

👉 여기에 캡처 이미지 추가

- 메인 피드
- 좋아요 클릭 전/후
- 캐러셀
- 무한 스크롤

---

## 🌱 Git 브랜치 전략 및 작업 흐름

### 브랜치 전략

```
main        → 최종 제출
develop     → 통합 브랜치
feature/*   → 기능 개발
docs/*      → 문서 작업
```

---

### 작업 흐름

1. develop에서 feature 브랜치 생성
2. 기능 단위 개발
3. develop으로 merge
4. 최종적으로 main에 merge

---

### 브랜치 예시

```
feature/feed-ui
feature/like-toggle
feature/infinite-scroll
feature/carousel
feature/post-date-format
docs/readme
```

---

### 커밋 전략

Conventional Commit 방식 사용

- feat: 기능 추가
- fix: 버그 수정
- refactor: 코드 개선
- docs: 문서 작성

---

### 커밋 예시

```
feat: implement post feed UI components
feat: add like toggle functionality
feat: implement infinite scroll using Intersection Observer
feat: add image carousel with navigation and indicators
feat: add post date formatting utility
fix: resolve image sizing issue
docs: add project README
```

---

## 🤖 AI 활용 방식

### ✔️ 활용 범위

- 프로젝트 구조 설계
- 컴포넌트 분리 기준 설정
- Intersection Observer 구현
- TypeScript 타입 정의
- UI 구조 개선
- README 작성

---

### ✔️ 사용 방식

AI를 단순 코드 생성 도구가 아닌
문제 해결 및 설계 보조 도구로 활용

---

### ✔️ 사용한 프롬프트 예시

- React에서 무한 스크롤 구현 방법
- 이미지 캐러셀 구조 설계
- 컴포넌트 분리 기준
- 상태 관리 구조 설계

---

### ✔️ 결과 검증 방법

- 직접 실행 및 테스트
- 요구사항 기준 검증
- 코드 리팩토링 및 구조 개선

---

## 💡 회고

이번 프로젝트를 통해
단순 UI 구현이 아닌 구조 설계와 상태 관리의 중요성을 경험했습니다.

특히 컴포넌트 책임 분리, 데이터 흐름 설계, 인터랙션 처리에 대해 깊이 고민할 수 있었습니다.

---

## 🔥 개선 가능 사항

- 모바일 swipe 지원
- 댓글 기능 추가
- 서버 API 연동
- skeleton UI 적용
- 좋아요 애니메이션
