import { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";

const  SideBarItem=(prop)=>{
  const [clickedItemId,setItemClicked]=useState(null);
    const {Item,minimizeFuntion,isMinimize}=prop 
    if (!Item || !Item.headingName || !Item.svgElement) {
        return null; 
    }
    const changeItemId=()=>{
      console.log("Change Handler is Called")
      setItemClicked(Item.id);
    }
    const minizmize=()=>{
      minimizeFuntion();
    }
    //${clickedItemId===Item.id? "bg-[#5932EA] text-white":"text-[#9197B3]"}
    return (
    <div onClick={changeItemId}  className={`flex flex-row h-[3rem] cursor-pointer hover:bg-[#5932EA] text-white justify-between items-center mt-[1rem] rounded-lg font-[500]  `}>
       <div className="flex flex-row">
       <div className="text-3xl pl-1" onClick={minizmize}>
        {Item.svgElement}
      </div>
      <h1 className={`text-xl pt-1   text-[1rem] font-[Poppins] pl-3 hidden ${isMinimize===false? "md:block":""}`}>{Item.headingName}</h1>
       </div>
       <div>
       <VscChevronRight  onClick={minizmize}  className={`cursor-pointer  hidden ${isMinimize===false? "md:block":""}`}/>
       </div>
    </div>
    ) 
}
export default SideBarItem