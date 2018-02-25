import { MenuService } from '@delon/theme';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-guard',
    templateUrl: './guard.component.html'
})
export class GuardComponent {
    constructor(
        private menuSrv: MenuService,
        private router: Router
    ) { }

    setRole(value: string | boolean) {

        this.menuSrv.resume();
        this.router.navigate(['/logics/guard']);
    }
}
