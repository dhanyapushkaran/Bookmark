import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';

const routes: Routes = [
  {
    path:'', component:BookmarkListComponent
  },
  {
    path:'create', component:CreateBookmarkComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
