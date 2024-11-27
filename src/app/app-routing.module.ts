import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'students',
  //   pathMatch: 'full'
  // },
  {
    path: 'students',
    component: ShowStudentsComponent
  },
  {
    path: 'addStudent',
    component: AddStudentComponent
  },
  { path: 'updateStudent/:id', component: UpdateStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}