import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Increment, Decrement } from '@state/counter/counter.actions';
import { State } from '@state/counter/counter.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count$: Observable<State>;

  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select('count'));
  }
  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {                                                        // add
    this.store.dispatch(new Decrement());                           // add
  }

  ngOnInit() {
  }

}
