import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

 hamburgerOpen = false;

}