function bounceOff(orange,banana){
  
    if (orange.x - banana.x < banana.width/2 + orange.width/2
       && banana.x - orange.x < banana.width/2 + orange.width/2) {
       orange.velocityX = orange.velocityX * (-1);
       banana.velocityX = banana.velocityX * (-1);
     }
     if (orange.y - banana.y < banana.height/2 + orange.height/2
       && banana.y - orange.y < banana.height/2 + orange.height/2){
       orange.velocityY = orange.velocityY * (-1);
       banana.velocityY = banana.velocityY * (-1);
     }
   
   }