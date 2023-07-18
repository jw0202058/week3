import React from 'react';
import ImageSlider from './ImageSlider';
import './result.css'

const HeartFileContents = () => {
      const ImgFileNames = [
        {
            img: 'adze.png',
            youtubeLink: 'https://youtu.be/-L_-mFVj0mI', // a
            description: '애즈펌'
        },
        {
            img: 'scurl.png',
            youtubeLink: 'https://www.youtube.com/watch?v=eSt0g4IINL8', // s.c
            description: 'S컬'
        },
        {
            img: 'short.png',
            youtubeLink: 'https://youtube.com/shorts/oJ0lzIlfWVA?feature=share', // s.단발
            description: '숏단발'
        },
        {
            img: 'ponytail.png',
            youtubeLink: 'https://youtu.be/2MQl53OaXPY', // w
            description: '포니테일'
        }
    ];

    return (
        <div className='idol'>
            <h2 style={{ fontSize: 70 }}>Heart</h2>
            {/* <div className='line' style={{width:1800, height: 1}}></div> */}
            <div className="scroll-container">
                <ImageSlider images={ImgFileNames} />
            </div>
            {/* <span>사진을 클릭해 보세요!</span> */}
            <p className="explain" style={{textAlign:'center'}}>넓은 이마와 날카로운 턱선<br/>
            부드러운 느낌을 주는 헤어 스타일<br/>
            이마를 노출시키고 얼굴을 강조하는 업 스타일<br/>
            얼굴 주변의 레이어를 추가하여 턱선을 부드럽게 완화하는 단발 스타일<br/>
            주로 경쾌하고 밝으면서, 부드러운 느낌을 주는 헤어 스타일이 잘 어울린다<br/>
            </p>

        </div>
    );
};

export default HeartFileContents;