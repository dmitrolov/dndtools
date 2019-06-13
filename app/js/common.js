$(function() {

	// Custom JS

});
var app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!'
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
})
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})