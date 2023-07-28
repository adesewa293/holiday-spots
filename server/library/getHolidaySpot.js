const holidayData = require("../data.json")

function getHolidaySpot(request, response) {
  response.send(holidayData);
}

module.exports =getHolidaySpot;

