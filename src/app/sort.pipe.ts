import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(recipes: any[], filter: string, sorting: string) {
    if (recipes && sorting){
      switch(sorting){
        case 'id':{
          recipes=recipes.sort((function (a, b){
            if (a.published < b.published)
              return -1;
            else if (a.published > b.published)
              return 1;
            else 
              return 0;
            }))
          break;
        }
        case 'id2':{
          recipes=recipes.sort((function (a, b){
            if (a.published > b.published)
              return -1;
            else if (a.published < b.published)
              return 1;
            else 
              return 0;
          }))
          break;
        }
      }
    }
    if (recipes && filter){
      let filt = recipes.filter(
        recipes => (recipes.title?.toLowerCase().indexOf(filter.toLowerCase())==0 || recipes.author?.toLowerCase().indexOf(filter.toLowerCase())==0 || recipes.category?.toLowerCase().indexOf(filter.toLowerCase())==0));
      return filt;
    }
    return recipes;

  }

}
