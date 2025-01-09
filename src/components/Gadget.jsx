import PropTypes from "prop-types";

const Gadget = ({gadget,handleAddToCart}) => {
    // console.log(gadget)
    const{category,description,item_type,price} = gadget;
    return (
        <div className="card bg-purple-50 border">
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p className="font-semibold text-gray-500">{description}</p>
    <p className="text-gray-600"><span className="font-bold">Type:</span> {item_type}</p>
    <p>Price ${price}</p>
    <div className="card-actions">
      <button onClick={()=>handleAddToCart(gadget)} className="btn bg-purple-600 text-white">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

Gadget.propTypes = {
    gadget: PropTypes.object,
    handleAddToCart : PropTypes.func,
}

export default Gadget;