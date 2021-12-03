import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  baseUrl = "https://api.themoviedb.org/"
  apiKey = "ad0734d0407a5e6f1192e84fc83cf73f"
  query = "new"
  apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDA3MzRkMDQwN2E1ZTZmMTE5MmU4NGZjODNjZjczZiIsInN1YiI6IjYxYThhOTE0ZTI2N2RlMDA4ZTc4MDBjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q0l6b2LUJtMdePoqnQyAdvfBl2hD3n8pCZvKfbAChhU"

  imageBasePath= "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces"
  searchResults = [];
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
 
  public getData() {
    if(this.query)
    this.http.get<any>(this.baseUrl+`3/trending/all/day?query=${this.query}&api_key=${this.apiKey}`)
            .subscribe(data => {
              this.searchResults = data.results
            },
            error => {
            }
    );
  }
} 
