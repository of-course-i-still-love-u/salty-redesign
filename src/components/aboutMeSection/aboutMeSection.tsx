'use client'
import Image from "next/image"
import { bundleIcon } from "@/utils/constantData"
import { useInView } from "framer-motion"
import { useRef } from "react";
import './styles.css'

interface NavProps {
    refMenu(refMenu: string): string;
}

export default function AboutMeSection({ refMenu }: NavProps) {

    const ref = useRef<HTMLInputElement | null>(null);
    const isInView = useInView(ref, { once: true });

    const setAnimation = (item: Number) => {
        const actionAn = {
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${item}s`
        }
        return actionAn


    }


    return (
        <div ref={ref} className="zContainer" >
            <div
                className="zWrapper"
            >

                <div className="zLeftBox">
                    <div className="zLeftBoxItem" style={setAnimation(0.2)}>
                        <div
                            className="zProfilePic"
                        />

                        <h1 className="zNameText" >Pongsathorn Lawang</h1>
                        <p className="zDetail">
                            {`Hello there, I'm Ron, seeking a full-time position in application  development`} <br /> where I can further develop my skills  and grow professionally.
                        </p>
                    </div>
                </div>

                    <h1 className="zNameTextM" style={setAnimation(0.4)} >Pongsathorn Lawang</h1>
                    <p className="zDetailM" style={setAnimation(0.6)}>
                        {`Hello there, I'm Ron, seeking a full-time position in application  development`} <br /> where I can further develop my skills  and grow professionally.
                    </p>


                <div className="zRightBox" style={setAnimation(0.2)}>
                    <h1 className="zSkillText" >Skills & Tools</h1>
                    <div className="zSkillIcon" >
                        {bundleIcon.map((item, index) => {
                            return (
                                <Image
                                    key={index}
                                    className={"py-4  pr-4"}
                                    src={item}
                                    alt="skills-icon"
                                    width="70"
                                    height="70"
                                />
                            )
                        })}


                    </div>
                    <button onClick={(() => refMenu("Contact"))} className="text-white  bg-black rounded-full  shadow-2xl mt-9 p-4  hover:shadow-black hover:duration-700 duration-700" >Contact Me</button>
                </div>

            </div>
        </div >
    )
}