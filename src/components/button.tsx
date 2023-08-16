import { useState } from "react";


const Button = () => {

  const [count, useCount] = useState(0)

  return (
    <div
      style={{
        'backgroundColor': "black",
        'width': '100px',
        'height': '100px',
        'borderRadius': '10px',
        'display': 'flex',
        'justifyContent': "center",
        'alignItems': "center",
        'flexDirection': 'column',

      }}>
      <div
        style={{
          'color': "white",
        }}
      >
        {count}
      </div>
      <div
        style={{
          'color': "white",
          'border': "solid 2px white",
          'padding': '2px',
          'borderRadius': '5px'
        }}
        onClick={() => useCount(count + 1)}
      >

        +</div>
    </div>
  );
}

export default Button;