import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.page.html',
    styleUrls: ['./agenda.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class AgendaPage {

    agenda = [
        {
            titulo: 'Yoga Avançada',
            data: '29/04/2025',
            horario: '08:00 - 09:00',
            descricao: 'Treinamento de Yoga avançado.',
            local: 'Unidade 01'
        },
        {
            titulo: 'Treinamento Funcional',
            data: '10/05/2025',
            horario: '09:30 - 10:30',
            descricao: 'Treinamento de equilíbrio e flexibilidade com movimentos naturais.',
            local: 'Unidade 03'
        },
        {
            titulo: 'Karatê Introdutório',
            data: '05/08/2025',
            horario: '10:30 - 11:30',
            descricao: 'Aula de karatê para iniciantes.',
            local: 'Unidade 03'
        },
        {
            titulo: 'Aparelhos de Musculação',
            data: '17/09/2025',
            horario: '10:00 - 11:45',
            descricao: 'Instrução de operação em aparelhos de musculação para iniciantes.',
            local: 'Unidade 01'
        }
    ];

    reservar(item: any) {
        alert(`Reserva realizada para ${item.titulo} às ${item.horario}`);
        console.log(item);
    }
}
