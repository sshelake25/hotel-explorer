import { Component, OnInit } from '@angular/core';
import { Search } from './search.interface';

import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  result = [];
  errorMessage: string;
  token = '';

  heading: string = "Search Hotels";
  dummy = {
    "currency": "USD",
    "posId": "hbg3h7rf28",
    "orderBy": "price asc, rating desc",
    "roomOccupancies": [
       {
          "occupants": [
             {
                "type": "Adult",
                "age": 25
             }
          ]
       }
    ],
    "stayPeriod": {
       "start": "2018-06-18",
       "end": "2018-06-21"
    },
    "filters": {
       "minHotelPrice": 1,
       "maxHotelPrice": 10000,
       "minHotelRating": 1,
       "maxHotelRating": 5,
       "hotelChains": [
          "Novotel",
          "Marriott",
          "Hilton",
          "Accor"
       ],
       "allowedCountry": "FR"
    },
    "travellerCountryCodeOfResidence": "US",
    "travellerNationalityCode": "US",
    "includeHotelsWithoutRates": false,
    "bounds": {
       "circle": {
          "center": {
             "lat": 49.0097,
             "long": 2.5479
          },
          "radiusKm": 50.5
       }
    }
 };
 
  constructor(private searchSerice: SearchService) {}

  search: Search = {
    location: 'pune',
    checkin: new Date(),
    checkout: new Date(),
    guests: 1
  };

  onSubmit({ value, valid }: { value: Search, valid: boolean }) {
    this.searchSerice
        .postSearchData(this.dummy)
        .subscribe( results => this.result = results,
          error => this.errorMessage = <any>error);

    this.searchSerice.getStaus();

    console.log(this.searchSerice.getCurrentSessionId());
  }
}
