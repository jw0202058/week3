import React, { useState, useEffect } from 'react';
import * as tmImage from '@teachablemachine/image';
import './webcam.css';

const WebcamCapture = () => {
  const URL = "./my_model/";
  let model, webcam, labelContainer, maxPredictions;

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(300, 300, flip);
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
    // Rest of your code...
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div className='header'>
      <div>Teachable Machine Image Model</div>
      <div id="webcam-container"></div>
      <button type="button" onClick={captureWebcam}>Capture</button>
      <div id="label-container"></div>
    </div>
  );
};

export default WebcamCapture;
