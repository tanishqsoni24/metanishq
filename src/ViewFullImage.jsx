import React from 'react'

function ViewFullImage(props) {
  return (
    <>
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center"
        style={{ zIndex: 10000 }}
        >
                <img src={props.imgSrc} alt="full" className="w-1/3 border-4 overflow-hidden" />
                <button className="btn p-2 bg-sky-500 rounded mt-3" onClick={()=>{props.setToggleFullImage(false)}}>Close</button>

        </div>
    </>
  )  
}

export default ViewFullImage
