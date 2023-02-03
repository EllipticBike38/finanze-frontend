import { Component } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.scss']
})
export class CorpoComponent {
  constructor(private loadingService: LoadingService){
    
  }
  ngOnInit(){
    
    this.loadingService.updateLoading(true)
  }
}
