'use client'

import { useRef, useState } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import './styles.css'





export default function ExperiencesSection() {

    const [kingCardHover, setKingCardHover] = useState(false)
    const [queenCardHover, setQueenCardHover] = useState(false)
    const [jackCCardHover, setJackCCardHover] = useState(false)
    const [jackSCardHover, setJackSCardHover] = useState(false)

    const ref = useRef<HTMLInputElement | null>(null);
    const isInView = useInView(ref, { once: true });

    const setAnimation = (item: Number) => {
        const actionAn = {
            transform: isInView ? "none" : "translateX(-250px) rotate(360deg)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${item}s`
        }
        return actionAn


    }


    return (
        <div
            ref={ref}
            className="qContainer"
        >
            <div className="qWrapper">
                <div className=" flex justify-center items-center my-8  w-[15rem] h-[20rem] bg-exp-q-bg bg-contain bg-center bg-no-repeat">
                    {queenCardHover ?
                        <div onMouseLeave={() => setQueenCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4  hover:animate-fade hover:duration-700 ">
                            <h1 className="text-2xl text-white">Bachelor in <br />
                                Computer Engineering</h1>
                            <h1 className=" text-base mt-5 text-white">MUT</h1>
                            <h1 className=" text-base text-white">2016</h1>
                        </div> :
                        <Image onMouseOver={() => setQueenCardHover(true)}
                            className="duration-700"
                            src={"/img/queen-card.svg"}
                            alt="queen-card"
                            width="192"
                            height="272"
                            style={setAnimation(0.2)}
                        />

                    }
                </div>

                <div className=" flex justify-center items-center my-8 w-[15rem] h-[20rem] bg-exp-jc-bg bg-contain bg-center bg-no-repeat">
                    {jackCCardHover ?
                        <div onMouseLeave={() => setJackCCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4 hover:animate-fade hover:duration-700  ">
                            <h1 className="text-2xl text-white">NOC<br />
                                Engineer</h1>
                            <h1 className=" text-base mt-5 text-white">NTT Thailand</h1>
                            <h1 className=" text-base text-white">2017-2020</h1>
                        </div> :
                        <Image onMouseOver={() => setJackCCardHover(true)}
                            className="duration-700"
                            src={"/img/jack-club-card.svg"}
                            alt="jack-club-card"
                            width="192"
                            height="272"
                            style={setAnimation(0.4)}
                        />}
                </div>


                <div className=" flex justify-center items-center my-8 w-[15rem] h-[20rem] bg-exp-js-bg bg-contain bg-center bg-no-repeat">
                    {jackSCardHover ?
                        <div onMouseLeave={() => setJackSCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4  hover:animate-fade hover:duration-700 ">
                            <h1 className="text-2xl text-white">Mobile<br />
                                Developer</h1>
                            <h1 className=" text-base mt-5 text-white">Codediva</h1>
                            <h1 className=" text-base text-white">2020-2022</h1>
                        </div> :
                        <Image onMouseOver={() => setJackSCardHover(true)}
                            className="duration-700"
                            src={"/img/jack-spade-card.svg"}
                            alt="jack-spade-card"
                            width="192"
                            height="272"
                            style={setAnimation(0.6)}
                        />}
                </div>

                <div className=" flex justify-center items-center my-8 w-[15rem] h-[20rem] bg-exp-k-bg bg-contain bg-center bg-no-repeat">
                    {kingCardHover ?
                        <div onMouseLeave={() => setKingCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4  hover:animate-fade hover:duration-700 ">
                            <h1 className="text-2xl text-white">Senior<br />
                                Front-End<br />
                                Developer</h1>
                            <h1 className=" text-base mt-5 text-white">AP Thailand</h1>
                            <h1 className=" text-base text-white">2022-2024</h1>
                        </div> :
                        <Image onMouseOver={() => setKingCardHover(true)}
                            className="duration-700"
                            src={"/img/king-card.svg"}
                            alt="king-card"
                            width="192"
                            height="272"
                            style={setAnimation(0.8)}
                        />}
                </div>
            </div>
        </div>
    )
}