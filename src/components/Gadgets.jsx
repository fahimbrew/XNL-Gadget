import { useEffect, useState } from "react";
import Gadget from "./Gadget";
import PropTypes from "prop-types";

const Gadgets = ({handleAddToCart}) => {

    const [gadgets,setGadgets] = useState([]);
    useEffect(()=>{
        fetch('./gadgets.json')
        .then(res=>res.json())
        .then(data=>setGadgets(data))
    },[])

    return (
        <div>
            <h3 className="text-3xl font-bold my-5">Total Gadgets {gadgets.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    gadgets.map((gadget,index)=><Gadget key={index} 
                    gadget = {gadget}
                    handleAddToCart = {handleAddToCart}
                    ></Gadget>)
                }
            </div>
            
        </div>
    );
};
Gadgets.propTypes = {
    handleAddToCart : PropTypes.func,
}

export default Gadgets;