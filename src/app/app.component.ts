import {Component, OnInit} from '@angular/core';
import {InfoService} from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstName = '';
  lastName = '';
  telegram = '';

  constructor(private infoService: InfoService) {
  }

  ngOnInit(): void {
    this.getName();
    this.getTelegram();
  }

  getName(): void {
    this.infoService.getMainInfo().subscribe(
      info => {
        this.firstName = info.firstName;
        this.lastName = info.lastName;
      }
    );
  }

  getTelegram(): void {
    this.infoService.getSocialInfo().subscribe(
      socials => {
        for (const social of socials) {
          if (social.name === 'Telegram') {
            this.telegram = social.username;
          }
        }
      }
    );
  }
}
