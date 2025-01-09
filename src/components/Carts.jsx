import PropTypes from "prop-types";
import Cart from "./Cart";


const Carts = ({addGadgets,handleRemove}) => {
    return (
        <div>
            <h3 className="text-3xl font-bold">Cart ({addGadgets.length})</h3>
            <div>
                {
                    addGadgets.map((addGadget,index)=><Cart key={index} 
                    addGadget = {addGadget}
                    handleRemove = {handleRemove}
                    ></Cart>)
                }
            </div>
        </div>
    );
};
Carts.propTypes = {
    addGadgets : PropTypes.array,
    handleRemove : PropTypes.func,
}
export default Carts;