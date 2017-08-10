// utility functions
if(!Element.prototype.remove)
	Element.prototype.remove = function() {
		this.parentElement.removeChild(this)
	}
