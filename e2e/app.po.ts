/* tslint:disable */
import { browser, element, by } from 'protractor';

export class NgCourseWorkPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
