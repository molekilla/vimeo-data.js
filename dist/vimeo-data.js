(function(root, undefined) {
	
	// RM: Usamos Browserify o RequireJS en CommonJS mode
	// Para tener algo reusable en NodeJS y Browser

  "use strict"; // Nice touch!

	//vimeoData Object
	
	// RM: Puedes crear un objeto mejor
	// function VimeoDataAdapter() {
	//  this.url = 
	//  this.version = 
	// }
	// VimeoDataAdapter.prototype.getById
	// VimeoDataAdapter.prototype.createUrl
	var vimeoData = {};

	vimeoData.video = {};

	vimeoData.video.url = "video";

	// makes a ajax petition and returns a jqXHR promise
	vimeoData.video.getVideoById = function(id){
		var url = vimeoData.makeUrl(this.url,id,'json');
		return vimeoData.$getJson(url);
	};


	/* vimeo-data main */

	// Check if Jquery exist
	if( !root.jQuery ){ // RM: Revisa si hay una forma de agregar deps en Browserify
		throw new Error('It dependes on jquery');
	}
	
	//Url and version of the api
	vimeoData.url = "http://vimeo.com/api/";
	vimeoData.apiVersion = 'v2';
	
	//Get Jquery ajax functionality
	vimeoData.$getJson = root.jQuery.getJSON;
	vimeoData.$post = root.jQuery.post;

	// Version.
	vimeoData.VERSION = '0.0.1';

	//Make URL Function
	vimeoData.makeUrl = function(api,content,format){
		return this.url + this.apiVersion + '/' + api + '/' + content + '.' + format;
	};



	// Export to the root, which is probably `window`.
	root.vimeoData = vimeoData;


}(this));
