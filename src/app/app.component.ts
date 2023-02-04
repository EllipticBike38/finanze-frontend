import { Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-3';
  loading:boolean=false
  constructor(private loadingService: LoadingService) {
    loadingService.currentLoadingBool.subscribe(bool => {this.loading=bool})
    
  }
}