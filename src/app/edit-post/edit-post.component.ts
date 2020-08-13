import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  blogPost: BlogPost;
  tags: string;

  private post;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.post = this.postService.getPostbyId(this.route.snapshot.params['id']).subscribe(data => {
        this.blogPost = data; 
        this.tags = data.tags.toString();
      })
  }

  ngOnDestroy() {
    if (this.post) this.post.unsubscribe();
  }

  onSubmit(): void {
    this.formSubmit();
  }

  formSubmit(): void {
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.postService.updatePostById(this.blogPost._id, this.blogPost).subscribe( () => this.router.navigate(['/admin']));
  }

  
  deletePost() {
    this.postService.deletePostById(this.blogPost._id).subscribe( () => this.router.navigate(['/admin']));
  }
}
