import React, { useState } from "react";
import './dayNight.css'

const DayNight = () => {
    const [isDay, setDay] = useState(true)
    const day = () => setDay(!isDay)
    return (
        <div className={isDay ? "day" : "night"}>
            <h1> {isDay ? "Es ist Tag! ☀️" : "Es ist Nacht ! 🌑"} </h1>
            <button onClick={day}> Wechsel zu: {isDay ? "Nacht" : "Tag"}</button>
        </div>
    )
}
export default DayNight;