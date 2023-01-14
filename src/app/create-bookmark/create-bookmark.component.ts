import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.css']
})
export class CreateBookmarkComponent {
  bookmarkForm = this.fb.group({
    title: ['', [Validators.required]],
    url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
  })
  submit: boolean = false;

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  
  createBookmark() {
    this.submit = true;
    console.log("this.bookmarkForm",this.bookmarkForm)
    var today = new Date().toISOString().substring(0, 10);
    if (this.bookmarkForm.valid) {
      let args = {
        title : this.bookmarkForm.value.title,
        url : this.bookmarkForm.value.url,
        date: today
      }
      console.log(args)
     this.ds.createBookmark(args)
     .subscribe((result:any)=>{
      if (result) {
        console.log(result.message);
        alert(result.message)
        this.router.navigateByUrl("")
      }
     }, err=>{
    })
     
    }
   
  }
}
