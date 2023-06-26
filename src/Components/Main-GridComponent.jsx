// import React, { useState } from "react";

// function MainGridComponent() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newItem = parseInt(inputValue, 10);
//     console.log(newItem)
//     let b = Math.pow(newItem, 2)

//     if (!isNaN(b)) {
//       setItems((prevItems) => [...prevItems, b]);
//       setInputValue("");
//     }

//   };

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter a number"
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <div className="main-grid grid rounded-[12px] grid-cols-6 grid-rows-6 shadow-4xl border-red-400 border-8 justify-items-center gap-6 w-[100%] mx-auto mt-[20px] p-6">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="rounded-lg bg-blue-400 hover:bg-blue-300 border-4 hover:border-red-400 cursor-move shadow-2xl z-40 relative h-32 w-32 flex flex-col justify-evenly text-center mt-50px text-white align-middle"
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default MainGridComponent;

// code 2-----------------------------------------------------------------------------------------------------

// import React, { useState,useEffect } from "react";

// function MainGridComponent() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const newItem = parseInt(inputValue, 10);
//   //   const c =Math.pow(newItem, 2);

//   //   const power = Math.pow(newItem, 2);

//   //   if (!isNaN(power,c)) {
//   //     const newItems = Array.from({ length: power }, (_, index) => index + 1);
//   //                console.log(newItems,c)

//   //           // setItems((newItems,c) => [...newItems, c]);

//   //     setItems(newItems);
//   //     setInputValue("");
//   //   }
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newItem = parseInt(inputValue);

//     const power = Math.pow(newItem, 2);

//     localStorage.setItem('powerValue', power);
//     localStorage.setItem('item', newItem);

//     if (power)  {
//       const newItems = Array.from({ length: power }, (_ , index) => index +1);

//         console.log("power number")
//       console.log(newItems)

//       // for (let i = newItems.length - 1; i > 0; i--)
//       // {
//       //   const j = Math.floor(Math.random() * (i + 1));

//       //   [newItems[i], newItems[j]] = [newItems[j], newItems[i]];
//       // }

//       setItems(newItems);
//       setInputValue(inputValue);
//     }
//     else{
//       console.log("please enter number between the range of 2 and 8")
//     }
//   };

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter a number"
//           min={2}
//           max={8}

//         />
//         <button  type="create">Create</button>
//       </form>

//       <div className="main-grid grid rounded-[12px] grid-cols-6 grid-rows-6 shadow-4xl border-red-400 border-8 justify-items-center gap-6 w-[100%] mx-auto mt-[20px] p-6">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="rounded-lg bg-blue-400 hover:bg-blue-300 border-4 hover:border-red-400 cursor-move shadow-2xl z-40 relative h-32 w-32 flex flex-col justify-evenly text-center mt-50px text-white align-middle"
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default MainGridComponent;
// code 3 -------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";

// function MainGridComponent({inputValue}) {
// const [items, setItems] = useState([]);
// const [inputValue, setInputValue] = useState("");

// const handleInputChange = (e) => {
//   const value = e.target.value;
//   setInputValue(value);
//   localStorage.setItem('inputValue', value);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const newItem = parseInt(inputValue);

//   const power = Math.pow(newItem, 2);

//   localStorage.setItem('powerValue', power);
//   localStorage.setItem('item', newItem);

//   if (power) {
//     const newItems = Array.from({ length: power }, (_, index) => index + 1);
//     setItems(newItems);
//   } else {
//     console.log("Please enter a number between the range of 2 and 8");
//   }
// };

// useEffect(() => {
//   const storedInputValue = localStorage.getItem('inputValue');
//   if (storedInputValue) {
//     setInputValue(storedInputValue);
//   }
// }, []);

//   return (
//     <section>
//       {/* <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter a number"
//           min={2}
//           max={8}
//         />
//         <button type="create">Create</button>
//       </form> */}

//       <div className="main-grid grid rounded-[12px] grid-cols-6 grid-rows-6 shadow-4xl border-red-400 border-8 justify-items-center gap-6 w-[100%] mx-auto mt-[20px] p-6">
//         {inputValue.map((item, index) => (
//           <div
//             key={index}
//             className="rounded-lg bg-blue-400 hover:bg-blue-300 border-4 hover:border-red-400 cursor-move shadow-2xl z-40 relative h-32 w-32 flex flex-col justify-evenly text-center mt-50px text-white align-middle"
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default MainGridComponent;

// code 4--------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";

function MainGridComponent({ inputValue, ItemsToDisplay }) {
  const [gridItems, setGridItems] = useState([]);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    setGridItems(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (gridItems.length === 0) {
      return;
    }

    if (isSorted(gridItems)) {
      setIsWin(true);
    }
  }, [gridItems]);

  const swapBoxes = (index1, index2) => {
    const newGridItems = [...gridItems];
    [newGridItems[index1], newGridItems[index2]] = [
      newGridItems[index2],
      newGridItems[index1],
    ];
    setGridItems(newGridItems);
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const sourceIndex = event.dataTransfer.getData("index");
    swapBoxes(parseInt(sourceIndex), index);
    resetOpacity();
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index);
  };

  const handleDragEnd = (event) => {
    resetOpacity();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setOpacity();
  };

  const resetOpacity = () => {
    document.body.classList.remove("opacity-50");
  };

  const setOpacity = () => {
    document.body.classList.add("opacity-50");
  };

  const isSorted = (arr) => {
    const sortedArr = [...arr].sort();
    console.log(JSON.stringify(arr));
    console.log(JSON.stringify(sortedArr));
    console.log(JSON.stringify(arr) === JSON.stringify(sortedArr));
    return JSON.stringify(arr) === JSON.stringify(sortedArr);
  };
  const closebtn = () => {
    setIsWin(!isWin)
    setGridItems([])
  };
  return (
    <section>
      <div className="hidden grid grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8"></div>
      <div
        className={`grid rounded-[12px] grid-cols-${ItemsToDisplay} grid-rows-${ItemsToDisplay} shadow-4xl border-red-400 border-8 justify-items-center gap-6 w-[100%] mx-auto mt-[20px] p-6`}
      >
        {gridItems.map((item, index) => (
          <div
            key={index}
            draggable
            onDrop={(event) => handleDrop(event, index)}
            onDragStart={(event) => handleDragStart(event, index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            className="rounded-lg bg-blue-400 hover:bg-blue-300 border-4 hover:border-red-400 cursor-move shadow-2xl z-40 relative h-32 w-32 flex flex-col justify-evenly text-center mt-50px text-white align-middle"
          >
            {item}
          </div>
        ))}
      </div>
      {isWin && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className=" rounded-lg p-8  flex bg-red-400 pt-10 pb-3 z-50  h-52 flex-col justify-between items-center opacity-75 w-[50%] fixed top-1/4 left-1/4 border border-blue-600">
            <h1 className="text-2xl text-blue-600 font-bold mb-4">
              Well-Come To The Team !
            </h1>
            <div className="flex justify-center  items-center">
              <button
                className="w-32 h-11 bg-blue-300 text-white hover:bg-blue-400 font-bold text-lg"
                onClick={closebtn}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MainGridComponent;
