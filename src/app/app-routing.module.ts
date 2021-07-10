import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component'
import {AuthorComponent} from './author/author.component';
import {LoginComponent} from './login/login.component';
import {AddEditRecipeComponent} from './recipes/add-edit-recipe/add-edit-recipe.component';
import {ShowRecipesComponent} from './recipes/show-recipes/show-recipes.component';
import { NotAuthGuard } from './guards/notAuth/not-auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {path: '', component: RecipesComponent},
  {path:'author', component: AuthorComponent, canActivate:[AdminGuard]},
  {path:'login', component: LoginComponent, canActivate:[AuthGuard]},
  {path:'add_edit_recipe', component: ShowRecipesComponent, canActivate:[NotAuthGuard]},
  { path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
