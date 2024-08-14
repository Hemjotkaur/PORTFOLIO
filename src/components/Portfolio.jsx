import React from 'react';
import Python from "../../public/Python.png";
import Reactjs from "../../public/Reactjs.png";


 function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:Python,
            name:"Python"
        },
        {
            id:2,
            logo:Reactjs,
            name:"ReactJS"
        },
        // {
        //     id:3,
        //     logo:java,
        //     name:"ReactJS"
        // },
      
       
       
    ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 ">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className='underline font-bold'> Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
          {
            cardItem.map(({id,logo,name})=>(
            <div
            className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 hover:scale-110 duration-300 cursor-pointer"
            key={id}>
                <img src={logo} 
                className='w-[120px] h-[120px] p-1 rounded-full border-[2px]'
                alt="" />
                <div>
                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                    <p className='px-2 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum perspiciatis et provident facilis, amet adipisci repellendus quasi optio suscipit necessitatibus! Eveniet saepe impedit accusamus provident blanditiis optio officia, dolor aspernatur.</p>
                </div>
                <div>
                    <button className='bg-blue-500 hover:bg-gray-950 text-white font-bold px-4 py-2 rounded'>Source code</button>
                </div>
                </div>    
            ))}
        </div>
      </div>
    </div>
  )
}
export default Portfolio;
