import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MangaItemListComponent } from "./components/manga-item-list/manga-item-list.component";

const routes: Routes = [{ path: "", component: MangaItemListComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MangaLibraryRoutingModule {}
