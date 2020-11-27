import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'korisnici2';

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#343a40');
}
}
