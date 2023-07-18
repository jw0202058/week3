import logo from './logo.svg';
import React, { useRef, useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as Portal, BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import WebcamPage from './webcam';
import Gallery from './upload';

function Home() {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => clearTimeout(timer);
  }, [opacity]);


  const scrollToSelect = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Main></Main>

        <h1 className='name' style={{ opacity, transition: 'opacity 2s' }}>dlfmaanjgwl</h1>

        <div className='start'>
          <Link
            className='start-text'
            style={{ fontFamily: 'initial', fontWeight: 'bold', fontSize: 25, textDecorationLine: 'underline', textDecorationThickness: 1}}
            to="selectSection"
            smooth={true}
            onClick={scrollToSelect}
          >
            시작하기
            <br />
          </Link>
          <img src="img/down_arrow.png" style={{ width: 30, height: 30 }}></img>
        </div>

        <Select></Select>

      </header>

    </div>
  );
}

function Main() {
  return (

    <div className='main'>
      <h1 className='appeal' style={{ color: "white" }}>
        C H A N G E<br />Y O U R<br />S T Y L E
      </h1>
      <div className='line'></div>
      <img src="img/main.jpg" className='main_img'></img>
    </div>

  )
}

function Select() {
  const navigate = useNavigate();

  const GoToWebcam = () => {
    navigate('/webcam');
  };

  const GoToUpload = () => {
    navigate('/gallery');
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headClassName = scrollY > 250 ? 'head' : 'head_';
  const captionClassName = scrollY > 250 ? 'caption' : 'caption_';

  return (
    <div className='select_img'>

      <div className='camera' onClick={GoToWebcam}>
          <h1 className={headClassName}>C A M E R A</h1>
        <span className={captionClassName}>카메라로 본인의 얼굴을 촬영해 보세요<br /></span>
      </div>

      <br />
      <br />

      <div className='gallery' onClick={GoToUpload}>
        <h1 className={headClassName}>G A L L E R Y</h1>
        <span className={captionClassName}>본인의 얼굴형이 잘 보이는 사진을 선택해 주세요<br /></span>

        <br></br>
      </div>
    </div>
  );
}

function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webcam" element={<WebcamPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
  );

}

export default App;
