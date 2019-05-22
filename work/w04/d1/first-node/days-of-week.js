module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.getWeekday = function(dayNo) {
   if (dayNo < 0 || dayNo > 6) dayNo = 0;
   console.log(module.exports === exports)
   return exports.weekdays[dayNo];
};