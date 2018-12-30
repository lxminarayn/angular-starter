import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-comp1',
  templateUrl: './feature-comp1.component.html',
  styleUrls: ['./feature-comp1.component.scss']
})
export class FeatureComp1Component implements OnInit {
  model: Object = {};
  constructor() {}

  ngOnInit() {}

  onSubmit(form) {
    alert('You have submitted ' + JSON.stringify(this.model));
    form.resetForm();
  }
}
