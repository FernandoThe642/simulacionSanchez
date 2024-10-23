
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss'
})
export class TareasComponent {

  nombreTarea: string = '';
  descripcionTarea: string = '';
  tareas: any;   

  constructor(private tareasService: TareaService){

  }

  agregarTarea() {
    if(this.validarFormulario()){
      const tarea = {
        nombreTarea: this.nombreTarea,
        descripcionTarea: this.descripcionTarea
      };
    }
    
    
  }

  ngOnInit(): void {
    this.tareasService.guardarTarea()
  }

    // Validar el formulario
    validarFormulario(): boolean {
      return this.nombreTarea !== '' && this.descripcionTarea !== '';
    }
}
