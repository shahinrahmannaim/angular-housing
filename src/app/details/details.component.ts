import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocation} from '../housingLocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
 
template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" alt="">
      <section class="listing-description">
        <h2 class="heading"> {{housingLocation?.name}} </h2>
        <p> class="listing-location">{{housingLocation?.city}}
          {{housingLocation?.state}}
        </p>
        
      </section>

      <section class="listing-features">
        <h2 class="section-heading" > About this location </h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Dose this Location have wifi: {{housingLocation?.wifi}}</li>
          <li>Dose this Location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;


  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'],10);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
