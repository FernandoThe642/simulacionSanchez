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
  idTareaSeleccionada: number | null = null;

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
        id: this.generarId(),
        nombreTarea: this.nombreTarea,
        descripcionTarea: this.descripcionTarea,
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

  toggleDetalles(id: number) {
    this.idTareaSeleccionada = this.idTareaSeleccionada === id ? null : id;
  }

  validarFormulario(): boolean {
    return this.nombreTarea !== '' && this.descripcionTarea !== '';
  }

  limpiarFormulario() {
    this.nombreTarea = '';
    this.descripcionTarea = '';
  }

  private generarId(): number {
    return this.tareas.length > 0 ? Math.max(...this.tareas.map(t => t.id)) + 1 : 1;
  }
}
