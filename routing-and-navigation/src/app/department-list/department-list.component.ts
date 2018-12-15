import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public seletedId: number;

  public departments = [
    {id: 1, name: "Angular"},
    {id: 2, name: "Node"},
    {id: 3, name: "Java"},
    {id: 4, name: "Bootstrap"},
    {id: 5, name: "Spring"},
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.seletedId = id;
    });
  }

  onSelect(department) {
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.activatedRoute});
  }

  isSelected(department) {
    return department.id === this.seletedId;
  }

}
