import { KorisniciService } from './../korisnici.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styles: [
  ]
})
export class DodajComponent implements OnInit {

  public imeInput: string = '';
         prezimeInput: string = '';
         brojInput: string = '';


  constructor(private kService: KorisniciService) { }

  ngOnInit(): void {
  }

  public onDodaj(ime: string, prezime: string, broj: string){
    this.kService.setKorisnik(ime, prezime, broj);
    this.imeInput = '';
    this.prezimeInput = '';
    this.brojInput = '';
  }
}
