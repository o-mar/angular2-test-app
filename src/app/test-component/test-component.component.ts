import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponent implements OnInit {

  @Input() flag;
  @Output() toggleFlag;

  constructor() {
    this.toggleFlag = new EventEmitter();
  }

  ngOnInit() {

  }

  ToggleParentButton(): void {
    this.toggleFlag.emit();
  }

}
