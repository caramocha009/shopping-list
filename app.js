var state = {
    items: []
};

var addItem = function(state, item) {
	console.log('addItem ran');
	state.items.push(item);
}

var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li><span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
		console.log(state.items)
	});
	console.log(itemsHTML);
	$(".shopping-list").html(itemsHTML);
	// element.html(itemsHTML);
};

$('#js-shopping-list-form').submit(function(event) {
	console.log('submit');
	event.preventDefault();
	addItem(state, $('#shopping-list-entry').val());
	renderList(state, $('.js-shopping-list'));
});