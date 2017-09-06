import React, { Component } from 'react';
import './App.css';
import SoundBox from './SoundBox';
import LoopBox from './LoopBox';

class App extends Component {

  constructor(props) {
    super(props);
    document.onkeydown = e => {
      // console.log(e);
      e = e || window.event;
      var key = e.which || e.keyCode;
      // console.log(this.refs);
      this.refs.boxloop.getKey(key);
      this.refs.soundbox.getKey(key);
    } 
  }

  render() {
    return (
      <div className="ContentBox">
        <div className="header">
          <h1>Ye-Ye Boombox</h1>
        </div>

        <p style={{textAlign:'center'}}>Use the numbers keys for play/pause a loop and press . (point key) for stop loop</p>
        <div className="boxLoops">
          <LoopBox ref='boxloop' id="1" />
          <LoopBox id="2" />
          <LoopBox id="3" />
          <LoopBox id="4" />
          <LoopBox id="5" />
          <LoopBox id="6" />
          <LoopBox id="7" />
          <LoopBox id="8" />
        </div>

        <hr />
        <p style={{textAlign:'center'}}>Use the keys on your keyboard to play a sound</p>
        <div className="boxKeys">
          <SoundBox ref='soundbox' id='65' name='Kick' char='A' />
          <SoundBox id='83' name='Snare' char='S' />
          <SoundBox id='68' name='Cymbal' char='D' />
          <SoundBox id='70' name='Clap' char='F' />
        </div>
        <div className="boxKeys">
          <SoundBox id='71' name='Bass Drop' char='G' />
          <SoundBox id='72' name='Kick 2' char='H' />
          <SoundBox id='74' name='Hat' char='J' />
          <SoundBox id='75' name='Blip' char='K' />
        </div>
      
      </div>
    );
  }
}

export default App;
