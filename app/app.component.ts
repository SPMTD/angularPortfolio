import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<main>
          <h2>{{ title }}</h2>
          <projects-list></projects-list>
        </main>`
})
export class AppComponent  {}
export class ProjectsComponent {}
export class ProjectComponent {}
