var GDTPlus = {};

(function() {
		GDTPlus.modPath = GDT.getRelativePath();
		
	var ready = function () {
		console.log("GDT+ has initialized.")
	};
	
	var error = function () {
		console.log("GDT+ failed to initialize.", error)
	};
GDT.loadJs([
			//Platform Scripts
			'Code/Platforms/Vena.js'
], ready, error);
}) ();

//Global Event Removal
Media.allScheduledStories.splice(0, 9);
Media.allScheduledStories.splice(2, 32);
Media.allScheduledStories.splice(3, 5);
