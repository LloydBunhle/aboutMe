import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService} from '../api/images.service';


@Component({
  selector: 'app-fullimage',
  templateUrl: './fullimage.page.html',
  styleUrls: ['./fullimage.page.scss'],
})
export class FullimagePage implements OnInit {

   zoom: any;
  constructor(private route: ActivatedRoute, private imagesService: ImagesService) {
    // accessing the image being passed
    this.zoom = this.route.snapshot.params.src;
    console.log(this.imagesService);
   }

  ngOnInit() {
  }
}
