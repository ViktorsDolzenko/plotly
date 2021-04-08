import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {changeType} from '../../../store/actions/actions';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  selectedOption: string;
  selectedToggle: string;
  title: string;
  minValue: number;
  maxValue: number;
   options = [
    {value: 'bar', viewValue: 'BarChart'},
    {value: 'bubble', viewValue: 'BubblePlot'},
    {value: 'box', viewValue: 'BoxPlot'},
    ];

  constructor(private store: Store<ControlsComponent>) {

  }

  changeType(value) {
    this.store.dispatch(changeType({payload: value}));
  }

}
