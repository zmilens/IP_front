import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.css']
})
export class AddEditRecipeComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() recipe:any;


  RecipeList:any=[];

  CategoryList:any=[];
  cat: any=[];

  KitchenList:any=[];
  kitchen: any=[];
  AuthorList: any=[];
  author: any=[];

  ngOnInit(): void {
    this.LoadListCategory()
    this.LoadListKitchen()
    this.LoadAuthorList()
    console.log(this.recipe)

  }


  LoadListCategory(){
    this.service.getCategory().subscribe((data:any)=>{
      this.CategoryList=data;
      this.cat=this.recipe.category;
      console.log(this.cat)
    });
  }


  LoadAuthorList(){
    this.service.getAuthorList().subscribe((data:any)=>{
      this.AuthorList=data;
      this.author=this.recipe.author;
    });
  }

  LoadListKitchen(){
    this.service.getKitchen().subscribe((data:any)=>{
      this.KitchenList=data;
      this.kitchen=this.recipe.kitchen;
      console.log(this.kitchen)
    });
  }


  addRecipe(){
    
    var val = {id:this.recipe.id,
              title:this.recipe.title,
              category:this.recipe.category,
              kitchen:this.recipe.kitchen,
              ingredients:this.recipe.ingredients,
              description:this.recipe.description,
              published:this.recipe.published,
              author:this.recipe.author,
               photo:this.recipe.photo};
               console.log(this.cat)
    this.service.addRecipe(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateRecipe(){
    var val = {id:this.recipe.id,
      title:this.recipe.title,
      category:this.recipe.category,
      kitchen:this.recipe.kitchen,
      ingredients:this.recipe.ingredients,
      description:this.recipe.description,
      published:this.recipe.published,
      author:this.recipe.author,
      photo:this.recipe.photo};
    this.service.updateRecipe(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.recipe.photo=`${environment.apiUrl}/media/${data.toString()}`;
    })
  }
}
