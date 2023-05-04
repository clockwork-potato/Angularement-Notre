import { Component, OnInit } from '@angular/core';

interface WeatherData {
  hourly: {
    temperature_2m: number[];
  };
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit  {
  temperatures: number[] = [];
  lat: string ='';
 
  ngOnInit(): void {
    this.fetchWeatherData();
  }
  fetchWeatherData(): void {
    const apiUrl: string = `https://api.open-meteo.com/v1/forecast?latitude=43.60&longitude=1.44&hourly=temperature_2m`;

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erreur lors de la récupération des données météo');
        }
      })
      .then((data: WeatherData) => {
        console.log(data);
        this.temperatures = data.hourly.temperature_2m;
        this.lat = `Latitude: ${data.latitude} Longitude: ${data.longitude}`;
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données météo:', error);
      });
  }
}
