import React, { useState } from 'react';

// let visual = hidden;

function Addartist(props) {

    const [hid, setHid] = useState(" ")

    function closeBox() {

        var count = 0;
        setHid("hidden");
        count++;
        if(count %2 !=0){
            setHid(" ");
        }


    }


    return (
        <>
            <div id="extralarge-modal" tabindex="-1" className={` ${props.visual} ${hid}  overflow-y-auto overflow-x-hidden backdrop-blur-2xl fixed top-0 right-0 left-40 z-50 w-full md:inset-0 h-modal md:h-full px-52`}>
                <div className="relative p-4 w-90 max-w-5xl h-full md:h-auto">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Add Artist
                            </h3>
                            <button onClick={closeBox} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <form>
                                <table>
                                    <tr classname="">
                                        <th className="px-8">
                                            <h1> Artist Name</h1>
                                        </th>
                                        <th>
                                            <input placeholder="Name" ></input>
                                        </th>

                                    </tr>
                                    <tr classname="">
                                        <th className="px-8">
                                            <h1> Date of Birth</h1>
                                        </th>
                                        <th>
                                            <input placeholder="D.O.B" ></input>
                                        </th>

                                    </tr>
                                    <tr classname="">
                                        <th className="px-8">
                                            <h1>Bio</h1>
                                        </th>
                                        <th>
                                            <input type="password" placeholder="name" ></input>
                                        </th>

                                    </tr>
                                </table>
                            </form>
                        </div>

                        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button data-modal-toggle="extralarge-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button data-modal-toggle="extralarge-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Addartist;