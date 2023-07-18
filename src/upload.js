import React, { useState } from 'react';
import './upload.css';
import * as tmImage from '@teachablemachine/image';

const ImagePrediction = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

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
  };

  const renderPredictions = () => {
    return predictions.map((prediction, index) => (
      <div key={index}>
        <p>{prediction.className}: {Math.round(prediction.probability * 100)}%</p>
      </div>
    ));
  };

  return (
    <div className='upload_header'>
      <h2 style={{ color: 'white', fontSize: 50, marginBottom: 30, fontWeight: 'bold' }}>File Upload & Image Preview</h2>
      <input type="file" id="upload_file" onChange={handleImageUpload} />
      <br />
      {uploadedImage && (
        <div>
          <img id="uploaded_face" src={uploadedImage} alt="Uploaded" />
          <h1>이미지 업로드</h1>
        </div>
      )}
      <div id="label-container" style={{ color: 'white', marginTop: 0 }}>
        {predictions.length > 0 && (
          <>
            <h3>예측 결과:</h3>
            {renderPredictions()}
          </>
        )}
      </div>
    </div>
  );
};

export default ImagePrediction;