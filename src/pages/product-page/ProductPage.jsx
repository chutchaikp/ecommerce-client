import { MdShoppingCart } from 'react-icons/md';
import RelatedProducts from '../../components/related-products/RelatedProducts.jsx';
import Earbud from '../../assets/products/earbuds-prod-1.webp';
import './productPage.scss';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api.js';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice.js';
const ProductPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState(null);

  const [relatedProducts, setRelatedProducts] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    // get product by slug
    async function loadProduct() {
      try {
        const key = slug.split('-')[0];
        const url = `/api/products?filters[slug][$contains]=${key}&populate=*`;
        const res = await fetchDataFromApi(url);
        setRelatedProducts(res.data);
        setProduct(res.data.find((x) => x.attributes.slug === slug));
      } catch (error) {
        debugger;
      }
    }
    loadProduct();

    setQty(1);
  }, [location]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const image =
    import.meta.env.VITE_SERVER_URL +
    product.attributes.picture.data.attributes.formats.small.url;
  const title = product.attributes.title;
  const desc = product.attributes.desc;
  const price = product.attributes.price;
  const priceFormated = price.toLocaleString('th-TH', {
    style: 'currency',
    currency: 'THB',
  });

  return (
    <div className="productPage">
      <div className="content">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="details">
          <div className="title">{title}</div>
          <div className="price">{priceFormated}</div>
          <div className="desc">{desc}</div>
          <div className="actions">
            <div className="qty">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
              <div>{qty}</div>
              <button onClick={() => qty < 100 && setQty(qty + 1)}>+</button>
            </div>
            <div className="addToCart">
              <button
                onClick={() => dispatch(addItem({ product, quantity: qty }))}
              >
                <MdShoppingCart />
                ADD TO CART
              </button>
            </div>
          </div>

          <hr />

          <div className="share">
            <span>Share</span>
            <div className="icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
              <FaPinterestP />
            </div>
          </div>
        </div>
      </div>
      <div className="related">
        <RelatedProducts data={relatedProducts} />
      </div>
    </div>
  );
};
export default ProductPage;
