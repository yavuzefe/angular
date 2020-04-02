import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable()
export class LeaderService {

  constructor(private http: HttpClient) { }
  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + "leaders");
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + "leaders/" + id);
  }
}
