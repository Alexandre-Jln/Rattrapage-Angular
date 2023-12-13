import {Component, OnInit} from '@angular/core';
import {TachesService} from "../taches.service";
import {ITask} from "../iTask";

@Component({
  selector: 'app-taches-component',
  templateUrl: './taches-component.component.html',
  styleUrls: ['./taches-component.component.css']
})
export class TachesComponentComponent implements OnInit{

  constructor(private taskService: TachesService) {}

  isChecked: boolean = false;

  tasks: ITask[] = this.taskService.fetchAll();

  ngOnInit(): void {
    this.tasks = this.taskService.fetchAll();

  }

  onClick(task: any) {

    task.completed = !task.completed;
    console.log(task.completed);
  }

  reload() {
    console.log('hello');
    window.location.reload();
  }
}
