import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { DialogcontentComponent } from './dialogcontent/dialogcontent.component';


const routes: Routes = [
 {
  path: 'test',
  component: TestComponent
 } ,
 {
  path: 'sample',
  component: SampleComponent
 } ,
 {
  path: 'form',
  component: FormComponent
 } ,
 {
  path: 'login',
  component: LoginComponent
 } ,
 {
  path: 'data',
  component: DataComponent
 } ,{
  path: 'dialogcontent',
  component: DialogcontentComponent
 } ,
 {
  path: 'serviceExample',
  component:ServiceExampleComponent
 } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
