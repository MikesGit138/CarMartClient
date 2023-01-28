import {Component, Input, OnInit} from '@angular/core';

export enum ButtonType {
  PRIMARY,
  SECONDARY,
  DANGER,
  DANGER_SECONDARY,
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() class?: string;
  @Input() buttonType!: ButtonType;
  @Input() label!: string;
  @Input() width!: string;
  @Input() height!: string;
  @Input() isDisabled?: boolean;
  @Input() isSubmit?: boolean;

  constructor() { }

  ngOnInit(): void {}

  getButtonTypeClass() {
    switch (this.buttonType) {
      case ButtonType.PRIMARY: {
        return "bg-primary"
      }
      case ButtonType.SECONDARY: {
        return "bg-secondary hover:bg-primary"
      }
      case ButtonType.DANGER: {
        return "bg-danger"
      }
      case ButtonType.DANGER_SECONDARY: {
        return "bg-secondary hover:bg-danger"
      }
      default: throw new DOMException("Invalid button type.");
    }
  }

}
