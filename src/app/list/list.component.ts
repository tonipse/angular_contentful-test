import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  lessons: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    this.contentfulService
      .getContent()
      .then((lessons) => (this.lessons = lessons));
  }
}
