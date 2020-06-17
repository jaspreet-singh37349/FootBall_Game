
function saveGoal(){

    var goalKeeper1 = $("#goalKeeper1");
    var goalKeeper2 = $("#goalKeeper2");
    var pos1 = goalKeeper1.position().left ;
    var pos2 = goalKeeper2.position().left ;

    start1 = true;
    start2 = true;

    interval = setInterval(function () {   

        if (pos1 >450){
            start1 = false
        }
        if (pos1 <100){
            start1 = true
        }

        if (start1==true) { 
            pos1=pos1+10;
            goalKeeper1.css('left', pos1 );
        } else {
            pos1=pos1-10;
            goalKeeper1.css('left', pos1 );
      } 
    }, 40);

    interval2 = setInterval(function () {   

        if (pos2 >440){
            start2 = false
        }
        if (pos2 <110){
            start2 = true
        }

        if (start2==true) { 
            pos2=pos2+10;
            goalKeeper2.css('left', pos2 );
        } else {
            pos2=pos2-10;
            goalKeeper2.css('left', pos2 );
      } 
    }, 50);
}


function kick(ball,x,y){
    
    initialX = x;
    initialY = y;
    

    kickAction = setInterval(function () {  
        
        let goalKeeper1 = $("#goalKeeper1");
        let goalKeeper2 = $("#goalKeeper2");
        
        let pos1x = goalKeeper1.position().left;
        let pos1y = goalKeeper1.position().top;
        let pos2x = goalKeeper2.position().left;
        let pos2y = goalKeeper2.position().top;
        console.log(x)
 
        if (y <310){
            
            clearInterval(kickAction);
            if(x>=150&&x<=485)
            {
                let score = $("#score").text();
                score++;
                $("#score").html(score);
            }
        }

        if((y<420&&y>400&&x<pos2x+80&&x>pos2x-10)||(y<370&&y>350&&x<pos1x+85&&x>pos1x-5))
        {
            clearInterval(kickAction);
            bounce = setInterval(function(){
                if(y>initialY)
                {
                    clearInterval(bounce);
                }
                y=y+10;     
                ball.css('top', y );   
                
            },60)
        }
    
        y=y-10;
        ballSize =y/7;       
        ball.css('top', y );   
        ball.css('height', ballSize );   
     }, 60)

}

function hanldeMouse(){

    footBall = $('#footBall');

    $(document).mousemove(function(event){
        
        footBall.css('left', event.pageX );
        footBall.css('top', event.pageY );
      });

    footBall.click(function() {
        kick(footBall,event.pageX,event.pageY)
    });
      
}

function initialize(){
    $("#goalKeeper1").css('left', Math.random() * (+440 - +110) + +110 );
    $("#goalKeeper2").css('left', Math.random() * (+440 - +110) + +110 );
}

$(window).on('load', function() {
    initialize();
    saveGoal();
    hanldeMouse();
})


