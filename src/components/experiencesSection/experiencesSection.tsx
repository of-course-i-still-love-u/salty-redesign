'use client'

import { useState } from "react"
import Image from "next/image"




export default function ExperiencesSection() {

    const [kingCardHover, setKingCardHover] = useState(false)
    const [queenCardHover, setQueenCardHover] = useState(false)
    const [jackCCardHover, setJackCCardHover] = useState(false)
    const [jackSCardHover, setJackSCardHover] = useState(false)




    return (
        <div className="w-full h-screen bg-exp-bg bg-cover  bg-no-repeat flex items-center px-[5%]">

            <div className="flex w-full justify-between items-center  ">

                <div className=" flex justify-center items-center w-[15rem] h-[20rem] bg-exp-q-bg bg-contain bg-center bg-no-repeat">
                    {queenCardHover ?
                        <div onMouseLeave={() => setQueenCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4  hover:animate-fade">
                            <h1 className="text-2xl">Bachelor in <br />
                                Computer Engineering</h1>
                            <h1 className=" text-base mt-5">MUT</h1>
                            <h1 className=" text-base">2016</h1>
                        </div> :
                        <Image onMouseOver={() => setQueenCardHover(true)}
                            className={""}
                            src={"/img/queen-card.svg"}
                            alt="queen-card"
                            width="192"
                            height="272"
                        />}
                </div>

                <div className=" flex justify-center items-center w-[15rem] h-[20rem] bg-exp-jc-bg bg-contain bg-center bg-no-repeat">
                    {jackCCardHover ?
                        <div onMouseLeave={() => setJackCCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4 hover:animate-fade ">
                            <h1 className="text-2xl">NOC<br />
                                Engineer</h1>
                            <h1 className=" text-base mt-5">NTT Thailand</h1>
                            <h1 className=" text-base">2017-2020</h1>
                        </div> :
                        <Image onMouseOver={() => setJackCCardHover(true)}
                            className={""}
                            src={"/img/jack-club-card.svg"}
                            alt="jack-club-card"
                            width="192"
                            height="272"
                        />}
                </div>


                <div className=" flex justify-center items-center w-[15rem] h-[20rem] bg-exp-js-bg bg-contain bg-center bg-no-repeat">
                    {jackSCardHover ?
                        <div onMouseLeave={() => setJackSCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4  hover:animate-fade">
                            <h1 className="text-2xl">Mobile<br />
                                Developer</h1>
                            <h1 className=" text-base mt-5">Codediva</h1>
                            <h1 className=" text-base">2020-2022</h1>
                        </div> :
                        <Image onMouseOver={() => setJackSCardHover(true)}
                            className={""}
                            src={"/img/jack-spade-card.svg"}
                            alt="jack-spade-card"
                            width="192"
                            height="272"
                        />}
                </div>

                <div className=" flex justify-center items-center w-[15rem] h-[20rem] bg-exp-k-bg bg-contain bg-center bg-no-repeat">
                    {kingCardHover ?
                        <div onMouseLeave={() => setKingCardHover(false)} className="bg-black w-[182px] h-[262px] rounded-xl p-4  hover:animate-fade">
                            <h1 className="text-2xl">Senior<br />
                                Front-End<br />
                                Developer</h1>
                            <h1 className=" text-base mt-5">AP Thailand</h1>
                            <h1 className=" text-base">2022-2024</h1>
                        </div> :
                        <Image onMouseOver={() => setKingCardHover(true)}
                            className={""}
                            src={"/img/king-card.svg"}
                            alt="king-card"
                            width="192"
                            height="272"
                        />}
                </div>
            </div>

        </div>
    )
}