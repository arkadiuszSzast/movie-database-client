import { Directive, OnInit, OnDestroy, Input, ViewContainerRef, TemplateRef } from '@angular/core';

import { Subject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';

@Directive({
    selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
    @Input() appHasRole: string;

    isVisible = false;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private authService: AuthService
    ) { }

    ngOnInit() {
        const roles = this.authService.getUserRoles();
        if (roles.includes(this.appHasRole)) {
            this.isVisible = true;
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.isVisible = false;
            this.viewContainerRef.clear();
        }
    }
}