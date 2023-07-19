import React from 'react';
import ImageSlider from './ImageSlider';
import './result.css'

const CircleFileContents = () => {

    const ImgFileNames = [
        {
            img: 'pomade.png',
            youtubeLink: 'https://youtube.com/shorts/WSer-4o_ZWc?feature=share', // p
            description: '포마드'
        },
        {
            img: 'regent.png',
            youtubeLink: 'https://youtube.com/shorts/RiKhcKxOLa4?feature=share', // r
            description: '리젠트'
        },
        {
            img: 'adze.png',
            youtubeLink: 'https://youtu.be/-L_-mFVj0mI', // a
            description: '애즈펌'
        },
        {
            img: 'layerd.png',
            youtubeLink: 'https://youtu.be/r7qw3iNgJUw', // l
            description: '레이어드'
        },
        {
            img: 'short_seethroughBang.png',
            youtubeLink: 'https://youtu.be/OoNLxytqa-w', // see_Bang
            description: '시스루뱅'
        },
        {
            img: 'wave.png',
            youtubeLink: 'https://youtu.be/2MQl53OaXPY', // w
            description: '굵은 웨이브'
        },
        {
            img: 'sideBang.png',
            youtubeLink: 'https://youtu.be/Hdq1LTpJpHA', // s.B
            description: '사이드뱅'
        }
    ];

    return (
        <div className='idol'>
            <h2 style={{ fontSize: 70 }}>Round</h2>
            {/* <img src="img/line.png"></img> */}
            <div className="scroll-container">
                <ImageSlider images={ImgFileNames} />
            </div>
            {/* <span>사진을 클릭해 보세요!</span> */}
            <p className="explain" style={{textAlign:'center'}}>가로 세로 비율이 거의 비슷하며 둥근 형태를 가지고 있다<br/>
            앞머리의 높은 볼륨과 뒷머리의 적당한 길이 조절이 가능한 포마드 및 리젠트<br/>
            얼굴 주변에 텍스처와 운동감을 추가하여 얼굴의 형태를 부각시키고, 가늘고 길쭉한 느낌을 주는 레이어드컷<br/>
            부피와 텍스처를 추가하여 둥근 얼굴을 완화시키고 세련된 느낌을 주는 웨이브<br/>
            </p>
        </div>
    );
};

export default CircleFileContents;