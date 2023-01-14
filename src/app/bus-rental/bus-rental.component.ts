import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-rental',
  templateUrl: './bus-rental.component.html',
  styleUrls: ['./bus-rental.component.scss'],
})
export class BusRentalComponent implements OnInit {
  servicesData = [
    {
      img: '../../assets/images/service_1.svg',
      title: 'Taxi Service Jaipur',
      detail:
        'Rajputana Cabs, started as a taxi service provider in Jaipur in 2013 & today we are rated as the best in business by travellers who have taken our service.',
    },
    // {
    //   img: '../../assets/images/service_1.svg',
    //   title: 'Taxi Service Jaipur',
    //   detail:
    //     'Rajputana Cabs, started as a taxi service provider in Jaipur in 2013 & today we are rated as the best in business by travellers who have taken our service.',
    // },
  ];
  tripPlanData = [
    {
      img: '../../assets/images/india_gate.svg',
      trip_length: '2 Days - 1 Night',
      from: 'Jaipur',
      to: 'Delhi',
      about: 'A Journey into Nature',
      no_of_stops: 4,
      price: 2000,
    },
    {
      img: '../../assets/images/india_gate.svg',
      trip_length: '2 Days - 1 Night',
      from: 'Jaipur',
      to: 'Delhi',
      about: 'A Journey into Nature',
      no_of_stops: 4,
      price: 2000,
    },
    {
      img: '../../assets/images/india_gate.svg',
      trip_length: '2 Days - 1 Night',
      from: 'Jaipur',
      to: 'Delhi',
      about: 'A Journey into Nature',
      no_of_stops: 4,
      price: 2000,
    },
    {
      img: '../../assets/images/india_gate.svg',
      trip_length: '2 Days - 1 Night',
      from: 'Jaipur',
      to: 'Delhi',
      about: 'A Journey into Nature',
      no_of_stops: 4,
      price: 2000,
    },
    {
      img: '../../assets/images/india_gate.svg',
      trip_length: '2 Days - 1 Night',
      from: 'Jaipur',
      to: 'Delhi',
      about: 'A Journey into Nature',
      no_of_stops: 4,
      price: 2000,
    },
    {
      img: '../../assets/images/india_gate.svg',
      trip_length: '2 Days - 1 Night',
      from: 'Jaipur',
      to: 'Delhi',
      about: 'A Journey into Nature',
      no_of_stops: 4,
      price: 2000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
