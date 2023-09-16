"use client"

import { useLayoutEffect, useRef } from "react"
import styles from "./text.module.css"
import gsap from "gsap";

export default function TextFalling() {
    const textRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(textRef.current, { 
                y: 0,
                bottom: "50px",
                duration: 1,
                ease: "power2.inOut",
                delay: 1.5,
                opacity: 1
            })
        },)

        return () => ctx.revert()
    }, [])
    return (
        <div ref={textRef} className={styles.containerBanner}>
          <h2>Coming S<span>oo</span>n</h2>
        </div>
    )
}
