import PropTypes from "prop-types";


const Cart = ({addGadget}) => {
    // console.log(addGadget);
    const {category,item_type,price} = addGadget;
    return (
        <div className="border p-4 rounded-3xl bg-gray-200 my-4 flex justify-between items-center">
            <div>
                <p className="text-lg font-bold">{category}</p>
                <p><small>{item_type}</small></p>
                <p className="text-red-800">${price}</p>
            </div>
            <div>
                <button className="btn btn-error">Remove</button>
            </div>
           
        </div>
    );
};

Cart.propTypes = {
    addGadget : PropTypes.object,
}

export default Cart;