import React from 'react';
import ImageSlider from './ImageSlider';
import './result.css'

const OvalFileContents = () => {
    const ImgFileNames = [
        {
            img: 'drop.png',
            youtubeLink: 'https://youtube.com/shorts/isrZfB0ueIY?feature=share', // d
            description: '드롭컷'
        },
        {
            img: 'shortgile.png',
            youtubeLink: 'https://www.youtube.com/shorts/5ECI-lKkSe8', // s.g
            description: '숏가일'
        },
        {
            img: 'seethrough.png',
            youtubeLink: 'https://youtu.be/KjozEQTU3S8', // s.d
            description: '시스루댄디'
        },
        {
            img: 'ponytail.png',
            youtubeLink: 'https://youtube.com/shorts/WMZYTQWfoJk?feature=share', // p.t
            description: '포니테일'
        },
        {
            img: 'straight.png',
            youtubeLink: 'https://youtu.be/J5CwTw_OtLY', // st
            description: '긴생머리'
        },
        {
            img: 'layerd.png',
            youtubeLink: 'https://youtu.be/r7qw3iNgJUw', // lay
            description: '레이어드컷'
        }
    ];

    return (
        <div className='idol'>
            <h2 style={{ fontSize: 70 }}>Oval</h2>
            {/* <img src="img/line.png"></img> */}
            <div className="scroll-container">
                <ImageSlider images={ImgFileNames} />
            </div>
            {/* <span>사진을 클릭해 보세요!
            </span> */}
            <p className="explain" style={{textAlign:'center'}}>균형이 잡혀 있어 다양한 헤어스타일이 어울리는 계란형<br/>
            정수리 부분과 얼굴의 아래쪽을 강조하여, 동그랗고 부드러운 느낌을 주는 드롭컷<br/>
            얼굴의 넓은 부분을 가리고 얼굴 비율을 조절해 주는 시스루 댄디컷<br/>
            머리를 묶어 얼굴 형태를 가리지 않고 보여 주는 포니테일<br/>
            얼굴 형태를 완화해 주고 부드러운 분위기를 연출할 수 있는 레이어드컷<br/>
            </p>
        </div>
    );
};

export default OvalFileContents;