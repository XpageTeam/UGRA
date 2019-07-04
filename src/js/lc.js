import {Element as element} from "./Element.js"
import App from "./core.js"

;(function() {

  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})()

;(function() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})()

document.addEventListener("DOMContentLoaded", e => {
	;(function(){
		const eventTitles = document.querySelectorAll(".lk-events__item-top");

		if (!eventTitles.length)
			return

		for (let title of eventTitles)
			title.addEventListener("click", function(){
				if (this.closest(".lk-events__item").classList.contains("js__opened"))
					this.closest(".lk-events__item").classList.remove("js__opened")
				else
					this.closest(".lk-events__item").classList.add("js__opened")
			})
	})()
})

// $(_ => {
// 	$(".orders-desc__list-toggle").click(function(e){
// 		e.preventDefault();
		
// 		let $prev = $(this).prev(".orders-desc__list");

// 		$prev.toggleClass("js__opened");
// 	});
// });