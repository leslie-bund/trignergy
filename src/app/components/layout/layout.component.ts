import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EmailSubscribeComponent } from '../email-subscribe/email-subscribe.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, EmailSubscribeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ){}

  hero!: boolean;
  heroTitle!: string;
  emailSub!: boolean;

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.hero = data['hero'];
      this.heroTitle = data['heroTitle'];
      this.emailSub = data['emailSub'];
    });
  }
}
