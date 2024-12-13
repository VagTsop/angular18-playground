import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [AppComponent], //declaration array is for non-standalone compoents
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // imports array can be used for standalone compoents - it also used for including other modules
})
export class AppModule {}
