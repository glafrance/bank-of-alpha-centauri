import { Routes } from '@angular/router';
import HomePageComponent from "./pages/home-page/home-page.component";
import AccountsPageComponent from "./pages/accounts-page/accounts-page.component";
import CustomerProfilePageComponent from "./pages/customer-profile-page/customer-profile-page.component";
import PageNotFoundComponent from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'accounts', component: AccountsPageComponent },
  { path: 'customer-profile', component: CustomerProfilePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
