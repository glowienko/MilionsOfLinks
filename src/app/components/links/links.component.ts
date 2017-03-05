import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: any;

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getLinks()
        .subscribe(links => {
          console.log(links);
          this.links = links;
        });
   }

  ngOnInit() {
  }

}
