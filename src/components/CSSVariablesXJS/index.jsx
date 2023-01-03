import React from 'react'
import BG from '../CSSVariablesXJS/bg.jpg'

function CSSVJS() {

    // Scripting
    const inputs = document.querySelectorAll('.cssvjs-bg .controls input')

    function handleUpdate() {
        const suffixes = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffixes);
        console.log(this.name)
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mouseover', handleUpdate));

  return (
    <div>
        <div className='cssvjs-bg'>
            <h2>Update CSS <span>Variables</span> with <span>JS</span></h2>
            <div className='controls'>
                {/* Spacing */}
                <label htmlFor="spacing">Spacing:</label>
                <input type="range" name="spacing" id="spacing" min='10' max='200' value='10' data-sizing='px' />
                {/* Blur */}
                <label htmlFor="blur">Blur:</label>
                <input type="range" name="blur" id="blur" min='0' max='25' value='10' data-sizing='px' />
                 {/* Color */}
                <label htmlFor="base">Base colour:</label>
                <input type="color" name="base" id="base" value='#00ADB5' />
            </div>
            <img src={BG} alt="" />
        </div>
    </div>
  )
}

export default CSSVJS