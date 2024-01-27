
import Image from "next/image"

const box = [1, 2,]

export default function PortfolioSection() {
    return (
        <div className="flex  flex-wrap w-full h-screen bg-black  px-[20%] justify-center">
            <div className="flex-col mr-[5%]">
                {box.map((item, index) => {
                    return (
                        index % 2 == 0 ?
                            <div className={`w-[400px] h-[600px] my-5 bg-white rounded-3xl`}>

                            </div> :


                            <div className={`flex items-end w-[400px] h-[400px] my-5 bg-white rounded-3xl  bg-port-sw-bg bg-no-repeat hover:-translate-y-1 hover:scale-110  duration-300 bg-cover bg-center`}>
                                <div className="flex flex-col  justify-end  bg-gradient-to-t from-black h-[50%] w-full p-5 pb-10 ">
                                    <h1 className=" text-sm ">
                                        Mobile App
                                        <br/>
                                    </h1>
                                    <h1 className=" text-2xl flex  items-center justify-between ">
                                        Smartworld 2022-2024
                                        <button className=" bg-[url('/img/click-icon.svg')] h-10 w-10 bg-contain bg-center bg-no-repeat shadow-2xl  shadow-black rounded-full" />
                                    </h1>
                                   

                                </div>

                            </div>
                    )
                })
                }
            </div>
            <div className="flex-col ">
                {box.map((item, index) => {
                    return (
                        index % 2 == 1 ?
                            <div className={`w-[400px] h-[600px] my-5  bg-slate-600 rounded-3xl`}>

                            </div> :
                            <div className={`w-[400px] h-[400px] my-5 bg-slate-600 rounded-3xl`}>

                            </div>
                    )
                })
                }
            </div>
        </div>
    )
}