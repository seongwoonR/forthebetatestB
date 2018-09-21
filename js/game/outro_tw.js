
function Start_Outro_tw(){

	/////// SET UP SCENE ////////

	Show("background","outro_tw");

	/////////////////////////////

	//pretend R is DiDi
	R("그리고 나는 이제 스물 다섯이 되었고!(짠!)");
	p("세상에!");
	R("돈을 모아 수술 예정도 잡았어!");
	p("헐!");
	R("아마 이 게임이 공개될 즈음엔 수술도 끝났을걸!");
	Choose({
		"뭐야 이 급전개는!?": function(message){
			p(message);
			Outro_1();
		},
		"축하해!": function(message){
			p(message);
			R("고마워!!");
			Outro_1();
		},
		"헐x2": function(message){
			p(message);
			Outro_1();
		}
	});
}

function Outro_1(){
	if($.result==2){
		p("수술 생각은 딱히 없다고 하지 않았어?");
		R("사람 일은 모르는 법이잖아.");
	}

	if($.response==1){
		p("...괜찮은 거야...?");
		p("그래도 가족인데...");
		R("예상 못한 결과는 아니었지.");
	}else if($.response==2){
		p("그래도 잘 풀려서 다행이다.");
		p("무슨 말을 선택해도 다 안좋을 줄 알고");
		p("괜히 걱정했잖아.");
		R("나같은 경우도 있다는 것을 알리고 싶었어.");
		R("아직 완전히 이해하시진 못했지만.");
		R("그래도 감사해.");
	}

	R("있잖아,");
	R("조금 웃긴 얘기처럼 들릴 지도 모르겠지만.");
	R("그때로 다시 돌아간다 해도");
	p("했던 선택을 바꾸지 않을 거라구?");
	R("내가 했던 선택을 바꾸지 않--");
	R("그래, 그거야.");
	Wait(800);

	switch($.result){
		case 1:
		R("엄마한테 그렇게 대들었던 것도.");
		R("그렇게 대들어서 집에서 나가야 했던 것도..."); break;
		case 2:
		R("엄마한테 그렇게 대들었던 것도.");
		R("결국엔 내가 입을 닫아버린 것도.");
		p("입을 닫은 건 마음을 닫았다는 거겠지..."); break;
		case 3:
		R("엄마에게 먼저 드릴 말씀이 있다고 말했던 것도.");
		R("엄마가...");
		R("내게 바라는 대로 하라는 대답을 해주었던 순간도.");
		p("그 때 좀 감동이었어."); break;
	}

	if($.Search>1){
		R("네가 이것저것 검색한 대로,");
		R("온라인 상에서 트랜스젠더를 오해하거나 조롱하는 사람들도 많아.");
		p("자신을 부정당하는 느낌이겠지...");
		R("맞아. 사실 그런 거 볼 때마다 너무 스트레스받고...");
		R("정말 견디기 힘들 때는 자살까지 생각하고, 시도하려 한 적도 있었어.");
	}

	Wait(800);
	R("별 거 아닌 것 같지만,");
	R("살면서 그 친구처럼 때로는 괜찮다며 내 눈을 가려주기도,");
	R("때로는 내 등을 떠밀어 주기도 하는 사람들이 없었다면 지금 이 자리에 있지 못했을지도 몰라.");

	if($.notcool){
		p("엄청 투닥거린 거 같던데...");
	}

	R("앞으로도,");
	R("아마 더더욱 힘들어질 테고 많은 일들을 겪겠지만.");
	Wait(800);
	R("나는 살아남아서...");
	Wait(800);
	R("어떻게든 살아남아서");
	R("우리가 틀린 게 아니라고 말하고 싶어.");
	R("우리는 잘못된 존재가 아니야.");

	if($.response==1){
		R("그냥 덜 불행하고 싶은 사람들이지.");
	}else if($.response==2){
		R("그냥 이전보다 나은 삶을 바라는 사람들이지.");
	}

	qnasection();
}

	function qnasection(){
	R("내 이야기는 여기서 끝이야.");
	R("혹시 궁금한 게 남았어?");
//여기서부터
	$.asked_question = 0;
	Choose({
		"SRS(성별적합수술)병원 선택은 어떻게 해?": hospital,
		"정신과는 어떻게 선택해?": psyci,
		"후회하지는 않아?": regret_1
	});
}

function hospital(message){
	$.hospital = true;
	$.asked_question++;

	p(message);

	R("음... mtf의 수술은 크게 국내와 태국에서 받는 경우가 대부분이야!");
	R("다만 국내는 기술이나 경험이 태국에 비해 굉장히 부족해.");
	R("물론 국내라고 장점이 없지는 않지만!");
	p("확실히 태국에 트랜스젠더가 많다고 들어본 것 같아.");
	p("그럼 국내에서 수술하면 뭐가 좋아?");
	R("국내에서 수술하면...");
	R("아픈 몸을 이끌고 비행기를 탈 일은 없겠지? 비행기 비용도 안 들테고.");
	R("또 말이 안 통해서 곤란해지는 상황도 없을 테고, 애프터케어나 간호도 비교적 쉽게 받을 수 있겠지.");
	R("그걸 다 감안하고서도 기술면에서 더 나은 태국을 선호하는 사람이 많긴 하지만...");
	R("뭐, 제각기 장단점이 존재하니까 본인의 상황에 맞게 병원을 선택하는 게 좋다고 생각해.");
	choose_outro();
}

function psyci(message){
	$.psyci = true;
	$.asked_question++;
	p(message);

	R("아쉽게도 트랜스젠더 친화적인 정신과는 한국에 그리 많지 않아.");
	R("그래서 유명한 곳으로 대부분 몰리는 편이지.");
	p("친화적인 정신과가 별로 없는 것은 어느정도 알겠지만...");
	p("몰릴 정도야?");
	R("심리검사 비용이 만만치 않은데, 그 비용을 내가면서 불확실한 곳으로 갈 수는 없으니까.");
	R("첫 정신과는 알려진 곳으로 가는게 좋아.");
	R("나 역시 옛날에 잘 모르고 동네 정신과에 들렀다가 돈만 버린적이 있거든.");
	choose_outro();
}

function regret_1(message){
	$.regret_1 = true;
	$.asked_question++;
	p(message);

	R("어떤 것을 묻는 건지 궁금한데...");
	p("네가 만든 선택지 아니었어..?");
	R("나를 트랜스젠더로 정체화한 후, 호르몬을 시작하고 수술까지 하게 된 것?");
	R("부모님께 커밍아웃하게된 것?");
	R("결론부터 말하자면 둘 중 어느것도 후회하지는 않아.");
	R("아까 말했듯-");
	p("선택을 바꾸지 않을 거라구?");
	R("선택을 바꾸진 않을-");
	R("그래, 그거라구.");
	R("물론 지금이라고 힘든 일이 없지는 않지만,");
	R("적어도 행동하기 전보다는 낫다고 분명하게 말할 수 있어.");
	R("지금이 그렇게나 행복하다기 보다는...");
	R("그 전이 너무나 힘들었던거지만...");
	choose_outro();
}

function choose_outro(){
	Wait(800);
	if($.asked_question==3){
		last_tw();
	}else{
		R("궁금한 게 더 남았어?");

		var options = [];
		if(!$.hospital) options["SRS(성별적합수술) 병원 선택은 어떻게 해?"]=hospital;
		if(!$.psyci) options["정신과는 어떻게 선택해?"]=psyci;
		if(!$.regret_1) options["후회하지는 않아?"]=regret_1;
		if($.asked_question>=1) options["아니"]=last_tw;
		Choose(options);
	}
}

function last_tw(){
	if($.asked_question<=2){
		p("아니");
		R("좋아, 쿨 한 플레이어씨!");
		R("여기까지 함께 해줘서 고마워!");
	}else if($.asked_question==3){
		R("더 이야기하고 싶은데 시간이 없네.");
		R("내 이야기를 다 들어줘서 고마워!");
	}
	//여기까지거든
	R("너에게 즐거운 일만 있길 바라.");
	Wait(1000);
	f("디디님, 수액 갈아드릴게요.");
	Wait(1000);
	finale_tw();
}

function finale_tw(){
	queue(ClearDialogue,0);
	Choose({
		"리플레이?": replay_2
	});
}

function replay_2(message){
	p("리플레이?");
	Wait(800);
	R("인생에 리플레이 따윈 없어.");
	R("이미 알고 있잖아?");
	Wait(800);
	queue(function(){
		document.getElementById("game").setAttribute("screen", "blank");
	}, 1000);
	//queue(ClearScene,0); // coz the sound's cool!
	queue(function(){
		document.getElementById("game").setAttribute("screen", "credits");
	}, 0);
}
