
[![로고](/public/assets/images/logo.png)](https://github.com/Important-is-Great-Youths/QuickQuestion)

# 😺 프로젝트 소개

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

```Plain Text
1. 질문자의 닉네임과 질문을 함께 볼 수 있도록 수정
2. 귀여운 로고와 직관적이고 깔끔한 디자인으로 수정
3. 질문자와 답변자 닉네임과 비밀번호 설정
4. 기상청 api를 활용한 테마 자동 변동
```

# 👨‍👩‍👧‍👦 Team

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

## 유미정 [🧡🦔🎈](https://github.com/ymj0828)

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

# 💻Features

## Main Page

1. **질문 등록** : 메인 페이지에서 바로 질문을 등록할 수 있다.
2. **등록 조건 부합** : 질문을 등록할 때 필수 값을 입력하지 않거나 조건에 맞지 않는 값을 입력하면 등록할 수 없다.
3. **로컬스토리지에 저장** : 질문이 등록되면 입력한 닉네임과 비밀번호가 로컬스토리지에 저장된다.
4. **리액션 수에 따른 인기 질문** : 리액션 수가 많은 순으로 인기 질문에 나타난다.
5. **슬라이드 기능** : 인기 질문에는 총 6개가 나타나고 드래그를 하거나 화살표 버튼을 클릭하여 옆으로 넘길 수 있다.

## Question List Page

1. **미답변 필터링 기능** :  미답변 버튼을 체크하면 답변이 달리지 않은 질문들만 나오게 된다.
2. **분야 별로 필터링 기능** : 전체, 연예 등등 원하는 분야를 누르면 해당 분야의 질문만 나온다.
3. **페이지네이션 기능** : 다음, 이전 버튼을 누르면 다음 페이지로 넘어가고 숫자를 클릭하면 해당 페이지의 질문들이 나온다.

## Question Detail Page

1. **이모지 리액션 기능** : 해당 질문에 대한 사람들의 느낌을 이모지의 형태로 알 수 있으며, 사용자 또한 이모지로 느낌을 남길 수 있다.
2. **질문 상세 파악** : 해당 질문의 분야, 작성자, 작성일, 내용, 첨부 이미지(선택)을 볼 수 있다.
3. **답변 파악** : 해당 질문에 몇 개의 답변이 등록되었는지, 그리고 등록된 답변의 답변자, 날짜, 답변자의 프로필 이미지, 그리고 답변 내용을 알 수 있다.
4. **답변 등록** : 질문자가 아닌 사용자는 답변하기 버튼으로 본인의 답변을 등록할 수 있다.
5. **답변 수정 및 삭제** : 답변자는 각 답변 별로 설정된 비밀번호(숫자 4자리)를 입력하여 해당 답변을 수정하거나 삭제할 수 있다. 단, 채택된 답변은 수정 및 삭제가 불가하다.
6. **답변 채택** : 질문자는 본인이 원하는 답변을 채택할 수 있다.

# 🛠️ Skill Stacks

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

# 📁 Package Structure

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

# 💾 Installation

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

# 🎉 Special Thanks

로고 디자인 : [🍇](https://x.com/Q_O819)
