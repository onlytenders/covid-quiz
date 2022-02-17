

let buttons=document.getElementsByTagName('button');
let total = 0;
q_count = 1;
//Так и задумывалось, всё ок
let q_title = document.querySelector('#main_text');
let q_num = document.querySelector('#counter');
let div1=document.querySelector('#div1');
let div2=document.querySelector('#div2');
let div3=document.querySelector('#div3');
let div4=document.querySelector('#div4');
let div5=document.querySelector('#div5');
let div6=document.querySelector('#div6');
let div7=document.querySelector('#div7');
let div8=document.querySelector('#div8');
let div9=document.querySelector('#div9');
let div10=document.querySelector('#div10');
let div11=document.querySelector('#div11');
let div12=document.querySelector('#div12');
let div13=document.querySelector('#div13');
let div14=document.querySelector('#div14');
let div15=document.querySelector('#div15');
let div16=document.querySelector('#div16');
let div17=document.querySelector('#div17');
let div18=document.querySelector('#div18');
let div19=document.querySelector('#div19');
let div20=document.querySelector('#div20');
let div21=document.querySelector('#div21');
let div22=document.querySelector('#div22');
let div23=document.querySelector('#div23');
let div24=document.querySelector('#div24');
let div25=document.querySelector('#div25');
let div26=document.querySelector('#div26');
let div27=document.querySelector('#div27');
let div28=document.querySelector('#div28');
let div29=document.querySelector('#div29');
let div30=document.querySelector('#div30');
let div31=document.querySelector('#div31');
let submitForm=document.querySelector('#submitForm');
function addHidden(event){
    event.classList.add('hidden');
}
function removeHidden(event){
    event.classList.remove('hidden');
}

//Не трогать, работает

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',
    function clickButton(event) {
        event.preventDefault();
        if(buttons[i].classList==''+i+''){
            if(i==0){
                addHidden(div1);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you have a temperature above 37 * C?";
                removeHidden(div2);
            }
            else if(i==1||i==2){
                if (i==1) {
                  total+=15;
                }
                addHidden(div2);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you have a cough?";
                removeHidden(div3);
            }
            else if(i==3||i==4||i==5){
                if (i==3) {
                  total+=15;
                } else if (i==4){
                  total-=25;
                }
                addHidden(div3);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you experience excessive sweating?";
                removeHidden(div4);
            }
            else if(i==6||i==7){
                if (i==6) {
                  total+=10;
                }
                addHidden(div4);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you feel constant weakness?";
                removeHidden(div5);
            }
            else if(i==8||i==9){
                if (i==8) {
                  total+=10;
                }
                addHidden(div5);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you find yourself getting tired quickly?";
                removeHidden(div6);
            }
            else if(i==10||i==11){
                if (i==10) {
                  total+=10;
                }
                addHidden(div6);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you have a headache?";
                removeHidden(div7);
            }
            else if(i==12||i==13){
                if (i==12) {
                  total+=10;
                }
                addHidden(div7);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you have a sore throat?";
                removeHidden(div8);
            }
            else if(i==14||i==15){
                if (i==14) {
                  total+=5;
                }
                addHidden(div8);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you experience shortness of breath at the moment?";
                removeHidden(div9);
            }
            else if(i==16||i==17){
                if (i==16) {
                  total+=5;
                }
                addHidden(div9);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you feel a heaviness in your chest?";
                removeHidden(div10);
            }
            else if(i==18||i==19){
                if (i==18) {
                  total+=15;
                }
                addHidden(div10);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you notice disturbances in taste perception?";
                removeHidden(div11);
            }
            else if(i==20||i==21){
                if (i==20) {
                  total+=5;
                }
                addHidden(div11);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML="Do you have skin rashes?";
                removeHidden(div13);
            }
            else if(i==24||i==25){
                if (i==24) {
                  total+3;
                }
                addHidden(div13);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Do you have skin lesions like burns or frostbite on your toes or hands?';
                removeHidden(div14);
            }
            else if(i==26||i==27){
                if (i==26) {
                  total+=15;
                }
                addHidden(div14);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Do you have diarrhea?';
                removeHidden(div15);
            }
            else if(i==28||i==29){
                if (i==28) {
                  total+=10;
                }
                addHidden(div15);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Do you notice a decrease in appetite?';
                removeHidden(div16);
            }
            else if(i==30||i==31){
                if (i==30) {
                  total+=10;
                }
                addHidden(div16);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Do you experience joint and muscle pain?';
                removeHidden(div17);
            }
            else if(i==32||i==33){
                if (i==32) {
                  total+=10;
                }
                addHidden(div17);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Have you had contact with the patient 2 days before the symptoms?';
                removeHidden(div18);
            }
            else if(i==34||i==35){
                addHidden(div18);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Have you had contact with the patient 5-7 days before the symptoms?';
                removeHidden(div19);
            }
            else if(i==36||i==37){
                if (i==36) {
                  total+=5;
                }
                addHidden(div19);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Have you had contact with the patient 7-14 days before the symptoms?';
                removeHidden(div20);
            }
            else if(i==38||i==39){
                if (i==38) {
                  total+=2;
                }
                addHidden(div20);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Have you had a problem with personal hygiene?';
                removeHidden(div21);
            }
            else if(i==40||i==41){
                if (i==40) {
                  total+=5;
                }
                addHidden(div21);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Have you been in crowded places? If yes, then wearing a mask?';
                removeHidden(div22);
            }
            else if(i==42||i==43||i==44){
                if (i==42) {
                  total+=5;
                } else if (i==43) {
                  total+=5;
                }
                addHidden(div22);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Do you experience increased appetite?';
                removeHidden(div23);
            }
            else if(i==45||i==46){
                if (i==45) {
                  total-=5;
                }
                addHidden(div23);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Do you have a runny nose?';
                removeHidden(div24);
            }
            //Да-да, один большой костыль
            else if(i==47||i==48){
                if (i==47) {
                  total-=25;
                }
                addHidden(div24);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Do you notice an increased frequency of urination?';
                removeHidden(div25);
            }
            else if(i==49||i==50){
                if (i==49) {
                  total-=15;
                }
                addHidden(div25);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Do you notice lower abdominal pain?';
                removeHidden(div26);
            }
            else if(i==51||i==52){
                if (i==51) {
                  total-=10;
                }
                addHidden(div26);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Do you feel a stuffy nose?';
                removeHidden(div27);
            }
            else if(i==53||i==54){
                if (i==53) {
                  total-=10;
                }
                addHidden(div27);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Do you see changes in your voice?';
                removeHidden(div28);
            }
            else if(i==55||i==56){
                if (i==55) {
                  total-=10;
                }
                addHidden(div28);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Have you noticed that you are often nauseous lately?';
                removeHidden(div29);
            }
            else if(i==57||i==58){
                if (i==57) {
                  total-=10;
                }
                addHidden(div29);
                q_num.innerHTML="Question №"+q_count;
                q_count++;
                q_title.innerHTML='Have you noticed that you often get tired?';
                removeHidden(div30);
            }
            else if(i==59||i==60){
                if (i==57) {
                  total+=7;
                }
                addHidden(div30);
                q_num.innerHTML="";
                if (total<0) {
                  total = 0;
                }
                if (total >= 80) {
                  q_title.innerHTML='The probability that you are infected with COVID-19 is 95%, you need emergency medical attention';
                } else if (80>total&&total>=50) {
                  q_title.innerHTML='The probability that you are infected with COVID-19 is '+total+'%. You should seek medical attention';
                } else if (50>total&&total>=30) {
                  q_title.innerHTML='The probability that you are infected with COVID-19 is '+total+'%. You should isolate yourself and watch for the development of symptoms.';
                } else if (total>=0&&total<30) {
                  console.log('ok');
                  q_title.innerHTML='The probability that you are infected with COVID-19 is '+total+'%. The likelihood is very low, you do not need emergency medical attention';
                }
                removeHidden(div31);
            }
            else if(i==61){
                addHidden(div30);
                q_count=1;
                q_num.innerHTML="";
                q_title.innerHTML='We made an online COVID-19 test* for you: take it in order to assess your health condition';
                removeHidden(div1);
            }
        }
    });
}