'use client'

import { portfolioCard } from "@/utils/constantData"
import SwiperComp from "../swiperComp/swiperComp"
import { useState } from "react"



export default function PortfolioSection() {
    const [showSwiper, setShowSwiper] = useState(false)
    const [projectIndex, setProjectIndex] = useState(0)


    return (

        <div className="flex flex-wrap w-full  bg-black  px-[20%] justify-center  py-[10%]">
            {
                showSwiper ?
                    <>
                        <div className="flex justify-end w-full">
                            <button className=" h-10 w-10 bg-[url('/img/x-icon.svg')] bg-contain bg-center bg-no-repeat shadow-2xl  shadow-black rounded-full "
                            onClick={() => setShowSwiper(false)}
                            />
                        </div>
                        <SwiperComp index={projectIndex} />
                    </>
                    :
                    <>
                        <div className="flex-col mr-[5%]">
                            {portfolioCard.map((item, index) => {
                                return (
                                    index < 2 ?
                                        <div className={`flex items-end w-[400px] ${index % 2 == 0 ? 'h-[400px]' : 'h-[600px]'} my-5 bg-white rounded-3xl ${index == 0 ? 'bg-port-sw-bg' : 'bg-port-valo-bg'} bg-no-repeat hover:-translate-y-1 hover:scale-110  duration-300 bg-cover bg-center cursor-pointer`}
                                            onClick={() => { setShowSwiper(true), setProjectIndex(index) }}
                                        >
                                            <div className="flex flex-col  justify-end  bg-gradient-to-t from-black h-[50%] w-full p-5 pb-10 ">
                                                <h1 className=" text-sm ">
                                                    {item.type}
                                                    <br />
                                                </h1>
                                                <div className="flex justify-between items-end">
                                                    <h1 className=" text-2xl flex  items-center justify-between  mr-2 ">
                                                        {item.title} {item.year}
                                                    </h1>
                                                    <div className=" bg-[url('/img/click-icon.svg')] h-10 w-10 bg-contain bg-center bg-no-repeat shadow-2xl  shadow-black rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                        : null
                                )
                            })
                            }
                        </div>
                        <div className="flex-col ">
                            {portfolioCard.map((item, index) => {
                                return (
                                    index > 1 ?
                                        <div className={`flex items-end w-[400px] ${index % 2 == 0 ? 'h-[600px]' : 'h-[400px]'} my-5 bg-white rounded-3xl ${index == 2 ? 'bg-port-meta-bg' : 'bg-port-spo-bg'} bg-no-repeat hover:-translate-y-1 hover:scale-110  duration-300 bg-cover bg-center cursor-pointer`}
                                            onClick={() => { setShowSwiper(true), setProjectIndex(index) }}
                                        >
                                            <div className="flex flex-col  justify-end  bg-gradient-to-t from-black h-[50%] w-full p-5 pb-10 ">
                                                <h1 className=" text-sm ">
                                                    {item.type}
                                                    <br />
                                                </h1>
                                                <div className="flex justify-between items-end">
                                                    <h1 className=" text-2xl flex  items-center justify-between  mr-2 ">
                                                        {item.title} {item.year}
                                                    </h1>
                                                    <div className=" bg-[url('/img/click-icon.svg')] h-10 w-10 bg-contain bg-center bg-no-repeat shadow-2xl  shadow-black rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                        : null
                                )
                            })
                            }
                        </div>
                    </>


            }




        </div>
    )
}