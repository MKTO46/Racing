var ball;

function setup(){
    createCanvas(500,500);
    //creating database
    database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    //.ref : refer to that location
    //.on : keep on listening to the values
    //read from the database
    database.ref("ball/position").on("value",function(data){
        position = data.val()
        ball.x = position.x 
        ball.y = position.y
    })
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

//.set : to write 
//writing values to the database
function writePosition(x,y){
    database.ref("ball/position").set({
        x: ball.x + x,
        y: ball.y + y
    })
    
}
