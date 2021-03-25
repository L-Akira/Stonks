import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {
  selectOptionValue: string  = 'ARHOMBUS'
  @Input () inputName: string

  constructor() { }

  ngOnInit() {}


  @Output() newItemEvent = new EventEmitter<string>()
  
    addNewItem() {
      this.newItemEvent.emit(this.selectOptionValue);
    }

    
    
  
}
