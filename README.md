# Team :seven: | (Week 4)

이 레파지토리는 원티드 프리온보딩 프론트엔드 인턴십 4주차 과제를 위해 만들어졌습니다.

팀원들과 토론해 선발과제의 요구사항별로 Best Practice를 도출해 하나의 프로젝트로 만들었습니다.

## :heavy_check_mark: 팀원 소개

<table>
  <tbody >
    <tr >
      <td align="center"><a href="https://github.com/SeokyoungYou"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/79842380?v=4" width="100px; height="100px" alt=""/><br /><sub><b>유서경 (팀장)</b></a><ul><li>프로젝트 총괄</li><li>제출 전 최종 코드 확인</li></sub><br /></td>
      <td align="center"><a href="https://github.com/JiyoonZ"><img style="margin-top: 20px;" src="https://avatars.githubusercontent.com/u/81758576?v=4" width="100px;" alt=""/><br /><sub><b>경지윤</b></sub></a><ul><li>회의록 작성</li><li>배포 or 데모 영상 담당</li><br /></td>
      <td align="center"><a href=""><img style="margin-top: 20px; border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56298540?v=4" width="100px;" alt=""/><br /><sub><b>김수진</b></sub></a><ul><li>리드미 구조 작성 및 배분</li><li>제출 전 최종 코드 확인</li><br /></td>
      <td align="center"><a href="https://github.com/khw970421"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/59253551?v=4" width="100px;" alt=""/><br /><sub><b>김형욱</b></sub></a><ul><li>과제/토론 일정 관리 및 과제 제출</li><li>제출 전 최종 코드 확인</li><br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/eternalclash"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/77526745?v=4" width="100px;" alt=""/><br /><sub><b>이수창</b></sub></a><ul><li>CSS theme, constants 파일 총괄</li><li>Best Practice 토론 총괄 및 과제 배분</li><br /></td>
      <td align="center"><a href="https://github.com/etoile-j?tab=repositories"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/102905624?v=4" width="100px;" alt=""/><br /><sub><b>임수진</b></sub></a><ul><li>팀/코드 컨벤션 총괄</li><li>Github issue(기능 구현) 생성</li><br /></td>
      <td align="center"><a href="https://github.com/ckwlghks123"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/83552466?v=4" width="100px;" alt=""/><br /><sub><b>차지환</b></sub></a><ul><li>프로젝트 기초 세팅 및 폴더/파일 트리 총괄</li><li>Github issue(기능 구현) 생성</li><br /></td>
    </tr>
  </tbody>
</table>

## :heavy_check_mark: 팀 컨벤션

[:raised_hands: 팀 컨벤션 페이지](https://github.com/wanted-pre-onboarding-team-7/team-7-Convention/wiki)

## :heavy_check_mark: 사용 라이브러리 및 툴

<div style="float: left;">
  <img src="https://img.shields.io/badge/Redux-3776AB?style=for-the-badge&logo=Redux&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
  <img src="https://img.shields.io/badge/Husky-808080?style=for-the-badge&logo=husky&logoColor=white">
</div>

<br/>

## :heavy_check_mark: 프로젝트 살펴 보기

### :one: 실행 방법

```
git clone
cd pre-onboarding-8th-4-7
npm install
npm run api
npm start
```

### :two: [배포 링크]

[Team 7 댓글 기능 구현](https://wanted-pre-onboarding-team-7.github.io/pre-onboarding-8th-4-7/)

### :three: 프로젝트 구조

```
📦 src
┣ 📜 App.tsx
┣ 📜 index.js
┣ 📜 react-app-env.d.ts
┣ 📜 setupTests.js
┃
┣ 📂 api
┃  ┣ 📜 api.ts
┃  ┣ 📜 axiosClient.ts
┃  ┗ 📜 index.js
┃
┣ 📂 components
┃  ┣ 📜 CommentList.tsx
┃  ┣ 📜 Form.tsx
┃  ┗ 📜 PageList.tsx
┃
┣ 📂 containers
┃  ┣ 📜 CommentListContainer.tsx
┃  ┣ 📜 FormContainer.tsx
┃  ┗ 📜 PageListContainer.tsx
┃
┣ 📂 hooks
┃  ┗ 📜 useAction.ts
┃
┣ 📂 slice
┃  ┣ 📜 commentSlice.ts
┃  ┣ 📜 pageSlice.ts
┃  ┗ 📜 editModeSlice.ts
┃
┣ 📂 store
┃  ┗ 📜 index.js
┃
┣ 📂 type
┃  ┗ 📜 index.js
┃
┣ 📂 util
┃  ┗ 📜 async.utill.js
┃
┗ 📂 __test__
   ┗ 📜 App.test.js
```

<br/>

## :heavy_check_mark: 과제 요구사항에 따른 Best Practice

꼭 Best Practice로 선정되지 않아도 스스로 공부해보고 싶은 부분을 담당해 코드를 구현했습니다.

### Assignment 1 | Redux toolkit 사용한 전역 상태 관리

🙋🏻‍♀️ 담당자: 이수창, 김수진

🔑 Best-Practice : 경지윤

[📝 Redux toolkit 사용한 전역 상태 관리 ](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-4-7/wiki/Assignment-1-%7C-%EB%8C%93%EA%B8%80-CRUD#-assignment-1-1--redux-toolkit-%EC%82%AC%EC%9A%A9%ED%95%9C-%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC)

[📝 Axios를 사용한 api 통신](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-4-7/wiki/Assignment-1-%7C-%EB%8C%93%EA%B8%80-CRUD#-assignment-1-2--axios%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-api-%ED%86%B5%EC%8B%A0)

### Assignment 2 | 페이지네이션

🙋🏻‍♀️ 담당자: 경지윤, 차지환

🔑 Best-Practice : 경지윤

[📝 페이지네이션 관련 redux 코드 작성](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-4-7/wiki/Assignment-2-%7C-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98#-assignment-2-1--%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98-%EA%B4%80%EB%A0%A8-redux-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1)

[📝 페이지네이션 구현](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-4-7/wiki/Assignment-2-%7C-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98#-assignment-2-2--%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84)

### Assignment 3 | 댓글 CRUD 후처리

🙋🏻‍♀️ 담당자: 유서경, 임수진

[📝 클래스를 활용한 form 양식 처리](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-4-7/wiki/Assignment-3-%7C-%EB%8C%93%EA%B8%80-CRUD-%ED%9B%84%EC%B2%98%EB%A6%AC#-assignment-3-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-form-%EC%96%91%EC%8B%9D-%EC%B2%98%EB%A6%AC)

### 트러블 슈팅 | 비동기 처리 이슈

[📝 비동기 처리 이슈 해결 ](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-4-7/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85#-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0)
