
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss'
})
export class TareasComponent implements OnInit{


  nombreTarea: string = '';
  descripcionTarea: string = '';
  tareas: any[] = [];

  constructor(private tareasService: TareaService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  // Cargar las tareas desde el servicio
  cargarTareas() {
    this.tareas = this.tareasService.obtenerTareas();
  }

  // Agregar una nueva tarea
  agregarTarea() {
    if (this.validarFormulario()) {
      const tarea = {
        nombreTarea: this.nombreTarea,
        descripcionTarea: this.descripcionTarea,
        mostrarDetalles: false
      };
      this.tareasService.guardarTarea(tarea);
      this.cargarTareas(); // Actualizar lista de tareas
      this.limpiarFormulario(); // Limpiar los campos de entrada
    }
  }

  // Eliminar una tarea
  eliminarTarea(id: number) {
    this.tareasService.eliminarTarea(id);
    this.cargarTareas(); // Actualizar lista de tareas
  }

  // Mostrar/ocultar detalles de una tarea
  toggleDetalles(tarea: any) {
    tarea.mostrarDetalles = !tarea.mostrarDetalles;
  }

  // Validar que los campos no estén vacíos
  validarFormulario(): boolean {
    return this.nombreTarea !== '' && this.descripcionTarea !== '';
  }

  // Limpiar el formulario después de agregar una tarea
  limpiarFormulario() {
    this.nombreTarea = '';
    this.descripcionTarea = '';
  }
}
