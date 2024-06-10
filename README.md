
[![로고](/public/assets/images/logo.png)](https://github.com/Important-is-Great-Youths/QuickQuestion)

# 프로젝트 소개

- 날씨에 따라 다양한 테마를 가진 익명 문답 서비스
- 기획 기간 : 24.04.19 ~ 24.04.29
- 개발 기간 : 24.04.30 ~ 24.06.07

## 프로젝트 QQ

### 발단

- 기존 과제 프로젝트 [**오픈마인드**](https://github.com/Important-is-Great-Youths/openmind)의 개선의 여지가 보이는 기능을 발전시키고자 함

```Plain Text
1. 질문 시 닉네임만을 볼 수 있다는 불편한 접근성 향상
2. 트랜디하지 않은 디자인과 단순한 기능의 개선
3. 보안 기능의 부재 해결
4. 기존에 사용해보지 못한 새로운 기능의 도입
```

- **닉네임 쓰는 곳에 질문을 쓰고, 짧고 빠르게 사용할 수 있는 사이트를 만들자.**

### 결과

1. 질문자의 닉네임과 질문을 함께 볼 수 있도록 수정<!-- 최대 40자를 지원하는 닉네임 데이터에 질문과 비밀번호를 추가 작성할 수 있게 하여 접근성과 보안의 부족을 해결 -->
2. 귀여운 로고와 직관적이고 깔끔한 디자인으로 수정
3. 질문자와 답변자 닉네임과 비밀번호 설정
4. 기상청 api를 활용한 테마 자동 변동

# Team

## 이서영 [🤎🦐🍣](https://github.com/00TaciTa00)

- **Tags**, **Header**, **Alert Modal**, **PwPopup** 컴포넌트 구현
- **Context**를 활용한 **Modal Provider**, **Modal Wrapper**, **useModal** 구현
- **React Query**를 적용한 **AnswerContent** 구현
- Tags, AnswerContent, PwPopup 및 일부 소규모 컴포넌트에 **React Hook Form** 적용
- 담당 컴포넌트에 한하여 **StoryBook**을 활용한 컴포넌트 UI 테스트 진행
- *람버트 등각 원추 투영법* 구현(```useLonLatToXY.ts```)
- **Vercel**을 활용한 배포 진행

## 김민희 [💛🍀🍀](https://github.com/mini-chip)

- **Geolocation** 메소드를 사용한 사용자 위치 **useHooks** 구현
- **Pagination**을 onPageChange 콜백 기능 호출 해 구현
- Modal UI, 유효성 검사 구현
- **Tag 컴포넌트를 이용한 필터링 기능 구현 (미답변, 태그 별 필터링)**
- API를 이용한 **Cardlist** 구현
- react-hook-form을 이용한 validate 닉네임, 패스워드, 답변내용 구현

## 김영은 [💙🍨🌊](https://github.com/00eun)

- emoji를 활용한 **Reaction** 기능 구현
- **Input** 컴포넌트 UI 및 기본 기능 구현
- **React Hook Form**을 적용한 **From Modal** UI 및 버그 수정, 서버 통신
- **React Query**를 적용한 **Question Content** UI 구현 및 API를 활용한 데이터 출력
- **Card** 컴포넌트 UI 구현 및 API를 활용한 데이터 출력
- 날짜, 시간 변환 hook(```newDate.ts```) 구현
- **StoryBook**을 활용한 컴포넌트 UI 테스트

## 유미정 [🦔🧡🎈](https://github.com/ymj0828)

- **Button**, **Textarea**, **Footer**, **Answer Empty** 컴포넌트 UI 구현
- 공통 **Layout** 설정
- **StoryBook**에 컴포넌트의 UI 테스트
- 닉네임 **중복 검사** 기능
- react-hook-form을 사용해 질문 등록 **validation 설정** 및 **입력값 서버로 제출**
- imgbb api를 이용하여 **이미지 호스팅**
- **Carousel** 기능 작성
- Next.js의 **next/font/local** 기능을 사용해 폰트 최적화
- **Axios** api url 설정
- Error Message, Placeholder **상수화**
- **Local Storage** 데이터 호출하여 유저 확인 함수 구현
- 해당 하는 **질문 찾기 모달** 구현
- 답변 채택 기능
- **날씨 api 데이터를 가져와서 알맞은 테마로 변경하기**

# Images 

# Skill Stacks

## Environment

![Git](https://img.shields.io/badge/Git-f05032.svg?&style=for-the-badge&logo=Git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-007acc.svg?&style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000.svg?&style=for-the-badge&logo=Vercel&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785.svg?&style=for-the-badge&logo=Storybook&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-f24e1e.svg?&style=for-the-badge&logo=Figma&logoColor=white)

## Development

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
<img alt='Next.js' src='https://img.shields.io/badge/Next.js-000000.svg?&style=for-the-badge&logo=Next.js&logoColor=white'/>
![CSS_Modules](https://img.shields.io/badge/CSS_Modules-000000.svg?&style=for-the-badge&logo=cssmodules&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-cc6699.svg?&style=for-the-badge&logo=sass&logoColor=white)
![REST_api](https://img.shields.io/badge/REST_api-000.svg?&style=for-the-badge)

## Libraries

![Axios](https://img.shields.io/badge/Axios-5429e4.svg?&logo=Axios&logoColor=white&style=for-the-badge)
![ReactQuery](https://img.shields.io/badge/react_query-FF4154.svg?style=for-the-badge&logo=reactquery&logoColor=white)
![reacthookform](https://img.shields.io/badge/react_hook_form-EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![NextThemes](https://img.shields.io/badge/next_themes-000.svg?&style=for-the-badge)

# Package Structure

```plain
quickquestion
├─ public
│  └─ assets
│     ├─ fonts
│     └─ images
└─ src
   ├─ apis
   ├─ app
   │  ├─ fonts
   │  ├─ layout.tsx
   │  ├─ providers.tsx
   │  ├─ questiondetail
   │  │  └─ [id]
   │  └─ questionlist
   ├─ components
   │  ├─ common
   │  │  ├─ AlertModal
   │  │  ├─ Button
   │  │  ├─ Card
   │  │  ├─ FormModal
   │  │  ├─ Head
   │  │  ├─ Header
   │  │  ├─ Input
   │  │  ├─ ModalWrapper
   │  │  ├─ NoAnswer
   │  │  ├─ Pagination
   │  │  ├─ PopUp
   │  │  ├─ Reaction
   │  │  ├─ Tags
   │  │  └─ Textarea
   │  ├─ home
   │  │  ├─ CurationCardList
   │  │  └─ QuestionForm
   │  └─ questionDetail
   │     ├─ AnswerEmpty
   │     ├─ AnswerContent
   │     ├─ ContentLayout
   │     ├─ QuestionContent
   │     └─ ReactionContent
   ├─ constants
   ├─ contexts
   ├─ hooks
   ├─ lib
   ├─ stories
   ├─ styles
   │  ├─ base
   │  ├─ main.scss
   │  ├─ mixins
   │  └─ variables
   ├─ types
   └─ utils
```

# Installation

1. Clone the repository

  ```bash
  git clone https://github.com/Important-is-Great-Youths/QuickQuestion.git
  ```

2. Install dependencies

  ```bash
  npm install
  ```

3. Start the development server

  ```bash
  npm run dev
  ```

4. Open the project in your browser

  ```bash
  http://localhost:3000
  ```

# Special Thanks
[![로고](/public/assets/images/logo-rainy.png)](https://x.com/Q_O819) : 로고 디자이너