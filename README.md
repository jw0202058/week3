# 📏 personAlhair

## 💈 프로젝트 소개
[react , teachable machine을 이용한 헤어스타일 추천 웹사이트]

## 🖱️ 팀원
고려대 자유전공학부 컴퓨터학과 21학번 이정원

카이스트 전산학부 19학번 이현수

## 💻 개발환경
- OS: Linux
- Language: React.jsx
- IDE: Visual Studio Code

## 📁 상세 설명


## 0. Teachable Machine

<img width="1254" alt="tm" src="https://github.com/jw0202058/week3/assets/92250113/36fbcbf4-d131-4697-b403-63a0dda304d2">

- Oval, Oblong, Heart, Round, Square 다섯 가지의 얼굴형을 선정하고, 각각에 대한 얼굴형 사진 800개를 이용해 Teachable Machine에서 학습시켰다.
- 사진의 출처는 다음과 같다.
##### Github - https://github.com/NVlabs/ffhq-dataset
##### Kaggle - https://www.kaggle.com/niten19/face-shape-dataset


## 1. Main page

<img width="1250" alt="mainpage" src="https://github.com/jw0202058/week3/assets/92250113/d5cca464-d00e-4790-b1f4-013cf2cfea0d">

- 주소를 통해 접속하면 위와 같은 화면이 나온다.
- '시작하기'를 클릭하거나 아래로 스크롤하면 다음과 같이 'CAMERA'와 'GALLERY'를 선택할 수 있는 창으로 이동한다.
- 어느 화면에서든 Home 버튼을 누르면 첫 화면으로 이동할 수 있다.

<img width="1034" alt="choice" src="https://github.com/jw0202058/week3/assets/92250113/c1192e80-8db4-4f44-813b-de58f892d23a">


## 2-1. CAMERA

<img width="679" alt="webcam" src="https://github.com/jw0202058/week3/assets/92250113/cc9f6c2e-a900-4c71-b096-ea196dfcca1c">

- 'CAMERA'를 선택하고 권한을 허용하면 위와 같이 webcam이 뜨고, capture을 누르면 3 , 2 , 1 카운트 이후에 webcam 화면을 캡쳐하고, 얼굴형을 분석한다.
- 얼굴형 분석은 추출한 model과 tensorflow 라이브러리를 이용해서 진행했다.
- 얼굴형 분석이 끝나면 '분석 결과 보기'가 생기고, 아래로 스크롤하거나 '분석 결과 보기'를 누르면 분석 결과 화면이 생성된다.
- 분석 결과 화면은 (2-2. GALLERY) 이후에 따로 첨부하였다.


## 2-2. GALLERY

<img width="899" alt="gallery" src="https://github.com/jw0202058/week3/assets/92250113/d447fc55-271b-4842-9062-35c8454c8743">

- 'GALLERY'를 선택하면 위와 같이 사진을 선택할 수 있다.
- 얼굴형 분석이 끝나면 '분석 결과 보기'가 생기고, 아래로 스크롤하거나 '분석 결과 보기'를 누르면 분석 결과 화면이 생성된다.


### Result

<img width="1181" alt="result" src="https://github.com/jw0202058/week3/assets/92250113/7a7e15e6-453b-46df-8849-02453925d6a0">

- 분석 결과 화면에서 'click'를 누르면 분석 결과에 적합한 헤어스타일을 추천해주는 창이 뜬다.
- 한 종류의 얼굴형에 대해 50% 이상 적합하다는 결과가 나오면, 그에 맞는 헤어스타일 추천 창으로 이동한다.


## 3. Recommend

<img width="1092" alt="recommend" src="https://github.com/jw0202058/week3/assets/92250113/e9b0fb86-4225-4d64-a38d-5c7f68ad995b">

- 위와 같이 5가지 종류의 얼굴형에 맞는 헤어스타일이 나열되고, 어떤 느낌의 헤어스타일이 어울리는지에 대한 설명글이 생성된다.
- 헤어스타일 추천에 대한 출처는 다음과 같다.

##### https://dsu.dcollection.net/public_resource/pdf/000001674180_20230719114753.pdf
###### - 얼굴형의 특성을 보완한 헤어스타일 연구 ( 주연빈 , 2014 , 동신대학교 )
##### https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=CFKO200633239304979&oCn=NPAP08170196&dbt=CFKO&journal=NPRO00290786
###### - 얼굴형에 따른 헤어스타일 연출 제한 ( 임지영 , 2006 , 동명대학교 )
##### https://brunch.co.kr/@miracle205/83
##### https://brunch.co.kr/@miracle205/82

- 각 사진 위에 커서를 올리면 머리 종류가 나온다.
- 사진을 클릭하면, 그에 맞는 헤어 스타일링 유튜브 영상이 나온다.










