import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-author',
  templateUrl: './add-edit-author.component.html',
  styleUrls: ['./add-edit-author.component.css']
})
export class AddEditAuthorComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() author:any;
  authorId:string="";
  name:string="";
  surname:string="";
  photo:string="";
  photoFilePath:string="";

  AuthorList:any=[];

  ngOnInit(): void {
    this.authorId=this.author.authorId;
    this.name=this.author.name;
    this.surname=this.author.surname;
    this.photo=this.author.photo;
    this.photoFilePath=this.service.PhotoUrl+this.photo;
  }


  addAuthor(){
    var val = {authorId:this.authorId,
               name:this.name,
               surname:this.surname,
               photo:this.photo};
    this.service.addAuthor(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateAuthor(){
    var val = {authorId:this.authorId,
      name:this.name,
      surname:this.surname,
      photo:this.photo};
    this.service.updateAuthor(val).subscribe(res=>{
    alert(res.toString());
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