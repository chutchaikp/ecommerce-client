import { MdOutlineFavorite, MdSearch, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <div className="center">JSDEVSTORE.</div>
        <div className="right">
          <MdSearch />
          <MdOutlineFavorite />

          <div className="cart">
            <MdShoppingCart />
            <div className="num">5</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
