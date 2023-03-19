import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button"

const matModules = [
    MatToolbarModule,MatInputModule,MatButtonModule
] 

@NgModule({
    imports: matModules,
    exports: matModules
})
export class MaterialModule { }