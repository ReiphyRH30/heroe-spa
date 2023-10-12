
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement,incrementBy } from "./store/slices/counter/";
import "./App.css";

function App() {
  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();
  

  return (
    <>
      <div>
        <p>{counter}</p>

        <button type="button" onClick={() => dispatch( increment() )}>
          Increment
        </button>

        <button type="button" onClick={() => dispatch( decrement() )}>
          Decrement
        </button>

        <button type="button" onClick={() => dispatch( incrementBy(4) )}>
          Increment by 4
        </button>

      </div>
    </>
  );
}

export default App;
