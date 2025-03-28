import { useSelector } from "react-redux";
import Bagcont from "../components/Bagitemscontainer";
import Bagsummary from "../components/Bagsummary";
import Empty from "../components/Emptycart";
const Bag = () => {
  const bagItems = useSelector(store => store.bag);
  const itemstoshow = useSelector(store => store.items);
  const items=itemstoshow.filter((item)=>bagItems.indexOf(item.id)!==-1);
  return (
    <main style={{width:"100%",height:"100%"}}>
      <div className="bag-page">
      {items.length===0 && <Empty/>}
        <div className="bag-items-container">
          {items.map((item) => <Bagcont key={item.id} item={item}/>)}
        </div>
        {items.length!=0 && <Bagsummary items={items}/>}
      </div>
    </main>
  );
}

export default Bag;
