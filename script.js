// SCRIPT for cart items

let video_section = document.getElementById("services");
let video_screen = document.getElementById("screen_1");

let service_box = document.getElementById("services");
let service_screen = document.getElementById("service_screen");

let screen = 0;

let videoIndex = 0;

let video_Names = [{name:'ElephantStandAnim'}, {name:'monkeyFunnyVideo'}, {name:'Exam-Meme'}, {name:'cat-Funny video'}, {name:'sunVideo'}, {name:'Dog-funny video'}, {name:'funny sister meme'}, {name:'comedy johny leever'}, {name:'telugu comedy'}, ]

for(let i=0; i<9; i++){
	let video_box = document.createElement('div');
	video_box.classList.add("video_box");
	video_box.setAttribute(`id`, `${i}`);
	video_section.appendChild(video_box);
	
}

let video_item = Array.from(document.getElementsByClassName("video_box"));

video_item.forEach((element, i)=>{
	
	let video_play_box = document.createElement('div');
	video_play_box.classList.add("video_play_box");
	element.appendChild(video_play_box);
	
	let video_txt = document.createElement('div');
	video_txt.classList.add("video_txt");
//	video_txt.textContent = "Video-Name" ;
	video_txt.textContent = video_Names[i].name ;
	element.appendChild(video_txt);
	
	
	
})

let video_play_box = Array.from(document.getElementsByClassName("video_play_box"));


video_play_box.forEach((element, i)=>{
	
	let video_play_box = document.createElement('video');
	video_play_box.classList.add("video");
	video_play_box.controls = "all";
	video_play_box.setAttribute(`id`, `${i+1}`);
	
//	video_play_box.src = "ElephantStandAnim.mp4";
	video_play_box.src = `${i+1}.mp4`;
	
//	element.onclick(()=>{	
//	})
	element.appendChild(video_play_box);

	
})

let video_play_card = Array.from(document.getElementsByClassName("video"));

video_play_card.forEach((element, i)=>{
	
element.addEventListener('click', (t)=>{
videoIndex = parseInt(t.target.id);
//videoIndex = parseInt(element.id);
//let videoIndex = t.target.id;

//video_screen.src = `${videoIndex}.mp4`;
video_screen.src = `${videoIndex}.mp4`;

})

})

/*
		if(screen == 0){
			screen = 1;
		video_screen.display = "block";
		service_screen.display = "block";
		service_box.display = "none";
		}else{
			screen = 0;
		video_screen.display = "none";
		service_screen.display = "none";
		service_box.display = "block";
		}
*/

/*
if(screen == 0){
	
		video_screen.display = "block";
		service_screen.display = "block";
		service_box.display = "none";
		
}else if(screen == 1){
	
		video_screen.display = "none";
		service_screen.display = "none";
		service_box.display = "block";
		
}

*/