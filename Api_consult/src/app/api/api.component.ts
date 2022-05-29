import { Component, OnInit } from '@angular/core';
import { Cep } from '../models/Cep';
import { CepsService } from './services/Ceps.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  cep = {} as Cep;

  constructor(private CepsService : CepsService) { }

  ngOnInit(): void {;
  }

  public buscarCep(string: string): void {
    this.CepsService.getCep(string.replace('-', '')).subscribe(
      (ceps: Cep) => {
        this.cep = ceps
        return this.cep;

      },
      error => console.log(error)
    );
  }
}
