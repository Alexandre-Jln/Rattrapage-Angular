import { Injectable } from '@angular/core';
import { mockTaches } from './mock-taches';
import { ITask } from './iTask'


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
