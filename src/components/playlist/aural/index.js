import EventEmitter2 from 'eventemitter2';

export default class Song extends EventEmitter2 {

  constructor(url) {
    super();

    this.url = url;
    this.xhr = null;
    this.blob = null;
    this.audio = null;

    this.send();
  }

  send(){

    const that = this;

    this.xhr = new XMLHttpRequest();
    this.xhr.responseType = "blob";

    this.xhr.addEventListener('load', ()=>{
      that.blob = this.xhr.response;
      that.audio = new Audio(window.URL.createObjectURL(that.blob));
      that.audio.addEventListener('timeupdate', ()=>{
        const currentTime = that.audio.currentTime;
        that.emit('timeupdate', {currentTime});
      })
      that.audio.addEventListener('loadeddata', () => {
        const duration = that.audio.duration;
        that.emit('loadeddata', {duration});
      });
      that.audio.addEventListener('ended', (event) => {
        that.emit('ended', event);
      });
      that.emit('load', this);
    });


    this.xhr.addEventListener('progress', (event)=>{
      that.emit('progress', event);
    });

    this.xhr.addEventListener('error', (event)=>{
      that.emit('error', event);
    });

    this.xhr.addEventListener('abort', (event)=>{
      that.emit('abort', event);
    });

    this.xhr.open("GET", this.url);
    this.xhr.send();
  }

}
