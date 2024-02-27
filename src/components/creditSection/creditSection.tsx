'use client'
import Image from "next/image"
import { navBarMenu } from "@/utils/constantData"

interface NavProps {
    refMenu(refMenu: string): string;
}


export default function CreditSection({ refMenu }: NavProps) {

    return (
        <>
            <div className="max-[1279px]:flex  justify-end pr-[5%] mb-[-5%] hidden ">
                <button className=" h-10 w-10 bg-[url('/img/circle-arrow-up.svg')] bg-contain bg-center bg-no-repeat  rounded-full"
                    onClick={() => refMenu("Home")}
                />
            </div>
            <div className=" h-[45vh]  w-full bg-black flex-col flex justify-center items-center">

                <Image
                    className=""
                    src="/img/logo-icon.svg"
                    width="80"
                    height="60"
                    alt="logo-icon"
                />

                <ul className="max-[1279px]:hidden flex justify-between items-center w-full px-[20%] mt-[2%]">
                    {
                        navBarMenu.map((item, index) => {
                            return (
                                <li key={index} onClick={() => refMenu(item)} className=" text-lg  font-extralight hover:bg-white hover:text-black hover:rounded-full  px-4 duration-700 cursor-pointer">{item}</li>
                            )
                        })
                    }
                </ul>
                <div className="max-[1279px]:hidden h-[2px]  bg-white w-[80%]  mt-10 " />
                <ul className="max-[1279px]:flex-col flex max-[1279px]:justify-center justify-between items-center w-full px-[10%] max-[1279px]:mt-[5%] mt-[1%]">
                    <li className="max-[1279px]:text-base text-lg  font-extralight">Privacy Policy</li>
                    <li className="max-[1279px]:text-base text-lg  font-extralight max-[1279px]:mt-[5%]  max-[1279px]:text-center">© 2024 All rights reserved. – Designed & Coded by Pongsathorn L</li>
                    <a href="https://salty-portfolio.web.app/" className="max-[1279px]:text-base text-lg  font-extralight">© 2022 salty-portfolio.web.app</a>
                </ul>

            </div>
        </>
    )
}


