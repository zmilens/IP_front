import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {

  // filter: string;
  // sorting: string;
  

  constructor(private service: SharedService) { }
  
  AuthorList: any=[];

  ModalTitle:string="";
  ActivateAddEditAuthorComp: boolean=false;
  author: any;
  


  ngOnInit(): void {
    this.refreshAuthorList();
  }

  addClick(){
    this.author={
      authorId:0,
      name:"",
      surname:"", 
      PhotoFileName:"ano.png"
    }
    this.ModalTitle="Добавить автора";
    this.ActivateAddEditAuthorComp=true;
  }

  editClick(item:any){
    this.author=item;
    this.ModalTitle="Редактировать автора";
    this.ActivateAddEditAuthorComp=true;
  }

  closeClick(){
    this.ActivateAddEditAuthorComp=false;
    this.refreshAuthorList();
  }

  deleteClick(item:any){
    if(confirm('Вы уверены, что хотите удалить автора?')){
      this.service.deleteAuthor(item.authorId).subscribe(data=>{
        alert(data.toString());
        this.refreshAuthorList();
      })
    }
  }


  refreshAuthorList(){
    this.service.getAuthorList().subscribe(data=>{
      this.AuthorList=data;
    });
  }


}