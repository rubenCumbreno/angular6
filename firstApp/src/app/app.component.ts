import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firstApp';

  //definicion de tipos y constructores
  // name: string = 'Ruben Cumbreño'
  // age: number;
  // address: {
  //   street: string;
  //   city: string;
  // };
  // hobbies: string[];
  //
  // // constructor(){
  // //   this.age = 24;
  // //   this.address ={
  // //     street: 'Gran via',
  // //     city: 'Madrid'
  // //   };
  // //   this.hobbies = ["Futbol", "Lectura"];
  // // };
  //
  // posts = [];
  //
  // constructor(private dataService: DataService){
  //   this.dataService.getData().subscribe(data =>{
  //     console.log(data);
  //     this.posts = data;
  //   })
  // }
  //
  //
  // sayHello(){
  //   alert("Hello");
  // };
  //
  // deleteHobby(hobby){
  //   for (let i = 0; i < this.hobbies.length; i++){
  //     if (hobby == this.hobbies[i]){
  //       this.hobbies.splice(i,1)
  //     }
  //   }
  // }


}
