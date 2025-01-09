import { useState } from "react"
import Banner from "./components/Banner"
import GadgetItems from "./components/gadgetItems"
import { ToastContainer, toast } from 'react-toastify';
import Header from "./components/Header"


function App() {

  const [status,setStatus] = useState(false);
  const [addGadgets,setAddGadgets] = useState([]);

  const handleStatus = status =>{
    setStatus(!status);
    // console.log("ami asi")
  }

  const handleAddToCart = gadget =>{
    // console.log(gadget);
    // console.log('add korar kaaj kori ami')
    const isExist = addGadgets.find(p=>p.id==gadget.id);
    if(!isExist){
       toast.success('Items has been added')
      setAddGadgets([...addGadgets,gadget]);
    }
    else{
      toast.error('Already added')

    }
    
  }
  

  return (
    <main className="container mx-auto">
    <Header></Header>
    <Banner></Banner>
    <GadgetItems 
    handleStatus = {handleStatus}
    status = {status}
    handleAddToCart = {handleAddToCart}
    addGadgets = {addGadgets}
    ></GadgetItems>
    

     
      

<ToastContainer />
   </main>
     
  )
}

export default App
