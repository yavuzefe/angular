import { Component, OnInit, Inject } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { FeedbackService } from '../services/feedback.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedbacks: Feedback[];
  feedbackForm: FormGroup;
  fb: Feedback;

  constructor(private feedBackService: FeedbackService,
  @Inject ('BaseURL') public BaseURL,
  private fbformbuilding: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.feedBackService.getFeedbacks().subscribe(feedbacks => this.feedbacks = feedbacks);
  }


createForm() {
  this.feedbackForm = this.fbformbuilding.group({
    firstname: '',
    lastname: '',
    message: ''
  });
}
onSubmitFeedback() {
  this.fb = this.feedbackForm.value;
  console.log(this.fb);
  this.feedbacks.push(this.fb);
  this.feedBackService.addFeedbacks(this.fb).subscribe(fb => this.feedbacks.push(this.fb));
  this.feedbackForm.reset({
    firstname: '',
    lastname: '',
    message: ''
  });
}

}
