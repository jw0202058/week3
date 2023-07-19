import logo from './logo.svg';
import React, { useRef, useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as Portal, BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import WebcamPage from './webcam';
import Gallery from './upload';
import OvalFileContents from './oval';
import OblongFileContents from './oblong';
import CircleFileContents from './circle';
import SquareFileContents from './square';
import HeartFileContents from './heart';
import './App.css';
import { IoHomeOutline } from 'react-icons/io5';

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

        <h1 className='name' style={{ opacity, transition: 'opacity 3s', fontWeight: 'vold', fontFamily:'serif' }}>p e r s o n a l H a i r</h1>

        <div className='start'>
          <Link
            className='start-text'
            style={{ fontFamily: 'NotoSerifKR-Medium', fontWeight: 'bold', fontSize: 25, textDecorationLine: 'underline', textDecorationThickness: 1}}
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
      <div className='appeal' style={{ color: "white", width: 414.5155, height: 242, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className='appeal_text'>
        <span style={{fontSize: 40}}>C H A N G E</span>
        <span style={{fontSize: 75, fontWeight: 'bolder'}}>YOUR</span>
        <span style={{fontSize: 53}}>S T Y L E</span>
        </div>
      </div>
      <div className='line'></div>
      <img src="img/main.png" className='main_img'></img>
    </div>

  )
}

function Select() {
  const navigate = useNavigate();

  const GoToWebcam = () => {
    navigate('/webcam');
    window.scrollTo(0, 0);

  };

  const GoToUpload = () => {
    navigate('/gallery');
    window.scrollTo(0, 0);

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
        <span className={captionClassName} style={{fontFamily: 'NotoSerifKR-Medium'}}>카메라로 본인의 얼굴을 촬영해 보세요<br /></span>
      </div>

      <br />
      <br />

      <div className='gallery' onClick={GoToUpload}>
        <h1 className={headClassName} >G A L L E R Y</h1>
        <span className={captionClassName} style={{fontFamily: 'NotoSerifKR-Medium'}}>본인의 얼굴형이 잘 보이는 사진을 선택해 주세요<br /></span>

        <br></br>
      </div>
    </div>
  );
}

function App() {

  return (
    <div>
      <Portal to="/" className='Home_icon' style={{ color: 'white' } }>
        <IoHomeOutline size={20} style={{ marginRight: 5 }} />

      </Portal>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webcam" element={<WebcamPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/oval" element={<OvalFileContents />} />
          <Route path="/oblong" element={<OblongFileContents />} />
          <Route path="/circle" element={<CircleFileContents />} />
          <Route path="/square" element={<SquareFileContents />} />
          <Route path="/heart" element={<HeartFileContents />} />
        </Routes>
      </div>
  );

}

export default App;