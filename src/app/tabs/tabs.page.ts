import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
	ionViewWillEnter() {
		console.log('ionViewWillEnter');
	}

	ionViewDidEnter() {
		console.log('ionViewDidEnter');
	}

	ionViewWillLeave() {
		console.log('ionViewWillLeave');
	}

	ionViewDidLeave() {
		console.log('ionViewDidLeave');
	}
}
