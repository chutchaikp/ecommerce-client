import BannerImg from '../../assets/banner-img.png';
import './banner.scss';
const Banner = () => {
  return (
    <div className="banner">
      <div className="wrapper">
        <div className="texts">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            dolorem aut obcaecati voluptatum placeat. Mollitia eos incidunt
            nulla hic quaerat, reiciendis libero deleniti consectetur
            aspernatur, amet doloribus harum sunt dolorem.
          </p>
          <div className="buttons">
            <button>Read More</button>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="image">
          <img src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
