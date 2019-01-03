import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  title;
  lowImages;
  highImages;
  showLow = true;
  highResloaderCount = 0;


  projects = {
    p1: {
      images: {

        low: [
          '/assets/images/low/low-image.jpeg'
        ],

        high : [
          'https://storage.googleapis.com/consulting-projects-fountane/high_res/Aquamarine/img-26.png'
        ]

      }
    }
  };

  ngOnInit() {

    this.route.params.subscribe(route_data => {
        console.log(route_data);
        this.title = route_data.title;

        if (this.projects[this.title]) {
          console.log('Loading the low res images');
          this.lowImages = this.projects[this.title].images.low;
          console.log(this.lowImages);


          console.log('Loading the high images');
          this.highImages = this.projects[this.title].images.high;

        } else {
          console.log('Invalid route');
        }
    });

  }

  imagesLoaded() {
    console.log(this.highResloaderCount + ' have been loaded');
    this.highResloaderCount += 1;

    if (this.highResloaderCount === this.lowImages.length) {
      this.showLow = !this.showLow;
    }
  }
}
