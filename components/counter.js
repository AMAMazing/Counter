import App from "next/app";
import React, { Component, useRef, useState, useLayoutEffect, useEffect } from "react";


const Counter=()=>{
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
          setWidth(entries[0].contentRect.width)
        })
        observer.observe(ref.current)
        return () => ref.current && observer.unobserve(ref.current)
      }, [])

    const [count, setCount] = useState(0);
 
    const increase = () => {
        setCount(count+1);
    }

    const decrease = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <div ref={ref} class="box" style={{fontSize: '10rem', padding: '0px'}} id="box" >{count} - {Math.round(width)}</div> 

            <button onClick={reset} class="smallbox reset">Reset</button>
            <button onClick={decrease} class="smallbox minus">-</button>
            <button onClick={increase} class="smallbox plus">+</button>
        </div>
    );
}

export default Counter;