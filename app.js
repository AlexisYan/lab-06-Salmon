'use strict';

function Stories (location, min, max, avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.array = [];
  this.timeArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
}
Stories.prototype.randCookies = function(){
  var randNum = Math.floor(Math.random()*(this.max-this.min+1)+this.min);
  return randNum;
};
Stories.prototype.addCustomerHour = function(){
  for (var i = 0; i < 15; i++){
    var customerHour = Math.round(this.randCookies() * this.avg);
    this.array.push(customerHour);
  }
};
Stories.prototype.openToClose = function(){
  for (var time = 6; time < 21; time++){
    if (time < 12){
      this,timeArray.push(time+'am');
    } else if (time >= 12){
      this.timeArray.push(time +'pm');
    }
  }
};

Stories.prototype.getTable =function(){
  var store = document.getElementById('customerPerHour');
  var table = document.createElement('table');
  table.id='table';
  titleRow = document.createElement('tr');
  var titleSpace = document.createElement('th');
  titleSpace.textContent = ' ';
  var titleName, titleRow;
  titleRow.appendChild(titleSpace);
  for (var i = 0; i < this.timeArray.length; i++){
    titleName = document.createElement('th');
    titleName.textContent = this.timeArray[i];
    titleRow.appendChild(titleName);
  }
  table.appendChild(titleRow);
  store.appendChild(table);
};
Stories.prototype.getNumbers = function(){
  this.addCustomerHour();
  var table = document.getElementById ('table');
  var storeRow, storeData;
  storeRow = document.createElement('tr');
  var storeName = document.createElement('td');
  storeName.textContent = this.location;
  storeRow.appendChild(storeName);
  for (var i = 0; i < this.array.length; i++){
    storeData = document.createElement('td');
    storeData.textContent = this.array[i];
    storeRow.appendChild(storeData);
  }
  table.appendChild(storeRow);
}

var pike = new Stories('1st and Pike', 23, 65, 6.3);
pike.getTable();
pike.getNumbers();
var seaTac = new Stories('SeaTac Airport', 3, 24, 1.2);
seaTac.getNumbers();
var seattle = new Stories('Seattle Center', 11, 38, 3.7);
seattle.getNumbers();
var capitalHill = new Stories('Capital Hill', 20, 38, 2.3);
capitalHill.getNumbers();
var Alki = new Stories('Alki', 2, 16, 4.6);
Alki.getNumbers();
