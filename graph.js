class Graph
{
    constructor()
    {
        this.constant = 60;
        //graphs
        this.posx = this.constant;
        this.posy = height - this.constant;
        this.posx2 = width - this.constant;
        this.posy2 = this.constant;

        //aggregate curve
        this.shortAposx = this.constant + 120;
        this.shortAposx2 = width - this.constant - 90;
        this.shortAposy = this.constant + 60;
        this.shortAposy2 = height - this.constant - 60;
        //supply curve
        this.shortSposx = this.constant + 120;
        this.shortSposx2 = width - this.constant -90 ;
        this.shortSposy = height- this.constant - 60;
        this.shortSposy2 = this.constant + 60;

        //LRAS
        this.LRASx = width/2 +15;
        this.LRASy1 = height-this.constant;
        this.LRASy2 = 60;
        this.counter = 0;
        this.offset = 0;
    }

    show()
    {
        stroke(255);
        //graphline
        line(this.posx, this.posy, this.posx2, this.posy);
        line(this.posx, this.posy, this.posx, this.posy2);
        //horizontal
 
        rotate(0);       
    
        //vertical

        //aggregate

        line(this.shortAposx, this.shortAposy, this.shortAposx2, this.shortAposy2);

        //supply
        line(this.shortSposx, this.shortSposy, this.shortSposx2, this.shortSposy2);

        //LRAS
        line(this.LRASx, this.LRASy1, this.LRASx, this.LRASy2);

        //title, x-axis, y-axis
        stroke(0);
        textSize(30);
        fill(0,150, 150);
        
        textAlign(CENTER, CENTER);
        rotate(0);
        text("SRAD vs SRAS Curve", width/2, 30);

        fill(255, 0,0);
        stroke(255,0,0);

        textSize(20);
        text("Real GDP", this.posx2 - 30, this.posy + 30);

        textSize(20);
        textAlign(CENTER, CENTER);
        translate(this.posx - 90, this.posy2 + 90);

        rotate(3 * HALF_PI);
        text("Price Level", this.posx, this.posy2);

        stroke(255);
    }
    plot()
    {
        if(Discount){
            //increase in discount rate leads to decrease in AD
            if(this.shortAposx2 < width && this.shortAposx > this.constant)
            {
                this.shortAposx -= slider.value();
                this.shortAposx2 -= slider.value();
                this.offset -= slider.value();
            }
            else if(this.shortAposx2 >= width && slider.value() > 0)
            {
                this.shortAposx -= slider.value();
                this.shortAposx2 -= slider.value();
            }
            else if(this.shortAposx <= this.constant && slider.value() < 0)
            {
                this.shortAposx -= slider.value();
                this.shortAposx2 -= slider.value();
            }
            
        }else if(Purchase)
        {
            //omo purchase leads to increase in money supply, thus increase in AD
            if(this.shortAposx2 < width && this.shortAposx > this.constant)
            {
                this.shortAposx += slider.value();
                this.shortAposx2 += slider.value();
            }
            else if(this.shortAposx2 >= width && slider.value() > 0)
            {
                this.shortAposx += slider.value();
                this.shortAposx2 += slider.value();
            }
            else if(this.shortAposx <= this.constant && slider.value() < 0)
            {
                this.shortAposx += slider.value();
                this.shortAposx2 += slider.value();
            }
        }
        else if(Reserve)
        {
            if(this.shortAposx2 < width && this.shortAposx > this.constant)
            {
                this.shortAposx -= slider.value();
                this.shortAposx2 -= slider.value();
            }
            else if(this.shortAposx2 >= width && slider.value() > 0)
            {
                this.shortAposx -= slider.value();
                this.shortAposx2 -= slider.value();
            }
            else if(this.shortAposx <= this.constant && slider.value() < 0)
            {
                this.shortAposx -= slider.value();
                this.shortAposx2 -= slider.value();
            }
        }
        else if(Technology)
        {
            // omo selling leads to decrease in money supply, thus decrease in AD 
            if(this.shortAposx2 < width - this.constant && this.shortAposx > this.constant)
            {
                this.LRASx += slider.value();
                this.shortAposx += slider.value();
                this.shortAposx2 += slider.value();
                this.shortSposx += slider.value();
                this.shortSposx2 += slider.value();

            }
            else if(this.shortAposx2 >= width - this.constant && slider.value() < 0)
            {
                this.LRASx += slider.value();
                this.shortAposx += slider.value();
                this.shortAposx2 += slider.value();
                this.shortSposx += slider.value();
                this.shortSposx2 += slider.value();
            }
            else if(this.shortAposx <= this.constant && slider.value() > 0)
            {
                this.LRASx += slider.value();
                this.shortAposx += slider.value();
                this.shortAposx2 += slider.value();
                this.shortSposx += slider.value();
                this.shortSposx2 += slider.value();
            }
        }
        else if(Sell)
        {
            // omo selling leads to decrease in money supply, thus decrease in AD 
            if(this.shortAposx2 < width && this.shortAposx > this.constant)
            {
                this.shortAposx -= slider.value();
                this.shortAposx2 -= slider.value();
            }
            else if(this.shortAposx2 >= width && slider.value() > 0)
            {
                this.shortAposx -= slider.value();
                this.shortAposx2 -= slider.value();
            }
            else if(this.shortAposx <= this.constant && slider.value() < 0)
            {
                this.shortAposx -= slider.value();
                this.shortAposx2 -= slider.value();
            }
        }
    }
    reset()
{
    
        this.constant = 60;
        //graphs
        this.posx = this.constant;
        this.posy = height - this.constant;
        this.posx2 = width - this.constant;
        this.posy2 = this.constant;

        //aggregate curve
        this.shortAposx = this.constant + 120;
        this.shortAposx2 = width - this.constant - 90;
        this.shortAposy = this.constant + 60;
        this.shortAposy2 = height - this.constant - 60;
        //supply curve
        this.shortSposx = this.constant + 120;
        this.shortSposx2 = width - this.constant -90 ;
        this.shortSposy = height- this.constant - 60;
        this.shortSposy2 = this.constant + 60;

        //LRAS
        this.LRASx = width/2 +15;
        this.LRASy1 = height-this.constant;
        this.LRASy2 = 60;
        this.counter = 0;
        this.offset = 0;

}

}