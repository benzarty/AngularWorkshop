import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './Test/Test.component';
import { ListUserComponent } from './list-user-component/list-user-component.component';
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { AddFormComponentComponent } from './add-form-component/add-form-component.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ParentComponent } from './parent/parent.component';
import { FilsComponent } from './fils/fils.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



//un composant fait partie d'une module
@NgModule({     //bech te9oul héthi module  (declariw fih les module eli fih)
  declarations: [			
    AppComponent,   //(imports chnowa module héthéké 7achtou bih(modules))
      TestComponent,
      ListUserComponent,
      MainUserComponent,
      MainProductComponent,
      MainProviderComponent,
      HeaderComponent,
      FooterComponent,
      NotFoundPageComponent,
      HomeComponent,
      AddFormComponentComponent,
      LoginUserComponent,
      ParentComponent,
      FilsComponent,
      AddInvoiceComponent,
      EditInvoiceComponent,
      ListInvoiceComponent,
      ListTodoComponent, //leezm kol component lese9 fi module
      
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, //lil forms
    NgModule
  ],
  providers: [],  //service  //Providers is used to register the classes to an angular module as a service
  bootstrap: [AppComponent] //bech yebda mina 
  //le composant racine qu'Angular crée et insère dans laindex.htmlpage Web hôte.
})
export class AppModule { }

//module bech yejama3 les composants (hakéké arte7 lil applicarion bech ki chargi module yecharji eli yeste7a9ou kol fi module héthéké )
