import React from 'react';
import ImageSlider from './ImageSlider';
import './result.css'

const SquareFileContents = () => {
    const ImgFileNames = [
        {
            img: 'adze.png',
            youtubeLink: 'https://youtube.com/shorts/isrZfB0ueIY?feature=share', // d
            description: '애즈펌'
        },
        {
            img: 'garma.png',
            youtubeLink: 'https://www.youtube.com/shorts/k2YTwhvNClc', // g
            description: '가르마펌'
          },
        {
            img: 'drop.png',
            youtubeLink: 'https://youtube.com/shorts/isrZfB0ueIY?feature=share', // d
            description: '드롭컷'
          },
        {
            img: 'regent.png',
            youtubeLink: 'https://youtube.com/shorts/RiKhcKxOLa4?feature=share', // r
            description: '리젠트'
          },
        {
            img: 'shortScurl.png',
            youtubeLink: 'https://youtube.com/shorts/qs7KYM9WsXw?feature=share', // p.t
            description: '단발 S컬'
          },
        {
            img: 'straight.png',
            youtubeLink: 'https://youtu.be/J5CwTw_OtLY', // str
            description: '긴 생머리'
          },
        {
            img: 'layerd.png',
            youtubeLink: 'https://youtu.be/r7qw3iNgJUw', // lay
            description: '레이어드컷'
          },
        {
      img: 'perilla.png',
      youtubeLink: 'https://youtu.be/i7vM9jNBIqQ', // p
      description: '깻잎머리'
    }
  ];

  return (
    <div className='idol'>
      <h2 style={{ fontSize: 70 }}>Square</h2>
      {/* <img src="img/line.png"></img> */}
      <div className="scroll-container">
        <ImageSlider images={ImgFileNames} />
      </div>
      {/* <span>사진을 클릭해 보세요!
      </span> */}
      <p className="explain" style={{ textAlign: 'center' }}>곡선의 웨이브와 곱슬로 얼굴의 각진 부분을 부드럽게 완화시켜 주는 가르마펌<br />
        각진 얼굴의 개성을 살려 주고 더욱 강인한 모습으로 연출해 주는 리젠트, 드롭컷<br />
        턱 주변에 S자 모양의 컬로 부드러운 곡선을 추가하여 각진 얼굴을 완화해 주는 단발 S컬<br />
        얼굴의 형태를 완화해 주고 부드러운 분위기를 연출할 수 있는 레이어드컷<br />
        얼굴을 세로로 길어 보이게 만들어서 얼굴의 각진 느낌을 완화시키고 우아하고 부드러운 느낌을 주는 긴 생머리<br />
      </p>
    </div>
  );
};

export default SquareFileContents;