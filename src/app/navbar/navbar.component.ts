import { LoadingService } from './../loading.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loading=true
  constructor(private loadingService:LoadingService){
    loadingService.currentLoadingBool.subscribe(bool => {this.loading=bool})
  }
  /**
   * close
   */
  public close() {
  }
}
