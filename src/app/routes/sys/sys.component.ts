import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sys-component',
    template: `<router-outlet></router-outlet>`
})

export class SysComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}