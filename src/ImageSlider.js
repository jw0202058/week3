import React from 'react';
import './ImageSlider.css'; // CSS 스타일을 적용하기 위해 임포트

const ImageSlider = ({ images }) => {
  const handleImageClick = (youtubeLink) => {
    window.open(youtubeLink, '_blank'); // 새 창 또는 새 탭에서 링크 열기
  };

  return (
    <div className="image-container">
      {images.map((item, index) => (
        <div
          className="image-wrapper"
          key={index}
          onClick={() => handleImageClick(item.youtubeLink)}
        >
          <img
          className='image'
            src={`img/${item.img}`}
            alt={`Image ${index + 1}`}
          />
          <div className="image-text" style={{fontWeight: 'bolder', fontSize:30}}>{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
