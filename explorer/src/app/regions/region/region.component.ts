import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExplorerService } from 'src/app/explorer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  region$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private explorerService: ExplorerService
  ) { }

  ngOnInit() {
    const regionCode = this.activatedRoute.snapshot.params.regionCode;
    this.region$ = this.explorerService.getRegionsCode$(regionCode);
  }

}
