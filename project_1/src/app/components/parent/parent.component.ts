import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name="";
parentfunction(data:any){
  console.warn(data)
  this.name=data.name
}
}
