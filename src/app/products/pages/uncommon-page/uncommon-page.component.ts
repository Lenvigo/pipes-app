import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';


@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = "Romualdo";
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  changeClient(): void {
    this.name = 'Alfonsina';
    this.gender = 'female';
  }

  //i18Plural
  public clients: string[] = ['María', 'Iago', 'Noa', 'Juan', 'Ana', 'Ramon', 'Eva'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue
  public person = {
    name: 'Thomas',
    age: 38,
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap: ', value))
  );

  public promiseValue:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa')
    }, 3500);

  })


}
