// Instructions to every other class on how they can be an argument to 'addMarker'
export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
	color: string;
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

	// instead of doing mappable: User | Company you can use interface mappable
	// and typescript will implicitly check that whatever you pass in as mappable
	// has the properties on Mappable interface which both User and Company do
	addMarker(mappable: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng
			}
		});

		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: mappable.markerContent()
			});

			infoWindow.open(this.googleMap, marker);
		});
	}
}
