import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Categoria } from '../../interfaces/categoria-interface';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categorias',
  imports: [TableModule, ButtonModule, FloatLabel, FormsModule, DialogModule, InputTextModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent implements OnInit {
  private categoriaService = inject(CategoriesService);
  categorias: Categoria[] = [];
  showModalAgregar: boolean = false;
  nombre: string = '';
  descripcion: string = '';
  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.categoriaService.obtenerCategorias().subscribe({
      next: (data) => {
        this.categorias = data || [];
      },
      error: (error) => {
        console.error('Error al obtener categorías:', error);
        this.categorias = [];
      }
    });
  }

  mostrarModalAgregar() {
    this.showModalAgregar = true;
    this.limpiarFormulario();
  }

  cerrarModal() {
    this.showModalAgregar = false;
    this.limpiarFormulario();
  }

  guardarCategoria() {
    if (this.nombre.trim() && this.descripcion.trim()) {
      const nuevaCategoria = {
        name: this.nombre.trim(),
        description: this.descripcion.trim()
      };

      console.log('Categoría a crear:', nuevaCategoria);
      // TODO: Implementar método crearCategoria en el servicio
      this.cerrarModal();
    } else {
      console.warn('Por favor, complete todos los campos');
    }
  }

  private limpiarFormulario() {
    this.nombre = '';
    this.descripcion = '';
  }
}
