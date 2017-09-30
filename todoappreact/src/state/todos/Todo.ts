
export class Todo {
    title: string;
    status: TodoStatus;
    id: string;
}
export enum TodoStatus {
    NEW,
    DONE
}