const zulipInit = require("zulip-js");
const { htmlToText } = require('html-to-text');
var fs = require('fs');

function current_time(){
    var current =  new Date();
        // dd-mm-yyyy-mm-hh
        var dd = current.getDate() ; 
        var mm = current.getMonth() + 1 ; 
        var yyyy = current.getFullYear() ; 
        var hh = current.getHours() ; 
        var mi  = current.getMinutes() ; 
        
        var location =  "" ;

        if( (dd+"").length == 1){
            location = location + "0" +dd +'-'; 
        }
        else {
            location = location +dd +'-' ; 
        }

        if( (mm + "" ).length == 1){
            location = location + "0" +mm +'-'; 
        }
        else {
            location = location +mm +'-' ; 
        }
        
        location = location + yyyy +'-' ;
        
        if( (hh+ "").length == 1){
            location = location + "0" +hh +'-'; 
        }
        else{
            location = location +hh +'-' ; 
        }
        if( (mi +"").length == 1){
            location = location + "0" +mi; 
        }
        else {
            location = location +mi ; 
        }
        
        return location ; 
}