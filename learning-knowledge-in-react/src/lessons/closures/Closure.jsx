import React from 'react';
import Timer from './Timer';
import CacheDataFetcher from './CacheDataFetcher';


function Counter() {
  const [count, setCount] = React.useState(0);
  let countNotUseState = 0;
  const logCount = () => {
    setTimeout(() => {
      console.log(countNotUseState); // Có thể in giá trị cũ
    }, 2000);
  };
  return (
    <>
      <h1>countNotUseState: {countNotUseState}</h1>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => {countNotUseState += 1}}>Tăng countNotUseState</button>
      <button onClick={logCount}>Log sau 2 giây</button>
    </>
  );
}


const Closure = () => {
  return (
    <div>
        <Counter />
    </div>
  )
}

export default Closure