import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { AboutMe } from "./about-me/about-me";
import { Projects } from "./projects/projects";
import { Contacto } from "./contacto/contacto";

@Component({
  selector: 'app-root',
  imports: [Header, AboutMe, Projects, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portafolio');
}
