import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { environment } from './../../environments/environment';
import { Produto } from './../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  baseUrl: string = `${environment.apiUrl}/produtos`

  constructor(private http: HttpClient) { }

  async fetchProdutos(): Promise<Produto[]> {
    const res = await firstValueFrom(
      this.http.get<Produto[]>(this.baseUrl)
    )

    return res;
  }

}
