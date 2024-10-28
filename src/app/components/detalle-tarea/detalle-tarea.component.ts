import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-tarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-tarea.component.html',
  styleUrl: './detalle-tarea.component.scss'
})
export class DetalleTareaComponent {
  @Input() tarea: any;
}
