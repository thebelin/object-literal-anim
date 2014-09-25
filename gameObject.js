// Object literal demo for games
// Code By Belin Fieldson

// Objects are defined inside curly braces
var gameObject = {
	// They have attributes defined with commas separating them
	version: 2,

	// Each attribute should get a comment
	gameName: 'nameOfGame',

	// That helps tell us what they are
	exampleArray: [1,2,3,'4'],

	// along with your detailed comments
	thingToAnimate: '.className',

	// This is a method of the object which can animate stuff
	anim: function(selector, animation, onComplete) {
		// a self reference for the function scope
		var self = this;

		if (typeof animation === 'function') {
			// The animation is a function, pass it the selected object
			animation($(selector));
		} else {
			// The animation isn't a function, run the animate jQuery on it
			// There's more than one way to do this, like adding a success attribute to the animation object
			$(selector).animate(animation, function() {
				// The animation ran and this callback was executed
				// We're now in an anonymous function and "this" refers to the window object
				// But we made a "self" var earlier which can reach back into the object literal's scope
				
				// In this case, we're gonna run the onComplete argument through the animate method of
				// the parent object literal, which is what called this
				// That will make it either execute if it's a function, or jQuery animate if it's a string or object
				onComplete && self.anim(selector, onComplete);
				// Note that && was used to examine if onComplete is not null and only callback if it has a value
			});
		}
	},

	anotherMethod: function () {
		// When you're in a method of an object, "this" refers to the object literal

		// do an animation with the object's animate function
		this.anim(this.thingToAnimate, {display: 'block'});
	},

	// This is startup code for the object, set stuff and establish event monitors
	init: function () {

	}
};

// This is where it starts
$(document).ready(function() {
	gameObject.init();
});
