import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://ip.std-860.ist.mospolytech.ru";
  readonly PhotoUrl = "http://ip.std-860.ist.mospolytech.ru/media/";
  
  constructor(private http: HttpClient) { }

  getAuthorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api_author/');
  }

  addAuthor(val: any){
    return this.http.post(this.APIUrl + '/api_author/', val);
  }

  updateAuthor(val: any){
    return this.http.put(this.APIUrl + '/api_author/', val);
  }

  deleteAuthor(val:any){
    return this.http.delete(this.APIUrl + '/api_author/'+val);
  }

  getRecipeList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api_recipe/');
  }

  addRecipe(val: any){
    return this.http.post(this.APIUrl + '/api_recipe/', val);
  }

  updateRecipe(val: any){
    return this.http.put(this.APIUrl + '/api_recipe/', val);
  }

  deleteRecipe(val:any){
    return this.http.delete(this.APIUrl + '/api_recipe/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/SaveFile', val);
  }

  getCategory():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api_category/');
  }

  getKitchen():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api_kitchen/');
  }

  loginUser(userData:any){
    return this.http.post(this.APIUrl + '/auth/', userData)
      .pipe(tap((data:any)=> this.setLocalStorage(data.token, data.is_superuser)
        ))

  }

  setLocalStorage(accessToken: string, userType: boolean){
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userType', String(userType));
  }

}
