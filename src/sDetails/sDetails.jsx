
import React from "react";

const SDetails = ({ info }) => {

    return (
        <div>
            <div >

                <div className="flex justify-between p-6">
                    <div className="flex gap-2">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4 text-xl">
                            {info.icon}
                        </div>
                        <div className="">
                            <h1>{info.title}</h1>
                            <p>${info.price}</p>
                        </div>
                    </div>
                    <div>
                        <button className="text-red-500">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SDetails;