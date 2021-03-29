import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {

  @Input() inputName: string;
  @Input() limit?: [min: string, max: string];;
  @Output() newItemEvent = new EventEmitter<number | string >()

  inputData: number;
  min: string;
  max: string;

  constructor() { }

  ngOnInit() {
    this.min = this.limit[0];
    this.max = this.limit[1];
  }

  numberInputed() {
    this.newItemEvent.emit(this.inputData);
  }


}
