import { useDispatch } from "react-redux";
import { BagActions } from "../store/BagSlice";
import { WishActions } from "../store/WishSlice";

const Display=({item})=>{
  const dispatch=useDispatch();
  return (<div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="item-name-wish">{item.item_name}</div>
        <div className="price wish-price">
          <span className="current-price wish-price">Rs {item.current_price}</span>
        </div>
        <button type="button" class="btn btn-outline-danger wish-button" style={{width:"100%"}} onClick={()=>{
          dispatch(BagActions.addTobag(item.id));
          dispatch(WishActions.removeFromWishList(item.id));
        }}>MOVE TO BAG</button>
      </div>);
}
export default Display;