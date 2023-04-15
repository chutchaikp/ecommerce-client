import Product from './Product.jsx';
import './products.scss';
const Products = ({ data }) => {
  return (
    <div className="products">
      {/* <div className="title">POPULAR PRODUCT</div> */}
      <div className="wrapper">
        {data &&
          data.length > 0 &&
          data.map((product, idx) => {
            return <Product key={idx} data={product} />;
          })}
      </div>
    </div>
  );
};
export default Products;
