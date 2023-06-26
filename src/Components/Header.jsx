// import React, { useState, useEffect } from "react";
// import MainGridComponent from "./Main-GridComponent";

// function Header() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     localStorage.setItem("inputValue", value);
//     setInputValue(value);
//   };

//   const newItem = parseInt(inputValue);
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const power = Math.pow(newItem, 2);
//     localStorage.setItem("powerValue", power);

//     if (power) {
//       const newItems = Array.from({ length: power }, (_, index) => index + 1);
   



//     for (let i = 0; i < newItems.length - 1; i++) {
//       const j = Math.floor(Math.random() * (i + 1));


      
//       const destructuringItems = newItems[i];
//       newItems[i] = newItems[j];
//       newItems[j] = destructuringItems;

//       console.log(destructuringItems)
//     }
//       setItems(newItems);
//       console.log(newItems);

//     } else {
//       console.log("Please enter a number between the range of 2 and 8");
//     }
//   };

//   return (
//     <>
//       <form
//         action=""
//         className="flex justify-center items-center"
//         onSubmit={handleSubmit}
//       >
//         <label
//           htmlFor=""
//           className='class="font-bold text-[20px] mr-2 text-red-500 "'
//         >
//           Enter Puzzle Size :
//         </label>
//         <input
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//           className="input-1  border border-red-500 outline-none h-12 w-80 p-4 shadow-xl rounded-lg"
//           placeholder="Enter a number"
//           min={2}
//           max={8}
//         />
//         <button className="bg-red-400  hover:bg-red-300 ml-[6px] w-24 h-12 p-1 box-border shadow-xl rounded-lg text-white font-semibold">
//           Create
//         </button>
//       </form>

//       {/* <div className="main-grid grid rounded-[12px] grid-cols-6 grid-rows-6 shadow-4xl border-red-400 border-8 justify-items-center gap-6 w-[100%] mx-auto mt-[20px] p-6">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="rounded-lg bg-blue-400 hover:bg-blue-300 border-4 hover:border-red-400 cursor-move shadow-2xl z-40 relative h-32 w-32 flex flex-col justify-evenly text-center mt-50px text-white align-middle"
//           >
//             {item}
//           </div>
//         ))}
//       </div> */}



import React, { useState } from "react";
import MainGridComponent from "./Main-GridComponent";

function Header() {
  const [number, setNumber] = useState('');
  const [updated, setUpdated] = useState([]);
  const [inputValue, setInputValue] = useState(number);

  const handleInputValueChange = (newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleChange = (event) => {
   
    // let n=event.target.value;
      // setNumber(enterNum);

    // console.log(n + " typ " + typeof(n));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // const newItem = parseInt(message);
    const inputValue = parseInt(event.target.count.value)
    if(inputValue > 1){

      setNumber(inputValue)
    }

    console.log(event.target,'event.target',inputValue)

    const power = Math.pow(inputValue, 2);

    localStorage.setItem("powerValue", power);

    if (power) {
      const newItems = Array.from({ length: power }, (_, index) => index + 1);

      for (let i = 0; i < newItems.length - 1; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        const destructuringItems = newItems[i];
        newItems[i] = newItems[j];
        newItems[j] = destructuringItems;
      }

      setUpdated(newItems);
    } else {
      console.log("Please enter a number between the range of 2 and 8");
    }
  };

  return (
    <>
      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor=""
          className='class="font-bold text-[20px] mr-2 text-red-500 "'
        >
          Enter Puzzle Size :
        </label>
        <input
          type="number"
          // value={inputValue}
          onChange={handleChange}
          className="input-1  border border-red-500 outline-none h-12 w-80 p-4 shadow-xl rounded-lg"
          placeholder="Enter a number"
          min={2}
          max={8}
          name='count'

        />
        <button  type="submit" className="bg-red-400  hover:bg-red-300 ml-[6px] w-24 h-12 p-1 box-border shadow-xl rounded-lg text-white font-semibold">
          Create
        </button>
      </form>

{/* 
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="number"
          placeholder="Enter a number"
          min={2}
          max={8}
          name='count'
          // value={number}
        />
        <button type="submit" >
          Create!
        </button>
      </form> */}
      <MainGridComponent inputValue={updated} ItemsToDisplay={number}   onInputValueChange={handleInputValueChange}/>
    </>
  );
}

export default Header;
