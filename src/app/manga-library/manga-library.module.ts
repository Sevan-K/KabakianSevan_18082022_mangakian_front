import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MangaLibraryRoutingModule } from "./manga-library-routing.module";
import { MangaItemListComponent } from "./components/manga-item-list/manga-item-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [MangaItemListComponent],
    imports: [CommonModule, MangaLibraryRoutingModule, SharedModule],
})
export class MangaLibraryModule {}
