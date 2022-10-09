import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { environment } from './../../environments/environment';
import { MovimentoManual, MovimentoManualInput } from './../core/model';

@Injectable({
  providedIn: 'root'
})
export class MovimentosManuaisService {

  baseUrl: string = `${environment.apiUrl}/movimentos-manuais`

  constructor(private http: HttpClient) { }

  async fetchMovimentos(mes: number, ano: number): Promise<MovimentoManual[]> {
    const params = new HttpParams()
      .append('mes', mes)
      .append('ano', ano)

    const res = await firstValueFrom(
      this.http.get<MovimentoManual[]>(this.baseUrl, { params })
    )

    return res;
  }

  async create(novoMovimento: MovimentoManualInput): Promise<MovimentoManual> {
    const res = await firstValueFrom(
      this.http.post<MovimentoManual>(this.baseUrl, novoMovimento)
    )

    return res;
  }
}
