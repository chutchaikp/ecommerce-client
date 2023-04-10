import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counterSlice';
import Banner from '../../components/banner/Banner.jsx';
import Categories from '../../components/categories/Categories.jsx';
import Products from '../../components/products/Products.jsx';
import Newsletter from '../../components/newsletter/Newsletter.jsx';
import './home.scss';
const Home = () => {
  const { num } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="home">
      {/* <Banner /> */}

      {/* <Categories /> */}

      {/* <h2>POPULAR PRODUCT</h2> */}
      <Products />

      {/* <Newsletter /> */}
    </div>
  );
};
export default Home;
