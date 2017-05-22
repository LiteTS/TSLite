import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'TSLite-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }



onRelod()
{
 this.route.navigate(['/WorkFlow'])
}
}
