import {
  MdClose,
  MdOutlineFavorite,
  MdRemoveCircleOutline,
  MdSearch,
  MdShoppingCart,
} from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  increseQuantity,
  removeItem,
} from '../../redux/cartSlice';
import { toCurrencyFormated } from '../../utils/currency';
const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { items } = useSelector((state) => state.cart);
  const [subtotal, setSubtotal] = useState();

  const [productFiltered, setProductFiltered] = useState([]);

  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState('');
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    setShowSearch(false);
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    const _subtotal = items.reduce(
      (acc, item) => acc + item.product.attributes.price * item.quantity,
      0
    );
    // setSubtotal(_subtotal.toFixed(2));
    setSubtotal(_subtotal);
  }, [items]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'sticky' : ''}`}>
      <div className="wrapper">
        <div className="left">
          <Link to="/">HOME</Link>
          <Link>ABOUT</Link>
          <Link>CATEGORIES</Link>
        </div>
        <div className="center">
          <Link to="/">JSDEVSTORE.</Link>
        </div>
        <div className="right">
          <div className="search-icon" onClick={() => setShowSearch(true)}>
            <MdSearch />
          </div>
          <MdOutlineFavorite />

          <div className="cart-icon">
            <MdShoppingCart onClick={() => setShowCart(true)} />
            <div className="num">{items.length}</div>
          </div>
        </div>
      </div>

      {showCart && (
        <div className="cart">
          <div className="backdrop" onClick={() => setShowCart(false)}></div>
          <div className="cartContents">
            <div className="wrapperx">
              <div className="cartHeader">
                <h3>SHOPPING CART</h3>
                <MdClose onClick={() => setShowCart(true)} />
              </div>
              <div className="cartItems">
                {/* No product in the Cart */}
                {items.length > 0 ? (
                  <ul>
                    {items.map((item, _idx) => {
                      // debugger;
                      const img =
                        import.meta.env.VITE_SERVER_URL +
                        item.product.attributes.picture.data.attributes.url;
                      const title = item.product.attributes.title;
                      const quantity = item.quantity;

                      const price = item.product.attributes.price * quantity;
                      const priceFormated = price.toLocaleString('th-TH', {
                        style: 'currency',
                        currency: 'THB',
                      });

                      return (
                        <li key={_idx} className="item">
                          <div className="image">
                            <img src={img} alt="" />
                          </div>
                          <div className="details">
                            <div className="title">{title}</div>
                            <div className="qty">
                              <button
                                onClick={() =>
                                  dispatch(
                                    decreaseQuantity({ product: item.product })
                                  )
                                }
                              >
                                -
                              </button>
                              <div>{quantity}</div>
                              <button
                                onClick={() =>
                                  dispatch(
                                    increseQuantity({ product: item.product })
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                            <div className="qty-total">
                              {quantity} x
                              <span className="price">{priceFormated}</span>
                            </div>
                          </div>
                          <div className="remove">
                            <MdRemoveCircleOutline
                              onClick={() => dispatch(removeItem(item))}
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="noProduct">
                    <MdShoppingCart size={100} />
                    <h5>No products in the Cart</h5>
                    <button onClick={() => setShowCart(false)}>
                      RETURN TO SHOP
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="cartFooter">
              <div className="sub-total">
                <span>SUBTOTAL</span>
                <span>{toCurrencyFormated(subtotal)}</span>
              </div>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      )}

      {showSearch && (
        <div className="search">
          <div className="search-form">
            <input
              type="text"
              autoFocus
              placeholder="Search for Products"
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
                const key = e.target.value;
                if (key === '') {
                  setProductFiltered([]);
                } else {
                  const filtered = products.filter(
                    (p) => p.attributes.slug.indexOf(key) >= 0
                  );
                  setProductFiltered(filtered);
                }
              }}
            />
            <div className="close-btn" onClick={() => setShowSearch(false)}>
              <MdClose />
            </div>
          </div>
          <div className="search-result">
            <ul className="filterProducts">
              {productFiltered.length > 0 &&
                productFiltered.map((fi, idx) => {
                  const img =
                    import.meta.env.VITE_SERVER_URL +
                    fi.attributes.picture.data.attributes.url;
                  const title = fi.attributes.title;
                  const desc = fi.attributes.desc;
                  const slug = fi.attributes.slug;
                  return (
                    <li key={idx} className="filterProduct">
                      <Link to={`/single-product/${slug}`} className="link">
                        <div className="image">
                          <img src={img} alt="" />
                        </div>
                        <div className="details">
                          <h3>{title}</h3>
                          <p>{desc}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
