'use client'

import { useState } from "react"
import Image from "next/image"




export default function ExperiencesSection() {

    const [kingCardHover, setKingCardHover] = useState(false)
    const [queenCardHover, setQueenCardHover] = useState(false)
    const [jackCCardHover, setJackCCardHover] = useState(false)
    const [jackSCardHover, setJackSCardHover] = useState(false)




    return (
        <div className="w-full h-screen bg-exp-bg bg-cover  bg-no-repeat flex items-center">

            <div className="flex w-full ml-[7.5%] ">

                {queenCardHover ?
                    <div onMouseLeave={() => setQueenCardHover(false)} className="bg-black w-[12rem] h-[17rem] rounded-xl p-4 mr-[17%] hover:animate-fade ">
                        <h1 className="text-2xl">Bachelor in <br />
                            Computer Engineering</h1>
                        <h1 className=" text-base mt-5">MUT</h1>
                        <h1 className=" text-base">2016</h1>
                    </div> :
                    <Image onMouseOver={() => setQueenCardHover(true)}
                        className={"mr-[17%]"}
                        src={"/img/queen-card.svg"}
                        alt="queen-card"
                        width="192"
                        height="240"
                    />}

                {jackCCardHover ?
                    <div onMouseLeave={() => setJackCCardHover(false)} className="bg-black w-[12rem] h-[17rem] rounded-xl p-4 mr-[12%] hover:animate-fade ">
                        <h1 className="text-2xl">NOC<br />
                            Engineer</h1>
                        <h1 className=" text-base mt-5">NTT Thailand</h1>
                        <h1 className=" text-base">2017-2020</h1>
                    </div> :
                    <Image onMouseOver={() => setJackCCardHover(true)}
                        className={" mr-[12%]"}
                        src={"/img/jack-club-card.svg"}
                        alt="jack-club-card"
                        width="192"
                        height="240"
                    />}



                {jackSCardHover ?
                    <div onMouseLeave={() => setJackSCardHover(false)} className="bg-black w-[12rem] h-[17rem] rounded-xl p-4 mr-[10%] hover:animate-fade">
                        <h1 className="text-2xl">Mobile<br />
                            Developer</h1>
                        <h1 className=" text-base mt-5">Codediva</h1>
                        <h1 className=" text-base">2020-2022</h1>
                    </div> :
                    <Image onMouseOver={() => setJackSCardHover(true)}
                        className={"mr-[10%]"}
                        src={"/img/jack-spade-card.svg"}
                        alt="jack-spade-card"
                        width="192"
                        height="240"
                    />}
                {kingCardHover ?
                    <div onMouseLeave={() => setKingCardHover(false)} className="bg-black w-[12rem] h-[17rem] rounded-xl p-4  hover:animate-fade">
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
                        height="240"
                    />}
            </div>

        </div>
    )
}