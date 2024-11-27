import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students';
  constructor(private http:HttpClient) { }
  //url2 = 'http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students';
  getStudents(){
    return this.http.get(this.url);
  }

  addStudent(newStudentData:any){
    return this.http.post(this.url,newStudentData);
  }
  deleteStudent(id:any){
    return this.http.delete(this.url+"/"+id);
  }
  updateStudent(id: string, updatedData: any) {
    return this.http.put(`${this.url}/${id}`, updatedData);
  }
  
}
