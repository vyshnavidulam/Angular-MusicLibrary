import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


declare global {
  interface Window {
    allSongs: ["Bheemla Nayak","Kushi","Bhadri","Panja","Thammudu"];    
    songs:any;
  }
}

export interface DialogData {
  Movie_Name:String;
  Composer_Name:String;
}

@Component({
  selector: "dialog-b",
  templateUrl: './dialog/dialog.component.html'
})
export class DialogBodyComponent implements DialogData {

  constructor( public dialogRef: MatDialogRef<DialogBodyComponent>){}
  public Movie_Name: String = "";
  public Composer_Name: String = "";
  public movieName:String = "";
  public composer :String = "";
  public lyricist:String ="";
  public songs:String = "";
  storeMovieName(event: any){
    this.movieName = event.target.value;
  }
  storeComposer (event:any) {
    this.composer = event.target.value;
  }
  storeLyricist (event:any) {
    this.lyricist = event.target.value;
  }

  storeSongs (event:any) {
    this.songs = event.target.value;
  }


  insertData () {
    this.dialogRef.close([this.movieName,this.composer,this.songs,this.lyricist]);
  }

  closeDialog(){
    this.dialogRef.close([]);    
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  constructor(private matDialog: MatDialog) {}

  title = 'albums';  
  
  allSongs =  ["Bheemla Nayak","Kushi","Bhadri","Panja","Thammudu"];

  preservedSongs =  ["Bheemla Nayak","Kushi","Bhadri","Panja","Thammudu"];

  json = [
      {
          "id":"1",
          "title":"Bheemla nayak",
          "year":2022,
          "songs":[
              {
                  "title":"La La Bheemla",
                  "length":6000,
                  "composers":[
                      "Arun"
                  ],
                  "singers":[
                      "Arun"
                  ],
                  "Lyricists":[
                      "Ramajoigaiah sastry",
                  ]
                }
            ]
        },
        {
            "id":"2",
            "title":"Bheemla nayak",
            "year":2022,
            "songs":[
                {
                    "title":"antha istam",
                    "length":6000,
                    "composers":[
                        "Arun"                    
                      ],
                    "singers":[
                        "Arun"
                    ],
                    "Lyricists":[
                        "Ramajoigaiah sastry"
                    ]
                  }
              ]
          },
          {
            "id":"3",
            "title":"Kushi",
            "year":"2001",
            "songs":[
              {
                "title":"Ammaye",
                "length":5000,
                "composers":[
                  "deva"
                ],
                "singers":[
                  "sriram"
                ],
                "Lyricists":[
                  "sriram"
                ]
              }
            ]
          },
          {
            "id":"4",
            "title":"Kushi",
            "year":"2001",
            "songs":[
              {
                "title":"cheliya",
                "length":5000,
                "composers":[
                  "deva"
                ],
                "singers":[
                  "sriram"
                ],
                "Lyricists":[
                  "sriram"
                ]
              }
            ]
          },
          {
            "id":"5",
            "title":"Bhadri",
            "year":"2000",
            "songs":[
              {
                "title":"bangala kathamlo",
                "length":"4000",
                "composers":[
                  "ramana gogula"
                ],
                "singers":[
                  "sunitha"
                ],
                "Lyricists":[
                  "sunitha"
                ]
              }
            ]
          },
          {
            "id":"6",
            "title":"Bhadri",
            "year":"2000",
            "songs":[
              {
                "title":"ye chikitha",
                "length":"4000",
                "composers":[
                  "ramana gogula"
                ],
                "singers":[
                  "sunitha"
                ],
                "Lyricists":[
                  "sunitha"
                ]
              }
            ]
          },
          {
            "id":"7",
            "title":"Panja",
            "year":"2011",
            "songs":[
              {
                "title":"panja",
                "length":4000,
                "composers":[
                  "yuvan shankar raja"
                ],
                "singers":[
                  "pavankalyan"
                ],
                "Lyricists":[
                  "ramajogaya sastry"
                ]
              }
            ]
          },
          {
            "id":"8",
            "title":"Panja",
            "year":"2011",
            "songs":[
              {
                "title":"yela yela",
                "length":4000,
                "composers":[
                  "yuvan shankar raja"
                ],
                "singers":[
                  "pavankalyan"
                ],
                "Lyricists":[
                  "ramajogaya sastry"
                ]
              }
            ]
          },
          {
            "id":"9",
            "title":"Thammudu",
            "year":"1999",
            "songs":[
              {
                "title":"made in andhra student",
                "length":5000,
                "composers":[
                  "ramana gogula"
                ],
                "singers":[
                  "ramana gogula"
                ],
                "Lyricists":[
                  "ramana gogula"
                ]
              }
            ]
          },
          {
            "id":"10",
            "title":"Thammudu",
            "year":"1999",
            "songs":[
              {
                "title":"vayari bhama",
                "length":5000,
                "composers":[
                  "ramana gogula"
                ],
                "singers":[
                  "ramana gogula"
                ],
                "Lyricists":[
                  "ramana gogula"
                ]
              }
            ]
          }
    ];
// [this.movieName,this.composer,this.songs,this.lyricist]
    
  openDialog() {    
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log(value.length,this.json.length);
      if (value.length > 0){
          let data = {
            "id":""+ (this.json.length+1) +"",
            "title":''+value[0]+'',
            "year":"1999",
            "songs":[
              {
                "title":''+value[2]+'',
                "length":5000,
                "composers":[
                  value[1]
                ],
                "singers":[
                  "ramana gogula"
                ],
                "Lyricists":[
                  value[3]
                ]
              }
            ]
          }
          
          this.json.push(data);     
          let j_data = Object.assign([],this.json);
          this.json = [];
          this.json = j_data;
          this.allSongs.push(data.title);
          console.log(this.json.length,this.json);
          
      }
    });
  }




    searchSong (event:any) {
      let songName = event.target.value !== "" ? event.target.value.toLowerCase().replace(/ /g,"") : "";
      console.log(songName);
      let filteredSongs: string[] = [];
      if (songName === ""){
        filteredSongs = this.preservedSongs;
      }else {
          this.json.forEach(element => {
            if (element.songs[0].title.toLowerCase().replace(/ /g,"").indexOf(songName) !== -1 ){
                filteredSongs.push(element.title);
            }
          });
      }
      this.allSongs = filteredSongs;
    }

    getLyricist (songName:String) {
      let lyricist:any[] = [];
      if (songName !== "" && songName !== null && typeof songName !== 'undefined'){
        this.json.forEach(element => {
          if (element.title.toLowerCase().replace(/ /g,"").indexOf(songName.toLowerCase().replace(/ /g,"")) !== -1){
              lyricist = element.songs[0].Lyricists;
          }
        });
      }
      return lyricist[0];
    }

    getComposers (songName:String) {
      let composers:any[] = [];
      if (songName !== "" && songName !== null && typeof songName !== 'undefined'){
        this.json.forEach(element => {
          if (element.title.toLowerCase().replace(/ /g,"").indexOf(songName.toLowerCase().replace(/ /g,"")) !== -1){
              composers = element.songs[0].composers;
          }
        });
      }
      return composers[0];
    }

    getSongsList (songName:String) {
      let composers:any[] = [];
      if (songName !== "" && songName !== null && typeof songName !== 'undefined'){
        this.json.forEach(element => {
          if (element.title.toLowerCase().replace(/ /g,"").indexOf(songName.toLowerCase().replace(/ /g,"")) !== -1){
              composers.push(element.songs[0].title);
          }
        });
      }
      return composers;
    }

    insertSong () {
      this.openDialog();      
    }
}
