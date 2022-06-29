import React from "react";
import Table from "./Table";

const Artists = ()=>{
    return(
        <>
            <h1 className="px-52 my-10 font-semibold text-lg tracking-wide">Top 10 Artists</h1>
            <div className="px-52 mx-5">
            <table class="border-collapse px-52 table-fixed border">
                <thead className=" items-center">
                    <tr className="bg-slate-700 items-center  text-white">
                        <th  className="border items-center px-24  text-center ">Artwork</th>
                        <th className=" px-32  border">D.O.B</th>
                        <th className="border px-60 text-center">Songs</th>
                    
                     </tr>
                 </thead>
                 <tbody>
                    <tr>
                    <td className="border-l-2 py-12 text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">July 21, 2019</td>
                        <td className="border-l-2  px-6 text-center">Someone you loved before, Before you go, Bruises, Hold me while you wait</td>
                    </tr>
                    <tr>
                    <td className="border-l-2 py-12 text-center">Post Malone</td>
                        <td className="border-l-2   text-center">September 27, 2019</td>
                        <td className="border-l-2  px-6 text-center">Circles, Rockstar, Sunflower, Psycho, Wow, Better Now</td>
                    </tr>
                    <tr>
                    <td className="border-l-2 py-12 text-center">Someone you loved</td>
                        <td className="border-l-2   text-center">January 02, 2020</td>
                        <td className="border-l-2  px-6 text-center">Intentions, Let me love you, Despacito, Yummy, I don't care</td>
                    </tr>
                   
                 </tbody>
                 </table>
            </div>
           
        </>
    );
}
export default Artists;