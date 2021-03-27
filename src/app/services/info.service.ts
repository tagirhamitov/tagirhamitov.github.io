import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Info} from '../data/info';
import {INFO} from '../mock/mock-info';
import {SocialEntry} from '../data/social-entry';
import {SOCIAL} from '../mock/mock-social';
import {SkillCategory} from '../data/skill-category';
import {SKILLS} from '../mock/mock-skills';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  getMainInfo(): Observable<Info> {
    return of(INFO);
  }

  getSocialInfo(): Observable<SocialEntry[]> {
    return of(SOCIAL);
  }

  getSkillsInfo(): Observable<SkillCategory[]> {
    return of(SKILLS);
  }

  constructor() {
  }
}
