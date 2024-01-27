'use-client'
import { useEffect, useState } from "react";
import { useDencrypt } from "use-dencrypt-effect"



export default function dencryptEffect(wordingList: string[]): string {
    const [value, setValue] = useDencrypt(wordingList[0]);


    useEffect(() => {
        var count = 1
        setInterval(() => {
            if (count == wordingList.length) {
                setValue(wordingList[0])
                count--
            } else {
                setValue(wordingList[1])
                count++
            }
        }, 2000)
    }, [])
    
    return value;

}

