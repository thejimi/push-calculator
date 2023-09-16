function on_websiteload(){
	setTimeout(() => {
		document.getElementById("loading").style.display = "none"
		document.body.classList.add("bg-black")
		document.getElementById("everything").style.display = "block"
	}, 500)
}

function opacityFix(){
	document.getElementById("content").style.opacity = 1
}

function opacityDarker(){
	document.getElementById("content").style.opacity = 0.4
}