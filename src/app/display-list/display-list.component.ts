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
  {                  /* This block will allow me to create objects from the */
                    /* data that is returned. */

    this.firestore.collection<File>('sequencerFiles').valueChanges()
    .subscribe(v =>{
      console.log(v);
      console.log(v[0]);
      console.log(v[0].fileName);
      for( var i = 0; i<v.length;i++)
      {
        this.list.push(new File(v[i].fileName, v[i].owner, v[i].pattern, v[i].sounds));
      }

    })

    console.log("all the sequencerFiles from the database: ",this.list);
    for( var i = 0; i<this.list.length;i++)
    {
      console.log("list item ",i,": ",this.list[0]);
    }


                /* This block is almost identical except for the use of
                snapshotChanges instead of value changes. I want to use This
                because the id of the object on the database is returned
                as part of the Observable.
                this makes crud easier?? also multiple files with the same name?
                But I cannot get the data i need out of the insane json tree. big sad.
                */

    // this.firestore.collection<File>('sequencerFiles').snapshotChanges()
    // .subscribe(v =>{
    //   console.log(v);
    //   console.log(v[0]);
    //   console.log(v[0].fileName);
    //   for( var i = 0; i<v.length;i++)
    //   {
    //     this.list.push(new File(v[i].fileName, v[i].owner, v[i].pattern, v[i].sounds));
    //   }
    //
    // })






    // this.firestore.collection<File>("sequencerFiles").snapshotChanges().pipe(map(files =>{
    //   const file = files[0];
    //   console.log(files[0])
    //   console.log(file);
    // }))
    // console.log('fuck angular and angulars mother');
    // console.log(this.files);






    // this.firestore.collection("sequencerFiles").valueChanges()
    // .subscribe(v =>{
    //   for(var i = 0;i<v.length;i++){
    //     console.log('in subscribe',v[i]);
    //     //console.log(v[i].fileName);
    //     // console.log(v[i].owner);
    //     //this.list.push(v[i]);
    //     // // this.list.push(new file());
    //     this.list.push(new File(v[i].fileName, v[i].owner, v[i].pattern, v[i].sounds));
    //     console.log('first list index',this.list[1]);
    //     //console.log('the whole list',this.list);
    //
    //   }
    // });
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
