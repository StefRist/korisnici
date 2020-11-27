import { Korisnik } from './../models/korisnik.model';
import { KorisniciService } from './../korisnici.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild('imeInputValue', {static: false}) imeInputValue: ElementRef;
  @ViewChild('prezimeInputValue', {static: false}) prezimeInputValue: ElementRef;
  @ViewChild('brojInputValue', {static: false}) brojInputValue: ElementRef;

  public korisnici: Korisnik[] = [];
  public filteredKorisnici: Korisnik[] = [];
         ime: string;


  constructor(private korisnikService: KorisniciService) { }

  ngOnInit(): void {
    this.filteredKorisnici = this.korisnikService.getKorisnici();
  }

  public onDelete(id: number): any{

    const index = this.filteredKorisnici.findIndex(x => x.id === id);
    this.filteredKorisnici.splice( index, 1);
    
  }

  public onSave(id: number): any{


    this.korisnikService.onSave(id,
                                this.imeInputValue.nativeElement.value,
                                this.prezimeInputValue.nativeElement.value,
                                this.brojInputValue.nativeElement.value );

  }

  public onSearch(event: any): any{
    this.filteredKorisnici = [];
    this.korisnici = this.korisnikService.getKorisnici();

    for (const korisnik of this.korisnici){
      if (korisnik.ime.toLowerCase().includes(event.target.value)){
        this.filteredKorisnici.push(korisnik);
      }
    }

  }


}
