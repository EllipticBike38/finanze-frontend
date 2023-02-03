import { Component } from '@angular/core';
import { HTTPService, Transazione } from '../HTTP.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss']
})
export class SaldoComponent {

  transazioni: Transazione[]
  this_month: number
  this_year: number
  this_last_30_days: number
  this_last_7_days: number
  public Math
  constructor(private api: HTTPService) {
    this.transazioni = []
    this.this_month = 0
    this.this_year = 0
    this.this_last_30_days = 0
    this.this_last_7_days = 0
    this.Math=Math
  }
  /**
   * get_transactions
   */
  ngOnInit() {
    let proc = this.get_transactions().add(() => {
      this.this_month = this.get_this_month();
      this.this_year = this.get_this_year();
      this.this_last_30_days = this.get_last_n_days(30);
      this.this_last_7_days = this.get_last_n_days(7);

    });



  }
  public get_transactions() {

    return this.api.get('/transaction').subscribe(data => {
      ;
      this.transazioni = (<{ transazioni: Transazione[] }>data).transazioni.sort((a, b) => {

        return Date.parse(<string><unknown>a.date) - Date.parse(<string><unknown>b.date)
      });

    });

  }
  /**
   * get_this_month
   */
  public get_this_month() {
    let month = new Date(Date.now()).getMonth()
    let saldo = 0

    for (let tran of this.transazioni) {
      if (new Date(Date.parse(<string><unknown>tran.date)).getMonth() == month) {
        saldo += tran.costo
      }
    }
    return saldo
  }
  /**
   * get_this_year
   */
  public get_this_year() {
    let year = new Date(Date.now()).getFullYear()
    let saldo = 0

    for (let tran of this.transazioni) {
      if (new Date(Date.parse(<string><unknown>tran.date)).getFullYear() == year) {
        saldo += tran.costo
      }
    }

    return saldo
  }
  /**
   * get_last_n_days
   */
  public get_last_n_days(days: number) {
    var d = new Date();
    d.setDate(new Date().getDate() - days);
    let saldo = 0
    
    for (let tran of this.transazioni.reverse()) {
      if (new Date(Date.parse(<string><unknown>tran.date)).valueOf() > d.valueOf()) {
        saldo += tran.costo
      }
    }
    return saldo
  }
}
