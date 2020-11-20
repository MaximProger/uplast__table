// Hnts
jQuery('.table__edit').tooltip();
jQuery('.table__copy').tooltip();
jQuery('.table__del').tooltip();
jQuery('.table__tab').tooltip();


// Calendar

jQuery.datetimepicker.setLocale('ru');

jQuery('#datetimepicker-3').datetimepicker({
 i18n:{
  de:{
   months:[
    'Januar','Februar','März','April',
    'Mai','Juni','Juli','August',
    'September','Oktober','November','Dezember',
   ],
   dayOfWeek:[
    "So.", "Mo", "Di", "Mi", 
    "Do", "Fr", "Sa.",
   ]
  }
 },
 timepicker:false,
 format:'d.m.Y'
});