'use client'
import Image from "next/image"
import { psyche } from "../../app/fonts"
import { mechsuit } from "../../app/fonts"
import { hypik } from "../../app/fonts"
import { wording } from "@/utils/constantData"
import DencryptEffect from "@/utils/dencryptEffect"
import "./styles.css"








export default function CoverSection() {


    return (
        <div className="xContainer" >
            <div className="flex-col w-full ">
                <h1 className={`${psyche.className} xText-line-1`}>PongsathornL</h1>
                <h1 className={`${mechsuit.className} xText-line-2`}>{DencryptEffect(wording)}</h1>
                <h1 className={`${hypik.className} xText-line-3`}>Developer</h1>
            </div>
            <div className="xDot-1" />
            <div className="xDot-2" />
            <Image
                className="xBg-cover"
                src="/img/bg-cover.svg"
                alt="bg-cover"
                width="500"
                height="500"
            />
        </div>
    )
}