import {Component, OnInit} from '@angular/core';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  firstName = '';
  lastName = '';
  age = 0;
  status = '';
  occupation = '';

  constructor(private infoService: InfoService) {
  }

  ngOnInit(): void {
    this.getMainInfo();
  }

  getMainInfo(): void {
    this.infoService.getMainInfo().subscribe(
      info => {
        this.firstName = info.firstName;
        this.lastName = info.lastName;
        this.age = this.calculateAge(info.birthDateStr);
        this.status = info.status;
        this.occupation = info.occupation;
      }
    );
  }

  calculateAge(birthDateStr: string): number {
    const birthDate = new Date(birthDateStr);
    const diff = Date.now() - birthDate.getTime();
    const ageDt = new Date(diff);
    return ageDt.getFullYear() - 1970;
  }

}
