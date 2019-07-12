import { Component, OnInit } from '@angular/core';
import { ImagesService} from '../api/images.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchTerm: any = '';
  images: any;

  constructor( private imagesService: ImagesService) {
    console.log(this.imagesService);
  }

  ngOnInit() {
    this.setFilteredImage();

  }
// filtering the image inside array
setFilteredImage() {
  this.images = this.imagesService.filterImage(this.searchTerm);
}

}
