import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Data, Poem, PoemI } from '../model/Poem'

@Injectable({
  providedIn: 'root'
})
export class ApiLoadingService {
  private rootURL: string

  constructor(private http: HttpClient) { 
    this.rootURL = 'https://poetrydb.org'
  }

  getAllPoemTitles() {
    
    return this.http.get<Data>(this.rootURL + '/title')
  }
  
  getAllPoemAuthors() {
    return this.http.get<Data>(this.rootURL + '/author')
  }  
  
  getPoemsWithTitle(title: string) {
    return this.http.get<Array<PoemI>>(this.rootURL + '/title/' + title)
  }

  getPoemsWithAuthor(author: string) {
    return this.http.get<Array<PoemI>>(this.rootURL + '/author/' + author)
  }
}
