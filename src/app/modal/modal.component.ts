import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() accountName;
  @Input() toAccount;
  @Input() amount;

  constructor(public activeModal: NgbActiveModal) {
  }


  ngOnInit(): void {
  }

}
