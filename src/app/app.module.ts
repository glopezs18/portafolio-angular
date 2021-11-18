import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProductComponent } from './components/pages/product/product.component';

import { HttpClientModule } from '@angular/common/http';

//Rutas
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ProductComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
