import Product from './Product.jsx';
import './products.scss';
const Products = () => {
  return (
    <div className="products">
      <div className="title">POPULAR PRODUCT</div>
      <div className="wrapper">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};
export default Products;
