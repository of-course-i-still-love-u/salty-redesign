'use client'
import Image from "next/image"
import { navBarMenu } from "@/utils/constantData"

interface NavProps {
    refMenu(refMenu: string): string;
}


export default function CreditSection({ refMenu }: NavProps) {

    return (
        <div className=" h-[45vh]  w-full bg-black flex-col flex justify-center items-center">
            <Image
                className=""
                src="/img/logo-icon.svg"
                width="80"
                height="60"
                alt="logo-icon"
            />

            <ul className="flex justify-between items-center w-full px-[20%] mt-[2%]">
                {
                    navBarMenu.map((item, index) => {
                        return (
                            <li key={index} onClick={() => refMenu(item)} className=" text-lg  font-extralight hover:bg-white hover:text-black hover:rounded-full  px-4 duration-700 cursor-pointer">{item}</li>
                        )
                    })
                }
            </ul>
            <div className="h-[2px]  bg-white w-[80%]  mt-10 " />
            <ul className=" flex justify-between items-center w-full px-[10%] mt-[1%]">
                <li className=" text-lg  font-extralight">Privacy Policy</li>
                <li className=" text-lg  font-extralight">© 2024 All rights reserved. – Designed & Coded by Pongsathorn L</li>
                <a href="https://salty-portfolio.web.app/" className=" text-lg  font-extralight">© 2022 salty-portfolio.web.app</a>
            </ul>

        </div>
    )
}


