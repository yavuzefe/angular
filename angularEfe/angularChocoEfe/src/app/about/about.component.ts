import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leader: Leader;
  constructor(private leaderservice: LeaderService,
    private route: ActivatedRoute,
    private location: Location) { }
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.leader = this.leaderservice.getLeader(id);
 }
  goBack(): void {
    this.location.back();
  }
  
}
