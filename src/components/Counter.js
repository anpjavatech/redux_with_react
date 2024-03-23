import classes from './Counter.module.css';
import {useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state)=> state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  function handleIncrement(){
    dispatch({type: "increment"});
  };

  function handleDecrement(){
    dispatch({type: "decrement"});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>
        <button onClick={handleIncrement}>+</button>
        {counter}
        <button onClick={handleDecrement}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
