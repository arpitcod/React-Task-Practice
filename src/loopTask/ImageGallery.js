import React from 'react'

const ImageGallery = () => {
    const images = [
        { id: 1, url: 'https://via.placeholder.com/150', alt: 'Sample Image 1' },
        { id: 2, url: 'https://via.placeholder.com/200', alt: 'Sample Image 2' },
        { id: 3, url: 'https://via.placeholder.com/250', alt: 'Sample Image 3' },
      ];
  return (
    <div>
        {
            images?.map(image =>(
                <img src={image.url} alt={image.alt} />
            ))
        }
    </div>
  )
}

export default ImageGallery