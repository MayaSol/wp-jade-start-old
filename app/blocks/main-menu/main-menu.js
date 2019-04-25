(function(){
	var dropdownToggle;
	var container = document.querySelector('.main-menu');
	var items_has_children = container.querySelectorAll('.menu-item-has-children > a:first-of-type, .page-item-has-children > a:first-of-type');
	console.log(items_has_children);
	for (i=0; i < items_has_children.length; i++) {
		dropdownToggle = document.createElement('button');
		dropdownToggle.classList.add('dropdown-toggle');
		items_has_children[i].parentNode.insertBefore(dropdownToggle,items_has_children[i].nextSibling);
	}
})();
