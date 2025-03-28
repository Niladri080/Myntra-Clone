import { useDispatch, useSelector } from "react-redux";
import { WishActions } from "../store/WishSlice";

const HomeDisplay = ({ item }) => {
  const Showwishlist=useSelector(store=>store.wish.wishList);
  const showwish = Showwishlist.some((wishItem) => wishItem.id === item.id);
  const dispatch= useDispatch();
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating" style={{marginLeft:"7px"}}>
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name" style={{marginLeft:"7px"}}>{item.company}</div>
      <div className="item-name" style={{marginLeft:"7px"}}>{item.item_name}</div>
      <div className="price" style={{marginLeft:"7px"}}>
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!showwish?<button type="button" className="btn btn-outline-danger btn-add-bag" onClick={()=>{dispatch(WishActions.addToWishList(item))}}>ADD TO WISHLIST</button>:<button type="button" className ="btn btn-outline-secondary btn-add-bag" onClick={()=>dispatch(WishActions.removeFromWishList(item.id))}>REMOVE FROM WISHLIST</button>}
    </div>
  );
};
export default HomeDisplay;
