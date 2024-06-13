import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styles: `
  div {
    background-color: rgba(255, 107, 1, 1);
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1{
    color: white;
    margin-bottom: 0px;
  }
  `,
})
export class NavbarComponent {}
