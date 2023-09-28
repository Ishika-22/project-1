import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project_1';
  // topic:any;
  // data="hello";
  user:any;
  constructor(private userkadata:UserDataService){
    console.warn(userkadata.users())
    this.user=userkadata.users()
  }
}
