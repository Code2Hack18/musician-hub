import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';

const Header = () => {
    return (
        <>
        <nav className="container mx-auto w-screen flex h-11 items-center justify-between px-52
         bg-slate-400 ">
            <h1 className=" text-md cursor-pointer text-white hover:text-black px-3 font-semibold rounded hover:bg-white active:bg-slate-500 transition delay-100">Home</h1>
            <div className="flex  ">
                <AiOutlineSearch className="text-slate-500 -mx-6 my-2 z-10"/>
                <input type="text" className="bg-white px-8 active:re focus:outline-none rounded-2xl " placeholder="Search"/>
            </div>
           
        </nav>
        <div className="flex justify-between px-52 mt-6">
            <div className="font-bold tracking-wide text-2xl">Top 10 Songs</div>
            <div className="flex">
                <IoIosAdd className="-mx-5 text-yellow text-white my-3 z-10"/>
                <button className="bg-black px-2 pr-4 pl-6 text-white rounded transition hover:bg-slate-600 delay-100 active:bg-slate-400">Add Song</button>
            </div>
        </div>

        </>
    )
}
export default Header;