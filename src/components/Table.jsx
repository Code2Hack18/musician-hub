import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const Table = ()=>{
    return(
        <>
            <div className="px-52 mt-5">
            <table class="border-collapse table-fixed border">
                <thead className="px-4">
                    <tr className="bg-slate-700 text-white">
                        <th className="border px-16">Artwork</th>
                        <th className=" px-24 border">Song</th>
                        <th className="border px-24 text-center">Date of Release</th>
                        <th className="border px-24">Artists</th>
                        <th className="border px-20">Rate</th>
                     </tr>
                 </thead>
                 <tbody>
                    <tr>
                        <td className=" text-center">
                            <img className="px-6 py-4" src="https://yt3.ggpht.com/ytc/AKedOLSW-gPSooWXEkj2-u2R7sGVlB7PpRWPKSrkFikH=s900-c-k-c0x00ffffff-no-rj"></img>
                        </td>
                        <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                        <td className="border-l-2  text-center ">
                            <div className="flex justify-center">
                            <AiOutlineStar className="text-slate-300  items-center mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className=" text-center">
                            <img className="px-6 py-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqnOeaK_42yDhfGzJI17oP0EAUEvjB4QU6c23W8IB21DnVCWENU8N-nkCYS34lWGvJa0&usqp=CAU"></img>
                        </td>
                        <td className=" border-l-2  text-center">Someone you loved</td>
                        <td className=" border-l-2 text-center">July 21 2019</td>
                        <td className="border-l-2 text-center">Lewis Capaldi</td>
                        <td className=" border-l-2 text-center">
                            <div className="flex justify-center">
                            <AiOutlineStar className="text-slate-300 active:fill-yellow-600  items-center mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className=" text-center">
                            <img className="px-6 py-4" src="https://i.scdn.co/image/ab67616d0000b2737fe4a82a08c4f0decbeddbc6"></img>
                        </td>
                        <td className=" border-l-2  text-center">Someone you loved</td>
                        <td className=" border-l-2 text-center">July 21 2019</td>
                        <td className="border-l-2 text-center">Lewis Capaldi</td>
                        <td className=" border-l-2 text-center">
                            <div className="flex justify-center">
                            <AiOutlineStar className="text-slate-300 active:fill-yellow-600  items-center mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            <AiOutlineStar className="text-slate-300 mx-2" />
                            </div>

                        </td>
                    </tr> 

  </tbody>

            </table>
            </div>
        </>
    );
}

export default Table;