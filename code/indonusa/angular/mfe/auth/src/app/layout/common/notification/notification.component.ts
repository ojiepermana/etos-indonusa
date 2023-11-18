import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, FuseScrollbarDirective, MatIconModule, MatBadgeModule, UserComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
   <div class="sticky top-0 bottom-0 left-full  h-screen shadow z-50 print:hidden">
    <div class="flex flex-col w-16 h-full bg-card">

        <!-- Header -->
        <div class="notification-bar-header flex flex-0 items-center justify-start h-16  w-16">

            <div class="flex flex-auto items-center justify-center">

                <ng-container *ngIf="isScreenSmall">
                    <img (click)="toggleNavigation('mainNavigation')" src="{{logo}}" class="w-8 cursor-pointer">
                </ng-container>

                <ng-container *ngIf="!isScreenSmall">
                    <img src="{{logo}}" class="w-8">
                </ng-container>


            </div>
        </div>
        <div class="flex flex-auto md:border-y overflow-hidden">
            <!-- Chat list -->
            <div class="flex-0 w-16 h-full overflow-y-auto overscroll-y-contain sm:overflow-hidden sm:overscroll-auto"
                fuseScrollbar [fuseScrollbarOptions]="{wheelPropagation: false}">
                <div class="flex-auto">
                    <ng-container *ngIf="!prod">

                    </ng-container>
                </div>
            </div>
        </div>
        <!-- <ng-container *ngIf="isScreenSmall"> -->
            <div class="notification-bar-footer flex flex-0 items-center justify-start h-14  w-16">
                <div class="flex flex-auto items-center justify-center">
                    <user />
                </div>
            </div>
        <!-- </ng-container> -->
    </div>
</div>

  `,
  styles: [
  ]
})
export class NotificationBarComponent {
    isScreenSmall: boolean;
    navigation: Navigation;
    logo = environment.logo;
    prod = environment.production;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
      private _activatedRoute: ActivatedRoute,
      private _router: Router,
      private _navigationService: NavigationService,
      private _fuseMediaWatcherService: FuseMediaWatcherService,
      private _fuseNavigationService: FuseNavigationService
    ) {
    }
    get currentYear(): number {
      return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
      // Subscribe to navigation data
      this._navigationService.navigation$
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((navigation: Navigation) => {
          this.navigation = navigation;
        });

      // Subscribe to media changes
      this._fuseMediaWatcherService.onMediaChange$
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(({ matchingAliases }) => {

          // Check if the screen is small
          this.isScreenSmall = !matchingAliases.includes('md');
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void {
      // Get the navigation
      const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

      if (navigation) {
        // Toggle the opened status
        navigation.toggle();
      }
    }
  }
