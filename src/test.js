// import React, { useEffect, useRef } from 'react';

// const Test = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const loadOpenCv = async () => {
//       const cv = await window.cv;

//       // Load haarcascade_frontalface_default.xml file
//       let utils = new cv.Utils('');
//       let faceCascadeFile = 'haarcascade_frontalface_default.xml'; 
//       let faceCascadeFileData = await utils.createFileFromUrl(faceCascadeFile, faceCascadeFile, () => {});
      
//       // face detection code...
//       faceDetection(cv, faceCascadeFileData);
//     };

//     loadOpenCv();
//   }, []);



//   const faceDetection = async () => {
//     // const cv = window.cv;

//     let video = videoRef.current;
//     let canvasFrame = canvasRef.current;
//     let context = canvasFrame.getContext('2d');
//     const capture = new cv.VideoCapture(video);
//     let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
//     let gray = new cv.Mat();
//     let faces = new cv.RectVector();
//     let classifier = new cv.CascadeClassifier();
//     classifier.load(faceCascadeFileData);

//     // Load haarcascade_frontalface_default.xml file
//     let utils = new window.cv.Utils('');
//     let faceCascadeFile = 'haarcascade_frontalface_default.xml'; 
//     let faceCascadeFileData = await utils.createFileFromUrl(faceCascadeFile, faceCascadeFile, () => {});
//     classifier.load(faceCascadeFileData);

//     const detectFaces = () => {
//       let begin = Date.now();
//       // start processing.
//       capture.read(src);
//       src.copyTo(gray);
//       cv.cvtColor(gray, gray, cv.COLOR_RGBA2GRAY);
//       classifier.detectMultiScale(gray, faces, 1.1, 3, 0);
//       // draw faces.
//       for (let i = 0; i < faces.size(); ++i) {
//         let face = faces.get(i);
//         let point1 = new cv.Point(face.x, face.y);
//         let point2 = new cv.Point(face.x + face.width, face.y + face.height);
//         cv.rectangle(src, point1, point2, [255, 0, 0, 255]);
//       }
//       cv.imshow(canvasFrame, src);
//       // schedule the next one.
//       let delay = 1000/30 - (Date.now() - begin);
//       setTimeout(detectFaces, delay);
//     };
    
//     // schedule the first one.
//     setTimeout(detectFaces, 0);
//   }

//   return (
//     <div>
//       <video ref={videoRef} id="video" width="640" height="480" autoPlay></video>
//       <canvas ref={canvasRef} id="canvas" width="640" height="480"></canvas>
//     </div>
//   );
// }

// export default Test;
