import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {
  selectOptionValue: string;
  @Input() inputName: string;
  @Input() options?: string[];
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    //temporary
    if(!this.options)
      this.options = ['option 1', 'option 2']
  }

  selectedOption() {
    this.newItemEvent.emit(this.selectOptionValue);
  }
}
