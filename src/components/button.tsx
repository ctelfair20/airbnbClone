import { useState } from "react";


// const Button = () => {

//   const [count, useCount] = useState(0)

//   return (
//     <div
//       style={{
//         'backgroundColor': "black",
//         'width': '100px',
//         'height': '100px',
//         'borderRadius': '10px',
//         'display': 'flex',
//         'justifyContent': "center",
//         'alignItems': "center",
//         'flexDirection': 'column',

//       }}>
//       <div
//         style={{
//           'color': "white",
//         }}
//       >
//         {count}
//       </div>
//       <div
//         style={{
//           'color': "white",
//           'border': "solid 2px white",
//           'padding': '2px',
//           'borderRadius': '5px'
//         }}
//         onClick={() => useCount(count + 1)}
//       >
//         +</div>
//     </div>
//   );
// }

// export default Button;

const Button = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="container"
      style={{
        'backgroundColor': "red",
        'width': '100px',
        'height': "100px",
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
      }}
    >
      <div className="button" onClick={() => { setCount(count + 1) }}
        style={{
          'backgroundColor': "white",
          'width': '30px',
          'height': "30px",
          'display': 'flex',
          'justifyContent': 'center',
          'alignItems': 'center',
        }}
      >
        {count}
      </div>
    </div>
  );
}

export default Button;