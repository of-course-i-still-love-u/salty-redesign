'use client'

import { portfolioCard } from "@/utils/constantData"
import SwiperComp from "../swiperComp/swiperComp"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"



export default function PortfolioSection() {
    const [showSwiper, setShowSwiper] = useState(false)
    const [projectIndex, setProjectIndex] = useState(0)
    const ref = useRef<HTMLInputElement | null>(null);
    const isInView = useInView(ref, { once: true });

    const setAnimation = (item: Number) => {
        const actionAn = {
            transform: isInView ? "none" : "translateX(-150px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${item}s`
        }
        return actionAn


    }


    return (
        <div
            ref={ref}
            className="flex flex-wrap w-full  bg-black  max-[1279px]:px-[0%] px-[20%] justify-center  py-[10%]"

        >
            {
                showSwiper ?
                    <>
                        <div className="flex max-[1279px]:pr-10 justify-end w-full">
                            <button className=" h-10 w-10 bg-[url('/img/x-icon.svg')] bg-contain bg-center bg-no-repeat shadow-2xl  shadow-black rounded-full "
                                onClick={() => { setShowSwiper(false) }}
                            />
                        </div>
                        <SwiperComp index={projectIndex} />
                    </>
                    :
                    <>
                        <div className=" max-[1279px]:mr-0 mr-[5%]" >
                            {portfolioCard.map((item, index) => {
                                return (
                                    index < 2 ?
                                        <div key={index} style={setAnimation(0.7)} >
                                            <div className={`flex items-end max-[1279px]:w-[320px] w-[400px] ${index % 2 == 0 ? 'h-[400px]' : 'h-[600px]'} my-5 bg-white rounded-3xl ${index == 0 ? 'bg-port-sw-bg' : 'bg-port-valo-bg'} bg-no-repeat hover:-translate-y-1 hover:scale-110  duration-300 bg-cover bg-center cursor-pointer`}
                                                onClick={() => { setShowSwiper(true), setProjectIndex(index) }}
                                            >
                                                <div className="flex flex-col  justify-end  bg-gradient-to-t from-black h-[50%] w-full p-5 pb-10 ">
                                                    <h1 className=" text-sm text-white ">
                                                        {item.type}
                                                        <br />
                                                    </h1>
                                                    <div className="flex justify-between items-end">
                                                        <h1 className="text-white text-2xl flex  items-center justify-between  mr-2 ">
                                                            {item.title}  <br />{item.year}
                                                        </h1>
                                                        <div className=" bg-[url('/img/click-icon.svg')] max-[1279px]:h-15 h-10 max-[1279px]:w-15 w-10 bg-contain bg-center bg-no-repeat shadow-2xl  shadow-black rounded-full" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : null
                                )
                            })
                            }
                        </div>
                        <div className="">
                            {portfolioCard.map((item, index) => {
                                return (
                                    index > 1 ?
                                        <div key={index} style={setAnimation(1.2)}>
                                            <div className={`flex items-end max-[1279px]:w-[320px] w-[400px] ${index % 2 == 0 ? 'h-[600px]' : 'h-[400px]'} my-5 bg-white rounded-3xl ${index == 2 ? 'bg-port-meta-bg' : 'bg-port-spo-bg'} bg-no-repeat hover:-translate-y-1 hover:scale-110  duration-300 bg-cover bg-center cursor-pointer`}
                                                onClick={() => { setShowSwiper(true), setProjectIndex(index) }}
                                            >
                                                <div className="flex flex-col  justify-end  bg-gradient-to-t from-black h-[50%] w-full p-5 pb-10 ">
                                                    <h1 className="text-white text-sm ">
                                                        {item.type}
                                                        <br />
                                                    </h1>
                                                    <div className="flex justify-between items-end">
                                                        <h1 className="text-white text-2xl flex  items-center justify-between  mr-2 ">
                                                            {item.title}  <br />{item.year}
                                                        </h1>
                                                        <div className=" bg-[url('/img/click-icon.svg')] max-[1279px]:h-15 h-10 max-[1279px]:w-15 w-10 bg-contain bg-center bg-no-repeat shadow-2xl  shadow-black rounded-full" />
                                                    </div>
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