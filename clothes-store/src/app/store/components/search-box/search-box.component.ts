import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'store-search-box',
  standalone: true,
  imports: [
    MatFormField,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('searchBox')
  public searchBox!: ElementRef<HTMLInputElement>;

  @Input()
  public initialValue: string = '';

  @Output()
  public queryChild: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  // public myForm: FormGroup = this.fb.group({
  //   query: ['', [], []],
  // });

  emitQuery(value: string): void {
    this.queryChild.emit(value);
  }

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;
  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.queryChild.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
