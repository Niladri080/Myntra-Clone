import { Link } from "react-router-dom";

const Zerobag=()=>{
  return (<div className="px-4 py-5 my-5 text-center light-bag">
    <h2 className="display-8 fw-bold text-body-emphasis">YOUR WISHLIST IS EMPTY</h2>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4" style={{fontSize:"18px",color:"gray",lineBreak:"auto"}}>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.
      </p>
    <img className="d-block mx-auto mb-4" src="public\images\plastic-bag.png" alt="" width="72" height="57"/>
      <Link to="/" className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-outline-danger btn-lg px-4 gap-3 btn-add-zero">CONTINUE SHOPPING</button>
      </Link>
    </div>
  </div>)
}
export default Zerobag;