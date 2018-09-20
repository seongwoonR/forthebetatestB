
function telephone(){

	/////// SET UP SCENE ////////

	Show("background", "dinner");

	////////////////////////////

	y("하...");
	y("종종 있는 일이지만 정말 싫다.");
	y("남의 성별이 뭐가 그렇게 궁금하다고...");
	y("돈 벌어야하니 참아야지...");
	y("폰이나 보며 쉬어야겠다.");
	$.Search = 1;
	Choose({
		"검색 : 트랜스젠더": Search_transgender,
		"검색 : 트랜스여성": Search_tw,
		"검색 : mtf": Search_mtf
	});
}

function Search_transgender(){
	queue(ClearDialogue, 0);
	$.Search_trans = true;

	y("트랜스젠더");
	Wait(800);
	t("『트랜스젠더? 그거 게이 아니야?』");
	y("둘은 전혀 다른 거라고...");
	t("『야 트랜스젠더는 역시 좀..』");
	y("트랜스젠더라고 너 좋아할 것 같냐.");
	Wait(800);
	t("『트랜스젠더는 성역할을 고착화한다.』");
	y("트랜스젠더가 세상에 몇퍼센트 있다고 퍽이나 영향력 있겠네.");
	Wait(800);
	t("『트랜스젠더는 왜 이렇게 과하게 여성성을 표현해? 솔직히 보기 불쾌해.』");
	y("트랜스젠더가 수술과 성별정정을 마치려면 타인들 눈에 그렇게 보여야만하니까.");
	y("정신과에서도 그런 전형적인 트랜스젠더가 아니면 인정해주지 않는다고...");
	y("원하든 원치않든 강요된단 말이야.");
	t("『...41%에 이르는 트랜스젠더가 자살을 시도한다--..』");
	y("......");
	Wait(800);
	t("『트랜스젠더는 정신병--』");
	y("..........");
	Wait(800);
	if($.Search_tw && $.Search_mtf){
		y("괜히 전부 다 검색했나봐...");
		quit_twit();
	}else{
	t("인터넷을 종료하시겠습니까?");
	Choose({
		"네" : quit_twit,
		"아니오" : function(){
				$.Search++;
			if($.Search_mtf){
				Choose({
					"검색 : 트랜스여성": Search_tw
				});
			}else if($.Search_tw){
				Choose({
					"검색 : mtf": Search_mtf
				});
			}else{
				Choose({
					"검색 : 트랜스여성": Search_tw,
					"검색 : mtf": Search_mtf
				});
			}
		}
	});
}
}

function Search_tw(){
	// 트랜스여성을 검색하는 항목은 한국적 요소가 다분하므로
	// 영어로 번역할 때는 조금 다른 말을 넣을 필요가 있음
	$.Search_tw = true
	queue(ClearDialogue, 0);

	y("트랜스여성");
	t("『트랜스여성을 과연 여성으로 인정해줘야할까?』");
	y("...너희가 뭔데 내 삶을 인정하고 말고 하는 거야. 그럴 권리가 있어?");
	t("『매트릭스의 '빨간약'알아? 그 영화를 만든 게 트랜스여성이라던데.』");
	y("맞아. 워쇼스키 자매.");
	Wait(800);
	t("『트랜스여성은 다 이상한 옷만 입고 이상한 짓들 하잖아?』");
	y("... 이런 말 하는 사람들 실제로 트랜스여성을 만난 적이 있긴 할까?");
	y("설마...");
	y("인터넷에 보이는 사람들이 전부라고 생각하는거야? 그야 그 사람들이 자극적이니까 눈에 띄는 거 뿐이지.");
	Wait(800);
	t("『페미니즘 시위에 트랜스여성은 좀....』");
	y("이런 말을 자랑스럽게 하고 있네...트랜스여성도 여성으로 인식되면 온갖 여성혐오는 그대로 받는다고.");
	Wait(800);
	t("『트랜스여성이 무슨 여성이야? 걔네는 그냥 --』");
	y("...");
	Wait(1000);
	if($.Search_trans && $.Search_mtf){
		y("괜히 전부 다 검색했나봐...");
		quit_twit();
	}else{
	t("인터넷을 종료하시겠습니까?");
	Choose({
		"네" : quit_twit,
		"아니오" : function(){
				$.Search++;
			if($.Search_mtf){
				Choose({
					"검색 : 트랜스젠더": Search_transgender
				});
			}else if($.Search_trans){
				Choose({
					"검색 : mtf": Search_mtf
				});
			}else{
				Choose({
					"검색 : 트랜스젠더": Search_transgender,
					"검색 : mtf": Search_mtf
				});
			}
		}
	});
}
}

function Search_mtf(){
	// mtf를 검색하는 항목은 한국적 요소가 다분하므로
	// 영어로 번역할 때는 조금 다른 말을 넣을 필요가 있음
	$.Search_mtf = true
	queue(ClearDialogue, 0);
	y("mtf");
	t("『Male To Female. 트랜스젠더 여성을 나타내는 단어의 줄임말.』");
	t("『mtf는 남자다』");
	y("뭐라고..?");
	t("『mtf가 뭐야? mtt지!』");
	y("mtt가 뭐야...?");
	y("설마 내가 생각하는 그거 아니지?");
	Wait(800);
	t("『여성경험도 없는 mtf가 무슨...』");
	y("내 친구들만 해도 패싱되는 mtf는 아무도 모르던데");
	y("여성경험이 없다고 생각하다니...");
	Wait(800);
	t("『mtf트젠? 걔네가 트젠이라 차별받고 사는거같아? 걔네가 얼마나 편하게 사는데!』");
	y("내가 트랜스젠더란 걸 아는 순간 벌레보듯 하는 사람들이 얼마나 많은데...");
	y("트랜스젠더가 그렇게 권력이 있다고 말하지만 정작 사회에 트랜스젠더가 얼마나 존재하지?");
	y("트랜스젠더인 걸 숨기지 않았으면 지금 다니는 알바도 못들어갔을걸?");
	Wait(800);
	t("『mtf도 한남임』");
	y("...");
	y("말을 말자.");
	Wait(1000);
	if($.Search_tw && $.Search_trans){
		y("괜히 전부 다 검색했나봐...");
		quit_twit();
	}else{
	t("인터넷을 종료하시겠습니까?");
	Choose({
		"네" : quit_twit,
		"아니오" : function(){
				$.Search++;
			if($.Search_trans){
				Choose({
					"검색 : 트랜스여성": Search_tw
				});
			}else if($.Search_tw){
				Choose({
					"검색 : 트랜스젠더": Search_transgender
				});
			}else{
				Choose({
					"검색 : 트랜스젠더": Search_transgender,
					"검색 : 트랜스여성": Search_tw
				});
			}
		}
	});
}
}

function quit_twit(){
	Clear();
	Start_friend_1();
}
