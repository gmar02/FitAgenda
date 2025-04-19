import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-confirmacao',
    standalone: true,
    imports: [IonicModule],
    templateUrl: './confirmacao.page.html',
})
export class ConfirmacaoPage {

    constructor(private router: Router) { }

    voltarParaAgenda() {
        this.router.navigate(['/agenda']);
    }
}
