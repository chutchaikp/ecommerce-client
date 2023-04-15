import Products from '../../components/products/Products';
import './category.scss';
const Category = () => {
  return (
    <div className="category">
      <div className="cat-wrapper">
        <h1> Category </h1>
        <Products />
      </div>
    </div>
  );
};
export default Category;
