import { Link } from 'react-router-dom';
import Earbud from '../../assets/products/earbuds-prod-1.webp';

import './product.scss';
const Product = ({ data }) => {
  const title = data.attributes.title;
  const slug = data.attributes.slug;
  const img =
    import.meta.env.VITE_SERVER_URL +
    data.attributes.picture.data.attributes.formats.small.url;
  const price = data.attributes.price;
  const priceFormated = price.toLocaleString('th-TH', {
    style: 'currency',
    currency: 'THB',
  });
  return (
    <div className="product">
      <Link className="link" to={`/single-product/${slug}`}>
        <div className="wrapper">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <div className="details">
            <div className="name">{title}</div>
            <div className="price">{priceFormated}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Product;
