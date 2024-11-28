import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent{
  newStudentForm = new FormGroup({
    rollNo:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    age:new FormControl('',[Validators.required,Validators.min(1)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    date:new FormControl('',Validators.required),
    isMale:new FormControl(false)
});

constructor(
  private studentService:StudentService,
  private router:Router,
  private snackBar:MatSnackBar
) {}
addNewStudent() {
  if (this.newStudentForm.invalid) {
    return;
  }
  this.studentService.addStudent(this.newStudentForm.value).subscribe(()=> {
    this.snackBar.open('Student added successfully','close', {
      duration:3000,
      verticalPosition:'top', 
      panelClass:['success-snackbar']
    });
  });
}
goBack() {
  this.router.navigate(['/students']);
  }
}