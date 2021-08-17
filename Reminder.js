class Reminder {
    constructor(){
        this.reminderButton = createButton('Reminder');
        this.greeting = createElement('h4');
        this.reminder1 = createInput("Reminder 1");
       // this.saveReminder = createButton('Save Reminder');

    }

    display(){
        this.reminderButton.position(displayWidth/2 - 76, displayHeight/2 + 200);
        
        this.reminderButton.mousePressed(()=>{
            
            //image(reminderImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
            image(reminderImage, displayWidth/4  +100 ,displayHeight - displayHeight, displayWidth - 800, displayHeight - 150);
            this.reminderButton.hide();

            toDoPage.show();
            toDoPage.hide();
            syllabusPage.show();
            breakPage.show();
            syllabusPage.hide();
            breakPage.hide();
            
            this.greeting.html("Enter any important dates below!");
            this.greeting.position(displayWidth/2 - 73, displayHeight/2 - 390);
            console.log("reminder class");
/*
            this.saveReminder.mousePressed(()=>{
                if(y<540){

                    this.reminder2 = createInput("DD/MM/YY")
                    this.reminder2.position(displayWidth/2 - 73, y);

                    //this.dateInputList.push(dateInput1);
                    //append(this.dateInputList, this.dateInput1);
                    //this.dateInputList.push(this.dateInput1);

                    this.reminder2.show()
                    //this.input1.show();

                    y = y + 40;
                }
                else{
                    this.greeting2.html("Please add only 10 things to do at one time!")
                    this.greeting2.position(displayWidth/2 - 80, displayHeight/2 + 80);
                    this.greeting2.show();
                }
            });    
*/
            this.reminder1.position(displayWidth/2 - 20, displayHeight/2 - 340);
            //this.reminderButton1.hide();
            console.log("REMINDER MOUSE PRESSED");
            reminderState = 1;

            this.greeting.show();
            this.reminder1.show();
        
        });
        
    }

    hide(){
        //this.greeting.hide();
        //this.reminder1.hide();
        console.log("reminder page hide is working");

        this.greeting.hide();
        this.reminder1.hide();
    }

    show(){
        this.reminderButton.show();
        
    }

 

}