import React, {Component} from 'react';
import { Howl } from 'howler';
import './LoopBox.css';

let loopSound;

class LoopBox extends Component{

  getKey(key){
    if(key===49){
        this.playLoop('loop1');
      }
      if(key===50){
        this.playLoop('loop2');
      }
      if(key===51){
        this.playLoop('loop3');
      }
      if(key===52){
        this.playLoop('loop4');
      }
      if(key===53){
        this.playLoop('loop5');
      }
      if(key===54){
        this.playLoop('loop6');
      }
      if(key===55){
        this.playLoop('loop7');
      }
      if(key===56){
        this.playLoop('loop8');
      }
      if(key===190){
        this.stopLoop();
      }
  }

	playLoop(id){
    if(loopSound){
      loopSound.stop();
    }
    loopSound = new Howl({
      src: [`${id}.mp3`],
      autoplay: true,
      loop: true,
      volume: 0.8,
    });

    document.querySelectorAll('.loop .status').forEach( (lp) => lp.classList.remove('on') );
    let lp = document.querySelector(`.loop[data-id='${id.split("p")[1]}']`);
    lp.querySelector('.status').classList.add('on');
  }

   stopLoop(){
    if(loopSound){
      loopSound.stop();
      document.querySelectorAll('.loop .status').forEach( (lp) => lp.classList.remove('on') );
    }
  }

	render(){
		return(
			<div className="loop" data-id={this.props.id}>
        <h1>Loop{this.props.id}</h1>
        <div className="status"></div>
      </div>
		);
	}
}

export default LoopBox;