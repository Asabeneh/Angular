import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  log(){
    console.log('I am the logging service');
  }


  constructor() { }

}
