import "./styles.css";
import { useState, useEffect } from "react";
const App = () => {
  // const timeValue = {minutes:0,second:0,hour:0}
  const [second, setSecond] = useState(0);

  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  let time;
  useEffect(() => {
    time = setInterval(() => {
      setSecond(second + 1);
      if (second === 59) {
        setMinute(minute + 1);
        setSecond(0);
      }
      if (minute === 59) {
        setHour(hour + 1);
        setMinute(0);
      }
    }, 1000);
    return () => clearInterval(time);
  });

  const restart = () => {
    setSecond(0);
    setMinute(0);
    setHour(0);
  };
  const stop = () => {
    clearInterval(time);
  };
  // console.log(timeValue.second)
  // console.log(setTimer(timer.hour+1))
  return (
    <div className="App">
      <div>
        <span>{hour < 10 ? "0" + hour : hour}</span>
        <span>{minute < 10 ? "0" + minute : minute}</span>
        <span>{second < 10 ? "0" + second : second}</span>
      </div>
      <div>
        <button onClick={() => restart()}>restart</button>
        <button onClick={() => stop()}>stop</button>
      </div>
    </div>
  );
};
export default App;
