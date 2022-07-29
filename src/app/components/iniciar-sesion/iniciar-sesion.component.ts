import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private router:Router) { 
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]],
        //deviceInfo:this.formBuilder.group({
          //deviceId: ["17867868768"],
          //deviceType: ["DEVICE_TYPE_ANDROID"],
          //notificationToken: ["67657575eececc34"]
        //})
      }
    )
  }

  ngOnInit(): void {
  }

  Login(){
    if((this.Email?.value == "admin@portfolio.com") && (this.Password?.value=="12345678"))
    {  
      alert('Bienvenido');
      this.router.navigate(['portfolio']);

    }else
    {
      alert('Verifique los datos ingresados y vuelva a ingresarlos');

    }
  }
  get Email()
  {
    return this.form.get('email');
  }
  
  get Password()
  {
    return this.form.get('password');
  }
}
