import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' }, // Redirect to Search Page as home
  {
    path: 'search',
    loadChildren: () =>
      import('./features/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'movie/:id',
    loadChildren: () =>
      import('./features/movie-details/movie-details.module').then(
        (m) => m.MovieDetailsModule
      ),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./features/collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  { path: '**', redirectTo: '/search' }, // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
