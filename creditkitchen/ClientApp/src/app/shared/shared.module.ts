import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from './shared-material.module';

// SERVICES
import { AuthGuard } from './services/auth/auth.guard';
import { AppLoaderService } from './services/app-loader/app-loader.service';

const classesToInclude = [
  FlexLayoutModule,
  SharedMaterialModule
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    SharedMaterialModule
  ],
  entryComponents: [  ],
  providers: [
    AuthGuard,
    AppLoaderService
  ],
  declarations: [],
  exports: classesToInclude
})
export class SharedModule { }
