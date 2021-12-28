import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  scrollToAnchor(anchor: string) {
    const anchorEl = document.querySelector('#' + anchor);

    if (anchor !== null && anchorEl !== null) {
      anchorEl.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  openSnackbar(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000
    });
  }



}
