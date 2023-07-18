import React from 'react';
import ImageSlider from './ImageSlider';
import './result.css'

const OblongFileContents = () => {
    const ImgFileNames = [
        {
            img: 'adze.png',
            youtubeLink: 'https://youtu.be/-L_-mFVj0mI', // a
            description: '애즈펌'
        },
        {
            img: 'gile.png',
            youtubeLink: 'https://youtube.com/shorts/STt_XZ4TWv0?feature=share', // g
            description: '가일컷'
        },
        {
            img: 'leaf.png',
            youtubeLink: 'https://youtu.be/zpyPI2WK9iI', // l
            description: '리프컷'
        },
        {
            img: 'shortcut.png',
            youtubeLink: 'https://youtu.be/HIYmVa1wzjM', // s.c
            description: '숏컷'
        },
        {
            img: 'short.png',
            youtubeLink: 'https://youtube.com/shorts/oJ0lzIlfWVA?feature=share', // s.단발
            description: '단발'
        },
        {
            img: 'wave.png',
            youtubeLink: 'https://youtu.be/2MQl53OaXPY', // 굵은 w
            description: '굵은 웨이브'
        }
    ];

    return (
        <div className='idol'>
            <h2 style={{fontSize: 70}}>Oblong</h2>
            <div className="scroll-container">
                <ImageSlider images={ImgFileNames} />
            </div>
            {/* <span>사진을 클릭해 보세요!
            </span> */}
            <p className="explain" style={{textAlign:'center'}}>다양한 헤어 스타일이 어울리는 긴 얼굴형<br/>
            균형 있고 독특한 분위기를 연출하고, 가로 볼륨을 주는 애즈펌 및 웨이브<br/>
            머리 한 쪽은 짧게, 한 쪽은 길게 연출하여 얼굴의 비율을 조절해 주는 가일컷<br/>
            얼굴 형태를 강조하지 않고 숨겨 주며, 동그란 느낌을 살려 주는 숏컷 및 단발<br/>
            </p>
        </div>
    );
};

export default OblongFileContents;