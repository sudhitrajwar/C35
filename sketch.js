var title;
var ques1,ques_1;
var ques2,ques_2;
var ques3,ques4,ques5,ques6,ques7,ques8;
var background,backgroundimg;
var submit;
var greeting;

questions = [ques1,ques2,ques3,ques4,ques5,ques6,ques7,ques8];
function preload(){
  backgroundimg = loadImage("bg.jpg");
}
function setup(){
  createCanvas(800,800);
 
   database = firebase.database();
 
   title = createElement('h1');
      title.html("Survey For Poor People");
   title.position(650,121);
   ques1 = createElement('h3',"Do you have your own houses?")
   ques1.position(470,270);
  ques_1 = createRadio(); 
  ques_1.position(470,320);
  ques_1.option('Yes'); 
 ques_1.option('No');
 ques_1.option("Maybe");
 ques2 = createElement('h3',"Can you afford two meals a day?")
 ques2.position(470,340);
ques_2 = createRadio(); 
ques_2.position(470,390);
ques_2.option('Yes'); 
ques_2.option('No');
ques_2.option("Maybe");
ques3 = createElement('h3',"Do you have water supply at home?")
ques3.position(470,410);
ques_3 = createRadio(); 
ques_3.position(470,460);
ques_3.option('Yes'); 
ques_3.option('No');
ques_3.option("Maybe");
ques4 = createElement('h3',"Do you have a job?")
ques4.position(470,480);
ques_4 = createRadio(); 
ques_4.position(470,530);
ques_4.option('Yes'); 
ques_4.option('No');
ques_4.option("Maybe");
ques5 = createElement('h3',"What is your name?")
ques5.position(470,200);
ques_5 = createInput(); 
ques_5.position(470,250);
ques6 = createElement('h3',"If you had a chance to help poors,will you help?")
ques6.position(470,550);
ques_6 = createRadio();
ques_6.option('Yes'); 
ques_6.option('No');
ques_6.option("Maybe");
ques_6.position(470,600);
ques7 = createElement('h3',"Do you have electric supply at home?")
ques7.position(470,620);
ques_7 = createRadio();
ques_7.option('Yes'); 
ques_7.option('No');
ques_7.option("Maybe");
ques_7.position(470,670);
ques8 = createElement('h3',"Your children go to school ?")
ques8.position(470,690);
ques_8 = createRadio();
ques_8.option('Yes'); 
ques_8.option('No');
ques_8.option("Maybe");
ques_8.position(470,740);
submit = createButton("SUBMIT");
submit.position(922,800);
greeting = createElement('h2');
}
function draw(){
background(backgroundimg);
submit.mousePressed(()=>{
  ques1.hide();
  ques2.hide();
  ques3.hide();
  ques4.hide();
  ques5.hide();
  ques6.hide();
  ques7.hide();
  ques8.hide();
  ques_1.hide();
  ques_2.hide();
  ques_3.hide();
  ques_4.hide();
  ques_5.hide();
  ques_6.hide();
  ques_7.hide();
  ques_8.hide();
  title.hide();
  submit.hide();
  greeting.html("Thanks for the survey ")
  greeting.position(400,400);
});


}


