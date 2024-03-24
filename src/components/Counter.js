import classes from './Counter.module.css';
import {useSelector, useDispatch } from "react-redux";
import {increment, decrement, toggle} from "../store/counter-slice";

const Counter = () => {
  const counter = useSelector((state)=> state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();


  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  const handleIncrement = ()=>{
    dispatch(increment());
  }
  
  const handleDecrement = ()=>{
    dispatch(decrement());
  }

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
