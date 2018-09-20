
function Start_my_room(){
	//clear
			queue(ClearDialogue,0);
			/////// SET UP SCENE ////////

			Show("background","bedroom_3");
			Show("friend","friend_2");
	PlaySound("bg","bedroom_1",{loop:-1});
	//Show("light","bedroom_2_light",{x:0,y:143});

Wait(1000);
	f("유성! 이야기 해봤어?");
	f("뭐라셔?");

	Choose({
		"좆됐어.": notgood,
		"그냥...그랬어.": soso,
		"수술하면 집에서 쫓아낸대.": notgood_2
	});

function notgood_2(message){
  y(message);
	if($.silent){
		f("거짓말이지..?");
		y(". . .");
		Wait(1000);
		y("비슷하게 말했어.");
		bedroom_con();
	}else{
		f("거짓말이지...?");
		y("...");
		f("거짓말이라고 해줘.");
		y("......");
		Wait(500);
		f("세상에...");
		bedroom_con();
		}
}
	function notgood(message){
	y(message);
	f("아...");
	f("...");
	y("...");
	f("좀 괜찮아?");

	Choose({
		"마음 다잡아야지.": function(message){
			y(message);
			f("그래, 우리 강해지자!");
			f("넌 혼자가 아니야.");
			y("...");
			f("...");
			bedroom_con();
		},
		"이렇게 태어난 내 잘못인걸까?": function(message){
			y(message);
			f("아냐, 네 잘못 아니야.");
			f("넌 잘못 없어.");
			f("...");
			bedroom_con();
		},
		"괜찮겠냐.": function(message){
			y(message);
			f("...");
			f("미안...");
			f("내가... 괜히...");
			f("커밍아웃하라해서...");
			y("...");
			bedroom_con();
		}
	});
}

function soso(message){
	y(message);
	f("어중간한 반응이네.");
	y("실로 어중간하니까.");
	if($.telling_hard){
    y("머릿속에만 존재했던 포비아가");
    y("우리 가족이었을지");
    y("상상이나 해봤겠어.");
  }
	f("...");
	y("...");
	f("좀 괜찮아?");

	Choose({
		"마음 다잡아야지.": function(message){
			y(message);
			f("그래, 우리 강해지자!");
			f("넌 혼자가 아니야.");
			y("...");
			f("...");
			bedroom_con();
		},
		"이렇게 태어난 내 잘못인걸까?": function(message){
			y(message);
			f("아냐, 네 잘못 아니야.");
			f("넌 잘못 없어.");
			f("...");
			bedroom_con();
		},
		"괜찮겠냐.": function(message){
			y(message);
			f("...");
			f("미안...");
			f("내가... 괜히...");
			f("커밍아웃하라해서...");
			Wait(500);
			y("됐어, 어차피 언젠간 해야할 일이었으니까.");
            y("매도 먼저 맞는 게 낫다잖아.");
            f("...");
			bedroom_con();
			}
		});
	}
	}

function bedroom_con(){
	if($.harmony){
        y("휴...");
		y("집이 화목하긴 개뿔...");
		y("내가 조용해야 집이 화목하겠지.");
		y("그럼 그게 뭐가 화목한 거야?");
		y("나는 가족구성원이 아닌 거야?");
        Wait(800);
		f("...");
        f("사람들은 겉만 보니까...");
		Wait(1000);
	}
	y("내가...");
	y("내가 사람들에게 알려지면,");
	y("난 부끄러운 자식이 되는 걸까?");
		Wait(800);
	y("지금은 누군가에겐 부러운 자식이지만");
	y("내가 트랜스젠더라는 게 밝혀지면");
	y("나는 숨겨야하는 자식이 되는 걸까?");
	Wait(1000);
	f(". . .");
	f("그렇게 생각하지 마.");
	f("우리를 지지해주는 사람들은 많을 거야.");
	f("우리는 틀린 게 아니니까.");

	Choose({
		"닥쳐! 네가 뭘 알아.": function(message){
			y(message);
			y("부모님이 혐오자일때 그 마음을,");
			y("네가 어떻게 알아!");
			f("유성아.....");
			y("하");
			y("지지해주는 사람?");
			y("가장 내편일 줄 알았던 사람들에게");
			y("혐오발언만 듣고 왔는데...");
			y("내가 <i>비정상</i>이라는 소리만 듣고왔는데...");
			f("...");
			if($.telling_hard){
				y("아빠한테 집나가라는 소리도 들었어.");
				y("연 끊을 거라는 소리를 들었다구.");
				f("...");
				f("미안...");
			}
			y("그냥... 잘래.");
			Show("phone","phone_b");
			f("푹 쉬어.");
			totheend();
		},
		"수술을 하면 어떻게 될까...": function(message){
			y(message);
			y("친구를 사귈 때마다");
			y("저 애가 트랜스포비아일지 아닐지 생각하고");
			y("남자와 여자로 나뉘어진 화장실 가운데에서 고민하고");
			Wait(800);
			y("저 사람이 나를 남자로 생각할지 여자로 생각할지");
			y("끊임없이 고민하겠지.");
			Wait(1000);
			y("수술을 하고 나서도 불편하면...?");
			f("유성아....");
			y("돈은 돈대로...");
			Wait(500);
			y("누구나 비밀을 품고 살아가는데");
            y("지금은 그걸 말해야하지만 수술하면 말하지 않아도 되겠지...?");
			f("...");
			y("그냥... 잘래.");
			Show("phone","phone_b");
			f("...푹 쉬어.");
			totheend();
		},
		"그냥... 죽고 싶다.": function(message){
			y(message);
			y("왜 사는 지 모르겠어...");
			f("유성아....");
			y("앞으로 생길 일들이");
			y("지금보다 더 행복할 거라고 누가 보장해주지?");
			f("...");
			y("그냥... 잘래.");
			Show("phone","phone_b");
			f("푹 쉬어.");
			totheend();
		}
	})
}

function totheend(){
	Wait(1000);
	Clear();
	Start_Outro();
}

