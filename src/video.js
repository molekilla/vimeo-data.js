	vimeoData.video = {};

	vimeoData.video.url = "video";

	// makes a ajax petition and returns a jqXHR promise
	vimeoData.video.byId = function(id){
		var url = vimeoData.makeUrl(this.url,id,'json');
		return vimeoData.$getJson(url);
	};
