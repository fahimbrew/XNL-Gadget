import PropTypes from "prop-types";
import Cart from "./Cart";


const Carts = ({addGadgets}) => {
    return (
        <div>
            <h3 className="text-3xl font-bold">Cart ({addGadgets.length})</h3>
            <div>
                {
                    addGadgets.map((addGadget,index)=><Cart key={index} addGadget = {addGadget}></Cart>)
                }
            </div>
        </div>
    );
};
Carts.propTypes = {
    addGadgets : PropTypes.array,
}
export default Carts;