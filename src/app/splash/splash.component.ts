import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements AfterViewInit, OnDestroy {

  ngAfterViewInit(): void {
      var a = Array.from(document.getElementsByTagName('body'))[0];
      a.style.overflow='hidden';
  }

  ngOnDestroy(): void {
    var a = Array.from(document.getElementsByTagName('body'))[0];
    a.style.overflow='unset';
  }
}
