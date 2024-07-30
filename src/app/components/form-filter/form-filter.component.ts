import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-filter.component.html',
  styleUrl: './form-filter.component.css',
})
export class FormFilterComponent {
  @Input() inputId!: number;
  @Input() buttonText: string = 'Button Custom';
  @Output() idChange = new EventEmitter<number>();

  onEmitId() {
    this.idChange.emit(this.inputId);
  }
}
