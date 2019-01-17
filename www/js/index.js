// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
    // Enable swipe panel
  panel: {
    swipe: 'left',
  },
   popup: {
    closeByBackdropClick: true,
  },
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

//DOM Events for Popup page
$$('.popup-periodtracker').on('popup:open', function
  (e, popup){
    console.log('Period Tracker popup open');
  });
$$('.popup-periodtracker').on('popup:opened', function
  (e, popup){
    console.log('Period Tracker popup opened');
  });


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

