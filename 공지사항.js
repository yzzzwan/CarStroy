function change_brand(brand, button){
	// 버튼 색 바꾸기
    const elements = document.getElementsByClassName('brand');

	for (let i = 0; i < elements.length; i++) {
    	elements[i].style.backgroundColor = '#26292E';
	 	}
 	button.style.backgroundColor = '#555';

    var brand_name = document.getElementById('car_brand_name');
    brand_name.textContent = brand;



    var trs = document.getElementsByClassName('trs');
    var tr = document.getElementsByClassName('tr');

    // console.log(trs.length)


    switch(brand){
    	case 'KIA':
    		for(var i=0; i < tr.length;i++){
    			tr[i].style.display = 'table-row';
    		}
    		// 1번
   //  		trs[0].textContent = "";
			// var newAnchor = document.createElement('a');
	  //       newAnchor.href = "여기에다가 링크를 적어주세요";
	  //       newAnchor.textContent = "여기에다가 제목을 적어주세요";

	  //       trs[0].appendChild(newAnchor);
   //  		trs[1].textContent = "여기에다가 날짜를 적어주세요";

    		trs[0].textContent = "";
        	var newAnchor = document.createElement('a');
        	newAnchor.href = "https://dealsite.co.kr/articles/112312";
         	newAnchor.textContent = "2024년 K5 출시";
         	newAnchor.target = "_blank"

           	trs[0].appendChild(newAnchor);
          	trs[1].textContent = "2023.11.02";

    		// 2번
    		trs[2].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17484";
         	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 셀토스 출시";

           	trs[2].appendChild(newAnchor);
         	trs[3].textContent = "2023.07.03";
    	
    		// 3번
    		trs[4].textContent = "";
         	var newAnchor = document.createElement('a');
         	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17487";
         	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 모하비 출시";

           	trs[4].appendChild(newAnchor);
          	trs[5].textContent = "2023.07.03";
    		
    		// 4번
    		trs[6].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17489";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 니로 출시";

           	trs[6].appendChild(newAnchor);
          	trs[7].textContent = "2023.07.03";

    		// 5번
    		trs[8].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17518";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 쏘렌토 출시";

           	trs[8].appendChild(newAnchor);
          	trs[9].textContent = "2023.07.03";
    		
    		// 6번
    		trs[10].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17496";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 K9 출시";

           	trs[10].appendChild(newAnchor);
          	trs[11].textContent = "2023.07.03"


    		// 7번
    		trs[12].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://jmagazine.joins.com/monthly/view/337558";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 K8 출시";

           	trs[12].appendChild(newAnchor);
          	trs[13].textContent = "2023.03.06";

    		break;

    	case '현대':
	    	for(var i=0; i < tr.length;i++){
	    			tr[i].style.display = 'table-row';
	    		}
    		// 1번
    		trs[0].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17478";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 투싼 출시";

           	trs[0].appendChild(newAnchor);
          	trs[1].textContent = "2023.12.06";
    		

    		// 2번
    		trs[2].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.thebell.co.kr/free/content/ArticleView.asp?key=202309141456090040108782";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 아이오닉 5N 출시";

           	trs[2].appendChild(newAnchor);
          	trs[3].textContent = "2023.09.18";

    		// 3번
    		trs[4].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17472";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 쏘나타 하이브리드 출시";

           	trs[4].appendChild(newAnchor);
          	trs[5].textContent = "2023.07.03";

    		// 4번
    		trs[6].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17488";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 싼타페 하이브리드 출시";

           	trs[6].appendChild(newAnchor);
          	trs[7].textContent = "2023.07.03";

    		// 5번
    		trs[8].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17481";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 코나 출시";

           	trs[8].appendChild(newAnchor);
          	trs[9].textContent = "2023.07.03";

    		// 6번
    		trs[10].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17478";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 아반떼 출시";

           	trs[10].appendChild(newAnchor);
          	trs[11].textContent = "2023.07.03";

    		// 7번
    		trs[12].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://dealsite.co.kr/articles/104730";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 팰리세이드 출시";

           	trs[12].appendChild(newAnchor);
          	trs[13].textContent = "2023.06.02";


    		break;


    	case '르노코리아':
	    	// for(var i=0; i < tr.length;i++){
    		// 	tr[i].style.display = 'table-row';
    		// }
	    	// 	tr[6].style.display = "none";
	    	// 	tr[7].style.display = "none";


    		// 1번
    		trs[0].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.hankyung.com/article/202311290874i";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 XM3 1.6 GTe 출시";

           	trs[0].appendChild(newAnchor);
          	trs[1].textContent = "2023.11.29";

    		// 2번
    		trs[2].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://news.mt.co.kr/mtview.php?no=2023092509482429448";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 XM3 E TECH 하이브리드 출시";

           	trs[2].appendChild(newAnchor);
          	trs[3].textContent = "2023.09.25";

    		// 3번
    		trs[4].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202308310118&t=NNv";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 XM3 출시";

           	trs[4].appendChild(newAnchor);
          	trs[5].textContent = "2023.08.31";

    		// 4번
    		trs[6].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202308310118&t=NNv";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 QM6 출시";

           	trs[6].appendChild(newAnchor);
          	trs[7].textContent = "2023.08.31";

    		// 5번
    		trs[8].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.econovill.com/news/articleView.html?idxno=609510";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 SM6 출시";

           	trs[8].appendChild(newAnchor);
          	trs[9].textContent = "2023.04.21";

    		// 6번
    		trs[10].textContent = "";
          	trs[11].textContent = "";

    		// 7번
    		trs[12].textContent = "";
          	trs[13].textContent = "";

    		break;


    	case 'KG':
	    	// for(var i=0; i < tr.length;i++){
	    	// 		tr[i].style.display = 'table-row';
	    	// 	}
    		// tr[6].style.display = "none";
    		// tr[7].style.display = "none";

    		// 1번
    		trs[0].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.gpkorea.com/news/articleView.html?idxno=104973";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 토레스 출시";

           	trs[0].appendChild(newAnchor);
          	trs[1].textContent = "2023.09.10";

    		// 2번
    		trs[2].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.epnc.co.kr/news/articleView.html?idxno=235118";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 토레스 EVX 출시";

           	trs[2].appendChild(newAnchor);
          	trs[3].textContent = "2023.08.01";

    		// 3번
    		trs[4].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://it.chosun.com/news/articleView.html?idxno=2023071802556";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 렉스턴 뉴 아레나 출시";

           	trs[4].appendChild(newAnchor);
          	trs[5].textContent = "2023.07.19";

    		// 4번
    		trs[6].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://kr.aving.net/news/articleView.html?idxno=1777593";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 렉스턴 스포츠 칸 출시";

           	trs[6].appendChild(newAnchor);
          	trs[7].textContent = "2023.03.29";

    		// 5번
    		trs[8].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.paxetv.com/news/articleView.html?idxno=119604";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2022년 코란도 이모션 출시";

           	trs[8].appendChild(newAnchor);
          	trs[9].textContent = "2021.06.15";

    		// 6번
    		trs[10].textContent = "";
          	trs[11].textContent = "";

    		// 7번
    		trs[12].textContent = "";
          	trs[13].textContent = "";
    		break;


    	case '쉐보레':
	    	// for(var i=0; i < tr.length;i++){
	    	// 		tr[i].style.display = 'table-row';
	    	// 	}
    		// tr[6].style.display = "none";
    		// tr[7].style.display = "none";
    		
    		// 1번
    		trs[0].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "http://www.dailycar.co.kr/content/news.html?type=view&autoId=49329";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 트래버스 EV 출시";

           	trs[0].appendChild(newAnchor);
          	trs[1].textContent = "2023.07.18";

    		// 2번
    		trs[2].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.cwn.kr/news/articleView.html?idxno=17571";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 트랙스 크로스오버 출시";

           	trs[2].appendChild(newAnchor);
          	trs[3].textContent = "2023.07.04";

    		// 3번
    		trs[4].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://daily.hankooki.com/news/articleView.html?idxno=924286";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2024년 트레일블레이저 출시";

           	trs[4].appendChild(newAnchor);
          	trs[5].textContent = "2023.02.14";

    		// 4번
    		trs[6].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.inthenews.co.kr/news/article.html?no=43582";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 타호 출시";

           	trs[6].appendChild(newAnchor);
          	trs[7].textContent = "2022.01.13";

    		// 5번
    		trs[8].textContent = "";
         	var newAnchor = document.createElement('a');
           	newAnchor.href = "https://www.newscj.com/news/articleView.html?idxno=939061";
           	newAnchor.target = "_blank"
           	newAnchor.textContent = "2023년 이쿼녹스 EV 출시";

           	trs[8].appendChild(newAnchor);
          	trs[9].textContent = "2022.01.07";

    		// 6번
    		trs[10].textContent = "";
          	trs[11].textContent = "";

    		// 7번
    		trs[12].textContent = "";
          	trs[13].textContent = "";
    		break;



    }
}