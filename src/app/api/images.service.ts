import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  public Image: any = [];

  constructor() {
    // initialising array data
    this.Image = [
      {
        id: 1,
        title: 'Code background',
        src: 'pic.jpg'
      },
      {
        id: 2,
        title: 'Computer',
        src: 'pic1.jpg'
      },
      {
        id: 3,
        title: 'Hacking',
        src: 'pic2.jpg'
      },
      {
        id: 4,
        title: 'Office Desk',
        src: 'pic3.jpg'
      },
      {
        id: 5,
        title: 'Office Desk 2',
        src: 'pic4.jpg'
      },
      {
        id: 6,
        title: 'Team Meeting',
        src: 'pic5.jpg'
      }
];
   }

   // filer the images by title
   filterImage(searchTerm) {
    return this.Image.filter(image => {
      return image.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
