import React, { useState } from "react";
import Addartist from "./Addartist";
import { BiImageAdd } from 'react-icons/bi';
import { IoIosAdd } from 'react-icons/io';



const Addsongs = () => {

    const [vis, setVis] = useState("hidden");
    var count = 0;
    const ChangeValue = () => {
        count++;
       setVis(" ");

        if(count %2 !=0){
       setVis("hidden");

        }

    };


    return (
        <>
            <div className="px-52 my-20 ">
                <h1 className="text-2xl font-semibold">Adding new songs</h1>

                <table className="my-12">
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr>
                    <tr >
                        <td>Song Name</td>

                        <td className="px-12">
                            <input className="bg-slate-300 h-8 " type="text" placeholder="Name" ></input>
                        </td>

                    </tr>
                    <tr>
                        <td className="my-4 py-6">Date Released</td>

                        <td className="px-12">
                            <input className="bg-slate-300 h-8 " type="text" placeholder="Name" ></input>
                        </td>

                    </tr>
                    <tr>
                        <td className="my-4 py-4">Artwork</td>

                        <td className="px-20">
                            <div className="flex  ">
                                < BiImageAdd className="text-white -mx-6 my-2 z-10" />
                                <button className="bg-black px-7 active:re text-white focus:outline-none rounded ">Upload Image</button>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className="my-4 py-6">Artist</td>

                        <td className="px-12">
                            <select className="px-11 h-8" name="artists" id="artists">
                                <option value="a1">Lewis Capaldi</option>
                                <option value="a2">Post Malone</option>
                                <option value="a3">Justin Bieber</option>

                            </select>
                        </td>
                        <td className="flex">
                            <IoIosAdd className="text-white -mx-1 mt-7 my-2 z-10" />

                            <button onClick={ChangeValue} className="px-8 mt-5 h-8 active:bg-slate text-white -ml-4 Sactive:bg-white bg-black">Add Artist</button>


                            {/* <button onclick={ChangeValue} className="bg-black  -ml-4 active:text-white focus:outline-none text-red-700 rounded"  >Add Artist</button> */}


                        </td>

                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className="bg-black px-6 ml-12 h-8 my-8 text-white">Cancel</button>
                            <button onClick={ChangeValue} className=" text-white" >Submit</button>
                        </td>


                    </tr>
                </table>

                <div>
                    {/* Hidden box */}
                </div>

            </div>
            <Addartist visual={vis}  />
        </>
    );
}


export default Addsongs;