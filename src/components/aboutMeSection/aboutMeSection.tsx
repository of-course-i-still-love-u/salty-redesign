'use client'
import Image from "next/image"
import { bundleIcon } from "@/utils/constantData"
import { motion, Variants } from "framer-motion"

interface NavProps {
    refMenu(refMenu: string): string;
}

export default function AboutMeSection({ refMenu }: NavProps) {

    const boxVariants: Variants = {
        offscreen: {
            y: 1000
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 2
            }
        }
    };


    return (
        <div className="flex-col w-full justify-center align-middle h-screen  px-[8%] my-[8%] " >
            <motion.div
                className="flex  w-full mt-16 "
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >

                <div className="w-[60%] h-screen bg-profile-bg bg-no-repeat bg-cover bg-center flex justify-center  ">
                    <motion.div className="flex flex-col justify-center items-center ml-[-4%]" variants={boxVariants}>
                        <div
                            className="bg-black rounded-full h-56 w-56  bg-profile-pic bg-cover bg-center shadow-2xl shadow-black"
                        />

                        <h1 className=" text-5xl  text-white mt-8 ml-[-4%] " >Pongsathorn Lawang</h1>
                        <p className=" text-sm text-white mt-4 opacity-80">
                            Hello there, I'm Ron, seeking a full-time position in application  development <br /> where I can further develop my skills  and grow professionally.
                        </p>
                    </motion.div>
                </div>
                <motion.div className="flex-col w-[40%]  justify-center flex" variants={boxVariants}>
                    <h1 className=" text-6xl text-black" >Skills & Tools</h1>
                    <div className=" flex  flex-wrap mt-4  ">
                        {bundleIcon.map((item, index) => {
                            return (
                                <Image
                                    key={index}
                                    className={"py-4  pr-4"}
                                    src={item}
                                    alt="skills-icon"
                                    width="70"
                                    height="70"


                                />
                            )
                        })}


                    </div>
                    <button onClick={(() => refMenu("Contact"))} className="  bg-black rounded-full  shadow-2xl mt-9 p-4  hover:shadow-black hover:duration-700 duration-700" >Contact Me</button>
                </motion.div>

            </motion.div>
        </div >
    )
}