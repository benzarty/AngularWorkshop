import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AddFormComponentComponent } from './add-form-component/add-form-component.component';
import { ListUserComponent } from './list-user-component/list-user-component.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainUserComponent } from './main-user/main-user.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'mainuser',
    component: MainUserComponent,
    children: [{ path: 'listuser/:cat', component: ListUserComponent }],
    // [{ path: 'listuser/:cat/:test', component: ListUserComponent }],
  },
  { path: 'mainproduct', component: MainProductComponent },
  { path: 'reactive', component: LoginUserComponent },

  { path: 'mainprovider', component: MainProviderComponent },
  { path: 'listinvoice', component: ListInvoiceComponent, 
  children: [{ path: 'updateinvoice', component: EditInvoiceComponent }],
  // [{ path: 'listuser/:cat/:test', component: ListUserComponent }],
},


  { path: 'form/:id', component: AddFormComponentComponent },
  

  { path: '**', component: NotFoundPageComponent },
];
// yemchi 9ad 9ad lien
//prefix to learn
// lezem ** le5era 5ater yemchi bil ordre w gadina '' 5ater bech yechargi notfound ken gedouch redirect

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
