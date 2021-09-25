import {Component, Input, OnInit, OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }
  Celsius:any;
  Fahrenheit:any;
  Change(temp:number){
    if(!this.Celsius){
      this.Celsius = undefined;
    }
    else if(!this.Fahrenheit){
      this.Fahrenheit = undefined;
    }
    
    if(temp===1){
      this.Fahrenheit = this.Celsius*9/5 + 32
    }else{
      this.Celsius = (this.Fahrenheit - 32) * 5/9
    }
  }
  
}