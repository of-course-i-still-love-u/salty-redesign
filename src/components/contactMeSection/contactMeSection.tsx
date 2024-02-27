
'use client'
import Image from "next/image"
import { contactIcon } from "@/utils/constantData"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"



export default function ContactMeSection() {
    const email = '<lw.pongsathorn@gmail.com/>'
    const ref = useRef<HTMLInputElement | null>(null);
    const isInView = useInView(ref, { once: true });

    const setAnimation = (item: Number) => {
        const actionAn = {
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${item}s`
        }
        return actionAn


    }

    return (
        <div ref={ref} className="w-full max-[1279px]:h-full h-screen  px-[10%] max-[1279px]:py-[20%] py-[2%] flex max-[1279px]:flex-col-reverse">
            <div className="max-[1279px]:mt-[10%] flex-1  flex" style={setAnimation(0.2)}>
                <Image
                    className="w-auto h-auto  "
                    src="/img/handOfGod.svg"
                    height="550"
                    width="450"
                    alt="bg-contactMe"
                />
            </div>
            <div className=" flex-1 flex-col flex justify-center">
                <h1 className="max-[1279px]:text-5xl text-6xl text-black" style={setAnimation(0.2)}>

                    Get in touch

                </h1>
                <h1 className="max-[1279px]:text-5xl text-6xl text-black mt-4" style={setAnimation(0.4)}>

                    Let’s work together

                </h1>
                <div className="max-[1279px]:flex-col flex max-[1279px]:items-start items-end max-[1279px]:mt-0 mt-4" style={setAnimation(0.6)} >
                    <h1 className=" mr-8 max-[1279px]:text-5xl text-6xl text-black max-[1279px]:mt-4" >

                        Email

                    </h1>
                    <a href="mailto:lw.pongsathorn@gmail.com" className="max-[1279px]:text-xl text-2xl  text-black  underlin " >
                        {email}
                    </a>
                </div>
                <div className="flex  mt-8" style={setAnimation(0.8)}>
                    {contactIcon.map((item, index) => {
                        return (
                            <a href={item.link} key={index} >

                                <Image
                                    className={"max-[1279px]:px-4 pr-8 hover:translate-y-2  hover:duration-700  duration-700"}
                                    src={item.img}
                                    alt="contact-icon"
                                    width="90"
                                    height="90"

                                />

                            </a>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}