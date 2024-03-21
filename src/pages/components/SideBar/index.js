import React, { useState, useEffect } from 'react';
import SideBarItem from "../SideBarItems/index";
import { TbHexagonNumber0 } from "react-icons/tb";
import { VscChevronDown } from "react-icons/vsc";

const InconsArray=[
    {svgElement:<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z" stroke="#d5e5e7" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#d5e5e7" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>,headingName:"Dashboard",id:1},
    {svgElement:<svg fill="#e1e1e1" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#e1e1e1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.594,18.914l9,4H11.6a.974.974,0,0,0,.8,0h.008l9-4A1,1,0,0,0,22,18V6a1.04,1.04,0,0,0-.594-.914l-9-4a1,1,0,0,0-.812,0l-9,4A1.041,1.041,0,0,0,2,6V18A1,1,0,0,0,2.594,18.914ZM4,7.539l7,3.111v9.811L4,17.35ZM20,17.35l-7,3.111V10.65l7-3.111ZM12,3.094,18.538,6,12,8.906,5.462,6Z"></path></g></svg>,headingName:"Products",id:2},
    {svgElement:<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#cee6ee" stroke-width="0.048"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z" fill="#ebebeb"></path> <path d="M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8ZM9.97716 8C9.97716 9.11719 10.8828 10.0228 12 10.0228C13.1172 10.0228 14.0228 9.11719 14.0228 8C14.0228 6.88281 13.1172 5.97716 12 5.97716C10.8828 5.97716 9.97716 6.88281 9.97716 8Z" fill="#ebebeb"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.39909 16.6808C6.49015 13.8286 9.47114 13 12 13C14.5289 13 17.5099 13.8286 18.6009 16.6808C18.9505 17.5948 18.6826 18.4756 18.1363 19.0778C17.6103 19.6576 16.8215 20 16 20H8C7.17849 20 6.38973 19.6576 5.86372 19.0778C5.31737 18.4756 5.04947 17.5948 5.39909 16.6808ZM12 15C9.72346 15 7.89905 15.7433 7.26709 17.3954C7.21826 17.523 7.25506 17.6349 7.34496 17.734C7.47492 17.8772 7.71694 18 8 18H16C16.2831 18 16.5251 17.8772 16.655 17.734C16.7449 17.6349 16.7817 17.523 16.7329 17.3954C16.101 15.7433 14.2765 15 12 15Z" fill="#ebebeb"></path> </g></svg>
  ,headingName:"Customer",id:3},
  {svgElement:<svg fill="#f1f1f1" width="35px" height="35px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#f1f1f1" stroke-width="45.056"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1023.84 572.544c.096-21.056-3.217-100.496-5.745-123.216-29.12-260.752-240.752-450-503.184-450-273.344 0-494.815 210.624-509.84 489.904-.32 6.096-2.56 49.344-2.72 75.088l-.08 14.32C.958 584.56.158 590.672.158 596.976v214.656c0 46.88 38.128 85.008 85.008 85.008h86.288c46.88 0 85.023-38.128 85.023-85.008v-214.64c0-46.88-38.16-85.008-85.024-85.008H85.15a85.65 85.65 0 0 0-17.184 1.744c.48-10.383.912-18.576 1.025-21.056C82.159 247.888 276.127 63.328 514.91 63.328c229.28 0 414.128 165.344 439.568 393.12 1.072 9.504 2.448 33.664 3.552 57.92-6.193-1.44-12.577-2.385-19.2-2.385H853.55c-46.88 0-85.008 38.128-85.008 85.008v213.664c0 32.368 18.4 60.256 45.09 74.592l-205.44 80.656v-5.216c0-17.664-14.337-32-32-32h-96c-17.665 0-32 14.336-32 32v32c0 17.664 14.335 32 32 32h96c.272 0 .512-.08.784-.08l57.36-.224L963.89 895.007c4.32-1.792 7.984-4.464 10.992-7.664 28.848-13.616 48.991-42.736 48.991-76.688V596.99c0-5.216-.64-10.288-1.552-15.233.88-2.944 1.504-6 1.52-9.216zm-938.689 3.44h86.29c11.6 0 21.023 9.408 21.023 21.008v214.656c0 11.6-9.44 21.008-21.025 21.008H85.152c-11.6 0-21.007-9.409-21.007-21.008V596.992c.015-11.6 9.423-21.008 21.007-21.008zm747.377 21.008c0-11.6 9.41-21.008 21.009-21.008h85.28c11.6 0 21.023 9.408 21.023 21.008v213.664c0 11.6-9.44 21.008-21.024 21.008h-85.28c-11.6 0-21.008-9.408-21.008-21.008V596.992z"></path></g></svg>,headingName:"Income",id:4},
    {svgElement:<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0175 19C10.6601 19 10.3552 18.7347 10.297 18.373C10.2434 18.0804 10.038 17.8413 9.76171 17.75C9.53658 17.6707 9.31645 17.5772 9.10261 17.47C8.84815 17.3365 8.54289 17.3565 8.30701 17.522C8.02156 17.7325 7.62943 17.6999 7.38076 17.445L6.41356 16.453C6.15326 16.186 6.11944 15.7651 6.33361 15.458C6.49878 15.2105 6.52257 14.8914 6.39601 14.621C6.31262 14.4332 6.23906 14.2409 6.17566 14.045C6.08485 13.7363 5.8342 13.5051 5.52533 13.445C5.15287 13.384 4.8779 13.0559 4.87501 12.669V11.428C4.87303 10.9821 5.18705 10.6007 5.61601 10.528C5.94143 10.4645 6.21316 10.2359 6.33751 9.921C6.37456 9.83233 6.41356 9.74433 6.45451 9.657C6.61989 9.33044 6.59705 8.93711 6.39503 8.633C6.1424 8.27288 6.18119 7.77809 6.48668 7.464L7.19746 6.735C7.54802 6.37532 8.1009 6.32877 8.50396 6.625L8.52638 6.641C8.82735 6.84876 9.21033 6.88639 9.54428 6.741C9.90155 6.60911 10.1649 6.29424 10.2375 5.912L10.2473 5.878C10.3275 5.37197 10.7536 5.00021 11.2535 5H12.1115C12.6248 4.99976 13.0629 5.38057 13.1469 5.9L13.1625 5.97C13.2314 6.33617 13.4811 6.63922 13.8216 6.77C14.1498 6.91447 14.5272 6.87674 14.822 6.67L14.8707 6.634C15.2842 6.32834 15.8528 6.37535 16.2133 6.745L16.8675 7.417C17.1954 7.75516 17.2366 8.28693 16.965 8.674C16.7522 8.99752 16.7251 9.41325 16.8938 9.763L16.9358 9.863C17.0724 10.2045 17.3681 10.452 17.7216 10.521C18.1837 10.5983 18.5235 11.0069 18.525 11.487V12.6C18.5249 13.0234 18.2263 13.3846 17.8191 13.454C17.4842 13.5199 17.2114 13.7686 17.1083 14.102C17.0628 14.2353 17.0121 14.3687 16.9562 14.502C16.8261 14.795 16.855 15.1364 17.0323 15.402C17.2662 15.7358 17.2299 16.1943 16.9465 16.485L16.0388 17.417C15.7792 17.6832 15.3698 17.7175 15.0716 17.498C14.8226 17.3235 14.5001 17.3043 14.2331 17.448C14.0428 17.5447 13.8475 17.6305 13.6481 17.705C13.3692 17.8037 13.1636 18.0485 13.1099 18.346C13.053 18.7203 12.7401 18.9972 12.3708 19H11.0175Z" stroke="#ccd1ed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9747 12C13.9747 13.2885 12.9563 14.333 11.7 14.333C10.4437 14.333 9.42533 13.2885 9.42533 12C9.42533 10.7115 10.4437 9.66699 11.7 9.66699C12.9563 9.66699 13.9747 10.7115 13.9747 12Z" stroke="#ccd1ed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,headingName:"Pramote",id:5},
    {svgElement:<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 9C10 8.60444 10.1173 8.21776 10.3371 7.88886C10.5568 7.55996 10.8692 7.30362 11.2346 7.15224C11.6001 7.00087 12.0022 6.96126 12.3902 7.03843C12.7781 7.1156 13.1345 7.30608 13.4142 7.58579C13.6939 7.86549 13.8844 8.22186 13.9616 8.60982C14.0387 8.99778 13.9991 9.39992 13.8478 9.76537C13.6964 10.1308 13.44 10.4432 13.1111 10.6629C12.7822 10.8827 12.3956 11 12 11V12M14.25 19L12.8 20.9333C12.4 21.4667 11.6 21.4667 11.2 20.9333L9.75 19H7C4.79086 19 3 17.2091 3 15V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V15C21 17.2091 19.2091 19 17 19H14.25Z" stroke="#d4e3f0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="15" r="1" fill="#d4e3f0"></circle> </g></svg>,headingName:"Help",id:6}
  ]
  
const SideBar=()=>{
    const [minimizeMe, setMenimize] = useState(false);

    const setMenimizeFuntion=()=>{
      setMenimize(prev=>!prev)
    }
    return (
      <>
      <div className='font-[Poppins]'>
        <div className="flex flex-row ju ml-2  pr-[2rem]">
           <div>
            <TbHexagonNumber0 className="sm:text-1xl text-3xl pt-1 pl-1" onClick={setMenimizeFuntion} />
            </div>
           <h1 className={`font-bold font-[Poppins] pl-[0.2rem] text-black text-[1.5rem] pr-[1rem] hidden ${minimizeMe===false? "md:block":""}`}>Dashboard<span className="text-[15px] font-[400] font-[Poppins] text-[#838383] ">v.01</span> </h1>
          </div>
         {
          InconsArray.map((each)=>(
            <SideBarItem Item={each} isMinimize={minimizeMe} key={each.id} minimizeFuntion={setMenimizeFuntion}/>
          ))
         }
        </div>
      <div className='font-[Poppins]'>
      <div className={`relative bg-gradient-to-br hidden ${minimizeMe===false? "md:block":""}  from-[#7232b8]  to-blue-500 p-4 rounded-[1.25rem] h-auto max-h-[10rem] w-[10rem] flex-col items-center justify-center`}>
            <h1 className="text-white font-bold text-[0.8rem] ">upgrade to PRO to get access all Features</h1>
            <button className="bg-white border-none text-[0.7rem] mt-[1rem] py-[0.2rem] w-[8rem] px-[0.1rem] font-bold  rounded-xl text-blue-800 text-center">Get Pro Now!</button>
        </div>
    <div className="flex flex-row  justify-between mt-[0.5rem] "> 
     <div className='flex flex-row'>
     <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"  alt="Product Manager" className=" h-[3rem] w-[3rem] rounded-full"/>
        <div className="pl-3">
          <div className={`pl-3 pt-[0.3rem] hidden ${minimizeMe===false? "md:block":""} `}>
            <h1 className=" text-thin text-[0.7rem] font-[Poppins] text-black hidden md:block"> Evano</h1>
            <p  className="text-gray-400 text-[0.7rem] font-[Poppins] hidden md:block">Project Manager </p>
          </div>
        </div>
      </div> 
      <VscChevronDown className='pt-[0.3rem]' />
      </div>
      </div>
      </>
    )
}

export default SideBar