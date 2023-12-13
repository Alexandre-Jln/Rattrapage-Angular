# <p align="center">RattrapageAngular</p>

#### Lien Netlify :
  
### Objectif :
Développez une application "TodoList" avec Angular qui permet à l'utilisateur
de visualiser une liste de tâches et de les ajouter. La fonctionnalité de
marquer les tâches comme terminées sera gérée côté application sans
indication initiale dans le mock.

#### 1. Création des composants:
 Créez les composants suivants :
##### `TachesComponent` pour afficher les tâches.
##### `CreateTacheComponent` pour ajouter une nouvelle tâche.
##### `HeaderComponent` pour le menu de navigation.
#### 2. Configuration du routage :
Configurez le TachesComponent pour qu'il soit la page
d'accueil. Faites cela dans le fichier app-routing.module.ts.
#### 3. Création du mock de données et l’interface :
Dans le dossier `src/app`, créez un fichier nommé
`mock-taches.ts`.
 Ajoutez le mock de données suivant à ce fichier :

```
export const mockTaches = [
{
"id": 1,
"titre": "Acheter du lait",
},
{
"id": 2,
"titre": "Répondre aux e-mails",
},
{
"id": 3,
"titre": "Appeler le plombier",
}
];
```

#### 4 - Création du service de gestion des tâches :
Créez un service `TachesService` avec les méthodes suivantes
:
`fetchAll()` pour récupérer la liste des tâches.
`addTask(task)` pour ajouter une nouvelle tâche à la liste.
#### 5- Implémentation du formulaire d'ajout de tâches :
Utilisez `ReactiveFormsModule` pour créer le formulaire d'ajout
de tâches dans `CreateTacheComponent`.
Utilisez la méthode `addTask()` du service `TachesService`
pour ajouter une tâche dans la liste lors de la soumission du
formulaire.
#### 6- Code github et deploiement sur Netlify :
Vous devez m’envoyer votre code github et le site deployé
