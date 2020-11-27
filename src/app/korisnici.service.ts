import { Korisnik } from './models/korisnik.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {
  public korisnici: Korisnik[] = [];
  public id: number = 1;


  constructor() {
    this.korisnici = [
      new Korisnik(this.id++, 'Stefan', 'Ristic', '+381 69 667809', false),
    ];
  }


  public getKorisnici(): any{
    return this.korisnici;
  }

  public setKorisnik(ime: string, prezime: string, broj: string): any{
    this.korisnici.push(new Korisnik(this.id++, ime, prezime, broj, false));
  }

  public onDelete(id: number): any{
    const index = this.korisnici.findIndex(x => x.id === id);

    this.korisnici.splice( index, 1);
  }

  public onSave(id: number, imeInputValue: string, prezimeInputValue: string, brojInputValue: string): any{
    for (const korisnikItem of this.korisnici){
      if (korisnikItem.id === id){
        korisnikItem.ime = imeInputValue;
        korisnikItem.broj = brojInputValue;
        korisnikItem.prezime = prezimeInputValue;
        korisnikItem.show = false;
      }
    }
  }


}
