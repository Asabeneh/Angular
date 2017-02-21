import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {LoggingService } from '../logging.service';
﻿


@Component({
  // inputs:["ninja"],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to home to th eninja directory !';
//   @Input() ninja;//from home to root
//   @Output() onYell = new EventEmitter(); // from root to home
// fireYellEvent(e){
//   this.onYell.emit(e);
//   console.log("Lets see",e);
// }
//
//   myString = 'I like chicken';
//   ninja = {
//     name:'Asabeneh',
//     belt:'Brown'
//   }
//
//   myBoolean = true;
//   alertMe(val){
//     alert(val);
//   }
  constructor(private logger: LoggingService) { }
  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
