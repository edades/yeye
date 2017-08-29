import React, {Component} from 'react';
import { Howl } from 'howler';
import './SoundBox.css';

let sound;

class SoundBox extends Component{
	getKey(key){
    if(key===65){
      this.playSound('kick', key);
    }
    if(key===83){
      this.playSound('snare', key);
    }
    if(key===68){
      this.playSound('cymbal', key);
    }
    if(key===70){
      this.playSound('clap', key);
    }
    if(key===71){
      this.playSound('bass_drop', key);
    }
    if(key===72){
      this.playSound('kick2', key);
    }
    if(key===74){
      this.playSound('hat', key);
    }
    if(key===75){
      this.playSound('blip', key);
    }
  }
  
  playSound(id, key){
    console.log(id);
    sound = new Howl({
      src: [`${id}.mp3`]
    });
    sound.play();

    document.querySelectorAll('.key').forEach( (btn) => btn.classList.remove('playing') );
    let btn = document.querySelector(`.key[data-id='${key}']`);
    btn.classList.add('playing');
    setTimeout(() => {
      btn.classList.remove('playing');
    }, 300);
  }
	render(){
		return(
			<div className='key' data-id={this.props.id}>
        <h3>{this.props.name}</h3>
        <p>( {this.props.char} )</p>
      </div>
		);
	}
}

export default SoundBox;