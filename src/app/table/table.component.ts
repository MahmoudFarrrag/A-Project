import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
  ButtonModule,TooltipModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  items = [
    { ticketPrice: '$40', ticketPrice2: '$30',
    ticketPrice3: '$45', ticketPrice4: '$54' },
];
  item = [
    {
      id: 1,
      ticketIconSrc: 'assets/ICONS/downbut.png',
      ticketNumSrc: 'assets/ICONS/ticket-num.png',
      sells: 'مرة واحدة',
      pplNum: 1,
      popup: 'assets/ICONS/popup.png',
      cinema: '...سينما, مول العرب , برج الأطنان , سرايا القبة',
      ticketPrice:  '$40', ticketPrice2: '$30'
      , ticketPrice3: '$45', ticketPrice4: '$54',
      ticketNum: 'C-101',ticketNum2: 'C-102',ticketNum4: 'C-103',
      userIconSrc: 'assets/ICONS/user1.png',userIconSrc2: 'assets/ICONS/user2.png',
      userIconSrc3: 'assets/ICONS/user3.png',userIconSrc4: 'assets/ICONS/user4.png',
    },
      ];
        }
