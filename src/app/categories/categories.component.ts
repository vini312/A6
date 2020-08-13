import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  cat: any;
  categories: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.cat = this.postService.getCategories().subscribe(data => this.categories = data);
  }

}
