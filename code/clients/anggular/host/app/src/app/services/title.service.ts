
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title) { }

  updateTitle(word: string): void {
    const words = `${word} | ETOS - Management`;
    this.title.setTitle(words);
  }
}
