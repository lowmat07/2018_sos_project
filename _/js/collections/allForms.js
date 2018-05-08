// Namespace our app
var app = app || {};

app.FormsCollection = Backbone.Collection.extend({
	model: app.singleForm,
	localStorage: new Backbone.LocalStorage('FormsCollection')
});