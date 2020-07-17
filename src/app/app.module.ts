import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { MaterialModule } from './material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { LogindataService } from './logindata.service';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { DialogcontentComponent } from './dialogcontent/dialogcontent.component';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogueboxComponent } from './dialoguebox/dialoguebox.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SampleComponent,
    FormComponent,
    LoginComponent,
    DataComponent,
    ServiceExampleComponent,
    DialogcontentComponent,
    DialogueboxComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,

    MaterialModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    HttpClientModule,
    MatDialogModule
  ],
  providers: [LogindataService],
  bootstrap: [AppComponent],
  entryComponents: [
  DialogueboxComponent
  ],

})
export class AppModule { }
