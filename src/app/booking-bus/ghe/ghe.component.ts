import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  status:boolean = false;

  @Input () ghe:any;
  @Output () statusGhe = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }

  chonGhe(){
    if(this.status){
     this.status = false;
    } else {
      this.status = true;
    }  
    this.statusGhe.emit(this.status)

  }
}
