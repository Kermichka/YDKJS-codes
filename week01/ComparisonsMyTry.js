'use strict';

const dayStart = '07:30';
const dayEnd = '17:45';
class Hours {
  constructor (time) {
    this.hours = Number(time.slice(0, 2));
    this.minutes = Number(time.slice(3, 5));
  }

  addMethod (mins) {
    this.minutes += mins;
    while (this.minutes >= 60) {
      this.hours++;
      this.minutes -= 60;
    }
    return this;
  }

  compareMethod (otherTime) {
    if (this.hours > otherTime.hours) {
      return 1;
    } else if (this.hours == otherTime.hours) {
      if (this.minutes > otherTime.minutes) {
        return 1;
      } else if (this.minutes < otherTime.minutes) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return -1;
    }
  }
}
const dayHoursStart = new Hours(dayStart);
const dayHoursEnd = new Hours(dayEnd);
function scheduleMeeting (startTime, durationMinutes) {
  const startHoursTime = new Hours(startTime);
  durationMinutes = Number(durationMinutes);
  if (startHoursTime.compareMethod(dayHoursStart) >= 0) {
    if (startHoursTime.addMethod(durationMinutes).compareMethod(dayHoursEnd) < 1) {
      console.log('true');
    } else {
      console.log('false');
    }
  } else {
    console.log('false');
  }
}
scheduleMeeting('07:00', 15); // false
scheduleMeeting('07:15', 30); // false
scheduleMeeting('07:30', 30); // true
scheduleMeeting('11:30', 60); // true
scheduleMeeting('16:00', 105); // true
scheduleMeeting('17:30', 30); // false
scheduleMeeting('18:00', 15); // false
