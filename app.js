(function(){
  "use strict";


  var Moosipurk = function(){

    // SINGLETON PATTERN (4 rida)
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }
    Moosipurk.instance = this; // this viitab moosipurgile

    this.routes = Moosipurk.routes;

    console.log(this);
    //console.log('moosipurgi sees');

    // KÕIK MUUTUJAD, mis on üldised ja muudetavad
    this.click_count = 0;
    this.currentRoute = 0; //Meeles, mis lehel olen(home-view ...)




    //panen rakenduse tööle
    this.init();
  };

  Moosipurk.routes = {

    "home-view": {
      render: function(){
      //Käivitan kui jõuan lehele
        console.log('JS avalehel');
      }
    },
    "list-view": {
      render: function(){
        console.log('JS loendi lehel');
      }
    },
    "manage-view": {
      render: function(){
        console.log('JS haldus lehel');
      }
    }

  };

  //kõik moosipurgi funktsioonid tulevad siia sisse
  Moosipurk.prototype = {
    init: function(){
      console.log('rakendus käivitus');
      // Siia tuleb esialgne loogika
      // hakka kuulama hiireklõpse
      this.bindMouseEvents();
    },
    bindMouseEvents: function(){
      document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
    },
    addNewClick: function(event){
      //console.log(event);
      this.click_count++;
      console.log(this.click_count);

    }
  };


  window.onload = function(){
    var app = new Moosipurk();
  };

})();
