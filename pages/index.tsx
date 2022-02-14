import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/reducers/counterReducer";
import Counter from "../components/Counter";
import { useEffect } from "react";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(increment());
  };

  useEffect(() => {
    dispatch(incrementByAmount(4));
  }, [dispatch]);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <div>
          <button aria-label="Increment value" onClick={() => add()}>
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>

      <Counter />
    </>
  );
};

export default Home;
