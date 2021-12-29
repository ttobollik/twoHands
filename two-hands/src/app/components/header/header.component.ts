import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentPage = 'home';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  scrollToAnchor(anchor: string) {
    const anchorEl = document.querySelector('#' + anchor);
    this.currentPage = anchor;

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
  
  getActivePageClass( page : string): string {
    const test =  page === this.currentPage ? 'nav-item active' : 'nav-item'; 
    console.log(test)
    return test;
  }



}
