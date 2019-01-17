routes = [
  {
    path: '/',
    url: './index.html',
  },
 {
    path: '/about-app/',
    url: './pages/about-app.html',
  }, 
  {
    path: '/period-tracker/',
    url: './pages/period-tracker.html',
    on: {
      pageInit: function (e, page) {
        (function($)
  {
    Date.prototype.addDays=function(days)
    {
      var dat=new Date(this.valueOf());
      dat.setDate(dat.getDate()+days);
      return dat;};
      Date.prototype.CustomformatDate=function(){var tmp=new Date(this.valueOf());
        var mm=tmp.getMonth()+1;
        if(mm<10)mm='0'+mm;
        var dd=tmp.getDate();
        if(dd<10)dd='0'+dd;return mm+"/"+dd+"/"+tmp.getFullYear();};
        $(document).ready(function(){year='';tmonth='';day='';lengthofperiod='';cycledays='';initDate();
          $('#calcButton').click(function(){day=$("select[name='DD']").attr("value");$('#userpoints tbody tr').remove();
            var tbody=$('#userpoints tbody');
            var lengthofperiod=$("#bmed-menstruation-period-form select[name='periodLength']").attr("value");
            var cycledays=$("#bmed-menstruation-period-form select[name='cycleDays']").attr("value");
            var firstdayoflastperiod=new Date();firstdayoflastperiod.setFullYear(year,tmonth-1,day,0,0,0,0);
            var ovulation=null;for(var i=1;i<=14;i++){if(ovulation===null){ovulation=firstdayoflastperiod.addDays((cycledays-14));}
            else{firstdayoflastperiod=ovulation.addDays(14);ovulation=firstdayoflastperiod.addDays((cycledays-14));}
var ends=firstdayoflastperiod.addDays(lengthofperiod-1);
var ferti=ovulation.addDays(-5);
/*var duedate=ovulation.addDays(266);*/
var row=$('<tr/>').append('<td>'+firstdayoflastperiod.CustomformatDate()+'</td>').append('<td>'+ends.CustomformatDate()+'</td>').append('<td>'+ferti.CustomformatDate()+'</td>').append('<td>'+ovulation.CustomformatDate()+'</td>');if(i%2===0){row.addClass('evenRow');}
tbody.append(row);}
$('#bmed-menstruation-period-result-table').show();});
          $('#resetButton').click(function(){$('#bmed-menstruation-period-result-table').hide();
            $('#userpoints tbody tr').remove();});});function initDate(){MonHead=[31,28,31,30,31,30,31,31,30,31,30,31];tmonth={'Jan':1,'Feb':2,'Mar':3,'Apr':4,'May':5,'Jun':6,'Jul':7,'Aug':8,'Sep':9,'Oct':10,'Nov':11,'Dec':12};
        var y=new Date().getFullYear();for(var i=y;i<y+10;i++){$("<option value='"+i+"'>"+i+"</option>").appendTo($("select[name='YYYY']"));}
for(var tmp in tmonth){$("<option value='"+tmonth[tmp]+"'>"+tmp+"</option>").appendTo($("select[name='MM']"));}
$("select[name='YYYY']").attr("value",y);year=$("select[name='YYYY']").attr("value");$("select[name='MM']").attr("value",new Date().getMonth()+1);
tmonth=$("select[name='MM']").attr("value");var n=MonHead[new Date().getMonth()];if(new Date().getMonth()==1&&IsPinYear($("select[name='YYYY']").attr("value")))n++;
$("select[name='MM']").each(function(){writeDay($(this).parent(),n);});$("select[name='DD']").attr("value",new Date().getDate());day=$("select[name='DD']").attr("value");
lengthofperiod=$("select[name='periodLength']").attr('value');
$("select[name='periodLength']").change(function(){lengthofperiod=$(this).attr('value');});
cycledays=$("select[name='cycleDays']").attr('value');$("select[name='cycleDays']").change(function(){cycledays=$(this).attr('value');});
$("select[name='YYYY']").change(function(){var MMvalue=$("select[name='MM']",$(this).parent()).attr("value");
  year=$(this).attr('value');
  if(MMvalue==""){var e=$("select[name='DD']",$(this).parent());optionsClear(e);return;}
var n=MonHead[MMvalue-1];
var str=$(this).attr("value");if(MMvalue==2&&IsPinYear(str))n++;writeDay($(this).parent(),n);});
$("select[name='MM']").change(function(){var YYYYvalue=$(" select[name='YYYY']").attr("value");tmonth=$(this).attr('value');
  if(YYYYvalue==""){var e=$("select[name='DD']",$(this).parent());optionsClear(e);return;}
var str=$(this).attr("value");var n=MonHead[str-1];
if(str===2&&IsPinYear(YYYYvalue))n++;writeDay($(this).parent(),n);});function writeDay(context,n){var e=$("select[name='DD']",context);optionsClear(e);
for(var i=1;i<(n+1);i++)
$("<option value='"+i+"'>"+i+"</option>").appendTo(e);}
function IsPinYear(year){return(0===year%4&&(year%100!==0||year%400===0));}
function optionsClear(e){e.empty();}}}(jQuery));

      }
    }
  },
  //categories - discussion routes
  {
    path: '/discussion/',
    url: './pages/discussion.html',
  },
  {
    path: '/discussion-benefits/',
    url: './pages/discussion-benefits.html',
  },
  {
    path: '/discussion-fertilityawareness/',
    url: './pages/discussion-fertilityawareness.html',
  },
  {
    path: '/discussion-dynamics/',
    url: './pages/discussion-dynamics.html',
  },
  {
    path: '/discussion-anatomy/',
    url: './pages/discussion-anatomy.html',
  },
  {
    path: '/discussion-siklo/',
    url: './pages/discussion-siklo.html',
  },
  //contraceptives routes
  {
    path: '/contraceptive/',
    url: './pages/contraceptive.html',
  },
  {
    path: '/contraceptive-modern/',
    url: './pages/contraceptive-modern.html',
  },
  /*MODERN*/
  {
    path: '/contraceptive-modern-pill/',
    url: './pages/contraceptive-modern-pill.html',
  },{
    path: '/contraceptive-modern-injectables/',
    url: './pages/contraceptive-modern-injectables.html',
  },{
    path: '/contraceptive-modern-condom/',
    url: './pages/contraceptive-modern-condom.html',
  },
  {
    path: '/contraceptive-natural/',
    url: './pages/contraceptive-natural.html',
  },
  /*NATURAL*/
    {
    path: '/contraceptive-natural-sdm/',
    url: './pages/contraceptive-natural-sdm.html',
  },{
    path: '/contraceptive-natural-bom/',
    url: './pages/contraceptive-natural-bom.html',
  },  {
    path: '/contraceptive-natural-stm/',
    url: './pages/contraceptive-natural-stm.html',
  },
    {
    path: '/contraceptive-natural-bbt/',
    url: './pages/contraceptive-natural-bbt.html',
  },  {
    path: '/contraceptive-natural-lam/',
    url: './pages/contraceptive-natural-lam.html',
  },
 {
    path: '/contraceptive-long/',
    url: './pages/contraceptive-long.html',
  },
  /*LONG ACTING NATURAL*/
   {
    path: '/contraceptive-long-iud/',
    url: './pages/contraceptive-long-iud.html',
  },
   {
    path: '/contraceptive-long-ligation/',
    url: './pages/contraceptive-long-ligation.html',
  },
   {
    path: '/contraceptive-long-vasectomy/',
    url: './pages/contraceptive-long-vasectomy.html',
  },
  /*CONTRACEPTIVES VIDEOS*/
  {
    path: '/video-fertilization/',
    url: './pages/video-fertilization.html',
  },
   /*MODERN CM*/
  {
    path: '/video-pills/',
    url: './pages/video-pills.html',
  },{
    path: '/video-injectables/',
    url: './pages/video-injectables.html',
  },{
    path: '/video-condom/',
    url: './pages/video-condom.html',
  },
  /*NATURAL CM*/
    {
    path: '/video-sdm/',
    url: './pages/video-sdm.html',
  },  {
    path: '/video-bom/',
    url: './pages/video-bom.html',
  },  {
    path: '/video-stm/',
    url: './pages/video-stm.html',
  },
    {
    path: '/video-bbt/',
    url: './pages/video-bbt.html',
  },  {
    path: '/video-lam/',
    url: './pages/video-lam.html',
  },
   /*LONG ACTING NATURAL*/
   {
    path: '/video-iud/',
    url: './pages/video-iud.html',
  },
   {
    path: '/video-ligation/',
    url: './pages/video-ligation.html',
  },
   {
    path: '/video-vasectomy/',
    url: './pages/video-vasectomy.html',
  },

  //infographics
 {
    path: '/infographics/',
    url: './pages/infographics.html',
  },
  {
    path: '/gallery-general/',
    url: './pages/gallery-general.html',
  },
  {
    path: '/gallery-modern/',
    url: './pages/gallery-modern.html',
  },
  {
    path: '/gallery-natural/',
    url: './pages/gallery-natural.html',
  },
   {
    path: '/gallery-long/',
    url: './pages/gallery-long.html',
  },
  //assessment
  {
    path: '/assessment/',
    url: './pages/assessment.html',
  }, {
    path: '/assessment1/',
    url: './pages/assessment1.html',
    on: {
      pageInit: function (e, page) {
      (function() {
var questions = [{/*1*/
question: "Sa benefits of Family Planning, sino ang mas nabibigyan ng sapat na panahon sa pagpapasuso, pagpapabakuna at wastong nutrisyon?",

choices: ["Sanggol at mga Anak", "Ina", "Ama"],
correctAnswer: 0
}, {/*2*/
question: "Ito ay ang pagbibigay ng parehong kontribusyon ng Lalaki at Babae sa desisyon at kakayahang mag-anak",
choices: ["Love", "Joint Fertility", "Dynamics of Human Fertility"],
correctAnswer: 1
}, {/*3*/
question: "Kailan nag-uumpisa ang pagiging mabunga ng isang Babae?",
choices: ["Pagkapanganak", "Pagdadalaga", "Pag nag-asawa"],
correctAnswer: 1
}, {/*4*/
question: "Mabubuo lamang ang isang baby kung ang Babae ay makikipagtalik sa panahong siya ay mabunga o fertile.",
choices: ["Tama", "Mali", "Siguro"],
correctAnswer: 0
}, {/*5*/
question: "Ang pagiging fertile ng Babae ay nangyayari lamang tuwing Ovulation Period ng kanyang buwanang regla. Ito ay karaniwang nangyayari sa pagitan ng 12-14 days matapos ang unang araw ng pagdurugo sa isang babaeng may 28-day cycle.",
choices: ["Tama", "Mali", "Siguro"],
correctAnswer: 0
}, {/*6*/
question: "Kailan nag-uumpisa ang pagiging mabunga ng isang Lalaki?",
choices: ["Pagkapanganak", "Pagbibinata", "Pag nag-asawa"],
correctAnswer: 0
}, {/*7*/
question: "Ilang punlay kadalasan ang kailangan upang maka-fertilize ng isang itlog?",
choices: ["Isa lamang", "Isang libo", "Isang milyon"],
correctAnswer: 0
}, {/*8*/
question: "Ang ________ ay nangyayari sa sandaling ang punlay at ang hinog na itlog ay magtagpo.",
choices: ["Joint Fertility", "implantation", "fertilization"],
correctAnswer: 2
}, {/*9*/
question: "Matapos ang fertilization, ang embryo ay kakapit sa lining ng matris (uterine wall) upang makakuha ng sustansya mula sa dugo ng ina.",
choices: ["fertilization", "Implantation", "Joint Fertility"],
correctAnswer: 1
}, {/*10*/
question: '12 hanggang 16 araw matapos ang unang araw ng pagreregla, ang obaryo ay naglalabas ng hinog na itlog. Ang tawag dito ay ________.',
choices: ['fertilization', 'obulasyon', 'implantation'],
correctAnswer: 1
}];

var x=2;
var currentQuestions =[];
var questionCounter = 0; //Tracks question number
var selections = []; //Array containing user choices
var quiz = $(' #quiz'); //Quiz div object
// Display initial question
displayNext();
// Click handler for the 'next' button
$(' #next ').on('click', function (e) {
e.preventDefault();
// Suspend click listener during fade animation
if(quiz.is(':animated')) {
return false;
}
choose();
// If no user selection, progress is stopped
if (isNaN(selections[questionCounter])) {
alert('Pumili ng sagot sa pagpipilian');
} else {
questionCounter++;

displayNext();
}
});
// Click handler for the 'prev' button
$(' #prev ').on('click', function (e) {
e.preventDefault();
if(quiz.is(':animated')) {
return false;
}
choose();

displayprev()
});
// Click handler for the 'Start Over' button
$('#start').on('click', function (e) {
e.preventDefault();

if(quiz.is(':animated')) {
return false;
}
questionCounter = 0;

selections = [];
displayNext();
$('#start').hide();
});
// Animates buttons on hover
$('.button').on('mouseenter', function () {
$(this).addClass('active');
});
$('.button').on('mouseleave', function () {
$(this).removeClass('active');
});
// Creates and returns the div that contains the questions and
// the answer selections
function createQuestionElement(index,progress) {
var qElement = $('<div>', {
id: 'question'
});
var header = $('<h2>Tanong ' + (progress) + ' / 10:</h2>');
qElement.append(header);
var question = $('<h3>').append(questions[index].question);
qElement.append(question);
var radioButtons = createRadios(index);
qElement.append(radioButtons);
return qElement;
}
// Creates a list of the answer choices as radio inputs
function createRadios(index) {
var radioList = $('<ul>');
var item;
var input = '';
for (var i = 0; i < questions[index
].choices.length; i++) {
item = $('<li>');
input = '<input type="radio" name="answer" value=' + i + ' />';
input += questions[index].choices[i];
item.append(input);
radioList.append(item);
}
return radioList;
}
// Reads the user selection and pushes the value to an array
function choose() {
selections[questionCounter] = +$('input[name="answer"]:checked').val();
}
// Displays next requested element
function displayNext() {
quiz.fadeOut(function() {
$(' #question').remove();
if(currentQuestions.length < questions.length){
do{
questionCounter = Math.floor((Math.random() * questions.length) );
}while(currentQuestions.indexOf(questionCounter) !== -1)
currentQuestions.push(questionCounter);
console.log(currentQuestions)
console.log(currentQuestions.length)
var nextQuestion = createQuestionElement(questionCounter,currentQuestions.length);
quiz.append(nextQuestion).fadeIn();
if (!(isNaN(selections[questionCounter]))) {
$('input[value='+selections[questionCounter]+']').prop('checked', true);
}
// Controls display of 'prev' button
if(currentQuestions.length === 1){
$('#prev').show();
} else if(currentQuestions.length === 0){
$('#prev').hide();
$('#next').show();
}
}else {
var scoreElem = displayScore();
quiz.append(scoreElem).fadeIn();
$('#next').hide();
$('#prev').hide();
$('#start').show();
}
});
}
function displayprev() {
quiz.fadeOut(function() {
$(' #question').remove();
if(currentQuestions.length < questions.length){
questionCounter = currentQuestions[currentQuestions.length-x] 
console.log(x)
x++; 
console.log(currentQuestions)
console.log(currentQuestions.length)
var n = x-2;
var nextQuestion = createQuestionElement(questionCounter,currentQuestions.length-n);
quiz.append(nextQuestion).fadeIn();
if (!(isNaN(selections[questionCounter]))) {
$('input[value='+selections[questionCounter]+']').prop('checked', true);
}
// Controls display of 'prev' button
if(questionCounter === 1){
$('#prev').show();
} else if(questionCounter === 0){
$('#prev').hide();
$('#next').show();
}
}else {
var scoreElem = displayScore();
quiz.append(scoreElem).fadeIn();
$('#next').hide();
$('#prev').hide();
$('#start').show();
}
});
}
// Computes score and returns a paragraph element to be displayed
function displayScore() {
var score = $('<p>',{id: 'question'});
var numCorrect = 0;
for (var i = 0; i < selections.length; i++) {
if (selections[i] === questions[i].correctAnswer) {
numCorrect++;
}
}
 score.append('<h2>Ang nakuha mo ay ' + numCorrect + ' / ' +
                 questions.length + '!</h2>');
    return score;
}
})();
      }
    }
  }, 
{
    path: '/assessment2/',
    url: './pages/assessment2.html',
    on: {
      pageInit: function (e, page) {
        (function() {
  var questions = [{ /*1*/
    question: "Ang gumagawa ng semilya at ng panlalaking hormon na nagbibigay ng mga katangiang panlalaki",
    choices: ["Epididymis", "Testes", "Matris"],
    correctAnswer: 1
  }, {/*2*/
    question: "Dito naiipon at nagmamature ang punlay",
    choices: ["Epididymis", "Matris", "Obaryo"],
    correctAnswer: 0
  }, {/*3*/
    question: "Ang daanan ng semilya mula sa testes patungong anurang ihi (urethra) at tuloy sa titi (penis)",
    choices: ["Anurang Punlay", "Anurang Itlog", "Testes"],
    correctAnswer: 0
  }, {/*4*/
    question: "Ang pangunahing bahagi ng Reproductive System ng Lalaki",
    choices: ["Obaryo", "Matris", "Titi"],
    correctAnswer: 2
  }, {/*5*/
    question: "Ito ay ang paglabas ng tamod na nagtataglay ng punlay",
    choices: ["Fertilization", "Implantation", "Ejaculation"],
    correctAnswer: 2
  }, {/*6*/
    question: "Ang gumagawa ng itlog at ng pambabaeng hormon na nagbibigay ng mga katangiang pambabae",
    choices: ["Obaryo", "Matris", "Testes"],
    correctAnswer: 0
  }, {/*7*/
    question: "Ang daan patungo sa bahay bata",
    choices: ["Anurang Itlog", "Anurang Punlay", "Liig-liigan"],
    correctAnswer: 2
  }, {/*8*/
    question: "Bahay bata o ang binabahayan ng nabubuong bata",
    choices: ["Matris", "Liig-liigan", "Obaryo"],
    correctAnswer: 0
  }];
     
var x=2;
var currentQuestions =[];
var questionCounter = 0; //Tracks question number
var selections = []; //Array containing user choices
var quiz = $(' #quiz'); //Quiz div object
// Display initial question
displayNext();
// Click handler for the 'next' button
$(' #next ').on('click', function (e) {
e.preventDefault();
// Suspend click listener during fade animation
if(quiz.is(':animated')) {
return false;
}
choose();
// If no user selection, progress is stopped
if (isNaN(selections[questionCounter])) {
alert('Pumili ng sagot sa pagpipilian');
} else {
questionCounter++;

displayNext();
}
});
// Click handler for the 'prev' button
$(' #prev ').on('click', function (e) {
e.preventDefault();
if(quiz.is(':animated')) {
return false;
}
choose();

displayprev()
});
// Click handler for the 'Start Over' button
$('#start').on('click', function (e) {
e.preventDefault();
if(quiz.is(':animated')) {
return false;
}
questionCounter = 0;

selections = [];
displayNext();
$('#start').hide();
});
// Animates buttons on hover
$('.button').on('mouseenter', function () {
$(this).addClass('active');
});
$('.button').on('mouseleave', function () {
$(this).removeClass('active');
});
// Creates and returns the div that contains the questions and
// the answer selections
function createQuestionElement(index,progress) {
var qElement = $('<div>', {
id: 'question'
});
var header = $('<h2>Tanong ' + (progress) + ' / 8:</h2>');
qElement.append(header);
var question = $('<h3>').append(questions[index].question);
qElement.append(question);
var radioButtons = createRadios(index);
qElement.append(radioButtons);
return qElement;
}
// Creates a list of the answer choices as radio inputs
function createRadios(index) {
var radioList = $('<ul>');
var item;
var input = '';
for (var i = 0; i < questions[index
].choices.length; i++) {
item = $('<li>');
input = '<input type="radio" name="answer" value=' + i + ' />';
input += questions[index].choices[i];
item.append(input);
radioList.append(item);
}
return radioList;
}
// Reads the user selection and pushes the value to an array
function choose() {
selections[questionCounter] = +$('input[name="answer"]:checked').val();
}
// Displays next requested element
function displayNext() {
quiz.fadeOut(function() {
$(' #question').remove();
if(currentQuestions.length < questions.length){
do{
questionCounter = Math.floor((Math.random() * questions.length) );
}while(currentQuestions.indexOf(questionCounter) !== -1)
currentQuestions.push(questionCounter);
console.log(currentQuestions)
console.log(currentQuestions.length)
var nextQuestion = createQuestionElement(questionCounter,currentQuestions.length);
quiz.append(nextQuestion).fadeIn();
if (!(isNaN(selections[questionCounter]))) {
$('input[value='+selections[questionCounter]+']').prop('checked', true);
}
// Controls display of 'prev' button
if(currentQuestions.length === 1){
$('#prev').show();
} else if(currentQuestions.length === 0){
$('#prev').hide();
$('#next').show();
}
}else {
var scoreElem = displayScore();
quiz.append(scoreElem).fadeIn();
$('#next').hide();
$('#prev').hide();
$('#start').show();
}
});
}
function displayprev() {
quiz.fadeOut(function() {
$(' #question').remove();
if(currentQuestions.length < questions.length){
questionCounter = currentQuestions[currentQuestions.length-x] 
console.log(x)
x++; 
console.log(currentQuestions)
console.log(currentQuestions.length)
var n = x-2;
var nextQuestion = createQuestionElement(questionCounter,currentQuestions.length-n);
quiz.append(nextQuestion).fadeIn();
if (!(isNaN(selections[questionCounter]))) {
$('input[value='+selections[questionCounter]+']').prop('checked', true);
}
// Controls display of 'prev' button
if(questionCounter === 1){
$('#prev').show();
} else if(questionCounter === 0){
$('#prev').hide();
$('#next').show();
}
}else {
var scoreElem = displayScore();
quiz.append(scoreElem).fadeIn();
$('#next').hide();
$('#prev').hide();
$('#start').show();
}
});
}
// Computes score and returns a paragraph element to be displayed
function displayScore() {
var score = $('<p>',{id: 'question'});
var numCorrect = 0;
for (var i = 0; i < selections.length; i++) {
if (selections[i] === questions[i].correctAnswer) {
numCorrect++;
}
}
 score.append('<h2>Ang nakuha mo ay ' + numCorrect + ' / ' +
                 questions.length + '!</h2>');
    return score;
}
})();
      }
    }
  }, 
  {
    path: '/assessment3/',
    url: './pages/assessment3.html',
    on: {
      pageInit: function (e, page) {
      (function() {
  var questions = [{/*1*/
    question: "Ito ay kontraseptibong tableta na iniinom. May sangkap na dalawang hormon katulad ng nasa katawan ng Babae. Ito ay ang Estrogen at Progestin/Progesterone.",
    choices: ["Condom", "Pills", "Intra-Uterine Device (IUD)"],
    correctAnswer: 1
  }, {/*2*/
    question: "Uri ng Pill na angkop sa nagpapasuso ",
    choices: ["Progestin Only Pills (POPs)", "Combined Oral Contraceptives (COCs)", "Progestin Only Injectable (POI)"],
    correctAnswer: 0
  }, {/*3*/
    question: "Uri ng Injectable na iniineksyon bawat buwan. Ito ay hindi angkop sa nagpapasusong ina.",
    choices: ["Progestin Only Injectable (POI)", "Combined Injectable Contraceptive (CIC)", "Progestin Only Pills (POPs)"],
    correctAnswer: 1
  }, {/*4*/
    question: "Ito ay supot na isinusuot sa nakatayong ari ng Lalaki. Ito ay gawa sa manipis na goma. Nakakatulong din ito sa pag-iwas sa mga STD kabilang na ang HIV/AIDS, Gonorrhea, Syphilis, Chlamydia at Trichomoniasis.",
    choices: ["Condom", "Pills", "Injectable"],
    correctAnswer: 0
  }, {/*5*/
    question: "Ito ay natural method na ginagamitan ng “CycleBeads” upang mabilang ang mga araw kung kailan ligtas o hindi ang Babae sa pakikipagtalik.",
    choices: ["STANDARD DAYS METHOD (SDM)", "BASAL BODY TEMPERATURE (BBT)", "LACTATIONAL AMENORRHEA METHOD (LAM)"],
    correctAnswer: 0 
  }, {/*6*/
    question: "Inoobserbahan ng Babae ang lumalabas na mucus sa kanyang pwerta. ",
    choices: ["STANDARD DAYS METHOD (SDM)", "BILLINGS OVULATION METHOD (BOM)", "LACTATIONAL AMENORRHEA METHOD (LAM)"],
    correctAnswer: 1
  },{/*7*/
    question: "Tatlong bagay ang kailangang obserbahan ng Babae. Ito ay ang lumalabas na mucus sa kanyang kaluban, ang kanyang temperatura, at ang posisyon ng kanyang pwerta.",
    choices: ["SYMPTO-THERMAL METHOD (STM)", "STANDARD DAYS METHOD (SDM)", "BILLINGS OVULATION METHOD (BOM)"],
    correctAnswer: 0
  }, {/*8*/
    question: "Inaalam ng Babae ang umpisa at wakas ng panahon na siya ay mabunga sa pamamagitan ng pagkuha ng kanyang temperatura sa parehong oras tuwing umaga bago siya bumangon sa higaan.",
    choices: ["SYMPTO-THERMAL METHOD (STM)", "STANDARD DAYS METHOD (SDM)", "BASAL BODY TEMPERATURE (BBT)"],
    correctAnswer: 2
  }, {/*9*/
    question: "Pinipigilan ang obulasyon dahil binabago ng pagpapasuso ang paglabas ng mga natural na hormon.",
    choices: ["LACTATIONAL AMENORRHEA METHOD (LAM)", "SYMPTO-THERMAL METHOD (STM)", "STANDARD DAYS METHOD (SDM)"],
    correctAnswer: 0
  },{/*10*/
    question: "Ito ay maliit at malambot na plastik na may hugis “T” at may nakapalibot na pinong tansong alambre. Ito ay pinapasok sa pwerta ng Babae upang mailagay sa kanyang matris.",
    choices: ["Condom", "Intra-Uterine Device (IUD)", "Injectable"],
    correctAnswer: 1
  }, {/*11*/
    question: "Pagputol at pagtali ng anurang itlog - Operasyon para sa mga Babae.",
    choices: ["Bilateral Tubal Ligation", "No-Scalpel Vasectomy", "Intra-Uterine Device (IUD)"],
    correctAnswer: 0
  }, {/*12*/
    question: "Pagputol at pagtali sa anurang punlay o vas deferens - Operasyon para sa mga Lalaki.",
    choices: ["No-Scalpel Vasectomy", "Bilateral Tubal Ligation", "Intra-Uterine Device (IUD)"],
    correctAnswer: 0 
  }];
 
var x=2;
var currentQuestions =[];
var questionCounter = 0; //Tracks question number
var selections = []; //Array containing user choices
var quiz = $(' #quiz'); //Quiz div object
// Display initial question
displayNext();
// Click handler for the 'next' button
$(' #next ').on('click', function (e) {
e.preventDefault();
// Suspend click listener during fade animation
if(quiz.is(':animated')) {
return false;
}
choose();
// If no user selection, progress is stopped
if (isNaN(selections[questionCounter])) {
alert('Pumili ng sagot sa pagpipilian');
} else {
questionCounter++;

displayNext();
}
});
// Click handler for the 'prev' button
$(' #prev ').on('click', function (e) {
e.preventDefault();
if(quiz.is(':animated')) {
return false;
}
choose();

displayprev()
});
// Click handler for the 'Start Over' button
$('#start').on('click', function (e) {
e.preventDefault();
if(quiz.is(':animated')) {
return false;
}
questionCounter = 0;

selections = [];
displayNext();
$('#start').hide();
});
// Animates buttons on hover
$('.button').on('mouseenter', function () {
$(this).addClass('active');
});
$('.button').on('mouseleave', function () {
$(this).removeClass('active');
});
// Creates and returns the div that contains the questions and
// the answer selections
function createQuestionElement(index,progress) {
var qElement = $('<div>', {
id: 'question'
});
var header = $('<h2>Tanong ' + (progress) + ' / 12:</h2>');
qElement.append(header);
var question = $('<h3>').append(questions[index].question);
qElement.append(question);
var radioButtons = createRadios(index);
qElement.append(radioButtons);
return qElement;
}
// Creates a list of the answer choices as radio inputs
function createRadios(index) {
var radioList = $('<ul>');
var item;
var input = '';
for (var i = 0; i < questions[index
].choices.length; i++) {
item = $('<li>');
input = '<input type="radio" name="answer" value=' + i + ' />';
input += questions[index].choices[i];
item.append(input);
radioList.append(item);
}
return radioList;
}
// Reads the user selection and pushes the value to an array
function choose() {
selections[questionCounter] = +$('input[name="answer"]:checked').val();
}
// Displays next requested element
function displayNext() {
quiz.fadeOut(function() {
$(' #question').remove();
if(currentQuestions.length < questions.length){
do{
questionCounter = Math.floor((Math.random() * questions.length) );
}while(currentQuestions.indexOf(questionCounter) !== -1)
currentQuestions.push(questionCounter);
console.log(currentQuestions)
console.log(currentQuestions.length)
var nextQuestion = createQuestionElement(questionCounter,currentQuestions.length);
quiz.append(nextQuestion).fadeIn();
if (!(isNaN(selections[questionCounter]))) {
$('input[value='+selections[questionCounter]+']').prop('checked', true);
}
// Controls display of 'prev' button
if(currentQuestions.length === 1){
$('#prev').show();
} else if(currentQuestions.length === 0){
$('#prev').hide();
$('#next').show();
}
}else {
var scoreElem = displayScore();
quiz.append(scoreElem).fadeIn();
$('#next').hide();
$('#prev').hide();
$('#start').show();
}
});
}
function displayprev() {
quiz.fadeOut(function() {
$(' #question').remove();
if(currentQuestions.length < questions.length){
questionCounter = currentQuestions[currentQuestions.length-x] 
console.log(x)
x++; 
console.log(currentQuestions)
console.log(currentQuestions.length)
var n = x-2;
var nextQuestion = createQuestionElement(questionCounter,currentQuestions.length-n);
quiz.append(nextQuestion).fadeIn();
if (!(isNaN(selections[questionCounter]))) {
$('input[value='+selections[questionCounter]+']').prop('checked', true);
}
// Controls display of 'prev' button
if(questionCounter === 1){
$('#prev').show();
} else if(questionCounter === 0){
$('#prev').hide();
$('#next').show();
}
}else {
var scoreElem = displayScore();
quiz.append(scoreElem).fadeIn();
$('#next').hide();
$('#prev').hide();
$('#start').show();
}
});
}
// Computes score and returns a paragraph element to be displayed
function displayScore() {
var score = $('<p>',{id: 'question'});
var numCorrect = 0;
for (var i = 0; i < selections.length; i++) {
if (selections[i] === questions[i].correctAnswer) {
numCorrect++;
}
}
 score.append('<h2>Ang nakuha mo ay ' + numCorrect + ' / ' +
                 questions.length + '!</h2>');
    return score;
}
})();
      }
    }
  },
  // Page Loaders & Router ASSESSMENT!QUIZ!
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  }];