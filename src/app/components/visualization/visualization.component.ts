import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromState from '../../../store/reducers';
import {getSelectedOption} from '../../../store/selectors/selectors';


@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})


export class VisualizationComponent implements OnChanges, OnInit{
  @Input() title: string;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() typeOfToggle: string;
  graph = {data: [], layout: {}};
  trace1 = {};
  trace2 = {};
  type: string;

  constructor(private store: Store<fromState.State>) {
  }

  ngOnInit() {
    this.store.pipe(select(state => state.control)).subscribe(whatever => { console.log(whatever) } );
  }

  ngOnChanges() {
    this.getGraph();
  }

  getGraph() {
    this.graph = {
      data: [
        this.trace1 = {
          x: [0, 10, 20, 30, 45, 50, 20, 30, 40],
          y: [0, 30, 60, 40, 10, 20, 20, 10, 60],
          name: 'Blue Trace',
          type: this.type,
          mode: 'markers',
          marker: {
            size: [10, 20, 30, 40]
          }
        },
        this.trace2 = {
          x: [0, 10, 10, 20, 30, 40, 10, 20, 20],
          y: [0, 40, 10, 30, 20, 20, 40, 50, 50],
          name: 'Orange Trace',
          type: this.type,
          mode: 'markers',
          marker: {
            size: [10, 20, 30, 40]
          }
        },
      ],
      layout: {width: 500, height: 500, title: this.title,
        xaxis: { type: this.typeOfToggle, range: [this.minValue, this.maxValue]},
        yaxis: { type: this.typeOfToggle, range: [this.minValue, this.maxValue]}}
    };
  }
  }

