
function Start_school(){

	/////// SET UP SCENE ////////

	Show("background","bedroom");
	Show("school_alone","school_alone");
	PlaySound("bg","school",{loop:-1, volume:0.3});

	/////////////////////////////

	y("(아씨... 생리하는 거 개짜증나...)");
	y("(자궁 파버리고 싶다...)");
	y("(배도 아프고 주기적으로 화장실에 가야하잖아.)");
	y("(정말...내 몸에 괴리감 느껴진다...)");

	Wait(1000);
	queue(ClearDialogue,0);
	Show("school_stand","school_stand");
	y("...");
	j("어, 유성아!");
	y("...응?");
	j("아, 이건 유성이한테...묻기가 좀...");
	j("좀... 그런데...");
	y("...");
	j("...");
	y("뭔데...?");
	j("그러니까");
	j("그...");
	j("혹시...");
	j("생리대 있어?");
	Wait(500);
	y("...");
	y("(생리하는 거 들키기 싫은데...)");

	Choose({
		"그런 거 안 키워": class_1,
		"어...없어. 양호실에 가봐.": class_1,
		"그걸 왜 나한테 물어?": class_1
	});
}
function class_1(message){

	n(message);
	j("역시...");
	j("아, 부끄러워. 왜 너한텐 묻기 힘들지?");
	Wait(500);
	j("여기 여자반이긴 한데,");
	j("이런 말 하긴 미안하지만, 유성이는 좀 남자같잖아.");
	y("남자같은 게 뭔데?");
	j("교복도 치마가 아니라 바지 입고.");
	j("머리도 짧고...");
	y("...");
	j("머리는 언제 기를 거야?");
	y("별로 생각 없는데...");
	j("에이, 보이쉬했던 애들이 대학가면 머리 기르고 완전 꾸미고 다닌대.");
	y("누가 그래?");
	j("결혼도 우리보다 먼저 하는 거 아냐?");
	y("(한숨)");
	j("유성이 너 웨딩드레스 입은 모습 너무 궁금하다.");

	Choose({
		"꺼져": class_bad,
		"내가 웨딩드레스를 왜 입어?": class_no,
		"나 결혼 생각 없는데?": class_without
	});
}

function class_bad(message){
	n(message);
	j("까칠하긴.");
	j("결혼할 때 나 꼭 불러줘!");
	y("뭐라는 거야...");
	Toilet()
}
function class_no(message){
	n(message);
	j("결혼할 때 입어야지!");
	j("지금은 상상이 안돼.");
	y("그런 거 상상하지 마.");
	j("아무튼, 결혼할 때 나 꼭 불러줘!");
	Toilet()
}
function class_without(message){
	n(message);
	j("그런 애들이 제일 먼저 간다더라!");
	y("난 진짜 생각 없어.");
	j("미래 일은 아무도 몰라~");
	j("너도 시집 가야지~");
	j("결혼할 때 나 꼭 불러줘!");
	Toilet()
}

function Toilet(){
	j("아! 곧 종친다!");
	Show("school_stand",null);
	y("하아....");
	Wait(1000);
	y("어서 화장실이나 가야겠다.");

	Choose({
		"반 근처 여자화장실로": near_girl,
		"복도 끝 여자화장실로": far_girl,
		"한 층 아래 남자화장실로": under_boy
	});
}

//Toilet SCENE
queue(ClearDialogue,0);

function near_girl(message){
	y("뭐야, 줄도 꽤 길고 아는 애도 많아...");
	$.near_girl = true
	if($.under_boy){
		y("귀찮아도 복도 끝으로 가야겠다.");
		far_girl();
	}else{
		Choose({
			"한 층 아래 남자화장실로": under_boy,
			"복도 끝 여자화장실로": far_girl
		});
	}
}
function far_girl(message){

	queue(ClearDialogue, 0);
	Wait(1000);
	y("다행이다.");
	y("여긴 아는 사람도 없고,");
	y("사람도 별로 없네.");
	Wait(1000);
	if($.under_boy || $.near_girl){
		y("에이씨...");
		y("내가 뭐 많은 것을 바라는 것도 아니고");
		y("화장실 좀 편하게 가고싶을 뿐인데");
		y("이렇게 눈치보면서 다녀야하나...");
		Wait(500);
		y("에휴...");
	}
	y("빨리 가야겠다.");
	school_End();
}

function under_boy(message){
	$.under_boy = true;
	Wait(500);
	y("생리대를 갈면 소리가 날텐데 남자화장실로 가는 건 좀 그렇지 않을까...");
	if(!$.near_girl){
		Choose({
			"반 근처 여자화장실로": near_girl,
			"복도 끝 여자화장실로": far_girl
		});
	} else{
		y("귀찮아도 복도 끝으로 가야겠다.");
		far_girl();
	}
}

function school_End(){
	Clear();
	Start_Going_home();
}