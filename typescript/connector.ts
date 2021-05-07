export interface Connector {
    connector(): boolean;
}


export class BluethothConnector implements Connector {
    connector(): boolean {
        throw new Error("Bluethoth Connector");
        console.log("Bluethoth Connector");
        return true;
    }
}

export class WifiConnector implements Connector {
    connector(): boolean {
        throw new Error("Method not implemented.");
        console.log("WifiConnector Connector");
        return true;
    }

}

export class System {
    
    constructor( private connector: Connector ){

    }
}

let bluethoth = new BluethothConnector();
let wifiConnector = new WifiConnector();

let system1 = new System( bluethoth );
let system2 = new System( wifiConnector );