import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {LoggingService } from '../logging.service';
// import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  // moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles.css'],
  // directives:[HomeComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
  name = 'ninja';
  ninja = {name:"Ryu",
  belt:"Black"
};
yell(e){
  alert("I am yelling");
  console.log("Lets see",e)


}


}
