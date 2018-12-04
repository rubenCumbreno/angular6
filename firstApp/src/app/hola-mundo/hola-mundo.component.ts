import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  title = "Bienvenido a Angular";

  constructor() {
  }

  ngOnInit() {

  }

}

function probando() {
    Swal("hola");
}

probando()
