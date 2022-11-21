export class Broma {
    private pregunta!:string;
    private respuesta!:string;

    constructor(pregunta:string, respuesta:string) {
        this.pregunta = pregunta
        this.respuesta = respuesta
    }

    getPregunta():string{
        return this.pregunta
    }

    getRespuesta():string{
        return this.respuesta
    }
}
