import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  constructor( ) { }
  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  // dropdown buttons
  public status: { isopen } = { isopen: false };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }


}
