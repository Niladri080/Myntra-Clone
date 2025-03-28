const Bagsummary = ({items}) => {
  const findTotalMRP = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.original_price;
    });
    return total;
  };
  const findTotalDiscount = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.original_price - item.current_price;
    });
    return total;
  };
  const local_items = {
    totalItem: items.length,
    totalMRP: findTotalMRP(),
    totalDiscount: findTotalDiscount(),
    finalPayment: findTotalMRP() - findTotalDiscount()+99,
  };
  console.log(items);
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS {local_items.totalItem} items{" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{local_items.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{local_items.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{local_items.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default Bagsummary;
