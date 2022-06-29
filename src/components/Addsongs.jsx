import React from "react";
import { BiImageAdd } from 'react-icons/bi';
import { IoIosAdd } from 'react-icons/io';



const Addsongs = () => {
    return (
        <>
            <div className="px-52 my-20 ">
                <h1 className="text-2xl font-semibold">Adding new songs</h1>
                <form >
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
                            <td>
                                <td className="px-20">
                                    <div className="flex  ">
                                        <IoIosAdd className="text-white -mx-1 my-2 z-10" />
                                        <button className="bg-black px-7 -ml-4 active:re text-white focus:outline-none rounded ">Add Artist</button>
                                    </div>
                                </td>
                            </td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="bg-black px-6 ml-12 h-8 my-8 text-white">Cancel</button>
                                <button className="bg-black px-6 ml-4 my-8 h-8 text-white">Submit</button>
                            </td>


                        </tr>
                    </table>
                </form>
                <div>
                    {/* Hidden box */}
                </div>

            </div>
        </>
    );
}


export default Addsongs;