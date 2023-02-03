import { Abbonamento } from './../HTTP.service';
import { CommonModule } from '@angular/common';
import { LoadingService } from './../loading.service';
import { Component } from '@angular/core';
import { HTTPService, Transazione } from '../HTTP.service';
import * as moment from 'moment-timezone';


@Component({
  selector: 'app-menu-principale',
  templateUrl: './menu-principale.component.html',
  styleUrls: ['./menu-principale.component.scss'],
  providers: [HTTPService],
})
export class MenuPrincipaleComponent {
  public transazioni: Transazione[]
  public subs: Abbonamento[]
  trans_end: boolean = false
  subs_end: boolean = false
  public Math
  constructor(private api: HTTPService, private loadingService: LoadingService) {
    this.subs = []
    this.transazioni = []
    this.Math=Math
  }
  ngOnInit() {
    this.get_all_transactions();
    this.get_all_subscriptions();
  }
  /**
   * get_all_transactions
   */
  public get_all_transactions() {
    this.api.get('/transaction').subscribe(data => {
      ;
      this.transazioni = (<{ transazioni: Transazione[] }>data).transazioni.sort((a, b) => { 
          
          return Date.parse(<string><unknown>a.date) - Date.parse(<string><unknown>b.date) });
      console.log(this.transazioni);
      this.trans_end = true
      if (this.subs_end) {
        this.loadingService.updateLoading(false)

      }
    });
  }
  /**
   * get_all_subscriptions
   */
  public get_all_subscriptions() {
    this.api.get('/subs').subscribe(data => {
      ;
      this.subs = (<{ abbonamenti: Abbonamento[] }>data).abbonamenti.sort((a, b) => a.inizio.valueOf() - b.inizio.valueOf());
      console.log(this.subs);
      this.subs_end = true
      if (this.trans_end) {
        this.loadingService.updateLoading(false)

      }
    });
  }
  public format_date(date: Date) {
    let newDate = moment.tz(date, "Europe/London");
    let formattedDate = moment.tz(newDate, "Europe/Rome").format("DD/MM/YYYY - HH:mm");
    return formattedDate
  }

}
