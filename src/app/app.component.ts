import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'umbraco';
  result: string;
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.result = this.elementRef.nativeElement.getAttribute("avianca-values");
  }
}