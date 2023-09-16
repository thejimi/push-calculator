function opacityFix(){
	document.getElementById("content").style.opacity = 1
}

function opacityDarker(){
	document.getElementById("content").style.opacity = 0.4
}

function showModal(id){
	var element = document.getElementById(id)
	element.setAttribute("x-data", "{isOpen:true}")
	opacityDarker()
}

console.warn("script loaded")