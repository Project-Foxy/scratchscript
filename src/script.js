
console.log("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev and stio_studio!")


//                   Created  by
//
//    Nikee                              Stio
//
//    ███╗░░██╗                         ░██████╗
//    ████╗░██║      ▄▀█ █▄░█ █▀▄     ██╔════╝
//    ██╔██╗██║      █▀█ █░▀█ █▄▀     ╚█████╗░
//    ██║╚████║                         ░╚═══██╗
//    ██║░╚███║                         ██████╔╝
//    ╚═╝░░╚══╝                         ╚═════╝░
//


setup({}, () => {

    
    const colors = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF"]
    
    const screen_size = {width:window.innerWidth - 40, height:window.innerHeight - 40};

    
    var colorcount = 0;


    
    obj.clone("box", "div")
    obj.style.color = "#000000"
    obj.style.width = 904
    obj.style.height = 585
    obj.append("box")
/*
    forever(()=>{
        
        var ActivateUp = false; 

        if (ActivateUp == false && screen_size.width <= obj.style.y) {
            ActivateUp = true;
        }

        if (ActivateUp) {
            obj.style.x += 1;
            obj.style.y -= 1;
            obj.style.width -= 0.2;
            obj.style.height -= 0.2;


            obj.style.color = colors[colorcount];
            colorcount--;
            if (colorcount < 0) colorcount = colors.length;
        }
        else if (!ActivateUp){
            obj.style.x += 1;
            obj.style.y += 1;
            obj.style.width += 0.2;
            obj.style.height += 0.2;
    



            obj.style.color = colors[colorcount];
            colorcount++;
            if (colorcount > colors.length) colorcount = 0;
        }
        
        obj.update("box")
        obj.append("box", true)

    })*/

    say(screen_size)

})
