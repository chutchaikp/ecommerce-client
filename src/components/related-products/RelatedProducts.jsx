import Categories from '../categories/Categories';
import Products from '../products/Products';
import './relatedProducts.scss';
const RelatedProducts = ({ data }) => {
  return (
    <div className="relatedProducts">
      <h1> RelatedProducts </h1>
      {/* <Categories /> */}
      <Products data={data} />
    </div>
  );
};
export default RelatedProducts;
