import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Input() class?: string;
  @Input() id!: string;
  @Input() placeholder?: string;
  @Input() formName!: string;
  @Input() password?: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  getInputType(): string {
    return this.password === true ? "password" : "text";
  }

}
