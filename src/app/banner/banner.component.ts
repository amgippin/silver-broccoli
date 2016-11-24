import { Component } from '@angular/core';
@Component({
  selector: 'banner',
  templateUrl: 'app/banner/banner.component.html',
  styleUrls: ['app/banner/banner.component.css']
})
export class BannerComponent {
	importFunc(): void {
		window.alert("import");
	}
	
	exportFunc(): void {
		window.alert("export");
	}
}

