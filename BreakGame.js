class BreakGame{
    constructor(){
        //console.log("Heyyyyy")
        this.breakButton = createButton('Break Games');
        this.greeting = createElement('h4');
        this.greeting2 = createElement('h4');

        this.link2 = createA('https://studio.code.org/projects/gamelab/rpCfUXYXwAkqUE0RIiV3VHP6DFCexFu1s3yy_fDeToY', 'Play Maze Runner!')
        this.link = createA('https://studio.code.org/projects/gamelab/v_NBfBQ6UJSP9zlD5p6RxarFDAIEPGfhp-UJ3hgZh1k', 'Play Trex Jump!');

    }

    display(){
        //this.button = createButton('Play');
        //this.button.position(displayWidth/2, displayHeight/2);
        this.breakButton.position(displayWidth/2 + 152, displayHeight/2 + 200);

        this.breakButton.mousePressed(()=>{
            //image(breakImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
            image(breakImage, displayWidth/4  +100 ,displayHeight - displayHeight, displayWidth - 800, displayHeight - 150);

            
            toDoPage.show();
            syllabusPage.show();
            reminderPage.show();
            syllabusPage.hide();
            this.breakButton.hide();
            toDoPage.hide();

            this.greeting = createElement('h4');
            this.greeting2 = createElement('h4');

            this.greeting.html("Here are some games you can play ( during a break ),")
            this.greeting2.html("that I have created! Enjoy!");
            
            this.greeting.position(displayWidth/2 - 120, displayHeight/2 - 400);
            this.greeting2.position(displayWidth/2 - 40, displayHeight/2 - 380);

            this.greeting.show();
            this.greeting2.show();

            //All the links
            //Link 1
            trexImg = createSprite(displayWidth/2 - 70, displayHeight/2 - 270, 50, 50);
            trexImg.addImage(imageForTrex);
            //image('pictures/trexGame', displayWidth - 100, displayHeight/2 - 270, 50, 50);
            //this.link = createA('https://studio.code.org/projects/gamelab/v_NBfBQ6UJSP9zlD5p6RxarFDAIEPGfhp-UJ3hgZh1k', 'Play Trex Jump!');
            this.link.position(displayWidth/2 - 130, displayHeight/2 - 200);
            this.link.show();

            //Link 2
            mazeImg = createSprite(displayWidth/2 + 180, displayHeight/2 - 270, 50, 50);
            mazeImg.addImage(imageForMaze);

            //this.link2 = createA('https://studio.code.org/projects/gamelab/rpCfUXYXwAkqUE0RIiV3VHP6DFCexFu1s3yy_fDeToY', 'Play Maze Runner!')
            this.link2.position(displayWidth/2 + 120, displayHeight/2 - 200);
            this.link2.show();

            

        })

        
    }

    hide(){
        this.greeting.hide();
        this.greeting2.hide();
        //this.link.visible = false;
        //trexImg.visible = false;
        //mazeImg.visible = false;
        //this.link.hide();
       // this.link2.hide();
        //trexImg.visible = false;
        //console.log("when in syllabus, the break is hiddne")
    }

    show(){
        this.breakButton.show();
    }
    
}   

/*
<!-- <html>
    <head>
        <title>
            "This is the title"
        </title>
    </head>
    <body>
        <script>
            class BreakGame{
                constructor(){}

                display(){
                    this.button1 = createButton('Play');
                    this.button1.position(displayWidth/2, displayHeight/2);

                    this.button1.mousePressed(()=>{
                    console.log("inside script");
                    
                    });
                }
            }
            
        </script>
    </body>
</html> -->


<html>
            <title>
                "this is the title"
            </title>
            <body>
                <script>
                    <a href="http://www.google.com">Google</a>
                </script>
            </body>
            </html>


            <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
            <head>
            <meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
            <title>JavaScript String object - link() method example</title>
            </head>
            <body>
            <h1 style="color: red">JavaScript String object : link() method</h1>
            <hr />
            <script type="text/javascript">
            //This is done to make the following JavaScript code compatible to XHTML.
            var txt="Click to Open W3resource.com"
            document.write("<p>Link : " + txt.link("https://www.w3resource.com") + "</p>");
            </script>
            </body>
            </html>


            //<xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">


            <html>
            //<head>
            //<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
            //<title>JavaScript String object - link() method example</title>
            //</head>
            //<body>
            <h1 style="color: red">JavaScript String object : link() method</h1>
            <hr />
            <script type="text/javascript">
            //This is done to make the following JavaScript code compatible to XHTML.
            var txt="Click to Open W3resource.com"
            document.write("<p>Link : " + txt.link("https://www.w3resource.com") + "</p>");
            </script>
            </body>
            </html>


            this.button.mousePressed(()=>{
            document.getElementsByName("button").onclick = function(){
                location.href = "https://www.google.com/";
            };

            
        })


        <button id="button">Alt+Shift+Click on me!</button>
        <script> 
            button.onclick = function(event){ 
                if(event.altKey && event.shiftKey){
                    alert('Hooray!')
                }
            };
        </script>
*/