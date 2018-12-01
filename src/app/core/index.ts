import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if(parent){
      throw new Error('模块已经存在')
    }
  }
}
