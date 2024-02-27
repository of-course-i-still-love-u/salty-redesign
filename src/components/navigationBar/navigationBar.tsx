'use client'
import { navBarMenu } from "@/utils/constantData"
import Image from "next/image"
import './styles.css'
import { useEffect, useState } from "react";



interface NavProps {
    refMenu(refMenu: string): string;
}

export default function NavigationBar({ refMenu }: NavProps) {
    const [showNavMobile, setShowNavMobile] = useState(false)

    return (
        <div className="xNav">
            <Image
                className="xLogo"
                src="/img/logo-black-icon.svg"
                width="70"
                height="50"
                alt="logo-icon"
            />
            <ul className="xNav-ul">
                <button className="xNav-icon" onClick={() => setShowNavMobile(!showNavMobile)} />
                {
                    navBarMenu.map((item, index) => {
                        return (
                            <li key={index} onClick={() => { refMenu(item) }} className={`${showNavMobile ? 'xNav-li' : 'xNav-li-hide '} xNav-li`} >{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}