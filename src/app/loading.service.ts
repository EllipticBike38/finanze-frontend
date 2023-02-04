import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private LoadingBool = new BehaviorSubject(true);
  private FirstLoad = new BehaviorSubject(true);
  currentLoadingBool = this.LoadingBool.asObservable();
  currentFirstLoad  = this.LoadingBool.asObservable();
 
  constructor() {
 
  }
  updateLoading(message: boolean) {
  this.LoadingBool.next(message)
  }
  updateFirstLoad(message: boolean) {
  this.LoadingBool.next(message)
  }
}
