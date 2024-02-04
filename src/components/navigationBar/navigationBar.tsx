'use client'
import { navBarMenu } from "@/utils/constantData"
import Image from "next/image"



interface NavProps {
    refMenu(refMenu: string): string;
}

export default function NavigationBar({ refMenu }: NavProps) {

    return (
        <div className="flex justify-between  items-center w-full px-[10%] pt-[2%]">
            <Image
                className=""
                src="/img/logo-black-icon.svg"
                width="70"
                height="50"
                alt="logo-icon"
            />
            <ul className="flex">
                {
                    navBarMenu.map((item, index) => {
                        return (
                            <li onClick={() => { refMenu(item) }} className="  text-base  font-extralight hover:bg-black hover:text-white hover:rounded-full  px-4 py-1  duration-700 text-[#5D5D5D] mr-4 cursor-pointer" >{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}