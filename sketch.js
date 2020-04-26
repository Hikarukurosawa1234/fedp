let mode;
let graph;
let Reserve = false;
let Purchase = false;
let Sell = false;
let Discount = false;
let Technology = false;
let difference= 0;
let shiftl, shiftr = false;
let Longrun = false;
let count = -1;
function setup(){
    createCanvas(600,600);
    mode = 1;
    slider = createSlider(-1,1,0, 0.1);
    button1 = createButton("discount rate");
    button2 = createButton("OMO purchase");
    button5 = createButton("OMO sell");
    button3 = createButton("Reserve Requirement");
    button6 = createButton("technology");
    graph = new Graph();
    money = new Money();

    button4 = createButton('change');    

    button1.mousePressed(discount);
    button2.mousePressed(purchase);
    button3.mousePressed(reserve);
    button5.mousePressed(sell);
    button6.mousePressed(technology);

}
function draw(){

    background(0);
    button4.mousePressed(change);

    switch(mode)
    {
        case 1:
            graph.show();
            graph.plot();
            break;    
        case 2: 
            money.show();
            money.MS();
            
            break;
    }    
        
}

function discount()
{
    Discount = true;
    Purchase = false;
    Reserve = false;
    Sell = false;
    Technology = false;
    count = -1;

}
function purchase()
{
    Discount = false;
    Purchase = true;
    Reserve = false;
    Sell = false;
    Technology = false;
    count = -1;

    }
function reserve()
{
    Discount = false;
    Purchase = false;
    Reserve = true;
    Sell = false;
    Technology = false;
    count = -1;

    }
function change()
{
    if(mode == 1)
    {
        mode = 2;
    }else if (mode == 2)
    {
        mode = 1;
    }
}
function sell()
{
    Discount = false;
    Purchase = false;
    Reserve = false;
    Sell = true;
    Technology = false;
    count = -1;

}

function technology()
{
    Discount = false;
    Purchase = false;
    Reserve = false;
    Sell = false;
    Technology = true;
    count = -1;

}

function longrun()
{
    graph.counter = 0;
    count++;

}
function keyPressed()
{
    if(keyCode == 76)
    {
        longrun();
        shift();
    }
    if(keyCode == 82)
    {if (mode == 1)
        
        {graph.reset();
        }else if (mode == 2)
        {
            money.reset();
        }
    }

}
function shift()
    {
        graph.shortSposx -= graph.offset;
        graph.shortSposx2 -= graph.offset;
        graph.offset= 0;   
    }


