import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CorporateStatementComponent } from './pages/corporate-statement/corporate-statement.component';
import { SustainabilityComponent } from './pages/sustainability/sustainability.component';
import { PolicyStatementComponent } from './pages/policy-statement/policy-statement.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LogisticsComponent } from './pages/logistics/logistics.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { hero: true, heroTitle: ['Delivering Impeccable Services ','Nationwide'],
          emailSub: true
        }
      },
      {
        path: 'corporate',
        component: CorporateStatementComponent,
        data: { hero: true, heroTitle: ['Our Corporate ','Statement'],
          emailSub: true
        }
      },
      {
        path: 'sustain',
        component: SustainabilityComponent,
        data: { hero: true, heroTitle: ['Our ','Sustainability'],
          emailSub: true
        }
      },
      {
        path: 'policy',
        component: PolicyStatementComponent,
        data: { hero: true, heroTitle: ['Our Policy ','Statement'],
          emailSub: true
        }
      },
      {
        path: 'contact',
        component: ContactUsComponent,
        data: { hero: false, emailSub: false },
      },
      {
        path: 'logistics',
        component: LogisticsComponent,
        data: { hero: true, heroTitle: ['Our ','Logistics'],
          emailSub: true
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { hero: false, emailSub: true },
      },
    ],
  },
];
