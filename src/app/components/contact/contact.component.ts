import {Component, OnInit} from '@angular/core';
import {SocialEntry} from '../../data/social-entry';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  socials: SocialEntry[] = [];

  constructor(private infoService: InfoService) {
  }

  ngOnInit(): void {
    this.getSocial();
  }

  getSocial(): void {
    this.infoService.getSocialInfo().subscribe(
      socials => this.socials = socials
    );
  }
}
