import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio_site';
  loadedFeature = 'about';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
