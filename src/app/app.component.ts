import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  loading=false;

  actions = [
    {
      name: "home",
      route: "/"
    },

    {
      name: "intro",
      route: "intro"
    },

    {
      name: "projects",
      route: "projects"
    },

    {
      name: "contacts",
      route: "contacts"
    },
    
    {
      name: "plain",
      route: "plain"
    }
  ];

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    var a = Array.from(document.getElementsByTagName('body'))[0];
    a.style.overflow='scroll';
    setTimeout(() => this.loading=false, 2000);
  }

  goTo(route: string) {

    console.log(route);

    this.router.navigateByUrl(route);
  }
}
