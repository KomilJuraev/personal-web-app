import React, { useState } from "react";

function ProgressBar(props) {
    const [setValue] = useState(Math.round(props.percentage) + "%");
    return (
        <div className="progress">
            <div className="progress__fill" style={{ width: setValue }}></div>
            <span className="progress__text">{setValue}</span>
        </div >
    )
}

export default ProgressBar;