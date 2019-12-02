import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countrie',
  templateUrl: './countrie.component.html',
  styleUrls: ['./countrie.component.css']
})
export class CountrieComponent implements OnInit {
  countrie$;

  constructor(activatedRoute: ActivatedRoute, private homeService: HomeService) { 
    const countrieId = activatedRoute.snapshot.params.id;
    this.countrie$ = homeService.getCountrieId$(countrieId);
  }

  ngOnInit() {
  }

}
