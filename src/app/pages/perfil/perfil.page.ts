import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.page.html',
    styleUrls: ['./perfil.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        ReactiveFormsModule,
        CommonModule,
        NgxMaskDirective
    ]
})
export class PerfilPage {
    perfilForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.perfilForm = this.fb.group({
            nome: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            telefone: ['']
        });
    }

    onSubmit() {
        if (this.perfilForm.valid) {
            console.clear();
            alert("Dados salvos com sucesso! Verifique o console.");
            console.log(this.perfilForm.value);
        } else {
            this.perfilForm.markAllAsTouched();
        }
    }
}
