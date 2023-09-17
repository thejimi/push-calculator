function opacityFix(){
	document.getElementById("content").style.opacity = 1
}

function opacityDarker(){
	document.getElementById("content").style.opacity = 0.4
}

function closeCredits(){
	document.getElementById("madeBy").innerHTML = ``
}

function changeTheme(){
	if(document.body.classList.contains("dark")){
		document.body.classList.remove("dark")
		document.body.classList.remove("bg-black")
		document.body.classList.remove("bg-gray-900")
		document.body.classList.add("bg-gray-200")
	} else {
		document.body.classList.add("bg-black")
		document.body.classList.add("dark")
	}
}

function showModal(id){
	var element = document.getElementById(id)
	element.setAttribute("x-data", "{isOpen:true}")
	opacityDarker()
}

function colored(text, color){
	return `<span class="text-${color}">${text}</span>`
}

function change(objectId, value){
	document.getElementById(objectId).innerHTML = value
	return document.getElementById(objectId).innerHTML
}

function updateAllCounter(){
	var x1 = localStorage.getItem("x1")||"0"
	var x2 = localStorage.getItem("x2")||"0"
	var x3 = localStorage.getItem("x3")||"0"
	var x4 = localStorage.getItem("x4")||"0"
	var x5 = localStorage.getItem("x5")||"0"
	var x6 = localStorage.getItem("x6")||"0"

	var x1Color = 'white'
	var x2Color = 'white'
	var x3Color = 'white'
	var x4Color = 'white'
	var x5Color = 'white'
	var x6Color = 'white'

	if(x1 === '0'){
		x1Color = "red-400"
	} else {
		x1Color = "green-400"
	}
	
	if(x2 === '0'){
		x2Color = "red-400"
	} else {
		x2Color = "green-400"
	}
	
	if(x3 === '0'){
		x3Color = "red-400"
	} else {
		x3Color = "green-400"
	}
	
	if(x4 === '0'){
		x4Color = "red-400"
	} else {
		x4Color = "green-400"
	}

	if(x5 === '0'){
		x5Color = "red-400"
	} else {
		x5Color = "green-400"
	}
	
	if(x6 === '0'){
		x6Color = "red-400"
	} else {
		x6Color = "green-400"
	}

	var resetValue = `${colored(x1, x1Color)}.${colored("1", "blue-300")} ${colored(x2, x2Color)}.${colored("2", "blue-300")} ${colored(x3, x3Color)}.${colored("3", "blue-300")} ${colored(x4, x4Color)}.${colored("4", "blue-300")} ${colored(x5, x5Color)}.${colored("5", "blue-300")} ${colored(x6, x6Color)}.${colored("6", "blue-300")}`
	change("allCounter", resetValue)
}

setTimeout(() => {
	updateAllCounter()
}, 1000)