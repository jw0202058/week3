import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './upload.css';
import * as tmImage from '@teachablemachine/image';
import { Link, animateScroll as scroll } from 'react-scroll';
import DonutChart from './DonutChart';


const ImagePrediction = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [showResults, setShowResults] = useState(false); // 분석 결과 보기 텍스트를 보여줄 상태

  const navigate = useNavigate();
  let sortedPredictions = [];
  useEffect(() => {
    if (showResults) {
      // 결과가 보여지면 스크롤을 활성화합니다.
      document.body.style.overflow = '';
    } else {
      // 결과가 보여지지 않으면 스크롤을 비활성화합니다.
      document.body.style.overflow = 'hidden';
    }
  }, [showResults]);
  

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
      predict(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const predict = async (imageURL) => {
    const URL = "./my_model/";
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    const model = await tmImage.load(modelURL, metadataURL);
    const image = document.getElementById("uploaded_face");
    const prediction = await model.predict(image, false);
    setPredictions(prediction);
    setShowResults(true);

  };

  const renderPredictions = () => {
    // predictions 배열을 prediction.probability를 기준으로 내림차순 정렬합니다.
    sortedPredictions = predictions.sort((a, b) => b.probability - a.probability);
  };

  const scrollToHair = () => {
    scroll.scrollToBottom();
  };
  
  const goToFace = () => {
    // '/oval' 경로로 이동합니다.
    if (sortedPredictions[0].className === "Oval") {
      navigate('/oval'); // navigate 함수를 사용하여 페이지를 이동합니다.
    } else if (sortedPredictions[0].className === "Oblong") {
      navigate('/oblong');
    } else if (sortedPredictions[0].className === "Square") {
      navigate('/square');
    } else if (sortedPredictions[0].className === "Round") {
      navigate('/circle');
    } else if (sortedPredictions[0].className === "Heart") {
      navigate('/heart');
    }
  };

  return (
    <div className='upload_header'>
      <h2 style={{fontSize: 50, marginBottom: 30, fontWeight: 'bold'}}>G A L L E R Y</h2>
      <input type="file" id="upload_file" onChange={handleImageUpload} />
      <br />
      {uploadedImage && (
        <div>
          <img id="uploaded_face" src={uploadedImage} alt="Uploaded" />
        </div>
      )}

      <div className='hair' style={{ visibility: showResults ? 'visible' : 'hidden' }}>
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

      <div id="label-container" className='result_'>
        {predictions.length > 0 && (
          <>
            {renderPredictions()}

            {showResults && predictions.length > 0 && (
              <div className='donut-chart_'>
                <DonutChart data={sortedPredictions} />
              </div>
            )}
            {/* 'Let's go' 버튼을 누르면 goToFace 함수가 실행되어 페이지가 이동합니다. */}
            <div className='face' onClick={goToFace}>
              <h1 className='letsgo_' style={{textDecorationLine: 'underline', textDecorationThickness: 1, fontFamily: 'NotoSerifKR-Medium'}}>Click!</h1>
              <br />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImagePrediction;