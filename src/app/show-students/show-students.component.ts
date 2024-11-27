import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css'],
})
export class ShowStudentsComponent {
  studentData: any = [];
  displayedColumns: string[] = [
    'rollNo',
    'name',
    'age',
    'email',
    'date',
    'isMale',
    'actions',
  ];

  constructor(private studentService: StudentService) {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe((data: any) => {
      this.studentData = data;
    });
  }

  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();// here we are doing reload after deletion
    });
  }
}