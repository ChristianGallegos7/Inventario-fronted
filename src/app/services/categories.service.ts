import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Categoria } from '../interfaces/categoria-interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  env = environment;
  private http = inject(HttpClient);

  obtenerCategorias() {
    return this.http.get<Categoria[]>(`${this.env.API_URL}/categories`);
  }
}
