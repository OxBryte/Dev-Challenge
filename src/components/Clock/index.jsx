import React from 'react'

function Clock() {

    const secondHand = document.querySelector('.seconds-hand');
    const minutesHand = document.querySelector('.minutes-hand');
    const hoursHand = document.querySelector('.hours-hand');

    function setDate() {
        const now = new Date()
        //Sec. hand
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        //Min. hand
        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
        // Hour hand
        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
        hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

        console.log(seconds)
    }

    setInterval(setDate, 1000);

    setDate();

  return (
    <div>
        <div className='clock-bg'>
            <div>
                <div className="clock">
                    <div className="clock-inner">
                        <div className="hand hours-hand"></div>
                        <div className="hand minutes-hand"></div>
                        <div className="hand seconds-hand"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clock