import React from 'react'
import tom from '../DrumKit/sounds/tom.wav'
import boom from '../DrumKit/sounds/boom.wav'
import clap from '../DrumKit/sounds/clap.wav'
import hihat from '../DrumKit/sounds/hihat.wav'
import kick from '../DrumKit/sounds/kick.wav'
import openhat from '../DrumKit/sounds/openhat.wav'
import ride from '../DrumKit/sounds/ride.wav'
import snare from '../DrumKit/sounds/snare.wav'
import tink from '../DrumKit/sounds/tink.wav'

function DrumKit() {

    function playsound(e) {
        // console.log(e.keyCode); 
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
        const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
        // console.log(key);
        if (!audio) return; //this stops from running all together
        audio.currentTime =0;
        audio.play();
        //Added the class playing: whenever the letter is tapped is shows this style
        key.classList.add('playing')   
    }
    
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return; //It skips this function if transition is not a trandform
        this.classList.remove('playing');
    }
    
    const keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))

    window.addEventListener('keydown', playsound); 
    
    return (
        <div>
        <div className="drumkit-bg">
            <div className="key" data-key='65'>A</div>
            <div className="key" data-key='66'>B</div>
            <div className="key" data-key='67'>C</div>
            <div className="key" data-key='68'>D</div>
            <div className="key" data-key='69'>E</div>
            <div className="key" data-key='70'>F</div>
            <div className="key" data-key='71'>G</div>
            <div className="key" data-key='72'>H</div>
            <div className="key" data-key='73'>I</div>
        </div>



        <audio data-key='65' src={tom}></audio>
        <audio data-key='66' src={boom}></audio>
        <audio data-key='67' src={clap}></audio>
        <audio data-key='68' src={hihat}></audio>
        <audio data-key='69' src={kick}></audio>
        <audio data-key='70' src={openhat}></audio>
        <audio data-key='71' src={ride}></audio>
        <audio data-key='72' src={snare}></audio>
        <audio data-key='73' src={tink}></audio>
    </div>
  )
}

export default DrumKit