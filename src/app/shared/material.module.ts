import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@NgModule({
    exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule],
})
export class MaterialModule {}
