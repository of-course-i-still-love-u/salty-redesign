'use client'

import { useState } from "react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"





export default function ExperiencesSection() {

    const [kingCardHover, setKingCardHover] = useState(false)
    const [queenCardHover, setQueenCardHover] = useState(false)
    const [jackCCardHover, setJackCCardHover] = useState(false)
    const [jackSCardHover, setJackSCardHover] = useState(false)

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
        <motion.div
            className="w-full h-screen bg-exp-bg bg-cover  bg-no-repeat flex items-center px-[5%]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <motion.div className="flex w-full justify-between items-center" variants={boxVariants}>
                <div className=" flex justify-center items-center w-[15rem] h-[20rem] bg-exp-q-bg bg-contain bg-center bg-no-repeat">
                    {queenCardHover ?
                        <div onMouseLeave={() => setQueenCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4  hover:animate-fade hover:duration-700 ">
                            <h1 className="text-2xl">Bachelor in <br />
                                Computer Engineering</h1>
                            <h1 className=" text-base mt-5">MUT</h1>
                            <h1 className=" text-base">2016</h1>
                        </div> :
                        <Image onMouseOver={() => setQueenCardHover(true)}
                            className="duration-700"
                            src={"/img/queen-card.svg"}
                            alt="queen-card"
                            width="192"
                            height="272"
                        />

                    }
                </div>

                <div className=" flex justify-center items-center w-[15rem] h-[20rem] bg-exp-jc-bg bg-contain bg-center bg-no-repeat">
                    {jackCCardHover ?
                        <div onMouseLeave={() => setJackCCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4 hover:animate-fade hover:duration-700  ">
                            <h1 className="text-2xl">NOC<br />
                                Engineer</h1>
                            <h1 className=" text-base mt-5">NTT Thailand</h1>
                            <h1 className=" text-base">2017-2020</h1>
                        </div> :
                        <Image onMouseOver={() => setJackCCardHover(true)}
                            className="duration-700"
                            src={"/img/jack-club-card.svg"}
                            alt="jack-club-card"
                            width="192"
                            height="272"
                        />}
                </div>


                <div className=" flex justify-center items-center w-[15rem] h-[20rem] bg-exp-js-bg bg-contain bg-center bg-no-repeat">
                    {jackSCardHover ?
                        <div onMouseLeave={() => setJackSCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4  hover:animate-fade hover:duration-700 ">
                            <h1 className="text-2xl">Mobile<br />
                                Developer</h1>
                            <h1 className=" text-base mt-5">Codediva</h1>
                            <h1 className=" text-base">2020-2022</h1>
                        </div> :
                        <Image onMouseOver={() => setJackSCardHover(true)}
                            className="duration-700"
                            src={"/img/jack-spade-card.svg"}
                            alt="jack-spade-card"
                            width="192"
                            height="272"
                        />}
                </div>

                <div className=" flex justify-center items-center w-[15rem] h-[20rem] bg-exp-k-bg bg-contain bg-center bg-no-repeat">
                    {kingCardHover ?
                        <div onMouseLeave={() => setKingCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4  hover:animate-fade hover:duration-700 ">
                            <h1 className="text-2xl">Senior<br />
                                Front-End<br />
                                Developer</h1>
                            <h1 className=" text-base mt-5">AP Thailand</h1>
                            <h1 className=" text-base">2022-2024</h1>
                        </div> :
                        <Image onMouseOver={() => setKingCardHover(true)}
                            className="duration-700"
                            src={"/img/king-card.svg"}
                            alt="king-card"
                            width="192"
                            height="272"
                        />}
                </div>
            </motion.div>
        </motion.div>
    )
}