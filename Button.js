class Button {

  constructor() {
    this.dashboardButton = createButton('Dashboard');
    //this.reminderButton = createButton('Reminders');
    //this.syllabusButton = createButton('Syllabus');
    //this.toDoButton = createButton('To-Do List');
    //this.breakGames = createButton('Break Games');
    this.title = createElement('h2');
  }

  display(){
    //background(0);
//image(dashboardImage, 0,-displayHeight*4,displayWidth, displayHeight*5);

    //this.title.html("Student Planner 1.0");
    //this.title.position(displayWidth/2 - 50, 0);
    /*
    OLD POSITIONS FOR THE BUTTONS
    this.dashboardButton.position(0, 500);
    this.reminderButton.position(76, 500);
    this.syllabusButton.position(152, 500);
    this.toDoButton.position(228, 500);
    this.breakGames.position(304, 500);
    */
    this.dashboardButton.position(displayWidth/2 - 152, displayHeight/2 + 200);
    //this.reminderButton.position(displayWidth/2 - 76, displayHeight/2 + 200);
    //this.syllabusButton.position(displayWidth/2 - 0, displayHeight/2 + 200);
    //this.toDoButton.position(displayWidth/2 + 76, displayHeight/2 + 200);
    //this.breakGames.position(displayWidth/2 + 152, displayHeight/2 + 200);


    this.dashboardButton.mousePressed(()=>{
      //background(dashboardImage);
      //bgSprite.addImage(dashboardImage);
      image(dashboardImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
      //"pictures/dashboard.png"
      console.log("dash");
      syllabusPage.hide();
      reminderPage.hide();
      toDoPage.hide();
    });

    

    
      
      //console.log(valueDropbox);
      //syllabusPage.checkOptions();
      //syllabusPage.update();
      //syllabusPage.updateSyllabus();
      
      //syllabusPage.update();
      //syllabusPage.readtrial();
      //syllabusPage.getSubject();
      
    
/*
this.syllabusButton.mousePressed(()=>{
      //bgSprite.addImage(syllabusImage);
      image(syllabusImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
      console.log("sy");
      toDoPage.hide();
      reminderPage.hide();
      //syllabusPage = new Syllabus(); 
      });
      
      syllabusPage.display();
    this.reminderButton.mousePressed(()=>{
      //background(reminderImage);
      //bgSprite.addImage(reminderImage);
      image(reminderImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
      console.log("rem");
      
      syllabusPage.hide();
      toDoPage.hide();

      reminderPage.display();
    });

    this.toDoButton.mousePressed(()=>{
      //background(toDoImage);
      //bgSprite.addImage(toDoImage);
      image(toDoImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
      console.log("todo");
      toDoPage.display();
      syllabusPage.hide();
      reminderPage.hide();
    });

    this.breakGames.mousePressed(()=>{
      //background(breakImage);
      //bgSprite.addImage(breakImage);
      image(breakImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
      console.log("dash");
      syllabusPage.hide();
      reminderPage.hide();
      toDoPage.hide();
      
      breakPage.display();
      
    });
*/
    

  }

}
