import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = his.activatedRouter.snapshot.paramMap.get('id');
    // let id = parseInt(this.activatedRouter.snapshot.paramMap.get('id')); // Not initialize previous component
    // this.departmentId = id;
    
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });

  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  onBack() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId, test:"test"}]);
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(["../", {id: selectedId}], {relativeTo: this.activatedRoute});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.activatedRoute});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.activatedRoute});
  }

}
