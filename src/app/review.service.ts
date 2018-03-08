import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Review } from './review';
import { REVIEWS } from './mock-reviews';
import { MessageService } from './message.service'

@Injectable()
export class ReviewService {

  constructor(private messageService: MessageService) { }

  getReviews(): Observable<Review[]> {
    this.messageService.add('ReviewService: fetching reviews');
    return of(REVIEWS);
  }

}
