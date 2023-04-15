import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counterSlice';
import Banner from '../../components/banner/Banner.jsx';
import Categories from '../../components/categories/Categories.jsx';
import Products from '../../components/products/Products.jsx';
import Newsletter from '../../components/newsletter/Newsletter.jsx';
import './home.scss';
import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../../utils/api';
import { initProducts } from '../../redux/productSlice';
const Home = () => {
  const { num } = useSelector((state) => state.counter);
  // use {products} = useSelector(state => state.products)
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetchDataFromApi('/api/products?populate=*');
        setProducts(res.data);
        console.log(res.data);
        dispatch(initProducts(res.data));
      } catch (error) {
        debugger;
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="home">
      {/* <Banner /> */}

      {/* <Categories /> */}

      {/* <h2>POPULAR PRODUCT</h2> */}
      {products && products.length > 0 && <Products data={products} />}

      {/* <Newsletter /> */}
    </div>
  );
};
export default Home;
