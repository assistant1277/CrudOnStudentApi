import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  updateStudentForm= new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    age: new FormControl('',[Validators.required,Validators.min(1)]),
    date: new FormControl('',Validators.required),
    isMale: new FormControl(false)
  });

  studentId:string='';
  rollNo:number=0;

  constructor(
    private studentService:StudentService,
    private route:ActivatedRoute,
    private router:Router,
    private snackBar:MatSnackBar
  ) {
    this.studentId=this.route.snapshot.paramMap.get('id')!;
    this.loadStudentData(this.studentId);
  }

  loadStudentData(id:string) {
    this.studentService.getStudents().subscribe((students:any) => {
      const student=students.find((s:any)=>s.id === id);
      if (student) {
        this.rollNo=student.rollNo;

        this.updateStudentForm.patchValue({
          name:student.name,
          email:student.email,
          age:student.age,
          date:student.date,
          isMale:student.isMale
        });
      }
    });
  }

  updateStudent() {
    if (this.updateStudentForm.invalid) {
      return;
    }
      
    const updatedData= {
      rollNo:this.rollNo,
      name:this.updateStudentForm.value.name,
      email:this.updateStudentForm.value.email,
      age:this.updateStudentForm.value.age,
      date:this.updateStudentForm.value.date,
      isMale:this.updateStudentForm.value.isMale
    };

    this.studentService.updateStudent(this.studentId,updatedData).subscribe(()=> {
      this.snackBar.open('Student updated successfully','close',{
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