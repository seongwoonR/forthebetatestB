
function Start_Dinner_2(){

	/////// SET UP SCENE ////////

	Show("background","dinner");
	Show("mom","mom_sitting");
	Show("table","dinner_table_3");
	//PlaySound("bg","bedroom_1",{loop:-1});

	/////////////////////////////

	queue(ClearDialogue,0);
	Wait(2000);
	y("다녀왔습니다.");
	m("왔니?");
Wait(500);
	Show("me","dinner_standing");
	m("...");
	m("어깨 좀 펴고 다녀라.");

	Choose({
		"싫어요.": home_1,
		"이게 최선이에요.": home_1,
		"가슴 도려내고 싶어요.": home_coming_1
	});

	function home_1(message){
		y(message);
		m("그러다 자세 다 망가져");
		m("머리는 또 그게 뭐야?");
		Choose({
			"왜요?": home_2,
			"뭐요?": home_2,
			"뭐가요?": home_2
		});
	}

	function home_coming_1(message){
	y(message);
	y("튀어나온 거 부끄럽고 짜증나요");
	m("말을 뭐 그렇게 하니!");
	m("엄마도 싫을 때 있어.");
	y("엄마는 그래도 저처럼 압박조끼를 하고 숨기진 않잖아요.");
	Wait(800);
	m("숨길 필요가 뭐가 있어?");
	m("다른 애들도 다 가슴 달렸는데.");
	y("제가 제 몸에 달린 게 싫은데 왜 남과 비교를 해요?");
	m("꼬박꼬박 말대꾸 하지.");
	m("머리는 또 그게 뭐야?");
	Choose({
		"왜요?": home_2,
		"뭐요?": home_2,
		"뭐가요?": home_2
		});
	}

function home_2(message){
	y(message);
	m("오면서 머리 잘랐니?");
	y("아뇨.");
	m("머리가 차분해서 그런가.");
	m("좀 단정하게 기르는 게 어때?");
	m("요즘 숏컷 유행해서 예쁜 머리 많잖니.");
	Choose({
		"예쁜 거 관심 없어요.": home_3,
		"별로 기를 생각 없어요.": home_3,
		"제 머리는 제가 알아서 할게요.": home_3
			});
		}
}

function home_3(message){
y(message);
m("...");
m("다른 애들처럼 꾸미면 좋을텐데...");
m("알았다.");
m("학교는 어땠니?");

Choose({
	"그저 그래요.":home_4,
	"피곤해요.": home_4,
	"저, 드릴말씀이 있어요.":saying_1
});
}

function home_4(message){
y(message);
m("그래, 좀 쉬어라.");
m("와서 과일도 먹고.");
Wait(500);
y("네.");

Choose({
	"(과일로 장난치기)": fruit,
	"엄마, 할 말이 있어요.":saying_1,
	"아빠는 언제 오세요?": asking
});
}
function fruit(message){
	y(message);
	m("똑바로 먹어. 왜 그러니?");

	Choose({
		"할 말이 있어요.": saying_1,
		"저 트랜스젠더예요.": saying_direct,
		"자궁 파버리고 싶어요.": strict_saying
	});
}

function asking(message){
	y(message);
	m("곧 오실 거다. 왜 묻니?");

	Choose({
		"할 말이 있어요.": saying_1,
		"저 트랜스젠더예요.": saying_direct,
		"자궁 파버리고 싶어요.": strict_saying
	});
}

	function saying_1(message){
		y(message);
        y("엄마는, 그...");
        y("성소수자에 대해 어떻게 생각해요?");
        m("성소수자?");
        m("게이같은 사람 말하는거야?");
        m("그 사람들은 뭐...");
        m("그 사람들은 자신들의 삶 살아가겠지.");
        y("주변에 그런 사람 있으면 어떨 것 같아요?");
        m("글쎄...");
        m("별로 생각해본 적 없는데...");
        m("그런 거 생각하지 말고 공부나 해.");
        y("엄마...");
        Choose({
           "저 트랜스젠더예요.": saying_direct,
            "저는 남자로 인식받는 게 편해요.": function(message){
                y(message);
                y("그리고, 대학가면 호르몬도 맞고 수술도 하고 싶어요.");
                saying_2();
            },
            "공부도 중요하지만....": function(message){
                y(message);
                y("나중에 갑자기 말하는 것보다 지금 일단 말씀드리고 싶어요.");
                y("저는 트랜스젠더이고...");
                y("대학 가면 호르몬 맞고 수술하고 싶어요.");
                m("뭐?");
                y("저는 여자보다 남자로 인식받고 싶어요.");
                saying_2();
            }
        });
        }

    function saying_direct(message){
        y(message);
		y("저, 남자로 보이는 게 편해요.");
		y("그리고, 대학 가면 호르몬 맞고 수술도 하고 싶어요.");
		m("뭐?");
		y("전 여자보다 남자로 인식받고 싶다고요.");
		saying_2();
	}


function saying_2(){
	m(". . .");
    Wait(800);
	m("네가 다른 여자애들이랑은 조금 다른 건 느꼈지만...");
	m("네가 싫다고 해서 치마 입으라고도 안 하잖아.");
	y("치마이야기가 아니잖아요.");
	m(". . .");
    saying_middle();
}

function saying_middle(){
	Wait(500);
    m("호르몬 맞고 수술한다고 해서");
m("사람들이 너를 남자로 봐줄 것 같니?");
y("맙소사. 그거 혐오발언이에요.");
Wait(1000);
m("특별해지고 싶은 거야?");
m("사람들한테 주목받으려고?");
y("네???");
m("하아...");
Wait(500);
y(". . .");
m("제발 평범하게 살자, 성아.");

Choose({
"저는 오히려 평범하고 싶어서 이러는 거예요.": smooth,
"평범한 게 뭔데요?": strong,
"내가 비정상이라고요?": hard
});
}

function smooth(message){
y(message);
y("저도 주민등록번호나 성별같은 거 신경쓰지 않고 지내고 싶어요.");
y("저에게는 오히려 남자로 사는게 평범하게 사는 거예요.");
Wait(800);
y("사람들이 저를 여자로 지칭할 때마다");
y("안맞는 옷을 입은듯 불편하다고요.");
m("아무런 문제도 없는 몸에 칼대는게 어떻게 평범한 거야?");
saying_3();
}

function strong(message){
y(message);
m("보통사람들처럼 사는 거.");
m("이건 완전 비정상이잖아.");
y("그게 무슨 말이에요?");
m("멀쩡히 있는 몸에 억지로 칼대는 거잖아.");
saying_3();
}
function hard(message){
y(message);
m("멀쩡히 있는 몸에 억지로 칼대는데 그게 비정상이지 뭐야.");
y("제가 이런 삶을 원한 것도 아니잖아요!");
y("트랜스젠더가 무슨 원해서 되는거고 원하지 않으면 안되는 건 줄 알아요?");
saying_3();
}

function saying_3(){
 y("그럼 전에 저에게 쌍커풀 수술하면 예쁠 것 같다는 말은 왜하셨어요?");
 m("그건 다르지.");
 Wait(800);
 m("수술하면 돈은 돈대로 들고");
 m("너는 남자도, 여자도 아닌 채로 어중간하게 살게 되는 거야.");

Choose({
	"헐": saying_4,
	"허어어어어얼": saying_4,
	"허어어어어어어어어어얼": saying_4
	});
}

function saying_4(message){
	y(message);
	m("꼭 수술 해야하니?");
	m("지금처럼 너를 남자로 보는 사람한테는 그냥 지나가고");
	m("농담처럼 넘어가면 되잖아.");
	y("...");
	Choose({
		"수술하지 않아도 나를 남자로 받아들여줄 거예요?": function(message){
			y(message);
			y("수술을 하지 않으면");
			y("돈을 쓰지 않으면 내가 나로 생활하지 못하는 사회잖아요.");
			y("그런 사회에서 내 성별로 보이고싶은 게 잘못인가요?");
			Wait(800);
			saying_5();
		},
		"그게 말처럼 쉬워요?": function(message){
			y(message);
			y("당장 화장실만 가도");
			y("사람들이 놀란다구요!");
			saying_5();
		},
		"그건 엄마의 욕심이잖아요.": function(message){
			y(message);
		y("수술하지 않으면 언젠간 돌아오겠지,");
		y("이렇게 희망을 품을 수 있어서 그런 거 아니에요?");
		saying_5();
	}
});
}
function saying_5(){
	m(". . .");
	Wait(500);
	Show("arm","mom_cry");
	m("훌쩍...");
	m("흐흐흑....");
	m("흑....");
	Choose({
		"알았어요. 울지 마세요.": function(message){
			y(message);
			m("훌쩍...");
			Wait(500);
			m("수술은 안했으면 좋겠어.");
				Show("arm",null);
			m("수술하면 건강도 나빠지잖아.");
			Wait(500);
			y("하아...");
			saying_7();
		},
		"저는 그게 스트레스의 연속이에요.": function(message){
			y(message);
			y("일상의 사소한 것들 마저도");
			y("저에게는 다 스트레스로 돌아온다구요.");
			saying_6();
		},
		"[운다]": function(message){
			y("훌쩍훌쩍");
			m("흐흑...");
			y("흑...");
			y("훌쩍...");
			saying_6();
		}
	});
}
	function saying_6(){
		m("흐흑....");
		m("왜...");
			Show("arm",null);
		m("왜 넌 엄마 입장은 생각 안해줘?");
		y(". . .");
		m(". . .");
		m("수술하면 건강도 나빠지고");
		m("넌 왜 어려운 길을 가려고 하니.");
		Wait(1000);
		y("전 이대로 사는 게");
		y("더 희망없는 일이고");
		y("더 어려운 일이에요.");
		saying_7();
	}
	function saying_7(){
		m("지금은 고등학생이고, 공부할 때니까...");
		m("일단 그 생각하지 말고.");
		m("공부에 집중하자.");
        Wait(800);
		m("좀 더 생각해보고");
		m("옳은 결정 내려야지.");
		m("한 번 결정하면 되돌릴 수 없잖아.");
		m("잘 생각해 보자.");
		m("응?");
		y("아으으으으으으으으으으");
		m("아빠 오시면 말하지 말고.");
		y(". . .");
		Ringing();
	}
function strict_saying(message){
	y(message);
	y("생리도 짜증나고요");
	y("가슴도 짜증나고");
	y("제 몸이 혐오감들어요!");
	m("대체 뭐가 문제니?");
	y("여자라고 호명당하는 것도 싫고 여자화장실 가는 것도 싫어요.");
	Wait(800);
	m("다 한때 방황으로 끝날 거야.");
	m("엄마도 고등학교 때 너처럼 머리 짧고 보이쉬하게 다니던 사람 한둘씩 있었어.");

	Choose({
		"방황같은 거 아니에요": function(message){
			y(message);
			y("저는 지금 스타일이 좋아요.");
			y("그리고 대학 가면 호르몬 맞고 수술하고 싶어요.");
			m("유성아...");
			y("여자로 보이는 거 지긋지긋해요.");
			saying_2();
		},
		"전 남자예요.": saying_1,
		"그럼 그런 사람들도 저랑 비슷하겠죠!": function(message){
			y(message);
			m("대학가니까 머리 기르고 화장하더라.");
			y("아오! 진짜!");
			y("저는 그럴 일 없어요!");
			y("왜냐하면 전 이런 스타일이 좋으니까요!");
			Wait(800);
			y("그리고, 대학 가면 호르몬 맞고 수술 할 거예요!");
			m("뭐?");
			y("다른사람이 저를 여자라고 부르지 않았으면 좋겠어요!");
			saying_2();
		}
	});
}

function Ringing(){
	Start_Dinner_3();
}
