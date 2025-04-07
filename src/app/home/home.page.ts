import { Component } from '@angular/core';
import {
    IonContent,
    IonCard,
    IonItem,
    IonList,
    IonCardHeader,
    IonCardTitle
} from '@ionic/angular/standalone';
import {InputFormComponent} from "../components/input-form/input-form.component";
import {MyHeaderComponent} from "../my-header/my-header.component";
import {CombinationService} from "../services/combination.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
    imports: [CommonModule, IonContent, IonCard, IonItem,
        InputFormComponent, IonList, MyHeaderComponent, IonCardHeader, IonCardTitle],
})
export class HomePage {
    combinations: string[] = [];

    constructor(private combinationService: CombinationService) {}

    generateCombinations(data: { elements: string[]; length: number }) {
        this.combinations = this.combinationService.getCombinations(data.elements, data.length);
    }

}
