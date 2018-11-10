import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DbService } from '../services/db.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransactionModel } from 'src/app/shared/models/transactionModel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  frmTransaction: FormGroup;
  frmEmail: FormGroup;

  transactions: TransactionModel[];
  found: boolean;

  constructor(private modalService: NgbModal, private db: DbService, private fb: FormBuilder) { }

  ngOnInit() {
    this.frmTransaction = this.fb.group({
      sothe: ""
    });

    this.frmEmail = this.fb.group({
      email: ""
    });
  }

  openCheckTransactionResult(content) {
    this.db.checkCard(this.frmTransaction.value.sothe).subscribe(res => {
      this.transactions = res;
    });

    this.modalService.open(content, { centered: true });
  }

  openCheckEmailResult(content) {
    this.db.checkEmail(this.frmEmail.value.email).subscribe(res => {
      this.found = res;
    });

    this.modalService.open(content, { centered: true });
  }
}
