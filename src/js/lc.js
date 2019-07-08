import $ from "jquery"

window.$ = $;
window.jQuery = $;

require("./jquery.fancybox.js");
require("../css/jquery.fancybox.css");

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
    $(".fancybox").fancybox({
        trapFocus: false,
        touch: false,
        buttons: ["fullscreen", "slideShow", "close"],
        image: {
            preload: true,
        },
        transitionEffect: "slide",
    });


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

    ;(function(){
        const eventTitles = document.querySelectorAll(".accordion-item__title");

        if (!eventTitles.length)
            return

        for (let title of eventTitles)
            title.addEventListener("click", function(){
                if (this.closest(".accordion-item").classList.contains("js__opened"))
                    this.closest(".accordion-item").classList.remove("js__opened")
                else
                    this.closest(".accordion-item").classList.add("js__opened")
            })
    })()

    ;(function(){
        const fileInputs = document.querySelectorAll(".forms__input--file");

        if (!fileInputs.length)
            return

        for (let fileInput of fileInputs){
            const textInput = fileInput.closest(".forms__input-cont")
                            .querySelector(".forms__input--file-support");

            fileInput.addEventListener("change", function(){
                let files = [];

                for (let file of this.files)
                    files.push(file.name)

                if (!files.length)
                    textInput.value = ""
                else
                    textInput.value = files.join(",")

            })

            textInput.addEventListener("click", function(){
                fileInput.click()
            })
        }
    })()
})

document.addEventListener("DOMContentLoaded", () => {
    $('.lk-events__item-btn').click(function(){
        const $this = $(this);

        $this.closest('.lk-events__item').toggleClass('js__open');
        $this.closest('.lk-events__item-info').find('.lk-events__item-next').slideToggle();

        if ($this.text() == "Развернуть")
            $this.text("Свернуть")
        else
            $this.text("Развернуть")
    })

    $('.lk-aside__link').click(function(e){
        var $this = $(this);

        if($this.hasClass('active')){
            e.preventDefault();
        }

        $this.closest('.lk-aside__links').toggleClass('js__opened')
        

    })
})