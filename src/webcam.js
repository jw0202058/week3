import React, { useState, useEffect } from 'react';
import * as tmImage from '@teachablemachine/image';
import './webcam.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import DonutChart from './DonutChart';

const WebcamCapture = () => {
  const URL = "./my_model/";
  let model, webcam, labelContainer, maxPredictions;
  const [showResults, setShowResults] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [face, setFace] = useState("Oval");
  const [sortedPredictions, setSortedPredictions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (model && webcam && labelContainer && maxPredictions) {
      // model, webcam, labelContainer, maxPredictions가 초기화된 후에만 컴포넌트를 렌더링합니다.
      // 이제 초기화가 완료되었으므로, model, webcam 등을 사용하여 원하는 동작을 수행할 수 있습니다.
    }
  }, [model, webcam, labelContainer, maxPredictions]);
  useEffect(() => {
    // Component가 mount될 때 body에 overflow: hidden; 속성을 추가합니다.
    document.body.style.overflow = 'hidden';
  
    return () => {
      // Component가 unmount될 때 속성을 제거합니다.
      document.body.style.overflow = '';
    }
  }, []);
  
  useEffect(() => {
    if (showResults) {
      // 결과가 보여지면 스크롤을 활성화합니다.
      document.body.style.overflow = '';
    } else {
      // 결과가 보여지지 않으면 스크롤을 비활성화합니다.
      document.body.style.overflow = 'hidden';
    }
  }, [showResults]);
  
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
  
    // 웹캠이 이미 존재하는지 확인하고, 존재하지 않는 경우에만 새로 추가합니다.
    const webcamContainer = document.getElementById("webcam-container");
    if (!webcamContainer.firstChild) {
      webcamContainer.appendChild(webcam.canvas);
    }
  
    // 레이블이 이미 존재하는지 확인하고, 존재하지 않는 경우에만 새로 추가합니다.
    labelContainer = document.getElementById("label-container");
    if (labelContainer.childNodes.length === 0) {
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
      }
    }
  }
  

  async function loop() {
    if (webcam) {
      webcam.update();
    }
    window.requestAnimationFrame(loop);
  }

  async function captureWebcam() {
    if (webcam) {
      setIsButtonDisabled(true); // Capture 버튼을 비활성화
  
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
      const prediction = await model.predict(webcam.canvas);
    
      // predictions 배열을 prediction.probability를 기준으로 내림차순 정렬합니다.
      const sortedPredictions = prediction.slice().sort((a, b) => b.probability - a.probability);
      setFace(sortedPredictions[0].className); // face 상태 변경
      setSortedPredictions(sortedPredictions);
    
      // for (let i = 0; i < maxPredictions; i++) {
      //   const probabilityPercentage = Math.round(sortedPredictions[i].probability * 100) + "%";
      //   const resultString = sortedPredictions[i].className + ": " + probabilityPercentage;
      //   labelContainer.childNodes[i].innerHTML = resultString;
      // }
      setShowResults(true);
    }
  }

  // 지정된 시간(ms) 동안 기다리는 유틸리티 함수
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const scrollToHair = () => {
    scroll.scrollToBottom();
  };

  const goToFace = () => {
    // console.log(face);
    if (face === "Oval") {
      navigate('/oval'); // navigate 함수를 사용하여 페이지를 이동합니다.
    } else if (face === "Oblong") {
      navigate('/oblong');
    } else if (face === "Square") {
      navigate('/square');
    } else if (face === "Round") {
      navigate('/circle');
    } else if (face === "Heart") {
      navigate('/heart');
    }
  };

  return (

    <div className='webcam_haeder' style={{ overflow: 'hidden' }}>
      <div style={{ fontSize: 50, marginBottom: 30, fontWeight: 'bold', marginTop: 50 }}>C A M E R A</div>
      <div id="webcam-container"></div>
      <h2 className='capture' onClick={isButtonDisabled ? null : captureWebcam} style={{ color: isButtonDisabled ? 'gray' : 'white', }}>[ C A P T U R E ]</h2>
      <div className='hair_cam' style={{ visibility: showResults ? 'visible' : 'hidden'}}>
        <Link
          style={{ fontFamily: 'NotoSerifKR-Medium', fontWeight: 'bold', fontSize: 25, color: 'white', textDecorationLine: 'underline', textDecorationThickness: 1 }}
          to="selectSection"
          smooth={true}
          onClick={scrollToHair}
        >
          분석 결과 보기
          <br />
        </Link>
        <img src="img/down_arrow.png" style={{ width: 30, height: 30 }}></img>
      </div>
      <div className='result' id="label-container"></div>
      <br />
      {showResults && sortedPredictions.length > 0 && (
        <div className='donut-chart'>
          <DonutChart data={sortedPredictions} />
        </div>
      )}
      {/* 'Let's go' 버튼을 누르면 goToFace 함수가 실행되어 페이지가 이동합니다. */}
      <div className='face' onClick={goToFace}>
        <h1 className='letsgo' style={{ textDecorationLine: 'underline', textDecorationThickness: 1, visibility: showResults ? 'visible' : 'hidden', fontFamily:'NotoSerifKR-Medium', fontWeight: 'bold' }}>Click!</h1>
        {/* <span className={captionClassName}>본인의 얼굴형이 잘 보이는 사진을 선택해 주세요<br /></span> */}
        <br />
      </div>

    </div>

  );
};

export default WebcamCapture;