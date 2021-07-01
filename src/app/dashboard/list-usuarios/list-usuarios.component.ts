import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  loading = true;

  listUsuarios: any[] = [];

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(){
    this._usuarioService.getUsuarios().subscribe(data => {
      this.listUsuarios = data.data;
      this.loading = false;
      console.log(this.listUsuarios);
    });
  }

}
