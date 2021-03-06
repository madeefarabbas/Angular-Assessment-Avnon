import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AddQuestionComponent } from './questions/add-question/add-question.component';
import { RouterModule, Routes } from '@angular/router';
import { PreviewQuestionsComponent } from './questions/preview-questions/preview-questions.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/add-question'},
  {path: 'add-question', component: AddQuestionComponent},
  {path: 'edit/:id', component: AddQuestionComponent},
  {path: 'preview-questions', component: PreviewQuestionsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    PreviewQuestionsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
