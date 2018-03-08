import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ReviewService } from '../review.service'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[];
  selectedReview: Review;

  constructor(private reviewService: ReviewService) { }

  onSelect(review: Review): void {
    this.selectedReview = review;
  }

  getReviews(): void {
    this.reviewService.getReviews()
      .subscribe(reviews => this.reviews = reviews);
  }

  ngOnInit() {
    this.getReviews();
  }

}
