
// var React = require('react-native');
var SQLite = require('react-native-sqlite-storage')

const createHistoryTbl = `CREATE TABLE IF NOT EXISTS searchHistory( 
    entry_id INTEGER PRIMARY KEY AUTOINCREMENT,
    value VARCHAR(40),
    date DATE
 );`;

export default class Dba{
    db = null;
    constructor(props){
        this.db = SQLite.openDatabase(
            {name : "t1.db", createFromLocation : 1}, 
            ()=>console.log("db opensuccess"),
            (e)=>console.log("db error", e)
        );

        this.db.transaction( (txn) => {
            txn.executeSql(
                createHistoryTbl, [],
                (tx, res) => {
                    console.log("showdb tx,", tx, "showdb res" ,res);
                },
                (err) =>  console.log("showdb err", err)
            )
        } ); 
    }
    sql_stmt = "insert into x values(1); select * from t;";
    // sql_stmt = "select * from tt;";
    // sql_stmt = "select * from x;";

    addTohistory = () => {
        return this.db.transaction( (txn) => {
            txn.executeSql(
                this.sql_stmt, [],
                (tx, res) => {
                    console.log("showdb tx,", tx, "showdb res" ,res);
                },
                (err) =>  console.log("showdb err", err)
            )
        } ); 
        return this.db.executeSql('create table if not exists x(pk int); insert into x values(1); select * from x;', [],
            (res) => {
                console.debug("showdb res", res);
            },
            (err)=>console.log("showdb err", err)
        ); 
        //.then( ([res]) =>{console.log("then res", res)} );
            // .then(
            //     res => {
            //         console.debug("showdb res", res);
            //     }
            // )
            // .catch(
            //     e => console.log("showdb err", err)
            // );
    }

    /**
        showdb tx = 
        {
            "db": {
                "dbname": "t1.db", 
                "openError": [Function anonymous], 
                "openSuccess": [Function anonymous], 
                "openargs": {
                    "assetFilename": "1", 
                    "createFromLocation": 1, 
                    "dblocation": "nosync", 
                    "name": "t1.db"
                }
            }, 
            "error": undefined, 
            "executes": [], 
            "fn": [Function anonymous], 
            "readOnly": false, 
            "success": undefined, 
            "txlock": true
        }
        showdb res = 
        {
            "insertId": undefined, 
            "rows": {
                "item": [Function item], 
                "length": 5, 
                "raw": [Function raw]
            }, 
            "rowsAffected": 0
        }
     */
    
}

export function openDb(){
    SQLite.openDatabase({name : "testDB", createFromLocation : 1}, okCallback,errorCallback);
}
// default - if your folder is called www and data file is named the same as the dbName - testDB in this example

// SQLite.openDatabase({name : "testDB", createFromLocation : "~data/mydbfile.sqlite"}, okCallback,errorCallback);
// if your folder is called data rather than www or your filename does not match the name of the db

// SQLite.openDatabase({name : "testDB", createFromLocation : "/data/mydbfile.sqlite"}, okCallback,errorCallback);
// if your folder is not in app bundle but in app sandbox i.e. downloaded from some remote location.

// SQLite.DEBUG(true);
//     SQLite.enablePromise(true);

//     SQLite.openDatabase({
//         name: "TestDatabase",
//         location: "default"
//     }).then((db) => {
//         console.log("Database open!");
//     });
//     console.debug("saveLocalDb", word);
//     return true;
