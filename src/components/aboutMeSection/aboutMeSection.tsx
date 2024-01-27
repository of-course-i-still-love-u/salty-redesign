'use client'
import Image from "next/image"
import { mechsuit } from "../../app/fonts"
import { bundleIcon } from "@/utils/constantData"


export default function AboutMeSection() {




    return (
        <div className="flex-col w-full justify-center align-middle h-screen  px-[8%] my-[8%] " >

            <div className="flex  w-full mt-16 ">
                <div className="w-[60%] h-screen bg-profile-bg bg-no-repeat bg-cover bg-center flex justify-center  ">
                    <div className="flex flex-col justify-center items-center ml-[-4%] ">
                        <div className="bg-black rounded-full h-56 w-56  bg-profile-pic bg-cover bg-center shadow-2xl shadow-black " />
                        <h1 className=" text-5xl  text-white mt-8 ml-[-4%] " >Pongsathorn Lawang</h1>
                        <p className=" text-sm text-5D-gray mt-4">
                            Hello there, I'm Ron, seeking a full-time position in application  development <br /> where I can further develop my skills  and grow professionally.
                        </p>
                    </div>

                </div>

                <div className="flex-col w-[40%]  justify-center flex  ">
                    <h1 className=" text-6xl text-black" >Skills & Tools</h1>
                    <div className=" flex  flex-wrap mt-4  ">
                        {bundleIcon.map((item, index) => {
                            return (

                                <Image
                                    className={"py-4  pr-4"}
                                    src={item}
                                    alt="skills-icon"
                                    width="70"
                                    height="70"


                                />
                            )
                        })}


                    </div>
                    <button className="  bg-black rounded-full  shadow-2xl mt-9 p-4  shadow-black" >Contact Me</button>

                </div>

            </div>

        </div>
    )
}