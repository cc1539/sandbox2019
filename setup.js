
function forClass(class_name,func) {
	var elems = document.getElementsByClassName(class_name);
	for(var i=0,l=elems.length;i<l;i++) {
		func(elems[i]);
	}
}

function toggleCollapsible(source) {
	var target = source.nextElementSibling;
	target.style.display = (target.style.display==="block"?"none":"block");
}

window.onload = function() {
	forClass("category",function(elem){
		var html = elem.innerHTML;
		elem.innerHTML = html.substring(0,3)+'<span style="font-size:12px;">'+html.substring(3)+"</span>";
	});
	forClass("collapsible",function(elem){
		elem.onclick = new Function('toggleCollapsible(this)');
	});
	{
		var title = document.getElementById("title");
		var html = title.innerHTML;
		var span_head = '<span style="font-size:24px;">';
		{
			var title_text = title.innerHTML;
			var new_title_text = '';
			var embiggen = true;
			for(var i=0;i<title_text.length;i++) {
				var c = title_text.charAt(i);
				if(embiggen) {
					new_title_text = new_title_text+span_head;
				}
				new_title_text = new_title_text+c;
				if(embiggen) {
					new_title_text = new_title_text+'</span>';
				}
				embiggen = (c==' ');
			}
			title.innerHTML = new_title_text;
		}
		/*
		title.innerHTML =
			span_head+html.charAt(0)+"</span>"+html.substring(1,12)+
			span_head+html.charAt(12)+"</span>"+html.substring(13,20)+
			span_head+html.charAt(20)+"</span>"+html.substring(21);
		*/
	}
}
