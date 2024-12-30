import React from 'react'
import MAP from "../assets/maps/NetworkMap.png"

const NetworkMap = () => {
  return (
    <div>
      <div className="w-full  overflow-auto border shadow-lg">
        <img src={MAP} alt="" />
      </div>
    </div>
  )
}

export default NetworkMap
