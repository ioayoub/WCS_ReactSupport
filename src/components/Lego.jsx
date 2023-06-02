import React, { useEffect, useState } from 'react';
import Button from './Button';

const Lego = ({ color, width, height }) => {
  const [newcolor, setNewColor] = useState(color);
  const [newwidth, setNewWidth] = useState(width);

  return (
    <div>
      <input
        type="text"
        value={newcolor}
        onChange={(event) => setNewColor(event.target.value)}
      />

      <button onClick={() => setNewWidth(newwidth + 1)}>Elargir</button>

      <div
        style={{
          width: `${newwidth}em`,
          height: `${height}em`,
          backgroundColor: `${newcolor}`,
          border: '1px solid black',
          margin: '2em',
        }}
      ></div>
      <Button btncolor={newcolor} />
    </div>
  );
};

export default Lego;
