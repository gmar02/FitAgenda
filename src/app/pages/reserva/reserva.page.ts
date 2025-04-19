import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-reserva',
    standalone: true,
    imports: [IonicModule],
    templateUrl: './reserva.page.html',
})
export class ReservaPage {
    constructor(private router: Router) { }

    confirmarReserva() {
        this.router.navigate(['/confirmacao']);
    }
}
