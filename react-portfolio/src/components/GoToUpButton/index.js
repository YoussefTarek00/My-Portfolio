import React, { useEffect, useState } from 'react'
import '../GoToUpButton/index.scss'
import { FaArrowUp } from 'react-icons/fa'

const GoToUpButton = () => {
  // const [topButton, setTopButton] = useState(false)

// useEffect(() => {
//   window.addEventListener("scroll", () => {
//     if(window.scrollY > 100){
//       setTopButton(true)
//     } else{
//       setTopButton(false)
//     }
//   })
// }, [])

// const scrollup = () => {
// window.scrollTo({
//   top:0,
//   left:0,
//   behavior:"smooth"
// })
// }




// animation button

  const [isVisible, setIsVisible] = useState(false)

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const listenToScroll = () => {
    let heightToHidden = 50;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > heightToHidden) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [])

  return (
    
    <div className="topBtn">
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon" />
            {/* {topButton && (
                <button style={{
                  position: "fixed",
                  bottom: "50px",
                  right: "50px",
                  height:"50px",
                  width:"50px",
                  fontSize: "50px",
                  cursor: "pointer"
                }} onClick={scrollup}>^</button>
                )} */}
        </div>
      )}
    </div>
  )
}

export default GoToUpButton
