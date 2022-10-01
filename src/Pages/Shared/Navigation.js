import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import {GrFormClose} from 'react-icons/gr';

const Navigation = () => {
    const [menuIcon, setMenuIcon] = useState(true);
    const handleNavigation = ()=>{
        let styleId = document.getElementById("control-navigation");
        if(menuIcon === true){
            setMenuIcon(!menuIcon);
            styleId.classList.add('top-[80px]');
            styleId.classList.add('opacity-100');
        }
        else{
            setMenuIcon(!menuIcon);
            styleId.classList.remove('top-[80px]');
            styleId.classList.remove('opacity-100');
        }
    }
    return (
        <section className="sticky top-0 z-50">
        <nav className="p-7 bg-white shadow md:flex lg:space-x-6 xl:space-x-8 2xl:space-x-12 md:items-center">
            <div className="flex justify-between items-center">
                <span className="lg:w-48 xl:w-56 2xl:w-64 h-auto text-2xl font-[poppins] cursor-pointer">
                    <img alt = "DocTime logo" className = "h-12 inline" src="https://i.ibb.co/59VfnLS/download.png">
                    </img>
                </span>
                <span className="text-3xl cursor-pointer md:hidden block mx-2">
                {
                    menuIcon?<FiMenu onClick={handleNavigation} />:<GrFormClose onClick={handleNavigation} />
                }
                </span>
            </div>
            <div id = "control-navigation" className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                <div className="mx-5 my-4 md:my-0">
                    <Link to="/consultation"  className="font-avertar font-medium  lg:text-sm xl:text-base 2xl:text-xl menu hover:text-blue-500 duration-500 text-[#0C0B52] cursor-pointer">Consultation</Link>
                </div>
                <div className="mx-5 my-4 md:my-0">
                    <Link to="/health-plans"  className="font-avertar font-medium  lg:text-sm xl:text-base 2xl:text-xl menu hover:text-blue-500 duration-500 text-[#0C0B52] cursor-pointer">Health Plans</Link>
                </div>
                <div className="mx-5 my-4 md:my-0">
                    <Link to="/order-medicine"  className="font-avertar font-medium  lg:text-sm xl:text-base 2xl:text-xl menu hover:text-blue-500 duration-500 text-[#0C0B52] cursor-pointer">Order Medicine</Link>
                </div>
                <div className="mx-5 my-4 md:my-0">
                    <Link to="/home-diagnostics"  className="font-avertar font-medium  lg:text-sm xl:text-base 2xl:text-xl menu hover:text-blue-500 duration-500 text-[#0C0B52] cursor-pointer">Home Diagnostics</Link>
                </div>
                <div className="mx-5 my-4 md:my-0">
                    <Link to="/enter-price"  className="font-avertar font-medium  lg:text-sm xl:text-base 2xl:text-xl menu hover:text-blue-500 duration-500 text-[#0C0B52] cursor-pointer">Enter price</Link>
                </div>
                <div className="mx-5 my-4 md:my-0">
                    <Link to="/for-doctors"  className="font-avertar font-medium  lg:text-sm xl:text-base 2xl:text-xl menu hover:text-blue-500 duration-500 text-[#0C0B52] cursor-pointer">For Doctors</Link>
                </div>
                <div className="mx-5 my-4 md:my-0">
                <button className="border border-[#4285F4] text-[#4285F4] hover:border-transparent duration-500 px-6 py-1 xl:px-8 xl:py-2 rounded-full font-semibold font-avertar hover:text-white hover:bg-[#4285F4]"><Link to = "/sign-up-or-sign-in">Login</Link></button>
            </div>
            </div>
        </nav>
    </section>
    );
};

export default Navigation;