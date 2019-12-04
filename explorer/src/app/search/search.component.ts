import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  incomeLevels$ = this.explorerService.getIncomeLevels$();
  countries$: Observable<any[]>;

  constructor(private explorerService: ExplorerService) { }

  ngOnInit() {
  }

  onPost(filters) {
    this.countries$ = this.explorerService.getIncomeLevelId$(filters.incomeLevel);
    console.log(filters.incomeLevel);
  }

}
