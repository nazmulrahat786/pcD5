import React from 'react';

const Addcard = ({ac,handleRemoveCard}) => {
   const {id,name , img} = ac
    return (
        <div className='w-32  flex text-center justify-center items-center border-2 p-2  mb-1 flex-col'>
            <img className='w-28' src={img} alt="" />
            <h1 className='text-sm '>{name}</h1>
            <button onClick={()=>handleRemoveCard(id)} className='bg-red-500 w-fit px-2 rounded text-sm text-center text-white font-semibold'>Remove</button>
        </div>
    );
};

export default Addcard;<h1>a</h1>