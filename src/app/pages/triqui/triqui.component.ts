import { Component, ElementRef, OnInit } from '@angular/core';

const caseOK = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ];

@Component({
  selector: 'app-triqui',
  templateUrl: './triqui.component.html',
  styleUrls: ['./triqui.component.css']
})
export class TriquiComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  checkTriqui(e) {
  let that = this;
  let value = e.key+e.key+e.key;
  caseOK.forEach(function(element, index, array) {
    let elem1 = that.elementRef.nativeElement.querySelector('#pos-'+element[0]);
    let elem2 = that.elementRef.nativeElement.querySelector('#pos-'+element[1]);
    let elem3 = that.elementRef.nativeElement.querySelector('#pos-'+element[2]);
    let isOK = elem1.value+elem2.value+elem3.value;
    if (value.length>0 && isOK.length>0 && isOK==value) {
      elem1.classList.add("border", "border-success", "input-ok");
      elem2.classList.add("border", "border-success", "input-ok");
      elem3.classList.add("border", "border-success", "input-ok");
      that.elementRef.nativeElement.querySelector('#player').innerHTML = e.key;
      that.elementRef.nativeElement.querySelector('#playerContainer').classList.remove("d-none");
    }
    console.log(isOK,value);
  });
}

}
