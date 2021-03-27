import {Component, OnInit} from '@angular/core';
import {SkillCategory} from '../../data/skill-category';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: SkillCategory[] = [];

  constructor(private infoService: InfoService) {
  }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.infoService.getSkillsInfo().subscribe(
      skills => this.skills = skills
    );
  }
}
