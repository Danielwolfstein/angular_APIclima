  export interface Weather {
      id: number;
      main: string;
      description: string;
      icon: string;
  }

  export interface Main {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
  }

  export interface Wind {
      speed: number;
      deg: number;
  }


  export interface Sys {
      type: number;
      id: number;
      message: number;
      country: string;
      sunrise: number;
      sunset: number;
  }

  export interface WeatherData {
      weather: Weather[];
      main: Main;
      wind: Wind;
      sys: Sys;
      timezone: number;
      name: string;
  }

  export interface Coord {
    longitude: number;
    latitude: number;
}

