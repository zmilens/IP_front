import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-recipes',
  templateUrl: './show-recipes.component.html',
  styleUrls: ['./show-recipes.component.css']
})
export class ShowRecipesComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  RecipeList: any=[];

  ModalTitle:string="";
  ActivateAddEditRecipeComp: boolean=false;
  @Input() recipe:any;
  photo:string="";
  photoFilePath:string="";
  


  ngOnInit(): void {
    this.refreshRecipeList();
  }

  addClick(){
    this.recipe={
      id:0,
      title:"",
      category:"", 
      kitchen:"",
      ingredients:"", 
      description:"",
      published:"", 
      author:"",
      PhotoFileName:"2.jpg"
    }
    this.ModalTitle="Добавить рецепт";
    this.ActivateAddEditRecipeComp=true;
  }

  editClick(item:any){
    this.recipe=item;
    this.ModalTitle="Редактировать рецепт";
    this.ActivateAddEditRecipeComp=true;
  }

  closeClick(){
    this.ActivateAddEditRecipeComp=false;
    this.refreshRecipeList();
  }

  deleteClick(item:any){
    if(confirm('Вы уверены, что хотите удалить рецепт?')){
      this.service.deleteRecipe(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshRecipeList();
      })
    }
  }


  refreshRecipeList(){
    this.service.getRecipeList()
    .subscribe(data=>{
      // data=data.map(rec=>{return{...rec, photo:`${environment.apiUrl}/media/${rec.photo}`}})
      this.RecipeList=data;
    });
  }

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.photo=data.toString();
      this.photoFilePath=this.service.PhotoUrl+this.photo;
    })
  }

}
