import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '@nx-clean-arch/core/entities';

@Component({
  selector: 'nx-clean-arch-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent {
  displayedColumns: string[] = ['id', 'displayName', 'email', 'action'];

  @Input() accounts: Account[] | null = []

  @Output() update = new EventEmitter<Account>()
  @Output() remove = new EventEmitter<number>()
}
