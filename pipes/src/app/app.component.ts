import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  valor: number= 123.45343;
  texto: string ="texto en minuscula a transformar"
  fecha: Date = new Date("December 25, 1995");
 
  paraPipe: number= 3;
}
