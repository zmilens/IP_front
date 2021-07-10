import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { ShowAuthorComponent } from './author/show-author/show-author.component';
import { AddEditAuthorComponent } from './author/add-edit-author/add-edit-author.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './login/login.component';
import { AddEditRecipeComponent } from './recipes/add-edit-recipe/add-edit-recipe.component';
import { HeaderComponent } from './header/header.component';
import { ShowRecipesComponent } from './recipes/show-recipes/show-recipes.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    ShowAuthorComponent,
    AddEditAuthorComponent,
    RecipesComponent,
    LoginComponent,
    AddEditRecipeComponent,
    HeaderComponent,
    ShowRecipesComponent,
    SortPipe, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [SharedService,  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
