import { Injectable } from '@angular/core';
import {mockTaches} from "./mock-taches";

interface ITask {
}

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  toDoList: ITask[] = mockTaches;

  constructor() { }

  fetchAll() {
    return this.toDoList;
  }

  addTask(newTask: ITask) {
    this.toDoList.push(newTask);
  }
}
