import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.css']
})
export class WorkExamplesComponent implements OnInit {

  constructor() { }

  public images: GalleryItem[] = [];

  ngOnInit(): void {
    this.images = [
      new ImageItem({ src: 'assets/images/welding-example1.jpeg', thumb: 'assets/images/welding-example1.jpeg' }),
      new ImageItem({ src: 'assets/images/welding-example2.jpeg', thumb: 'assets/images/welding-example2.jpeg' }),
      new ImageItem({ src: 'assets/images/welding-example3.jpg', thumb: 'assets/images/welding-example3.jpg' }),
      new ImageItem({ src: 'assets/images/welding-example4.jpeg', thumb: 'assets/images/welding-example4.jpeg' }),
      new ImageItem({ src: 'assets/images/welding-example5.jpeg', thumb: 'assets/images/welding-example5.jpeg' }),
    ];
  }

}
