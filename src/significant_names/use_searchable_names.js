const work_days_per_week = 5;
var real_days_per_ideal_day = 4;
var sum = 0;

for (var j = 0; j < task_estimate.length; j++) {
  var real_task_days = task_estimate[j] * real_days_per_ideal_day;
  sum += real_task_days / work_days_per_week;
}
