import {useLocation, Link} from "react-router-dom";
import '../styles/NavComponent.css'


const NavComponent = () => {
    const location = useLocation();
    const items = ['', 'about', 'work', 'education', 'publications', 'reading', 'contact'];
  
    return (
      <ul className="header-nav">
        {items.map((item) => (
          <li
            key={item === '' ? 'home' : item}
            className={location.pathname === `/${item}` ? 'is_active' : 'not_active'}
          >
            <Link to={`/${item}`} className="active-spacing">

                {item === '' ? 'Home' : item[0].toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

export default NavComponent;