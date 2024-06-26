import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { __decorate } from "tslib";
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    imports: [RouterOutlet, NavbarComponent]
})
export class LayoutComponent {

}
