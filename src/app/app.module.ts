import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ReviewService } from './review.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    ReviewDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ReviewService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
