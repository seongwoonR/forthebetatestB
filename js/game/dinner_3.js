
function Start_Dinner_3(){
	Wait(1000);
    d("문 열리는 소리");
	y("오셨어요?");
	d("응-");
	Wait(1000);
	Show("dad","dad_come");
	Show("table","dinner_table_3");

	d("우리 똥공주, 오늘 학교 생활은 어땠어?");

	Choose({
		"늘 똑같죠, 뭘.": sameold,
		"엄마가 할말 있대요.": mom_coming,
		"아오! 망할 공주소리 좀 집어치우면 안돼요?": strong_answer
	});
}

function sameold(message){
	y(message);

    d("학교에서 공부는 잘 되고?");
	y("네.");
    d("잘되긴 뭐가 잘 돼.");
    d("가방만 들고 왔다갔다 하는 거 아냐?");
    y("...아니거든요.");
    y("잘 알지도 못하시면서");
    d("그럼 아빠가 신경 안 써도 되네.");

	Choose({
		"네에에에에에": function(message){
            y(message);
            y("언제는 다른 거 신경 쓰셨겠냐만은...");
            m("유성.");
            sameold_2();
        },
		"그거랑 별개로 할 말이 있는데요...": function(message){
			y(message);
			asking_about_trans();
		},
		"엄마를 신경쓰셔야 할 것 같은데요.": mom_coming
	});
}

function strong_answer(message){
	y(message);
	d("유성!");
	m("아빠한테 말버릇이 그게 뭐니!");
	y("공주소리 듣는 거 너무 싫다고요!");
	y("그렇게 불리는 것도 싫고!");
	y("전에도 그렇게 부르지 말아달라 했잖아요!");
	Wait(800);
	d("예뻐서 그러는 건데 왜그래~");
	y("그렇게 얼렁뚱땅 넘어가려 하지 마세요.");
	d("성아, 오늘 안 좋은 일 있었니?");

	Choose({
		"...아니요": function(message){
            y(message);
            y("그렇게 안 부르셨으면 좋겠어요.");
            d("알았어- 알았어.");
            
            sameold_2();
        },
		"엄마랑 아까 한 이야기 때문이요.": mom_coming,
		"그냥... 좀 스트레스 받았나봐요.": function(message){
			y(message);
			d("스트레스 받았다고 해도 말은 조심해.");
			y("...네.");

            sameold_2();
		}
	});
}

function sameold_2(){

	$.harmony = true;
    Wait(500);
	d("무슨 안 좋은 일 있으면 말해라.");
	d("괜히 엄마한테 화풀이 하지 말고.");
	d("우리집만큼 화목한 집도 드물어.");
	d("아빠 친구는 부러워하더라.");
	y(". . .");
    
    Choose({
        "네, 우리집이 차암 화목하죠.": function(message){
            $.sarcasm = true;
            y(message);
            y("딱히 큰소리 나는 일도 없고.");
            d("유성, 오늘 왜그래?");
            y("다른사람들은 집안사정을 잘 모르잖아요.");
            y("아빠도 저에대해 잘 모르고.");
            y("매번 별로 궁금하지도 않으면서 질문하잖아요.");
            y("대답이 기억 안나니 똑같은 질문만 하고.");
            m("말을 왜 그렇게 하니.");
            Wait(800);
            y("제가 딸이라는 호칭도 싫어하는 걸 아세요?");
            d("?");
            y("저는 여자라고 불고싶지 않아요.");
            y("여자로 취급받는 거 너무 지긋지긋해요!");
            Wait(800);
            d("난 네가 남자같다고 생각해 본 적 없다.");
            y("거봐요, 저한테 아무 관심 없으시지.");
            coming_2();
	       },
        "(침묵)": function(){
        	$.silent = true;
            y(". . .");
            y("그렇구나...");
            sameold_3();
        },
        "화목해 보인다니 다행이네요.": function(message){
            y(message);
            $.silent = true;
            y("자랑스러우시겠어요.");
            d("가정을 화목하게 하는 건 가장의 역할이 아니겠냐.");
            d("핫핫-");
            m("...");
            y("...");
            sameold_3();
        }
    });
}

function asking_about_trans(){
    $.ask_about_trans = true;
    y("아빠는");
    y("트랜스젠더 대해 어떻게 생각하세요?");
    d("뜬금없는 질문이구나.");
    d("우리 옛날에 태국에서 트랜스젠더쇼도 봤잖아.");
    d("기억나니?");
    y("네, 그 사람들에 대해 어떻게 생각하세요?");
    d("각자 자신의 위치에서 열심히 사는 사람들이지.");
    
    Choose({
        "음...그렇구나...": function(message){
            y(message);
            d("그 사람들도 나름대로 열심히 사는 거 아니겠냐.");
            d("너는 지금 공부를 열심히 하면 되는거지.");
            d("아빠도 이렇게 사회에서 열심히 일하고 있잖아.");
            y("네에네에.");
            sameold_3();
        },
        "저도 그 사람들과 비슷해요.": function(message){
        y(message);
        y("저 트랜스젠더이고요...");
        d("뭐?");
        y("남자로 인식받는 게 더 편해요.");
        d("그게 무슨 소리야?");
        d("난 네가 남자같다고 생각해 본 적 없다.");
	   coming_2();
    },
        "그럼 주변에 그런 사람이 있으면 어떨것같아요?": function(message){
            y(message);
            y("그러니까...가까운 사람이요.");
            d("친구중에 성소수자라도 있니?");
            d("뭐, 그 사람들 나름대로 살겠지.");
            d("별로 생각해본 적은 없는데.");
            y("제가 트랜스젠더면 어떨 것 같아요?");
            d("쓸데없는 생각 하지말고.");
            d("공부에 집중할 때잖아.");
            think_of_it();
        }
        });
    }
    
function think_of_it(){
    y("...");
    d("...");
    m("...");
    Choose({
       "제 자신에 대해 아는 게 어떻게 쓸데없는 거예요?":function(message){
           y(message);
           y("저 트랜스젠더예요.");
           y("친구중에 성소수자가 있는 게 아니라");
           y("아니, 친구중에도 있지만!");
           y("쓸데없는 생각이 아니라 제가 트랜스젠더라구요.");
           d("그게 무슨 소리야?");
           y("저는 남자로 인식받는 게 더 편해요.");
           y("태국에 있는 그 사람들은 <i>여자</i>라고 불리는 게 편한 것 처럼");
           y("저는 <i>남자</i>라고 불리는 게 더 편하다구요.");
           d("난... 네가 남자같다고 생각해 본 적 없다.");
           y("그건 아빠 생각 일 뿐이겠죠.");
           coming_2();
       },
        "네... 알겠어요.": function(message){
            y(message);
            y("수학,과학만 열심히 하죠,뭐.");
            m("너무 애한테 그러지 마.");
            d("얘가 이상한 소리를 하잖아.");
            y(". . .");
            Wait(800);
            sameold_3();
    },
        "조금 중요한데요...": function(message){
            y(message);
            y("저한테는...");
            y("지금 한 번 생각해보시면 안될까요?");
            d("지금은 별로 생각하고 싶지 않다.");
            d("나중에 다시 얘기하자.");
            sameold_3();
        }
    });
}

function sameold_3(){
    d("크흠,");
	d("밤이 늦었으니 슬슬 잘 준비 해.");
    if($.ask_about_trans){
        d("시덥잖은 생각 하지말고.");
    }
	tomyroom();
}

function mom_coming(message){
	y(message);
	d("엄마?");
	d("당신, 왜?");
	m("아무것도 아니야.");
	d("나 오기 전에 무슨 말 했었어?");
	m("아니.");
	y(". . .");

	Choose({
		"저 트랜스젠더예요": function(message){
        y("저 트--");
        m("오늘 학교에서 힘들었대.");
        y("...");
        d("그래, 때론 그런 날도 있지.");
        y(". . .");
        y("아빠, 뜬금없지만");
        asking_about_trans();
        },
		"아까 얘기했잖아요.": function(message){
			$.tell = true;
			y(message);
			d("무슨 얘기?");
			m("안하면 안되니?");
            y("저... 트랜스젠더예요.");
			coming_1();
		},
		"(침묵)": silence
	});
}

function silence(){
	$.harmony = true;
    Wait(500);
	y(". . .");
	Wait(500);
	m(". . .");
		Wait(500);
		d(". . .");
		y(". . .");
	d("뭐야, 진짜 없어?");
	d("난 또 재미있는 일 있는 줄 알았지.");
 	d("우리집만큼 화목한 집도 드물어.");
	d("아빠 친구는 부러워하더라.");
	y(". . .");
	d("크흠,")
	d("밤이 늦었으니 슬슬 잘 준비 하자.");
	Choose({
		"(이제 그만 이야기하고싶다.)": function(message){
            
			$.silent = true;
            
			y("(이제 엄마 아빠랑 그만 이야기하고 싶다...)");
			y("(지쳤어...)");
			Wait(1000);
			tomyroom();
		},
		"잠깐만요.": function(message){
			y("잠깐만요, 아빠.");
			y("말씀드릴 이야기가 있어요.");
			d("응?");
            y("궁금한 게 있어요.");
            asking_about_trans();
		}
	});
}

function coming_1(message){
	if(!$.tell){
		y(message);
	}
	d("뭐?");
	y("여자로 보이는 것보다, 남자로 인식되는 게 더 편하다구요.");
	y("여자로 취급받는 거 너무 지긋지긋해요!");
	d("난 네가 남자같다고 생각해 본 적 없다.");
	coming_2();
	}

	function coming_2(){
	d("네가 왜 남잔데?");
	d("네가 남자라는 걸 증명할 수 있어?");

	$.telling_hard = true;

	Choose({
		"아니 그걸 어떻게 증명하라고요!": function(message){
			y(message);
			y("성별이 무슨 피타고라스의 정리처럼");
			y("증명 시작! 해서 증명 끝! 으로 간단하게 말할 수 있는 줄 알-");
			d("네가 그렇게 생각한 이유가 있을 거 아냐!");
			Wait(1000);
			d("그리고.");
			d("네가 여자가 되기 싫다고 여자가 아닌 건 아니잖아!");
			y("여자랑 남자 나뉘는 기준이 뭔데요?");
			y("사고로 성기를 잃으면요?");
			Wait(800);
			y("호르몬이 더이상 나오지 않는 사람은요?");
			y("염색체가 XXY인 사람은요?");
			y("이 세상에 칼로 그어지듯 나뉘어진 건 없어요!");
			Wait(1000);
			explaining_it();
		},
		"아빠는 아빠가 남자라는 거 증명할 수 있어요?": function(message){
			y(message);
			y("태어날때부터 남자였고 염색체이야기 할 것 같으면 집어 치우세요!");
			y("아빠는 한번도 남이 아빠의 성별을 오해한 적 없겠죠!");
			y("그러니까 그게 얼마나 편한지도 모를 거고요!");
			d("유성!!!");
			explaining_it();
		},
		"저는 남자로 보이는 게 편하다구요!": function(message){
			y(message);
			y("다른 사람이 저를 남자로 알고있는 게 편하다구요...");
			y("저를 남자로 대해주는 게 편하다구요.");
			y("아빠도 다른 사람이 아빠에게");
			y("여성분이세요? 물으면 아니라고 하실 거 아니에요!");
			y("저는 태어나서 지금까지");
			y("제 자신을 여자라고 느껴본 적이 없다고요.");
			explaining_it();
		}
	});
}

function explaining_it(){
	y("저는 가슴 튀어나온 것도 싫고-");
	d("어차피 육신은 껍데기일 뿐이야.");
	d("마음이 중요해!");
    if($.ask_about_trans){
        y("아까는 태국의 트랜스젠더는 각자 열심히 살아가는 거라고 하셨잖아요.");
        d("그건 <i>그</i> 사람들 이야기고.");
        d("내 주변사람 이야기면 다르지!");
    }    
	Show("mom","mom_grab");
	m("당신, 그만...");
	d("놔 봐!");
	Show("mom","mom_sitting");
	Wait(500);
	d("성별이라는 게 네가 선택할 수 있는 거 같아?");
	y("선택은");
	y("의사가 내 주민등록번호를 선택했겠죠!");
	y("제가 선택할 수 있었으면 더 나았을 거예요!");
	d("꼬박꼬박 말대꾸 하지마!");
    if($.sarcasm){
        d("아까도 아빠 말에 비꼬기나 하고!");
    }
	d("마음에 안 드는 게 있어도 태어난 대로 사는 거지!");
	Choose({
		"내가 태어나고 싶어서 태어난 것도 아니잖아요!": hard_answer,
		"그래서 의학적 도움을 받아 바꾸고 싶다구요.": function(message){
			$.tell_1 = true;
			y(message);
			d("옛날 사람들은 부모가 물려준 거라고 머리카락도 안 잘랐어.");
			y("지금이 고려시대도 아니고...");
			explain_answer();
		},
		"내 몸인데 내 마음대로 하면 안돼요?": explain_answer
	});
}

function hard_answer(message){
	y(message);
	Wait(300);
    $.smash = true;
		//throwing dad got angry
	Show("dad","dad_anger");
	PlaySound("sfx","dinner_table");
	d("너...");
	d("너 그런 말 한 번 만 더 해봐라.");
	d("네가 태어나게 해달라고 했는지, 내가 너를 원했는지 어떻게 알아!");
	d("너 같은 자식 태어날 줄 어떻게 알았겠어!");
	d("나는 성소수자는 반대야!");
	y(". . .");
	d(". . .");
	Wait(1500);
	y("아빠는...");
	y("제가 딸이라서 좋은 거예요, 자식이라 좋은 거예요?");
	Wait(500);
	d("그건...");
	Wait(500);
	d("좀 더 생각해 봐야겠다.");
	d("아무튼 수술같은 거 하면 쫓아내고 호적 파버릴 테니까 그렇게 알아.");
	tomyroom();
}

function explain_answer(message){
	if(!$.tell_1){
		y(message);
	}
	d("그래서");
	d("수술하고 싶다고?");
	y("성인이 되면요.");
	d("이 자식이...");
	Wait(500);
	d("네가 그렇게 바뀌면 끊을 거야!");
	y("뭘 끊어요?");
	d("자식이고 뭐고 다 끊어버릴 거라고!");
	Wait(1000);
	y("아빠는...");
	y("제가 딸이라서 좋은 거예요, 자식이라 좋은 거예요?");
	d("그건...");
	Wait(1000);
	d("좀 더 생각해 봐야겠다.");
	d("아무튼 수술같은 거 하면 쫓아내고 호적 파버릴 테니까 그렇게 알아.");
	tomyroom();

}


function tomyroom(){
    Wait(800);
    Clear();
	Start_my_room();
}
