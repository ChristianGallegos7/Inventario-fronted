import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    FloatLabel,
    FormsModule,
    DividerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  identificacion!: number;
  codigoAccesoEnviado: boolean = false;
  codigoAcceso!: number;
  // Maneja el envío del formulario de login
  onSubmit(identificacion: number) {
    // Aquí puedes conectar tu servicio de autenticación.
    // Por ahora solo registramos el valor en consola.
    console.log('Identificación enviada:', identificacion);

    // TODO: navegar a la app principal o mostrar errores según la respuesta
  }
}
