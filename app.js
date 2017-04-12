'use strict';

var pike = {
  cookieLocation: '1st and Pike',
  minCookie: 23,
  maxCookie: 65,
  avgCookie: 6.3,
  arrayAmount: [],
  randomFunction: function (){
    var randNumber = Math.floor(Math.random()*(this.maxCookie-this.minCookie+1)+this.minCookie);
    return randNumber;
  },
  addFunction: function () {
      for (var i = 0; i < 14; i++){
        var amountCookies = Math.round(this.randomFunction() * this.avgCookie);
        this.arrayAmount.push(amountCookies);
    }
  }
};

var seaTac = {
  cookieLocation: 'Seatac Airport',
  minCookie: 3,
  maxCookie: 24,
  avgCookie: 1.2,
  randomFunction: function (){
    var randNumber = Math.floor(Math.random()*(this.maxCookie-this.minCookie+1)+this.minCookie);
    return randNumber;
  },
  arrayAmount: [],
  addFunction: function () {
      for (var i = 0; i < 14; i++){
        var amountCookies = Math.round(this.randomFunction () * this.avgCookie);

        this.arrayAmount.push(amountCookies);
    }
  }
};

var seattle = {
  cookieLocation: 'Seattle Center',
  minCookie: 11,
  maxCookie: 38,
  avgCookie: 3.7,
  randomFunction: function (){
    var randNumber = Math.floor(Math.random()*(this.maxCookie-this.minCookie+1)+this.minCookie);
    return randNumber;
  },
  arrayAmount: [],
  addFunction: function () {
      for (var i = 0; i < 14; i++){
        var amountCookies = Math.round(this.randomFunction () * this.avgCookie);
        this.arrayAmount.push(amountCookies);
    }
  }
};

var capitalHill = {
  cookieLocation: 'capital hill',
  minCookie: 20,
  maxCookie: 38,
  avgCookie: 2.3,
  randomFunction: function (){
    var randNumber = Math.floor(Math.random()*(this.maxCookie-this.minCookie+1)+this.minCookie);
    return randNumber;
  },
  arrayAmount: [],
  addFunction: function () {
      for (var i = 0; i < 15; i++){
        var amountCookies = Math.round(this.randomFunction () * this.avgCookie);
        this.arrayAmount.push(amountCookies);
    }
  }
};

var Alki = {
  cookieLocation: 'Alki',
  minCookie: 2,
  maxCookie: 16,
  avgCookie: 4.6,
  randomFunction: function (){
    var randNumber = Math.floor(Math.random()*(this.maxCookie-this.minCookie+1)+this.minCookie);
    return randNumber;
  },
  arrayAmount: [],
  addFunction: function () {
      for (var i = 0; i < 15; i++){
        var amountCookies = Math.round(this.randomFunction () * this.avgCookie);
        this.arrayAmount.push(amountCookies);

    }
  }
};
var stories = [pike, seaTac, seattle, capitalHill, Alki];
function functionName(){
  for (var i = 0; i < stories.length; i++){
    console.log(stories[i].minCookie);
    var heading = document.createElement('h1');
    heading.textContent = stories[i].cookieLocation;
    var hourlyUl = document.getElementById('hourlyList');
    hourlyUl.appendChild(heading);
    var hourlyLi;
    stories[i].addFunction();
    for (var list = 6; list < stories[i].arrayAmount.length + 6; list++){
      hourlyLi = document.createElement('li');
      hourlyLi.textContent = list + 'am: '+ stories[i].arrayAmount[list]+ 'cookies';

      hourlyUl.appendChild(hourlyLi);
    }
  }
};
functionName();
