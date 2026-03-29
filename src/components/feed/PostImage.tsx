'use client';

import { useState } from 'react';

type PostImageProps = {
  images: string[];
  alt: string;
};

export default function PostImage({ images, alt }: PostImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleImages = images.length > 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='post-image'>
      {/* 이미지 */}
      <img src={images[currentIndex]} alt={`${alt} ${currentIndex + 1}`} className='post-image__img' />

      {/* 👉 현재 이미지 번호 표시 */}
      {hasMultipleImages && (
        <div className='post-image__count'>
          {currentIndex + 1}/{images.length}
        </div>
      )}

      {hasMultipleImages && (
        <>
          {/* 이전 */}
          <button
            type='button'
            className='post-image__nav post-image__nav--left'
            onClick={handlePrev}
            aria-label='이전 이미지'
          >
            ‹
          </button>

          {/* 다음 */}
          <button
            type='button'
            className='post-image__nav post-image__nav--right'
            onClick={handleNext}
            aria-label='다음 이미지'
          >
            ›
          </button>

          {/* dots */}
          <div className='post-image__dots'>
            {images.map((_, index) => (
              <button
                key={index}
                type='button'
                className={`post-image__dot ${index === currentIndex ? 'is-active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`${index + 1}번 이미지 보기`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
