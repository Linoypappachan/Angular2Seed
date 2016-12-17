import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {AngularstarterWithYomen} from 'angularstarter-with-yomen';

@Component({
  selector: 'main'
})

@View({
  directives: [AngularstarterWithYomen],
  template: `
    <angularstarter-with-yomen></angularstarter-with-yomen>
  `
})

class Main {

}

bootstrap(Main);
