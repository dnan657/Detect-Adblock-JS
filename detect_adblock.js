function detect_adblock(){
	let elem = document.createElement('div');
	elem.style.display = 'block';
	elem.style.position = 'absolute';
	elem.style.left = '-100px';
	elem.style.top = '-100px';
	elem.style.width = '10px';
	elem.style.height = '10px';
	
	let arr_class = ['ad', 'ads', 'adsbox', 'ad-placement', 'doubleclick', 'ad-placeholder', 'ad-badge', 'adsbygoogle', 'ads_bottom', 'adlabel'];
	elem.className = arr_class.join(' ');
	
	document.body.appendChild(elem);
	
	let status = false;
	let arr_id = ['adsense', 'spilAdvert', 'porkchopExpress', 'leaderboard'];
	for(let item of arr_id){
		elem.id = item;
		
		status = window.getComputedStyle(elem).getPropertyValue("display") == 'none' || elem.offsetHeight == 0 || elem.offsetParent == 0;
		if(status){
			break;
		}
	}
	
	elem.remove();
	return status
}
