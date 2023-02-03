import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private LoadingBool = new BehaviorSubject(true);
  currentLoadingBool = this.LoadingBool.asObservable();
 
  constructor() {
 
  }
  updateLoading(message: boolean) {
  this.LoadingBool.next(message)
  }
}
