import { Clock, Leaf } from "lucide-react";

export default function Box(){
    return (
        <>
        <div className="border-2 border-gray-400 rounded-3xl"> 
            <div className="flex flex-col justify-around bg-custom-beige-dark w-64 h-64 px-4 rounded-3xl bx-2 mx-2 mt-2">
                <div className="px-2 py-1 w-fit rounded-2xl bg-white flex items-center gap-1">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">20 May 2023</span>
                </div>


                <div className="flex flex-row justify-between items-center">
                    <div>
                        <span className="text-sm"> Level : 1 </span>
                        <h1 className="text-3xl"> A1 </h1>
                    </div>

                    <div className="rounded-full p-2 bg-white">
                        <Leaf className="w-5 h-5 text-green-500" />
                    </div>
                </div>

                <div className="w-fit rounded-2xl px-2 py-1 border border-solid border-black">
                    <p> Published </p>
                </div>
            </div>

            <div className="flex flex-row justify-around items-center mt-2 mb-4">
                <div className="w-fit">
                    <h1 className="text-2xl"> Lessons :</h1>
                    <span>21</span>
                </div>
             
                <button className="rounded-3xl mt-4 px-4 py-2 bg-black text-white hover:bg-gray-500 transition">
                    View Details
                </button>
            </div>
        </div>
        </>
    )
}