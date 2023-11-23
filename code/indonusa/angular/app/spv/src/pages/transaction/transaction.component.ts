import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FuseNavigationItem, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from 'app/layout/common/user/user.component';

@Component({
    selector: 'pages-transaction',
    standalone: true,
    imports: [CommonModule, RouterModule, FuseVerticalNavigationComponent, MatIconModule, UserComponent],
    template: `

<div class="absolute inset-0 flex flex-row min-w-0 overflow-hidden">
  <div class="flex flex-auto z-10">
    <fuse-vertical-navigation class=" bg-card  dark:bg-gray-900 print:hidden"
        [appearance]="'thin'"
        [mode]="'side'"
        [name]="'tagihan-menu'"
        [navigation]="menuData">
        <!-- <ng-container fuseVerticalNavigationHeader>
            <div class="flex items-center justify-center h-16">
                <mat-icon  class="text-green-800 icon-size-8" svgIcon="heroicons_solid:currency-dollar"></mat-icon>
            </div>
        </ng-container> -->

        <ng-container fuseVerticalNavigationFooter>
        <div class="flex items-center justify-center h-16">
                <!-- <mat-icon  class="text-green-800 icon-size-8" svgIcon="heroicons_solid:currency-dollar"></mat-icon> -->
                <user />
            </div>
        </ng-container>
    </fuse-vertical-navigation>
  </div>
  <div class="flex flex-auto w-full">
    <router-outlet></router-outlet>
  </div>
</div>

  `,
    styles: [
    ]
})
export class TransactionPageComponent {
    menuData: FuseNavigationItem[];
    constructor() {
        this.menu();
    }
    menu(): void {
        this.menuData = [
            {
                id: 'sales.dashboard',
                title: 'Dashboard',
                tooltip: 'Dashboard',
                type: 'basic',
                icon: 'heroicons_outline:rectangle-group',
                link: 'dashboard'
            },
            {
                id: 'sales.sales',
                title: 'Penjualan',
                tooltip: 'Penjualan',
                type: 'basic',
                icon: 'heroicons_outline:chart-bar',
                link: 'sales'
            },
            {
                id: 'sales.target',
                title: 'Target',
                tooltip: 'Target',
                type: 'basic',
                icon: 'heroicons_outline:queue-list',
                link: 'target'
            },
            {
                id: 'sales.realisasi',
                title: 'Realisasi',
                tooltip: 'Realisasi',
                type: 'basic',
                icon: 'heroicons_outline:presentation-chart-bar',
                link: 'realisasi'
            },
            {
                id: 'sales.tagihan',
                title: 'Tagihan',
                tooltip: 'Tagihan',
                type: 'basic',
                icon: 'heroicons_outline:banknotes',
                link: 'tagihan'
            },
            {
                id: 'sales.pembayaran',
                title: 'Pembayaran',
                tooltip: 'Pembayaran',
                type: 'basic',
                icon: 'heroicons_outline:wallet',
                link: 'pembayaran'
            },
        ];
    }

}
