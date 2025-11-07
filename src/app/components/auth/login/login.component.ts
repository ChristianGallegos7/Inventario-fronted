import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, CardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Maneja el envío del formulario de login
  onSubmit(identificacion: string) {
    // Aquí puedes conectar tu servicio de autenticación.
    // Por ahora solo registramos el valor en consola.
    console.log('Identificación enviada:', identificacion);

    // TODO: navegar a la app principal o mostrar errores según la respuesta
  }
}
