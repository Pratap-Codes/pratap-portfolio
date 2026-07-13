import React, { useState, useEffect } from 'react'

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] =useState('up');
    const [prevOffSet, setPrevOffSet] = useState(0);

    useEffect(() => {
        const toggleScrollDirection = () => {
            let scrollY = window.pageYOffset;

            if(scrollY === 0){
                setScrollDirection('up')
            } else if(scrollY > prevOffSet){
                setScrollDirection('down')
                
            }else if(scrollY < prevOffSet){
                setScrollDirection('up')
            }
            setPrevOffSet(scrollY)
        }
        window.addEventListener('scroll', toggleScrollDirection);
        return () => {
            window.removeEventListener('scroll', toggleScrollDirection)
        }
    }, [prevOffSet]);
  return scrollDirection
}

export default useScrollDirection