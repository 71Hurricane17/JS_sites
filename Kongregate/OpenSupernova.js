// 1st: Rigth click on game screen and see its frame source code;
// 2nd: Copy 'var options' entirely (replace it on the code below);
// 3rd: Press F12 on a browser and copy this code on the 'Console' tab;
// 4th: Press Enter and the link will be generated below this code.
function getGameLink1(){
	var options = {"swfurl":"https://chat.kongregate.com/gamez/*","flashvars":"{...}","title":"...","width":xxx,"height":xxx};
	var url = 'supernova://play/?swfurl=' + options.swfurl;
	var q = options.flashvars.replace(/\"/g,'').replace('{','').replace('}','').replace(/:/g,'=').split(',');
	for(i in q){
		if(q[i].endsWith('=') || q[i].startsWith('kongregate_game_version')){
			continue;
		}
		url += '&' + q[i];
	}
	console.log(url);
}
getGameLink1();

// If Ruffle or something is preventing you from opening the frame source code, do this:
// 1st: Press F12 and go to 'Sources' tab
// 2nd: On 'page' tab (inner tab from 'Sources' tab), scroll down and look for 'gameiframe(gameXXXXXX.konggames.com/)' and expand it
// 3rd: Expand the folder 'games/*'
// 4th: Rigth click on the file '?kongregate_host=www.kongregate.com' and open it on a new tab
// 5th: In this new tab, paste to the left of the URL this: 'view-source:'
// 6th: Press enter to look the frame source code.

// If you don't find the 'var options', but there is a 'var swfobject_flash_vars',
// copy 'var swfobject_flash_vars' and 'var swf_location' and replace them on the code below
// (Same procedure of the function getGameLink1)
function getGameLink2(){
	var swf_location = "//chat.kongregate.com/gamez/*";
	var swfobject_flash_vars = {...};
	var url = 'supernova://play/?swfurl=https:' + swf_location;
	var q = JSON.stringify(swfobject_flash_vars).replace(/\"/g,'').replace('{','').replace('}','').replace(/:/g,'=').split(',');
	for(i in q){
		if(q[i].endsWith('=') || q[i].startsWith('kongregate_game_version')){
			continue;
		}
		url += '&' + q[i];
	}
	console.log(url);
}
getGameLink2();
