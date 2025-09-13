'use client'

import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

const Graphic = ({percentage}: { percentage : number}) => {
    return (
        <div className="flex justify-center p-10">
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: percentage >= 100 ? '#F65737' : '#f4c695',
                    trailColor: '#e1e1e1',
                    textColor: percentage >= 100 ? '#F65737' : '#f4c695',
                    textSize: 8
                })}
                value={percentage}
                text={`${percentage}% Spent`}
            />
        </div>
    )
}

export default Graphic