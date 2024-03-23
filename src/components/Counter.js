import classes from './Counter.module.css';
import {useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state)=> state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({
      type:"toggle"
    });
  };

  function handleIncrement(){
    dispatch({type: "increment"});
  };

  function handleDecrement(){
    dispatch({type: "decrement"});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>
        <button onClick={handleIncrement}>+</button>
        {counter}
        <button onClick={handleDecrement}>-</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
