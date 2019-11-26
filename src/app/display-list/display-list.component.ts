import { Component, OnInit } from '@angular/core';

/*
  allow for use of firebase DB
*/
import {AngularFirestore } from '@angular/fire/firestore';

/*
  allow the use of Observables
*/
import { Observable } from 'rxjs';

/*
  allow for mapping observables to model objects.
  not implemented.
*/
import { map } from 'rxjs/operators';


/*
  import the custom file model
*/
import {File} from '../file.model';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  ngOnInit() {
  }

  /*
    list of file objects.
    the idea is that what the database returns is turned into 'File' objects
    and stored in this array.
  */
  public list: Array<File>;



  /*
    hard coded 'File' object. this is what is shown when the page loads under the button.

  */
  private defaultFile = new File('defaultFile','jak','[1,0,1,0,0,0]','[pad1,pad2,pad3]');

  constructor(private firestore: AngularFirestore) {
    /*add the defaultFile to the display list*/
    this.list = [this.defaultFile];
  }



  /* When the load button is clicked on the front page this function is called*/
  loadUserSeqFiles()
  {
    /* Call the firestore database, get all entries in the 'sequencerFiles' collection*/
    this.firestore.collection("sequencerFiles").valueChanges()
    /* subscribe to the returned Observable*/
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

  /* When the user clicks on an entry in the display list ths function is called.
     This function will display the properties of object that was clicked on
     in the displayed list
  */
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
