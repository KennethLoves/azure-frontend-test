import { Component, OnInit } from '@angular/core';
import { HealthService } from 'app/services/health/health.service';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
// const GRAPH_ENDPOINT = 'https://graph.microsoft-ppe.com/v1.0/me'; // PPE testing environment

interface HealthType {
  statusText?: string;
  status?: number;
  url?: string;
  message?: string;
}

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss'],
})
export class HealthComponent implements OnInit {
  health!: HealthType;

  constructor(private _healthService: HealthService) {}

  ngOnInit() {
    this._healthService.getHealthStatus().subscribe(data => {
      this.health = data;
    });
  }
}
