import { Component, OnInit } from '@angular/core';
import {faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  constructor() {
  }

  ngOnInit() {
  }

}
