import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// Importing services
import { TemplateService } from '../../services/template.service';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  tables;

  constructor(private route: ActivatedRoute, private router: Router, private testService: TemplateService, private httpService: HttpService) {

    console.log('the test component is loaded.');
  }

  ngOnInit() {
    this.httpService.getTableData()
    .then(data => {
      console.log(data);
      this.tables = data.subjects;
    });
  }

}
