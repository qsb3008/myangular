import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    SharedModule
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if(parent){
      throw new Error('模块已经存在')
    }
  }
}
