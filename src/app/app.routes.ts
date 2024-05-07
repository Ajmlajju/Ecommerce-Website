import { Routes } from '@angular/router';
import { CarousalComponent } from './units/carousal/carousal.component';
import { CardComponent } from './units/card/card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleComponent } from './units/single/single.component';

export const routes: Routes = [{path:"",component:HomeComponent},
    {path:"products",component:CardComponent},
    {path:"contact",component:ContactComponent},
    {path:"product/id",component:SingleComponent}
];
