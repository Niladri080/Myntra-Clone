import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchingState from "../components/FetchingState";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const FetchingStatus=useSelector(store=>store.fetching);
  return (
    <>
      <Header />
      <FetchingState/>
      {FetchingStatus.currentlyFetching ? <Loading/>:<Outlet/>}
      <Footer />
    </>
  );
}

export default App;
