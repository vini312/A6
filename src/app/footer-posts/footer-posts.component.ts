import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  blogPosts : Array<BlogPost>;
  
  posts:any;
  
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts(1, null, null).subscribe(data => this.blogPosts = data.slice(0,3));
  }

}
