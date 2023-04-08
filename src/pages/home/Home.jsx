import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counterSlice';
import './home.scss';
const Home = () => {
  const { num } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="home">
      <h1> Home </h1>
      {num}
      <button onClick={() => dispatch(increment())}>INC</button>
      <button onClick={() => dispatch(decrement())}>DEC</button>
    </div>
  );
};
export default Home;
