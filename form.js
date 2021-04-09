class Form {
constructor(){

}
display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(130,0);

    var input = createInput("Name");
     input.position(130,160);

     var button = createButton("START");
     button. position(250,200);

     button.mousePressed(function(){
         button.hide();
         input.hide();

         var name = input.value();
         playerCount=playerCount+1;

         player.update(name);
         player.updateCount(playerCount);
      
         var greeting = createElement('h3');
         greeting.html("Hello "+ name);
         greeting.position(130,160);
     })
}

}