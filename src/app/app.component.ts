import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    switches = [true, true, false, false, true, true, false]
    flip(i){
        this.switches[i] = !this.switches[i]
  }
}
