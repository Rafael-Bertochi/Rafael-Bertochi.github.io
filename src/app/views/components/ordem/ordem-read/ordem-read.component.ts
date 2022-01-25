import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordem } from 'src/app/models/ordem';
import { AtivoService } from 'src/app/services/ativo.service';
import { OrdemService } from 'src/app/services/ordem.service';


@Component({
  selector: 'app-ordem-read',
  templateUrl: './ordem-read.component.html',
  styleUrls: ['./ordem-read.component.css']
})
export class OrdemReadComponent implements AfterViewInit {
  lista: Ordem[] = [];
  id = '';
  saldo : any = "";
  displayedColumns: string[] = ['tipo', 'quantidade', 'ativo', 'valor',  'data'];
  dataSource = new MatTableDataSource<Ordem>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: OrdemService,
    private ativoService: AtivoService) { }

  ngAfterViewInit() {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.findAll();
    
  }
  findAll(): void {
    this.service.findOrdemByAtivo(this.id).subscribe(resposta => {
      this.lista=resposta;
      console.log(this.lista);
     this.listarAtivo();
     this.functionSaldo();
     this.dataSource = new MatTableDataSource<Ordem>(this.lista);
     this.dataSource.paginator = this.paginator;
    })
  }
  listarAtivo():void{
    this.lista.forEach(x => {
      this.ativoService.findById(x.ativo).subscribe(resposta =>{
        x.ativo = resposta.nome
      })
    })
  }
  functionSaldo(): void{
    this.lista.forEach(x =>{
    if(x.tipo == "COMPRA"){
      this.saldo+=x.valor;
    }else if(x.tipo == "VENDA"){
      this.saldo-=x.valor;
    }
    })
  }
  voltar():void{
    this.router.navigate(['/'])
  }

}
