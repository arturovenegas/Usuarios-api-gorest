import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  loading = true;

  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  email: string;
  urlImage: string;

  constructor(private aRoute: ActivatedRoute,
              private usuarioService: UsuarioService) {
    this.id = parseInt(this.aRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void{
    this.usuarioService.getUsuario(this.id).subscribe(data =>{
      console.log(data);

      this.firstName = data.data.name;
      this.lastName = data.data.last_name;
      this.email = data.data.email;
      this.phone = data.data.phone;
      this. gender = data.data.gender;
      this.urlImage = 'https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257_960_720.png';
      this.loading = false;
    });
  }

}
