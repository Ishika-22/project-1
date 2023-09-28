import { Component,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent 
{
  @Output() xyz:EventEmitter<any>= new EventEmitter

  constructor() {}

  ngOnInit(): void{
// this.xyz.emit("Hello")
  }
  sendData(){
this.xyz.emit("Hello")

  }
}

