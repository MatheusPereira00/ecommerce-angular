import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() public paginaAtual = 1;
  @Input() public qtdPorPagina = 5;
  @Input() public totalRegistros = 10;
  @Output() public OnPaginate: EventEmitter<number> = new EventEmitter<number>(); // Emite o numero da página clicada

  constructor(private route: ActivatedRoute) {}
}
