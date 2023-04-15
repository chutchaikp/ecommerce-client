import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="col2">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non animi
            illum ipsa adipisci aspernatur magnam ut, reiciendis veritatis
            veniam eius!
          </div>
        </div>
        <div className="col2">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              necessitatibus? 10100
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0123 456 7890</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@dev.com</div>
          </div>
        </div>
        <div className="col1">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col1">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom">
        <span className="text">
          JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS.
        </span>
        <img src={Payment} />
      </div>
    </div>
  );
};

export default Footer;
