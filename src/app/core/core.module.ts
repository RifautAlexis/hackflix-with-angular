import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
            
        }
    }
}
