import { Injectable } from '@angular/core';
import { Globals } from '../Globals';
import { HttpClient, HttpHeaders  ,HttpErrorResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class AuthService {
  
  fullurl:any = '';
  constructor(
    private global:Globals ,
    private http: HttpClient
  ) { }
  getLogin(loginname:string,pwd:string):Observable<any>{
    this.fullurl = '';
    // let headers = new Headers({'Content-Type': 'application/json'});
    // let opt = { responseType: 'text' as 'text' };
     this.fullurl = this.global.weburl + 'auth/login'+'/'+loginname +'/'+pwd ;
    // this.fullurl = this.global.weburl + "auth/login";
    
      return  this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
    
    
    //console.log(this.fullurl);
  // return this.http.get<String>(this.fullurl)
  //                   .catch(this.errorHandler);
    
  }
  
  
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
