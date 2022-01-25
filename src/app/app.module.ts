import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/components/home/home.component';
import { OrdemComprarComponent } from './views/components/ordem/ordem-comprar/ordem-comprar.component';
import { OrdemReadComponent } from './views/components/ordem/ordem-read/ordem-read.component';
import { OrdemVenderComponent } from './views/components/ordem/ordem-vender/ordem-vender.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { HeaderComponent } from './views/components/template/header/header.component';
import { NavComponent } from './views/components/template/nav/nav.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OrdemReadComponent,
    OrdemComprarComponent,
    OrdemVenderComponent,
    NavComponent
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
