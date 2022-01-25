import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ativo } from 'src/app/models/ativo';
import { Ordem } from 'src/app/models/ordem';
import { AtivoService } from 'src/app/services/ativo.service';
import { OrdemService } from 'src/app/services/ordem.service';

@Component({
  selector: 'app-ordem-vender',
  templateUrl: './ordem-vender.component.html',
  styleUrls: ['./ordem-vender.component.css']
})
export class OrdemVenderComponent implements OnInit {

  id = ''
  eventValue: any = "";
  resultado: any = "";
  ativo: Ativo = {
    id: '',
    nome: '',
    preco: ''
  }
  ordem: Ordem = {
    id: '',
    ativo: '',
    tipo: '',
    quantidade: '',
    valor: '',
    data: '',
}
  constructor(private router: Router,
    private service: AtivoService,
    private route: ActivatedRoute,
    private ordemService: OrdemService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id).subscribe((resposta) => {
      this.ativo.id = resposta.id;
      this.ativo.nome = resposta.nome;
      this.ativo.preco = resposta.preco;
    })
  }
  vender():void{
    this.listarOrdem();
    this.ordemService.create(this.ordem).subscribe(resposta => {
      this.service.message('Venda efetuada com sucesso!')
      this.router.navigate(['/'])
    }, err => {
      if (err.error.error.match("Fique na validação dos campos!")) {
        this.service.message("Preencha o campo quantidade!");
      } 
    })
  }
  
  listarOrdem():void{
    this.ordem.ativo = this.ativo.id;
    this.ordem.tipo= 2;
    this.ordem.quantidade = this.eventValue;
    this.ordem.valor = this.resultado;
  }
  cancel(): void {
    this.router.navigate(['/'])
  }
  valor(): void {
      this.resultado = this.eventValue * this.ativo.preco;
  }
}