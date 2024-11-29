import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent {
  private fb = inject(FormBuilder);

  public color: string = '';

  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.email],
    ],
  });

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
  }
}
