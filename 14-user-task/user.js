export class User {
    constructor(Task) {
        this.Task = Task;
    }

    do() {
        this.Task.run();
    }
}
