import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Car } from "@inventory/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  model = 'cars';

  constructor(private httpClient: HttpClient) {}

  all(){
    return this.httpClient.get<Car[]>(this.getUrl());
  }

  find(carId: string) {
    return this.httpClient.get<Car>(this.getUrlById(carId))
  }

  create(cars: Car) {
    return this.httpClient.post<Car>(this.getUrl(), cars)
  }

  update(cars: Car) {
    return this.httpClient.patch<Car>(this.getUrlById(cars.id), cars)
  }

  delete({id}: Car) {
    return this.httpClient.delete<Car>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
