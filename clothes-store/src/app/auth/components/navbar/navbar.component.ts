import { Component } from '@angular/core';

@Component({
  selector: 'auth-navbar',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1 class="text-6xl font-bold">THUMBS UP</h1>
    </div>
  `,
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
