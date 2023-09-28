import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users()
{
  return[
   { name:"Ram", city:"Mumbai"},
    {name:"Shyam", city:"Ayodhya"}
  ]
}
}
