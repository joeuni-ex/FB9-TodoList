# React + Vite
## FireBase 9 버전을 활용한 TodoList App
- 회원가입한 유저만 사용이 가능하며, 로그인이 되어있지 않을 경우에는 로그인 페이지로 이동한다. 

### 회원가입 기능
-![image](https://github.com/joeuni-ex/React_FB9_TodoList/assets/141595215/2901c980-1387-43d5-93fb-89b4a67b3763)
- 이메일 형식으로 입력해야하며, 비밀번호는 firebase의 유효성 검사로 인해 6자리 이상 입력 시 가입 가능하다.
- 회원가입 시 유저 데이터는 firebase에 저장된다.
- 회원가입 성공 시 자동 로그인되어 App을 사용하면된다. 

### 로그인 기능 
-![image](https://github.com/joeuni-ex/React_FB9_TodoList/assets/141595215/8b02b9c5-06bb-449d-a602-2a8351dbb189)
- 가입한 이메일과 비밀번호로 로그인이 가능하다.
- 
### 로그아웃 기능
- ![image](https://github.com/joeuni-ex/React_FB9_TodoList/assets/141595215/171ffef4-ed98-443e-9540-c4203a2c1c79)
- 로그아웃 시 로그인 화면으로 이동한다.

### 일정 추가하기 (Add Todo)
- ![image](https://github.com/joeuni-ex/React_FB9_TodoList/assets/141595215/2cb45a9b-7598-4e9f-86b9-4d1a5efbb86e)
- 본인의 일정을 추가하여 관리할 수 있으며 추가된 일정은 아래의 TodoList에서 확인이 가능하다. 

### 일정 리스트 (Todo List)
- ![image](https://github.com/joeuni-ex/React_FB9_TodoList/assets/141595215/6a39afb4-a9ca-469a-a044-fee5d9baf21c)

#### 정렬 기능 
- ![image](https://github.com/joeuni-ex/React_FB9_TodoList/assets/141595215/33c6e648-54c0-4acc-a623-4e5dd644d52e)
- 정렬을 사용하여 일정들을 확인 할 수 있다. 날짜순 및 제목순으로 확인이 가능하며, 정렬 방법도 오름차순 내림차순 정렬을 지원한다.
#### 수정 기능 
- ![image](https://github.com/joeuni-ex/React_FB9_TodoList/assets/141595215/f14446bd-a670-4d4b-ab85-c2f9717b236c)
- 수정 버튼을 클릭하면 수정이 가능하다 .
- 일정을 수정하고 오른쪽 아이콘을 클릭하면 수정이 완료된다. 
- ![image](https://github.com/joeuni-ex/React_FB9_TodoList/assets/141595215/fc36ab87-383f-4326-880b-c426a43cc570)

#### 삭제 기능
- ![image](https://github.com/joeuni-ex/React_FB9_TodoList/assets/141595215/b7f5acbb-6bbd-46e2-88a0-e0b07894b9ae)
- 휴지통 아이콘을 클릭하여 원하는 일정을 삭제 가능하다.

  


#### 배포주소
- https://react-firebase9-todolist-joeuni.netlify.app
