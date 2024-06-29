import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'store-search-box',
  standalone: true,
  imports: [
    MatFormField,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @Output()
  public queryChild: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  public myForm: FormGroup = this.fb.group({
    query: ['', [], []],
  });

  emitQuery(): void {
    this.queryChild.emit(this.myForm.value.query);
  }
}
