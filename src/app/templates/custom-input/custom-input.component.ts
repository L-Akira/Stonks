import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  
  @Input () inputName: string
   inputData: number
  constructor() { }

  ngOnInit() {}

  @Output() newItemEvent = new EventEmitter<number | string >()
  
    addNewItem() {
      this.newItemEvent.emit(this.inputData);
    }

    
}
