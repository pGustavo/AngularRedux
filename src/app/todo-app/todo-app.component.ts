import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AddTodo, ToggleTodo } from '@state/todo-list/todo-list.actions';
import { State } from '@state/todo-list/todo-list.state';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})

export class TodoAppComponent implements OnInit {

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }
}
