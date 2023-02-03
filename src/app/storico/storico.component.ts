import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { bindCallback } from 'rxjs';
import { Abbonamento, HTTPService, Transazione } from '../HTTP.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-storico',
  templateUrl: './storico.component.html',
  styleUrls: ['./storico.component.scss']
})
export class StoricoComponent {    
  public transazioni: Transazione[]
  public subs: Abbonamento[]
  trans_end: boolean = false
  subs_end: boolean = false
  slideTrans=new FormControl(1)
  slideAbb=new FormControl(1)
  public Math
  constructor(private api: HTTPService, private loadingService: LoadingService) {
    this.subs = []
    this.transazioni = []
    this.Math=Math
    
    
  }
  ngOnInit() {
    this.loadingService.updateLoading(true)
    this.get_all_transactions();
    this.get_all_subscriptions();
    this.slideTrans.valueChanges.subscribe((num)=>{
      let slider=document.getElementById("trans-slides")
      let slider_wrapper=document.getElementById("trans-slides-wrapper")
      if (!slider || !num || !slider_wrapper) return
      let position=-(slider.offsetWidth-slider_wrapper.clientWidth)*(num-1)/999
      slider.style.left=position.toString()+'px'
      
    })
    this.slideAbb.valueChanges.subscribe((num)=>{
      let slider=document.getElementById("subs-slides")
      let slider_wrapper=document.getElementById("subs-slides-wrapper")
      if (!slider || !num || !slider_wrapper) return
      let position=-(slider.offsetWidth-slider_wrapper.clientWidth)*(num-1)/999
      slider.style.left=position.toString()+'px'
      
    })
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
