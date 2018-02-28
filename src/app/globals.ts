import { Injectable, Inject } from '@angular/core';

@Injectable()

export class Globals {
    menuCollapsed: boolean;

    constructor() {
        this.menuCollapsed = false;
    }
}
