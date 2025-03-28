import { Link } from "react-router-dom";

const Empty=()=>{
  return (<div className="px-4 py-5 my-5 text-center light-bag">
    <img className="d-block mx-auto mb-4" src="public\images\empty-bag.webp" alt="" width="72" height="57"/>
    <h1 className="display-5 fw-bold text-body-emphasis">Hey it feels so light</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">There is nothing in your bag.Let's add some items</p>
      <Link to="/wishlist" className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-outline-danger btn-lg px-4 gap-3 btn-add-zero">Add more items</button>
      </Link>
    </div>
  </div>)
}
export default Empty;