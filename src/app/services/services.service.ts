import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../models/repository';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  user!: User;
  repos: Repository[] = [];
  username!: string;
  reponame!: string;
  repositories!: string;



  requestUserInfo(username: string){
    interface userApiResponse{
         name:string,
         login:string,
         bio: string,
         url: string,
         followers: number,
         following: number,
         public_repos: number,
         created_at: Date,
         avatar_url: string,
        
    }
   

let promise =new Promise<void> ((resolve, reject)=>{
     this.http.get<userApiResponse>(`https://api.github.com/users/${username}?client_id=1179d43fb4eb61d15d6b3855fd52434a802d74e4`).toPromise().then(response =>{
            this.user.name = response!.name 
            this.user.login= response!.login           
            this.user.bio  = response!.bio            
            this.user.followers=response!.followers
            this.user.following =  response!.following
            this.user.public_repos =  response!.public_repos
            this.user.created_at =  response!.created_at
            this.user.avatar_url =  response!.avatar_url
            
            resolve()
        },
        error =>{
            this.user.login ="User not found"
            console.log("An error occured")
            reject(error)
        }
        )
    })

    return promise

   }

   requestRepositories(username: string){
     interface repoApiResponse{
      name: string,
      description: string,
      language: string,
      html_url: string,
      forks: number
     }
     
     let promise = new Promise<void> ((resolve,reject)=>{
      let arrayLength = this.repos.length;

      for (let i=0; i<arrayLength; i++){
          this.repos.pop()
      }
      this.http.get<repoApiResponse>(`https://api.github.com/users/${username}/repos?client_id=1179d43fb4eb61d15d6b3855fd52434a802d74e4`).toPromise().then(response=>{
        for (let i=0; i<this.user.public_repos; i++){
            let repo = new Repository("","","","",0)


          this.repos;response!.name
          this.repos;response!.description
          this.repos;response!.language
          this.repos;response!.html_url
          this.repos;response!.forks


            this.repos.push(repo)
        }
        resolve()
    },

    error => {
        console.log("an error occurred")
        reject(error)
    }
    )
   })

    return promise
     }
  

   constructor(private http: HttpClient, private route: ActivatedRoute ) {
    this.user = new User ("","","",0,0,0,new Date(),"")
   }

  
}