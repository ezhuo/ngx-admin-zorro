import { Component, ViewChild } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { StateService } from '@core/data/state.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    searchToggleStatus: boolean;

    constructor(public settings: SettingsService, public stateService: StateService) { }

    get collapsed() {
        return this.settings.layout.collapsed;
    }

    toggleCollapsedSideabar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }

    searchToggleChange() {
        this.searchToggleStatus = !this.searchToggleStatus;
    }

}
