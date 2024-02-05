
'use client'
import Image from "next/image"
import { contactIcon } from "@/utils/constantData"
import { useEffect } from "react"
import { motion, Variants } from "framer-motion"



export default function ContactMeSection() {
    const email = '<lw.pongsathorn@gmail.com/>'

    const setVariants = (index: number): Variants => {
        const boxVariants: Variants = {
            offscreen: {
                y: 1000
            },
            onscreen: {
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.1,
                    duration: index * 1.2
                }
            }
        };

        return boxVariants

    }

    return (

        <motion.div
            className="w-full h-screen  px-[10%] py-[2%] flex "
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <motion.div className=" flex-1  flex" variants={setVariants(1)}>

                <Image
                    className="w-auto h-auto "
                    src="/img/handOfGod.svg"
                    height="550"
                    width="450"
                    alt="bg-contactMe"
                />
            </motion.div>
            <div className=" flex-1 flex-col flex justify-center">
                <h1 className="text-6xl text-black">
                    <motion.div className="" variants={setVariants(1)}>
                        Get in touch
                    </motion.div>
                </h1>
                <h1 className="text-6xl text-black mt-4">
                    <motion.div className="" variants={setVariants(2)}>
                        Let’s work together
                    </motion.div>
                </h1>
                <div className="flex items-end mt-4">
                    <h1 className="mr-8 text-6xl text-black" >
                        <motion.div className="" variants={setVariants(3)}>
                            Email
                        </motion.div>
                    </h1>
                    <a href="mailto:lw.pongsathorn@gmail.com" className=" text-2xl text-black  underline ">
                        <motion.div className="" variants={setVariants(3)}>
                            {email}
                        </motion.div>
                    </a>
                </div>
                <div className=" flex  mt-8 ">
                    {contactIcon.map((item, index) => {
                        return (
                            <a href={item.link} key={index}>
                                <motion.div className="" variants={setVariants(4)}>
                                    <Image
                                        className={"pr-8 hover:translate-y-2  hover:duration-700  duration-700"}
                                        src={item.img}
                                        alt="contact-icon"
                                        width="90"
                                        height="90"

                                    />
                                </motion.div>
                            </a>
                        )
                    })}


                </div>

            </div>
        </motion.div>
    )
}