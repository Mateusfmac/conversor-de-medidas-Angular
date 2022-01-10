import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversao, ConversaoResponse } from '../models';
@Injectable()
export class ConversorService {

  constructor() { }

  converter(conversao: Conversao): Observable<any> {

    let convertido

    if (conversao.unidadeDe === conversao.unidadePara) { convertido = conversao.valor}

    if (conversao.unidadeDe === '°C' && conversao.unidadePara === '°F') { convertido = (conversao.valor * 9 / 5) + 32 }

    if (conversao.unidadeDe === '°C' && conversao.unidadePara === 'K') { convertido = conversao.valor * 1 + 273.15 }

    if (conversao.unidadeDe === '°F' && conversao.unidadePara === '°C') { convertido = (conversao.valor - 32) * 5 / 9 }

    if (conversao.unidadeDe === '°F' && conversao.unidadePara === 'K') { convertido = (conversao.valor - 32) * 5 / 9 + 273.15 }

    if (conversao.unidadeDe === 'K' && conversao.unidadePara === '°C') { convertido = conversao.valor - 273.15 }

    if (conversao.unidadeDe === 'K' && conversao.unidadePara === '°F') { convertido = (conversao.valor - 273.15) * 9 / 5 + 32 }

    return convertido
  }

  unidadePara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }
    return conversaoResponse.value[conversao.unidadePara];
  }

  unidadeDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    return (1 / conversaoResponse.value[conversao.unidadePara]).toFixed(4);
  }
}
