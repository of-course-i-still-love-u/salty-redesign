'use client'
import Image from "next/image"
import { psyche } from "../../app/fonts"
import { mechsuit } from "../../app/fonts"
import { hypik } from "../../app/fonts"
import { wording } from "@/utils/constantData"
import dencryptEffect from "@/utils/dencryptEffect"







export default function CoverSection() {


    return (
        <div className="flex w-full justify-center align-middle h-screen pt-10" >
            <div className="flex-col w-full">
                <h1 className={`${psyche.className} text-black 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl  sm:text-2xl  text-center m-4`}>PongsathornL</h1>
                <h1 className={`${mechsuit.className} text-black 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl  m-4 text-center`}>{dencryptEffect(wording)}</h1>
                <h1 className={`${hypik.className} 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-center m-4 mt-8 drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,1)] `}>Developer</h1>
            </div>

            <Image
                className="absolute top-20 w-2/4 animate-fade "
                src="/img/bg-cover.svg"
                alt="bg-cover"
                width="500"
                height="500"

            />

        </div>
    )
}