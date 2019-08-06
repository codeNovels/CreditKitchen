import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SharedMaterialModule } from './shared/shared-material.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { DisqusModule } from 'ngx-disqus';
import { WINDOW_PROVIDERS } from './shared/helpers/window.helper';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    SharedMaterialModule,
    DisqusModule.forRoot('codenovels'),
    //DisqusModule.forRoot('develop-3'),
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
