import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-epic-app';
  status = '';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
