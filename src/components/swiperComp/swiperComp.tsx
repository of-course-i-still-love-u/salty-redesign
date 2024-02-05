
'use client'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';


// import required modules
import { EffectCards, Pagination } from 'swiper/modules';
import './styles.css'
import Image from 'next/image';
import { projectImg } from "@/utils/constantData"


type PortFolioProps = {
    index: number
}


export default function SwiperComp({ index }: PortFolioProps) {
    const [cardData, setCardData] = useState<string[]>([])

    useEffect(() => {

        switch (index) {
            case 0:
                setCardData(projectImg.sw)
                break;
            case 1:
                setCardData(projectImg.valo)
                break;
            case 2:
                setCardData(projectImg.demon)
                break;
            case 3:
                setCardData(projectImg.spotify)
                break;
            default:
                setCardData([])
        }
    }, [])

    return (

        <Swiper
            effect={'cards'}
            grabCursor={true}
            // pagination={{ clickable: true }}
            modules={[EffectCards, Pagination]}
            className=" w-[100%] h-[45rem]  mt-[10%] animate-jump animate-duration-500 animate-ease-in "
        >
            {cardData.map((item, index) => {
                return (
                    <SwiperSlide key={index} className=' pl-[35%] '>
                        <Image
                            className='w-auto h-auto rounded-xl'
                            src={item}
                            alt="ss"
                            width="288"
                            height="640"
                        // fill
                        />
                    </SwiperSlide>
                )
            }
            )}
        </Swiper>

    );
};




