import { useSelector ,useDispatch } from "react-redux";
import { increment, decrement } from "../store/action";

const Counter = () =>{

    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1> Counter : {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}


export default Counter;