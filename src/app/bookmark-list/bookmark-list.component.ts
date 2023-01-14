import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent {
  lists: any;
  constructor(private ds: DataService){}
  ngOnInit(): void {
    this.ds.listBookmark()
    .subscribe((result:any)=>{
     if (result) {
       console.log(result.data);
       this.lists = result.data;
       this.lists.map((data1:  any) => {
        // data.date
        console.log("1",data1.date)
        const str = data1.date;
      const [year,month, day ] = str.split('-');

console.log(day); // 👉️ 22
console.log(month); // 👉️ 04
console.log(year); // 👉️ 2022

const date = new Date(+year, month - 1, +day);
console.log(date); // 👉️ Fri Apr 22 2022
       })
     }
    }, err=>{
   })
  }

}
