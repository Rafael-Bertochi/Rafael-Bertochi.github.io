import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtivoService } from 'src/app/services/ativo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  meuInput: string = "";
  id: string = "";
  constructor(private router: Router,
    private service: AtivoService) { }

  ngOnInit(): void {
  }
  comprar(): void{
    this.service.findByNome(this.meuInput).subscribe(resposta => {
      if(resposta != null){
      this.id = resposta.id;

      this.router.navigate(['ordem/comprar/', this.id])
    }
      }, err => {
        if (err.error.error.match('Objeto não encontrado')) {
          this.service.message(err.error.error);
        }
      })
    }
    vender(): void{
      this.service.findByNome(this.meuInput).subscribe(resposta => {
        if(resposta != null){
        this.id = resposta.id;
  
        this.router.navigate(['ordem/vender/', this.id])
      }
        }, err => {
          if (err.error.error.match('Objeto não encontrado')) {
            this.service.message(err.error.error);
          }
        })
      }
      pesquisa(): void{
        this.service.findByNome(this.meuInput).subscribe(resposta => {
          if(resposta != null){
          this.id = resposta.id;
    
          this.router.navigate(['ordem/pesquisa/', this.id])
        }
          }, err => {
            if (err.error.error.match('Objeto não encontrado')) {
              this.service.message(err.error.error);
            }
          })
        }
}
