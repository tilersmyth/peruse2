import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    isApp = false;

    currentApp = { _id: '', title: '', state: '', role: '' };
    dummyApp = {
        _id: '1234',
        title: 'Portland Press Herald',
        state: 'Production',
        role: 'Administrator' 
    }

    constructor() { 

    }

    setCurrentApp(id){
        if(id){
            this.isApp = true;

            if(id !== this.currentApp._id){
                this.currentApp = this.dummyApp;
            }
            
            return;
        }

        this.isApp = false;
        this.currentApp = { _id: '', title: '', state: '', role: '' };
    }

}
