import { BsPerson } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header=()=>{
  const bagSlice=useSelector(store=>store.bag);
  return (<header>
    <div className="logo_container">
      <Link to="/">
        <img className="myntra_home" src="../images/myntra_logo.webp" alt="Myntra Home" />
      </Link>
    </div>
    <nav className="nav_bar">
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">Kids</a>
      <a href="#">Home & Living</a>
      <a href="#">Beauty</a>
      <a href="#">Studio <sup>New</sup></a>
    </nav>
    <div className="search_bar">
        <GoSearch style={{width:"22px"}} className="search"/>
          <input className="search_input" placeholder="Search for products, brands and more" />
    </div>
    <div className="action_bar">
      <div className="action_container" style={{color:"black"}}>
      <BsPerson style={{width:"22px"}}/>
        <span className="action_name">Profile</span>
      </div>
      <Link to="/wishlist" className="action_container" style={{color:"black"}}>
      <IoIosHeartEmpty style={{width:"22px"}}/>
        <span className="action_name">Wishlist</span>
      </Link>
      <Link to="/bag" className="action_container bag-action" style={{color:"black"}}>
      <MdOutlineShoppingBag style={{width:"22px"}}/>
        <span className="action_name">Bag</span>
        <span className="bag-item-count">{bagSlice.length}</span>
      </Link>
    </div>
  </header>);
}
export default Header;