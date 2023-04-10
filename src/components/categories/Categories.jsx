import { Link } from 'react-router-dom';
import Cat1 from '../../assets/category/cat-1.jpg';

import './categories.scss';
const Categories = () => {
  return (
    <div className="categories">
      <div className="wrapper">
        <Link className="link">
          <img src={Cat1} alt="" />
        </Link>
        <Link className="link">
          <img src={Cat1} alt="" />
        </Link>
        <Link className="link">
          <img src={Cat1} alt="" />
        </Link>
        <Link className="link">
          <img src={Cat1} alt="" />
        </Link>
      </div>
    </div>
  );
};
export default Categories;
