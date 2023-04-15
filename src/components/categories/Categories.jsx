import { Link } from 'react-router-dom';
import Cat1 from '../../assets/category/cat-1.jpg';
import Cat2 from '../../assets/category/cat-2.jpg';
import Cat3 from '../../assets/category/cat-3.jpg';
import Cat4 from '../../assets/category/cat-4.jpg';

import './categories.scss';
const Categories = () => {
  return (
    <div className="categories">
      <div className="wrapper">
        <Link className="link">
          <img src={Cat1} alt="" />
        </Link>
        <Link className="link">
          <img src={Cat2} alt="" />
        </Link>
        <Link className="link">
          <img src={Cat3} alt="" />
        </Link>
        <Link className="link">
          <img src={Cat4} alt="" />
        </Link>
      </div>
    </div>
  );
};
export default Categories;
