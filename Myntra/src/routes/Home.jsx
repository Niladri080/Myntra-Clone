import HomeDisplay from "../components/HomeDisplay";
import {useSelector} from "react-redux";
const Home=()=>{
 const itemsStore=useSelector((store)=>store.items);
 console.log(itemsStore.items);
  return (<main>
    <div className="items-container">
      {itemsStore.map((item)=><HomeDisplay key={item.id} item={item}/>)}
    </div>
  </main>)
}
export default Home;