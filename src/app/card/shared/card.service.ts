import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CardDeck } from './card.model';

@Injectable()
export class CardService {

	private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com';
	private readonly API_KEY = 'kCNu0q4YggmshRDTcGu4cnnsTrdyp1ydHHfjsn91pBT6P5YlaB';

	private readonly cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Shaman', 'Priest', 'Warlock', 'Hunter', 'Paladin'];

	constructor(private http: HttpClient) {}

	public getAllCardDecks(): Observable<CardDeck[]> {
		const headers = new HttpHeaders({'X-Mashape-Key': this.API_KEY});
		return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers});
	}
}