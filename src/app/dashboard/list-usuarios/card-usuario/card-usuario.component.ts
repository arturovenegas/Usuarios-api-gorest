import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;

  imgUrl = 'https://static.urbantecno.com/2020/07/Tipos-de-cuentas-de-usuarios-en-Windows-10.jpg';
  firstName: string;
  email: string;
  genero: string;
  id: number;

  constructor() { }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.genero = this.user.gender;
    this.id = this.user.id;
  }

}
