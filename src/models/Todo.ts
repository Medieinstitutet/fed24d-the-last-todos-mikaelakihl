export class Todo {
    id: number; 
    title: string;
    emotion: string;
    isDone: boolean;

    constructor (title: string, emotion: string, isDone: boolean) {

        this.id = Date.now() + Math.floor(Math.random() * 10000);
        this.title = title;
        this.emotion = emotion;
        this.isDone = isDone;

    }

}