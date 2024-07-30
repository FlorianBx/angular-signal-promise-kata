# Angular Signals Project

## Introduction

Ce projet Angular est un exemple de mise en œuvre des signaux (`signals`) avec des promesses pour créer une architecture simple et réactive. L'objectif est de démontrer comment utiliser les signaux pour gérer l'état et les effets réactifs de manière efficace.

## Fonctionnalités

- **FormFilterComponent** : Un composant de formulaire autonome permettant de saisir un ID et de déclencher une action avec un texte de bouton personnalisable.
- **ArticlesComponent** : Un composant réactif utilisant des signaux pour gérer les IDs d'articles et d'utilisateurs, et pour effectuer des opérations de filtrage en réponse aux changements de ces IDs.
- **Gestion des Effets** : Utilisation des `effect` pour réagir automatiquement aux changements de valeurs des signaux.
- **Service d'Article** : Intégration avec un service pour récupérer les articles par ID et par utilisateur.

## Structure du Projet

```plaintext
src/
├── app/
│   ├── components/
│   │   ├── articles/
│   │   │   ├── articles.component.html
│   │   │   ├── articles.component.ts
│   │   │   └── articles.component.css
│   │   ├── form-filter/
│   │   │   ├── form-filter.component.html
│   │   │   ├── form-filter.component.ts
│   │   │   └── form-filter.component.css
│   ├── services/
│   │   ├── article.service.ts
│   ├── models/
│   │   ├── article.ts
│   ├── app.component.html
│   ├── app.component.ts
│   └── app.component.css
```

## Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/ton-username/ton-repo.git
   cd ton-repo
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Démarrer l'application** :
   ```bash
   ng serve
   ```

   Ouvrez votre navigateur à `http://localhost:4200/` pour voir l'application en action.

## Utilisation

### FormFilterComponent

Le composant `FormFilterComponent` permet de saisir un ID et de déclencher une action avec un bouton personnalisable.

**Exemple d'utilisation** :
```html
<app-form-filter [inputId]="articleId()" [buttonText]="'Fetch Article'" (idChange)="articleId.set($event)"></app-form-filter>
```

### ArticlesComponent

Le composant `ArticlesComponent` utilise des signaux pour gérer les IDs et récupérer des articles en réponse aux changements de ces IDs.

**Exemple d'utilisation** :
```html
<h1>Articles</h1>
<input type="number" [(ngModel)]="userId">
<button (click)="userId.set(userId())">Get Articles From User</button>
<app-form-filter [inputId]="articleId()" [buttonText]="'Fetch Article'" (idChange)="articleId.set($event)"></app-form-filter>
@for (article of articles(); track article.id) {
  <article>
    <h2>{{ article.title }}</h2>
    <p>{{ article.body }}</p>
  </article>
} @empty {
  <p>No articles found</p>
}
```

### Service d'Article

Le service `ArticleService` gère les appels API pour récupérer les articles par ID ou par utilisateur.

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre les étapes suivantes pour contribuer à ce projet :

1. **Fork le projet**.
2. **Créez une branche de fonctionnalité** (`git checkout -b feature/AmazingFeature`).
3. **Commitez vos changements** (`git commit -m 'Add some AmazingFeature'`).
4. **Push vers la branche** (`git push origin feature/AmazingFeature`).
5. **Ouvrez une Pull Request**.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
