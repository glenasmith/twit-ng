import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedService } from '../feed.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public form : FormGroup;
  // form = new FormGroup({
  //   username: new FormControl("your username", [ Validators.required]),
  //   password: new FormControl("your password", [Validators.required]),
  //   rememberme: new FormControl(true)
  // })


  constructor(private formBuilder : FormBuilder, private feedService: FeedService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberme: [true]
    });
  }

  OnSubmit(jsonForm) {
    console.log(jsonForm);
  }

}
