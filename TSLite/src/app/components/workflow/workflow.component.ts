import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tslite-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {


  constructor(private router:Router) { }

  private getAllImportedFiles (files:File[])
  {

  }

onRelod()
{
 this.router.navigate(['/Dashboard'])
}

  ngOnInit() {
  }

}
