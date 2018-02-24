import { UtilsModule } from './utils/utils.module';
import { DataModule } from './data/data.module';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

const CORE_PROVIDERS = [...DataModule.forRoot().providers, UtilsModule.forRoot().providers];

@NgModule({
  exports: [DataModule, UtilsModule],
  providers: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS]
    };
  }
}
