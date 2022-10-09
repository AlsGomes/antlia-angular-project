import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { environment } from './../../environments/environment';
import { ProdutoCosif } from './../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosCosifService {
  baseUrl: string = `${environment.apiUrl}/produtos-cosif`

  constructor(private http: HttpClient) { }

  async fetchProdutosCosif(codProd: string): Promise<ProdutoCosif[]> {
    const params = new HttpParams()
      .append('codProd', codProd)

    const res = await firstValueFrom(
      this.http.get<ProdutoCosif[]>(this.baseUrl, { params })
    )

    return res;
  }
}
