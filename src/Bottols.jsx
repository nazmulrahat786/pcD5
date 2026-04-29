
import { useState } from "react";
import btl from "../public/bottles.json"
import Bottol from "./Bottol";
import Addcard from "./Addcard";
const Bottols = () => {

    const bottoles = btl

    const [addCard , setAddCard] = useState([])
    const handleAddCard = (bottol) =>{
        
        const newAdded = [...addCard ,bottol]
      
setAddCard( newAdded );
    }

    const handleRemoveCard = (id) =>{
        const remainCard = addCard.filter(card => card.id !== id)

setAddCard(remainCard)

    }
    // console.log(bottoles);
    return (
        <div className="px-5">
            <h1 className='text-center font-bold my-2 text-2xl text-blue-600'>Total Bottles : {bottoles.length}</h1>
            <h1>
                <h1>Total Add card {addCard.length}</h1>
                <div className="flex overflow-x-scroll gap-2">
                    {
                        addCard.map(ac => <Addcard handleRemoveCard={handleRemoveCard } key={ac.id} ac={ac}></Addcard>)
                    }
                </div>
               
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


                {
                    bottoles.map(bottol => <Bottol   handleAddCard={handleAddCard} key={bottol.id} bottol={bottol}></Bottol>)
                }
            </div>
        </div>
    );
};

export default Bottols;