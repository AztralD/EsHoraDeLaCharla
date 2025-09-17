import React, { useState } from 'react';
function Video2() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href="https://www.youtube.com/watch?v=FGfIZXUBy7Q"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: isHovered ? 'violet' : 'purple',
        textDecoration: 'none',
        cursor: 'pointer'
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
    Con este video se podran fortalecer los conocimientos previos
    </a>
  );
}

export default Video2; //lo logró señor Lo logre? lo logró!!11//
