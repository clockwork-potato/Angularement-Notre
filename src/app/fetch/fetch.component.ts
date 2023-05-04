import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit  {
  temperatures: number[] = [];
 
  ngOnInit(): void {
    this.fetchWeatherData();
  }

  fetchWeatherData(): void {
    
    const apiUrl: string = `https://api.open-meteo.com/v1/forecast?latitude=43.60&longitude=1.44&hourly=temperature_2m`;
    
    fetch(apiUrl)
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error('Erreur lors de la récupération des données météo');
        }
      })
      .then((data) => {
        console.log(data);
        this.temperatures = data.hourly.temperature_2m;
        

      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données météo:', error);
      });
  }
}
