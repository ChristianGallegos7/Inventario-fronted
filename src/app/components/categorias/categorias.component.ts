import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-categorias',
  imports: [TableModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent implements OnInit {
  private categoriaService = inject(CategoriesService);
  categorias: any[] = [];

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.categoriaService.obtenerCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }
}
