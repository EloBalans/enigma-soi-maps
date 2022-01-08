

    export interface Picture {
        id: string;
        name: string;
        extension?: any;
        contentType?: any;
    }

    export interface MapColor {
        rgb: string;
        alpha: number;
    }

    export interface Location {
        latitude: number;
        longitude: number;
    }

    export interface Object {
        discriminator: string;
        platesNumber: string;
        sideNumber: string;
        color: string;
        type: string;
        picture: Picture;
        rangeKm: number;
        batteryLevelPct: number;
        reservationEnd?: any;
        reservation?: any;
        status: string;
        locationDescription?: any;
        address?: any;
        mapColor: MapColor;
        promotion?: any;
        id: string;
        name: string;
        description?: any;
        location: Location;
        metadata?: any;
    }

    export interface RootObject {
        objects: Object[];
    }


