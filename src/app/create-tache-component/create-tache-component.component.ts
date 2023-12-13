import { Component } from '@angular/core';
import {ITask} from "../iTask";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TachesService} from "../taches.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-tache-component',
  templateUrl: './create-tache-component.component.html',
  styleUrls: ['./create-tache-component.component.css']
})
export class CreateTacheComponentComponent {
  constructor(private taskService: TachesService, private router: Router) {}

  public form:FormGroup = new FormGroup({
    titre: new FormControl('', [Validators.required]),
  })

  mockTaches: ITask[] = this.taskService.fetchAll();

  onSubmit() {
    if (this.form.valid) {
      const task = this.form.value.titre;

      // Créez une nouvelle tache
      const newTask = {
        id: this.mockTaches.length + 1,
        titre: task
      };

      // l'ajouter dans le mock
      this.taskService.addTask(newTask);

      // Réinitialiser le formulaire
      this.form.reset();

      // Redirection vers l'accueil
      this.router.navigate(['/']);
    }
  }
}
