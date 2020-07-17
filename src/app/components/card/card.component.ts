import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() size: String = ''; // bootstrap size modificator

  constructor() {
  }

  ngOnInit(): void {
  }

}
