import { MdFacebook } from 'react-icons/md';
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import './newsletter.scss';
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <h3>Newsletter</h3>
        <h2>SIGN UP FOR LATEST UPDATES AND OFFERS</h2>
        <div className="inputs">
          <input type="text" placeholder="Email" />
          <button>Subscribe</button>
        </div>

        <h3>Will be used Lorem ipsum dolor sit. </h3>

        <div className="icons">
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <FaTwitter />
          </div>
          <div className="icon">
            <FaInstagram />
          </div>
          <div className="icon">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
