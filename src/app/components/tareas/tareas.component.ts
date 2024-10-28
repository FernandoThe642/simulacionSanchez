import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { DetalleTareaComponent } from '../detalle-tarea/detalle-tarea.component';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule, DetalleTareaComponent],
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  nombreTarea: string = '';
  descripcionTarea: string = '';
  tareas: any[] = [];
  tareaSeleccionada: any = null;

  constructor(private tareasService: TareaService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareas = this.tareasService.obtenerTareas();
  }

  agregarTarea() {
    if (this.validarFormulario()) {
      const tarea = {
        nombreTarea: this.nombreTarea,
        descripcionTarea: this.descripcionTarea,
        mostrarDetalles: false
      };
      this.tareasService.guardarTarea(tarea);
      this.cargarTareas();
      this.limpiarFormulario();
    }
  }

  eliminarTarea(id: number) {
    this.tareasService.eliminarTarea(id);
    this.cargarTareas();
  }

  toggleDetalles(tarea: any) {
    this.tareaSeleccionada = tarea;  // Asigna la tarea seleccionada para mostrar detalles
  }

  validarFormulario(): boolean {
    return this.nombreTarea !== '' && this.descripcionTarea !== '';
  }

  limpiarFormulario() {
    this.nombreTarea = '';
    this.descripcionTarea = '';
  }
}
