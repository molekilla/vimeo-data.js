	/* vimeo-data main */

	// Check if Jquery exist
	if( !root.jQuery ){
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
