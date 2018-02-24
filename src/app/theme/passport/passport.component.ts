import { SettingsService } from '@delon/theme';
import { Component } from '@angular/core';
import { StateService } from '@core/data/state.service';


@Component({
    selector: 'layout-passport',
    templateUrl: './passport.component.html',
    styleUrls: ['./passport.component.less']
})
export class LayoutPassportComponent {
    links = [
        {
            title: '帮助',
            href: ''
        },
        {
            title: '隐私',
            href: ''
        },
        {
            title: '条款',
            href: ''
        }
    ];

    constructor(public stateService: StateService,
        public settings: SettingsService) {
    }
}
