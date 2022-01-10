import { Injectable } from '@angular/core';
import { Medida } from '../models'

@Injectable()
export class MedidaService {
  private medidas: Medida[]

  constructor() { }

  private medidasObj = [
    { "sigla": "°C", "descricao": "Graus Celcius" },
    { "sigla": "K", "descricao": "Kelvin" },
    { "sigla": "°F", "descricao": "Graus Fahrenheit" }
  ];

  listarTodas(): Medida[] {
    if (this.medidas) {
      return this.medidas
    }
    this.medidas = []

    for (let medidasObj of this.medidasObj) {
      let medida: Medida = new Medida()
      Object.assign(medida, medidasObj)
      this.medidas.push(medida)
    }
    return this.medidas
  }
}
