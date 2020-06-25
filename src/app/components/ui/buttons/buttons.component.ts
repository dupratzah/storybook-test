import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit, OnChanges {
  @Input() color: 'yellow' | 'green' | 'red' | '' = '';
  @Input() disabled = false;
  @Input() outline = false;
  @Input() content = 'Button';
  @Input() onClick: (message: string) => void;

  public rootClass = 'app-button';
  public classMap: {};

  constructor() { }

  ngOnInit() {
    this.updateClassMap();
  }
  updateClassMap() {
    console.log(this.rootClass);
    this.classMap = {
      [`${this.rootClass}`]: true,
      [`${this.rootClass}--${this.color}`]: !!this.color,
      [`${this.rootClass}--outline`]: this.outline,
      [`${this.rootClass}--disabled`]: this.disabled,
    };
  }

  onButtonClick(): void {
    this.onClick('Click me !');
  }

  ngOnChanges() {
    this.updateClassMap();
  }

}
