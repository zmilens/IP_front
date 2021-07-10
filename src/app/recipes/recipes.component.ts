import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  RecipeList: any=[];
  CategoryList: any=[];

  recipe: any="";
  ModalTitle:string="";
  ActivateAddEditAuthorComp: boolean=false;
  filter: string="";
  sorting: string="";
  
  ngOnInit(): void {
    this.refreshRecipeList();
    this.LoadListCategory()
    console.log(this.recipe)
    
  }

  LoadListCategory(){
    this.service.getCategory().subscribe((data:any)=>{
      this.CategoryList=data;
      console.log(this.CategoryList[0])
      console.log(this.RecipeList)
    });
  }

  refreshRecipeList(){
    this.service.getRecipeList().subscribe(data=>{
      this.RecipeList=data;
    });

  }

}
