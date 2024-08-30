import React from 'react'
import stuImage from '../../assets/stu.png'



const RightPanel = () => {
    return (
        <div className="right-panel">
            <h2>PIC</h2>
            <p></p>
            <img src={stuImage} alt="error" /> {/* Use the imported image */}
        </div>
    )
}

export default RightPanel
