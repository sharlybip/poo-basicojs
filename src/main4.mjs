function videoPlay(id){
    const urlSecreta = 'https://www.platziultrasecretomasquelanasa' + id;
    console.log(` se esta reproduciendo desde la url ${urlSecreta}`);
}
function videoStop(id){
    const urlSecreta = 'https://www.platziultrasecretomasquelanasa' + id;
    console.log(`está en  pausa desde la url ${urlSecreta}`);
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}