import { useSelector } from "react-redux";
import Display from "../components/Wishlistdisplay";
import Zerobag from "../components/Zerobag";

const Wishlist=()=>{
  const {wishList}=useSelector(store=>store.wish);
  return (<main>
    {wishList.length===0 && <Zerobag/>}
    <div className="items-container">
      {wishList.map((item)=><Display item={item} key={item.id}/>)}
    </div>
  </main>);
}
export default Wishlist;