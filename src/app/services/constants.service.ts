import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
public ENGINE = {
  1: '1.5',
  2: '1.6',
  3: '2.0',
  4: '2.2',
  5: '2.5',
  6: '3.0'
}

public BODY_TYPE = {
  1: 'седан',
  2: 'позашляховик',
  3: 'купе'
}

public TRANSMISSION = {
  1: 'автоматична',
  2: 'механічна'
}

public WHEEL_DRIVE = {
  1: 'передній',
  2: 'задній',
  3: 'повний'
}

public COLOR = {
  1: 'червоний',
  2: 'синій',
  3: 'жовтий',
  4: 'білий',
  5: 'чорний'
}
  constructor() { }
}
