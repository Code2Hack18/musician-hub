import React from "react";
import Table from "./Table";

const Artists = ()=>{
    return(
        <>
            <h1 className="px-52 my-10 font-semibold text-lg tracking-wide">Top 10 Artists</h1>
            <div className="px-52 mx-5">
            <table class="border-collapse px-52 table-auto border">
                <thead className=" items-center">
                    <tr className="bg-slate-700 items-center text-white">
                        <th className="border items-center text-center pl-64">Artwork</th>
                        <th className=" pl-64 border">Date of Birth</th>
                        <th className="border px-40 text-center">Songs</th>
                    
                     </tr>
                 </thead>
                 <tbody>
                    <tr>
                    <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                    </tr>
                    <tr>
                    <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                    </tr><tr>
                    <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                    </tr><tr>
                    <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                    </tr><tr>
                    <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                    </tr><tr>
                    <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                    </tr><tr>
                    <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                    </tr><tr>
                    <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                    </tr><tr>
                    <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                    </tr><tr>
                    <td className="border-l-2  text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21 2019</td>
                        <td className="border-l-2   text-center">Lewis Capaldi</td>
                    </tr>
                 </tbody>
                 </table>
            </div>
           
        </>
    );
}
export default Artists;