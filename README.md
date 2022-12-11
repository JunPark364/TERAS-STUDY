<div align="center">
  <br />
  <img src="assets/logo/Teras_logo_home.png" alt="logo" />
  <br />
  <h1>테라스처럼 편한 학교</h1>
  <br />
</div>

## 목차

1. [**서비스 소개**](#1)
2. [**기술 스택**](#2)
3. [**시스템 아키텍처**](#3)
4. [**주요기능 및 데모영상**](#4)
5. [**개발 멤버 소개**](#5)
6. [**프로젝트 기간**](#6)
7. [**프로젝트 관련 문서**](#7)

<br/>

<div id="1"></div>

## 💡 서비스 소개

### 온라인 수업, 테라스 스터디와 함께하세요!

> 학교에 가지 않고 온라인으로 수업을 듣는 시대가 왔습니다. <br />
코로나19로 비대면 수업들이 이제 일상이 되어버렸습니다. <br />
테라스 스터디는 편한 교육 환경으로 우수한 교육 퀄리티를 제공합니다.
>
#### 선생님과 학생 모두에게 편한 교육 플랫폼! Teras Study에서 등교부터 하교까지 함께 하세요! 
<br/>

<div id="2"></div>

## 🛠️ 기술 스택

#### Communication Tool

> <img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white">
> <img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white">
> <img src="https://img.shields.io/badge/mattermost-0058CC?style=for-the-badge&logo=mattermost&logoColor=white">
> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

#### Development Tool

> <img src="https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
> <img src="https://img.shields.io/badge/intellij-000000?style=for-the-badge&logo=intellijidea&logoColor=white">
> <img src="https://img.shields.io/badge/mysql_workbench-4479A1?style=for-the-badge&logo=mysql&logoColor=white">

#### FrontEnd

> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">

#### BackEnd

> <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">
> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">

#### Server

> <img src="https://img.shields.io/badge/aws-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white">
> <img src="https://img.shields.io/badge/ec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
> <img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white">

<br/>
<br/>

<details><summary> <b> 상세 기술스택 및 버전</b> </summary>

| 구분       | 기술스택                    | 상세내용                 | 버전          |
| -------- | ----------------------- | -------------------- | ----------- |
| 공통     | 형상관리                 | Gitlab               | \-          |
|          | 이슈관리                 | Jira                 | \-          |
|          | 커뮤니케이션             | Mattermost, Notion   | \-          |
| BackEnd  | DB                      | MySQL                | 5.7         |
|          |                         | JPA                  | \-          |
|          |                         | QueryDSL             | \-          |
|          | Java                    | Zulu                 | 8.33.0.1    |
|          | Spring                  | Spring               | 5.3.6       |
|          |                         | Spring Boot          | 2.4.5       |
|          | IDE                     | Eclipse              | JEE 2020-06 |
|          | Cloud Storage           | AWS S3               | \-          |
|          | Build                   | Gradle               | 7.3.2       |
|          | WebRTC                  | OpenVidu             | 2.22.0      |
|          | API Docs                | Postman              |             |
| FrontEnd | HTML5                   |                      | \-          |
|          | CSS3                    |                      | \-          |
|          | JavaScript(ES6)         |                      |\-           |
|          | React                   | React                | 17.0.2      |
|          | React                   | Redux                | 7.2.6       |
|          | React                   | Redux-thunk          | 2.4.1       |
|          |                         | styled-components    | 5.3.3       |
|          |                         | framer-motion        | 6.0.0       |
|          |                         | apexcharts           | 3.33.0      |
|          |                         | toast-ui/react-editor      | 3.1.2       |
|          |                         | toast-ui/react-calendar    | 1.0.6       |
|          | WebSocket               | @stomp/stompjs       | 6.1.2       |
|          | WebSocket               | stompjs              | 2.3.3       |
|          | WebSocket               | sockjs-client        | 1.5.2       |
|          | IDE                     | Visual Studio Code   | 1.63.2      |
| Server   | 서버                    | AWS EC2              | \-          |
|          | 플랫폼                   | Ubuntu               | 20.04.3 LTS |
|          | 수동배포                 |                      |           |


</details>

<br />

<div id="3"></div>

## 🗂️ 시스템 아키텍처

|                              시스템 구성                           |
| :------------------------------------------------------------------------------: |
| ![SA](/assets/etc/SA.png) |


|                              디렉토리 구조                       |
| :------------------------------------------------------------------------------: |
| 프론트엔드![FD](/assets/etc/FD.jpg) 백엔드![BD](/assets/etc/BD.jpg) |

<br />

<div id="4"></div>

## 🖥️ 주요기능

### 온라인수업
- 선생님이 수업을 개설하면 해당 수업을 수강하는 학생이 수업에 참여할 수 있습니다.
- 사용자는 비디오, 오디오 ON/OFF를 설정할 수 있습니다.
- 선생님은 원활한 수업진행을 위해 화면공유를 할 수 있습니다. 

### 스터디룸
- 학생은 원하는 이름의 스터디룸을 만들 수 있습니다.
- 학생들은 만들어진 스터디룸에 자유롭게 들어가고 나갈 수 있습니다.
- 스터디룸을 만든 학생은 화면공유를 할 수 있습니다.

### 시간표
- 학생들은 오늘의 시간표를 통하여 오늘 수강할 과목들을 확인 할 수 있습니다.
- 해당 시간의 시간표를 눌러서 강의실에 참여할 수 있습니다.
- 매 교시는 프로필 상단에 위치하여 있어서 지금이 몇 교시인지 확인할 수 있습니다.

|                              온라인 수업                                      |
| :---------------------------------------------------------------------------: |
|  <img src="/assets/gif/onlineclass.gif" alt="onlineclass" />                |

|                              스터디룸                                      |
| :---------------------------------------------------------------------------: |
|  <img src="/assets/gif/studyroom.gif" alt="스터디룸" />                |


### 공지사항
- 교사는 공지사항을 작성할 수 있습니다.
- 학생들은 공지사항에 적힌 내용들을 쉽게 확인할 수 있습니다.
- 첨부파일 기능을 넣어서, 첨부파일을 쉽게 첨부, 다운로드할 수 있습니다.

|                              공지사항(선생님)                  |
| :---------------------------------------------------------------------------: |
|  <img src="/assets/gif/notice_teacher.gif" alt="notice_teacher" />  |

|                              공지사항(학생)                  |
| :---------------------------------------------------------------------------: |
|  <img src="/assets/gif/notice_student.gif" alt="notice_student" />  |
    
### 과제
- 선생님은 자신의 과목에 과제를 원하는 기간을 설정하여 올릴 수 있습니다.
- 학생들은 해당 과목에 댓글 형식으로 과제를 제출할 수 있습니다.
- 선생님과 학생 모두 파일을 첨부할 수 있습니다.

|                              과제(선생님)                     |
| :---------------------------------------------------------------------------: |
|  <img src="/assets/gif/homework_teacher.gif" alt="homework_teacher" />  |

|                              과제(학생)                      |
| :---------------------------------------------------------------------------: |
|  <img src="/assets/gif/homework_student.gif" alt="homework_student" />  |

### 캘린더/우리반보기 기타등등
- 캘린더를 통하여 각각 날짜의 행사를 확인할 수 있습니다.
- 우리반보기를 통하여 우리반 학생들을 한 눈에 볼 수 있습니다.

|                              기타등등                    |
| :---------------------------------------------------------------------------: |
|  <img src="/assets/gif/etc.gif" alt="etc" />  |

<br/>

<div id="5"></div>

<br />

<div id="6"></div>

<br />

<div id="7"></div>

## 👪 개발 멤버 소개 
<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/PowerBBear">
            <img src="assets/member/avatar1.png" width="140px" /> <br><br> 👑 김민성 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/JunPark364">
            <img src="assets/member/avatar2.png" width="140px" /> <br><br> 🙂 박영준 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/pch8349">
            <img src="assets/member/avatar4.png" width="140px" /> <br><br> 😆 박찬혁 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/SilverLight96">
            <img src="assets/member/avatar5.png" width="140px" /> <br><br> 😁 강경은 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/heunhanireum">
            <img src="assets/member/avatar3.png" width="140px" /> <br><br> 🙄 김민지 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/kkh9700">
            <img src="assets/member/avatar6.png" width="140px" /> <br><br> 😶 김경환 <br>(Back-End) </a> <br></td>
    </tr>
    <tr>
        <td align="center">UI/UX<br/>React<br/>DB<br/>Infra<br/></td>
        <td align="center">UI/UX<br/>React<br/>WebRTC</td>
        <td align="center">UI/UX<br/>React</td>
        <td align="center">REST API<br/>WebRTC</td>
        <td align="center">REST API<br/>CI/CD<br/></td>
        <td align="center">REST API<br/>DB<br/>S3<br/>Infra<br/></td>
    </tr>
</table>

<br />

<div id="8"></div>

## 📆 프로젝트 기간
### 22.7.11 ~ 22.8.19
- 기획 및 설계 : 22.7.11 ~ 19
- 프로젝트 구현 : 22.7.20 ~ 22.8.18
- 버그 수정 및 산출물 정리 : 22.8.19


<br />

<div id="9"></div>

## 📋 프로젝트 관련 문서
|  구분  |  링크  |
| :--------------- | :---------------: |
| 와이어프레임 | [와이어프레임 바로가기](https://www.figma.com/file/UGLmvsrx12LGMRymKGRVPw/TERAS-STUDY?node-id=0%3A1) |
| ERD | [ERD 바로가기](https://drive.google.com/file/d/1PmUqEjwf3GyiuHPqTALUJH6emQohCJ5I/view?usp=sharing) |
| 빌드/배포 | [빌드/배포 바로가기](/exec/배포환경.md) |
| 시연 시나리오 | [시연 시나리오 바로가기](/exec/시연시나리오_대본.docx) |
| 발표자료 | [발표자료 바로가기](/exec/서울_7반_A706_발표자료.pdf) |
