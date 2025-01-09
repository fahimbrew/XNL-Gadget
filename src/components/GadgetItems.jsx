import PropTypes from "prop-types";
import Carts from "./Carts";
import Gadgets from "./Gadgets";

const GadgetItems = ({handleStatus,status,handleAddToCart,addGadgets,handleRemove}) => {

    return (
       <div>
         <div className="flex my-5 justify-end gap-3">
            <button onClick={()=>handleStatus(status)} className={!status ? 'btn bg-purple-400':'btn'}>Menu</button>
            <button onClick={()=>handleStatus(status)} className={!status ? 'btn':'btn bg-purple-400'}>Cart</button>
        </div>
        <div>
            {
                !status ? <Gadgets handleAddToCart = {handleAddToCart}></Gadgets> : <Carts 
                addGadgets = {addGadgets}
                handleRemove = {handleRemove}
                ></Carts>
            }
        </div>
       </div>
    );
};

GadgetItems.propTypes = {
    handleStatus : PropTypes.func,
    status : PropTypes.bool,
    handleAddToCart : PropTypes.func,
    addGadgets : PropTypes.array,
    handleRemove : PropTypes.func,
}

export default GadgetItems;