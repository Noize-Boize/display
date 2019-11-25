import { Component, OnInit } from '@angular/core';

import {AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {File} from '../file.model';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  ngOnInit() {
  }


  public list: Array<File>;

  //public fileList: FirebaseListObservable<any[]>;

  private defaultFile = new File('defaultFile','jak','[1,0,1,0,0,0]','[pad1,pad2,pad3]');
  constructor(private firestore: AngularFirestore) {
    this.list = [this.defaultFile];
  }

  loadUserSeqFiles()
  {
    this.firestore.collection("sequencerFiles").valueChanges()
    .subscribe(v =>{
      for(var i = 0;i<v.length;i++){
        console.log('in subscribe',v[i]);
        //console.log(v[i].fileName);
        // console.log(v[i].owner);
        //this.list.push(v[i]);
        // // this.list.push(new file());
        //this.list.push(new File(v[i].fileName, v[i].owner, v[i].pattern, v[i].sounds));
        console.log('first list index',this.list[1]);
        //console.log('the whole list',this.list);

      }
    });
  }


  displayItem(evt)
  {
    for(var i = 0; i<this.list.length; i++)
    {
      if(this.list[i].fileName == evt)
      {
        console.log(this.list[i]);
      }
    }
  }

}
