import { NgModule } from '@angular/core';

import { OnlineGenerateApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [OnlineGenerateApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [OnlineGenerateApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class OnlineGenerateApplicationSharedCommonModule {}
