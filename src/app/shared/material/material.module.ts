import { NgModule } from '@angular/core';
import { MatGridListModule } from "@angular/material/grid-list";

const modules = [
    MatGridListModule
];

@NgModule({
    exports: [...modules],
})
export class MaterialModule { }
