import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.saveDataToConsole();
  }
  saveDataToConsole() {
    const data = { mobile: '0175588678', email: 'm@gmail.com', nid: '97386899', broker:'Broker1', boType:'Joint', image:'m.jpg' };
    console.log('Data saved:', data);
  }

}
