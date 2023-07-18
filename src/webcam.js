import React, { useState, useEffect } from 'react';
import * as tmImage from '@teachablemachine/image';
import './webcam.css'
import { Link, animateScroll as scroll } from 'react-scroll';

const WebcamCapture = () => {
  const URL = "./my_model/";
  let model, webcam, labelContainer, maxPredictions;

  useEffect(() => {
    init();
  }, null);

  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(800, 500, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement("div"));
    }
  }

  async function loop() {
    webcam.update();
    window.requestAnimationFrame(loop);
  }

  async function captureWebcam() {
    const countdownContainer = document.createElement("div");
    countdownContainer.style.position = "absolute";
    countdownContainer.style.top = "50%";
    countdownContainer.style.left = "50%";
    countdownContainer.style.transform = "translate(-50%, -50%)";
    countdownContainer.style.fontSize = "48px";
    countdownContainer.style.color = "white";
    document.body.appendChild(countdownContainer);

    // 3초 동안 카운트다운 시작
    for (let i = 3; i >= 1; i--) {
      countdownContainer.innerHTML = i;
      await sleep(1000); // 1초 기다림
    }
    countdownContainer.innerHTML = "";

    // 웹캠 정지
    webcam.stop();

    // 3초 뒤에 화면 캡쳐
    setTimeout(async () => {
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions; i++) {          // 예측된 헤어 스타일 알려주기
        const probabilityPercentage = Math.round(prediction[i].probability * 100) + "%";
        const resultString = prediction[i].className + ": " + probabilityPercentage;
        labelContainer.childNodes[i].innerHTML = resultString;
  
        if (prediction[i].probability.toFixed(2) >= 0.5) {
          // 서버, db에서 prediction[i].className에 적합한 헤어스타일 파일 불러오기
          // 예측 결과에 따른 처리를 여기에 추가합니다.
        }
      }
      
    }, 3000);
  }

  // 지정된 시간(ms) 동안 기다리는 유틸리티 함수
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const scrollToHair = () => {
    scroll.scrollToBottom();
  };
  return (

    <div className='webcam_haeder'>
      <div style={{ color: 'white', fontSize: 50, marginBottom: 30, fontWeight: 'bold' }}>C A M E R A</div>
      <div id="webcam-container"></div>
      <h2 className='capture' onClick={captureWebcam} style={{ color: 'white' }}>[ C A P T U R E ]</h2>
      <div id="label-container" style={{ color: 'white', marginTop: 0 }}></div>
      <br />
      {/* <div className='hair'>
        <Link
          className='start-text'
          style={{ fontFamily: 'initial', fontWeight: 'bold', fontSize: 25, color: 'white' }}
          to="selectSection"
          smooth={true}
          onClick={scrollToHair}
        >
          헤어스타일 추천받기
          <br />
        </Link>
        <img src="img/down_arrow.png" style={{ width: 30, height: 30 }}></img>
      </div> */}
    </div>

  );
};

export default WebcamCapture;
