import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  perPage = 6;

  getAllPosts(): Observable<BlogPost[]> {
    const perPage = Number.MAX_SAFE_INTEGER.toString();

    return this.http.get<BlogPost[]>(`https://shrouded-citadel-10425.herokuapp.com/api/posts?page=1&perPage=${this.perPage}`);
  }
  
  getPosts(page, tag, category): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`https://shrouded-citadel-10425.herokuapp.com/api/posts?page=${page}&perPage=${this.perPage}` + (tag != null? `&tag=${tag}`: '') + (tag != null? `&category=${category}`: '') );
  }

  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://shrouded-citadel-10425.herokuapp.com/api/posts/${id}`)
  }

  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://shrouded-citadel-10425.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://shrouded-citadel-10425.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://shrouded-citadel-10425.herokuapp.com/api/posts/${id}`);
  }


  getCategories(): Observable<any> {
    return this.http.get<any>(`https://shrouded-citadel-10425.herokuapp.com/api/categories`)
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://shrouded-citadel-10425.herokuapp.com/api/tags`)
  }
}
