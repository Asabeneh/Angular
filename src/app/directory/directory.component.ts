import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LoggingService } from '../logging.service';
import {DataService } from '../data.service';
declare var firebase:any;


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['../../assets/styles.css']
})
export class DirectoryComponent implements OnInit {

  // names = [
  //   {name:'Asabeneh',belt:'Brown',title:'Mr.',age:100,qual:'Programmer',img:'../assets/logo.png'},
  //   {name:'Shitahun',belt:'skyblue',title:'Mr.',age:120,qual:'Graphics Designer',img:'../assets/logo.png'},
  //   {name:'Yetayeh',belt:'Red',title:'Mr.',age:100,qual:'Developer',img:'../assets/logo.png'}
  // ];
  names =[];
  name = '';
  eyeColor = '';

  classes = {'blue':false,'red':false, 'underline':false};
  test = true;

  // ninja: string;
  //
  // constructor(private route: ActivatedRoute) {
  //   this.ninja = route.snapshot.params['ninja'];
  // }
  constructor(private logger: LoggingService, private dataService: DataService) { }

  logIt() {
      this.logger.log();
    }

    ngOnInit() {
  		// this.dataService.fetchData().subscribe(
      //   (data) => this.names = data
      // );
      this.fbGetData();
}

fbGetData() {
  firebase.database().ref('/').on('child_added', (snapshot) => {
    this.names.push(snapshot.val())
    snapshot.value = '';

  })
}

fbPostData(name,eyeColor,age,qual,img) {
  firebase.database().ref('/').push({name: name, eyeColor: eyeColor,age:age,qual:qual,img:img})
}
  }
