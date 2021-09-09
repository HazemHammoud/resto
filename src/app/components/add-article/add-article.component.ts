import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

articleForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.articleForm=this.formBuilder.group({

      title:[''],
      date:[''],
      category:[''],
      content:[''],
     
    })
  }
  addArticle(){
    alert('article added');
    console.log('here my article object', this.articleForm.value);
  }
}
