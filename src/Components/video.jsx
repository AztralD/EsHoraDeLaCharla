import React, { useState } from 'react';
function Video() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href="https://www.youtube.com/watch?v=2Sv20zNo5n8"
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
      En este video encontrarás información adicional sobre los métodos anticonceptivos
    </a>
  );
}
export default Video

//lo logró señor//
//Lo logre??//
//lo logró!11!//
//me cago en todo gaste un PODER AAAAHHHH//


















