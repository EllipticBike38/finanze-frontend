import { HTTPService, Transazione } from '../HTTP.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu-laterale',
  templateUrl: './menu-laterale.component.html',
  styleUrls: ['./menu-laterale.component.scss']
})
export class MenuLateraleComponent {
  
  message='ciao'
  titolo = new FormControl('')
  descrizione = new FormControl('')
  giorno = new FormControl('')
  mese = new FormControl(0)
  importo = new FormControl('')
}
