var pike = {
  cookieLocation: '1st and Pike',
  minCookie: 23,
  maxCookie: 65,
  avgCookie: 6.3,
  randomFunction: function (){
    var randNumber = Math.floor(Math.random()*(this.maxCookie-this.minCookie+1)+this.minCookie);
    return randNumber;
  },
  arrayAmount: [],
  addFunction: function () {
      for (var i = 0; i < 14; i++){
        var amountCookies = this.randomFunction() * this.avgCookie;
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
        var amountCookies = this.randomFunction () * this.avgCookie;

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
        var amountCookies = this.randomFunction () * this.avgCookie;
        this.arrayAmount.push(amountCookies);
    }
  }
};
var capitalHill = {
  cookieLocation: '1st and Pike',
  minCookie: 20,
  maxCookie: 38,
  avgCookie: 2.3,
  randomFunction: function (){
    var randNumber = Math.floor(Math.random()*(this.maxCookie-this.minCookie+1)+this.minCookie);
    return randNumber;
  },
  arrayAmount: [],
  addFunction: function () {
      for (var i = 0; i < 14; i++){
        var amountCookies = this.randomFunction () * this.avgCookie;
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
      for (var i = 0; i < 14; i++){
        var amountCookies = this.randomFunction () * this.avgCookie;
        this.arrayAmount.push(amountCookies);
        return total;
    }
  }
};
var headingPike = document.getElementById('places');
headingPike.textContent = pike.cookieLocation;
headingPike.setAttribute('class','places');
var hourlyPikeUl = document.getElementById('hourlyList');
var hourlyPikeLi;
pike.addFunction();
for (var i = 0; i < pike.arrayAmount.length; i++){
  console.log( i+6, 'am: ', pike.arrayAmount[i], 'cookies');
  hourlyPikeLi = document.createElement('li');
  hourlyPikeLi.textContent = pike.arrayAmount[i];
  hourlyPikeUl.appendChild(hourlyPikeLi);
};
