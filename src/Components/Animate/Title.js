import React,{useEffect, useRef} from 'react';
import { TweenMax } from 'gsap';

const Title = ({lineContent, lineContent2}) =>{
    let line1 = useRef(null);
    let line2 = useRef(null);

    useEffect(()=>{
        TweenMax.from([line1, line2], 0.8, {
            delay: 0.8,
            ease: 'power3.out',
            y: 64,
            stagger: {
                amount: 0.15
            }
        });
    },[line1,line2]);

    return(
        <h1 className="page-title">
            <div className="page-wrap">
                <div ref={el =>{(line1 = el)}} className="line">
                {lineContent}
                </div>
            </div>
            <div className="page-wrap">
                <div ref={el =>{(line2 = el)}} className="line">
                {lineContent2}
                </div>
            </div>
        </h1>

    )
}
export default Title