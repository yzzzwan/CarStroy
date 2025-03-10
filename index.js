var bannerImg = document.getElementById('banner');
var randomNumber = Math.floor(Math.random() * 4) + 1;
console.log(randomNumber);

bannerImg.style.backgroundImage = "url('이미지/1페이지/배너이미지/" + randomNumber + ".png')";
console.log(bannerImg.backgroundImage);




function detail(car_name) {
	const reviewElements = document.getElementById('reviews')
    reviewElements.style.display = 'none';
	
	
	
 	const detailImageElement = document.getElementById('rc')
 	
	switch (car_name) {
            case 'KIA K9':
                // imagePath = "이미지/1페이지/베스트카/test.png";
                imagePath = "이미지/2페이지/차/K9 2.png";
                alt = "K9 2"

                var parentElement = document.querySelector('.details_car');
 				var carInfoRightElements = parentElement.querySelectorAll('.car_info_right');
 				carInfoRightElements[0].textContent = "40.5~52kg.m";
 				carInfoRightElements[1].textContent = "3,342~3,778cc";
 				carInfoRightElements[2].textContent = "V6";
 				carInfoRightElements[3].textContent = "FR, AWD";
 				carInfoRightElements[4].textContent = "자동8단";
 				carInfoRightElements[5].textContent = "5,140mm";
 				carInfoRightElements[6].textContent = "1,490mm";
 				carInfoRightElements[7].textContent = "1,915mm";
 				carInfoRightElements[8].textContent = "3,105mm";
                break;

            case '현대 TUSCON NX4':
                // imagePath = "이미지/1페이지/베스트카/현대 TUSCON.png";
                imagePath = "이미지/2페이지/차/투싼 2.png";
                alt = "투싼 2"



                var parentElement = document.querySelector('.details_car');
 				var carInfoRightElements = parentElement.querySelectorAll('.car_info_right');
 				carInfoRightElements[0].textContent = "27~42.5kg.m";
 				carInfoRightElements[1].textContent = "1,598~1,998cc";
 				carInfoRightElements[2].textContent = "I4";
 				carInfoRightElements[3].textContent = "FF, AWD";
 				carInfoRightElements[4].textContent = "자동8단, DCT7단";
 				carInfoRightElements[5].textContent = "4,630~4,640mm";
 				carInfoRightElements[6].textContent = "1,665mm";
 				carInfoRightElements[7].textContent = "1,865mm";
 				carInfoRightElements[8].textContent = "2,755mm";
                break;
            case '쌍용자동차 토레스':
                // imagePath = "이미지/1페이지/베스트카/쌍용 토레스.png" ;
                imagePath = "이미지/2페이지/차/토레스 2.png";
                alt = "토레스 2"

 2

                var parentElement = document.querySelector('.details_car');
 				var carInfoRightElements = parentElement.querySelectorAll('.car_info_right');
 				carInfoRightElements[0].textContent = "27.3~28.6kg.m";
 				carInfoRightElements[1].textContent = "1,497cc";
 				carInfoRightElements[2].textContent = "I4";
 				carInfoRightElements[3].textContent = "FF, AWD";
 				carInfoRightElements[4].textContent = "자동6단";
 				carInfoRightElements[5].textContent = "4,705mm";
 				carInfoRightElements[6].textContent = "1,720mm";
 				carInfoRightElements[7].textContent = "1,890mm";
 				carInfoRightElements[8].textContent = "2,680mm";
                break;
        }

 	detailImageElement.src = imagePath
 	detailImageElement.alt = alt






 	const detailElements = document.getElementById('details')
    detailElements.style.display = 'block';
}

function del_review() {
 	const detailElements = document.getElementById('details')
	const reviewElements = document.getElementById('reviews')

    detailElements.style.display = 'none';

    reviewElements.style.display = 'none';
}

function rotaion(car_num) {
	  var myImage = document.getElementById('rc');
	  var altText = myImage.alt;
	  var car_name = altText.slice(0, -2);

	  var car_rotaion = car_name + " " + car_num;

	  var alt;
	  var imagePath;

	  switch (car_name) {
	    case 'K9':
	      imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
	      alt = car_rotaion;
	      break;

	    case '투싼':
	      imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
	      alt = car_rotaion;
	      break;

	    case '토레스':
	      imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
	      alt = car_rotaion;
	      break;
	  }

  	myImage.alt = alt;
  	myImage.src= imagePath

  	// 선택 버튼 바꾸기
	// bt 클래스를 가진 div를 가져옵니다.
	var btDiv = document.querySelector('.bt');

	// div 안에 있는 모든 img 태그를 가져와서 반복합니다.
	var imgTags = btDiv.querySelectorAll('img');
	imgTags.forEach(function (imgTag, index) {
	  // 각 img 태그의 src를 조건에 따라 변경합니다.
	  if (index + 1 === car_num) {
	    // 3번째 img 태그는 "b.png"로 변경합니다.
	    imgTag.src = '이미지/1페이지/선택버튼.png';
	  } else {
	    // 나머지 img 태그는 "a.png"로 변경합니다.
	    imgTag.src = '이미지/1페이지/버튼.png';
	  }
	});

}

function review(car_num){
 	var detailElements = document.getElementById('details')
    detailElements.style.display = 'none';

	var reviewElements = document.getElementById('reviews')
    reviewElements.style.display = 'block';

	var review_star = document.getElementById('review_star');
	var review_six = document.getElementById('review_six');

	var star = document.getElementsByClassName('star');
	var or = document.getElementsByClassName('one_review');
	var day = document.getElementsByClassName('day');



	switch(car_num){
		case 1:
			review_star.src = "이미지/2페이지/리뷰/10-1.png";
			review_six.src = "이미지/2페이지/리뷰/10-2.png";

			star[0].innerHTML = '<img src="이미지/1페이지/star.png">' + "9.24";
			or[0].textContent = '가성비하면 역시 국산차 입니다. 실내공간도 넓고 편의사항도 많고 잘 타고 있어요.';
			day[0].textContent = 'wod1**** \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa03일 전'

			star[1].innerHTML = '<img src="이미지/1페이지/star.png">' + "9.32";
			or[1].textContent = '아주 만족하고 타고 있습니다. 회전축도 작아서 초보분들도 잘 탈 수 있습니다.';
			day[1].textContent = 'vowe**** \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa013일 전'


			break;

		case 2:
			review_star.src = "이미지/2페이지/리뷰/6-1.png";
			review_six.src = "이미지/2페이지/리뷰/6-2.png";

			star[0].innerHTML = '<img src="이미지/1페이지/star.png">' + "9.00";
			or[0].textContent = '샀으니까 타고 다녀야죠.';
			day[0].textContent = 'udw2**** \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa06일 전'

			star[1].innerHTML = '<img src="이미지/1페이지/star.png">' + "9.32";	
			or[1].textContent = '저는 만족하고 타고 있습니다. 제 생각엔 호불호 갈리는 차량 같습니다.';
			day[1].textContent = 'ewwq**** \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa011일 전'


			break;

		case 3:
			review_star.src = "이미지/2페이지/리뷰/8-1.png";
			review_six.src = "이미지/2페이지/리뷰/8-2.png";

			star[0].innerHTML = '<img src="이미지/1페이지/star.png">' + "9.21";
			or[0].textContent = '생각 이상으로 연비가 좋습니다. 디자인도 괜찮습니다.';
			day[0].textContent = '29ep**** \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa05일 전'

			star[1].innerHTML = '<img src="이미지/1페이지/star.png">' + "9.32";	
			or[1].textContent = '내부가 만족스럽네요. 후회없는 선택이었네요.';
			day[1].textContent = 'qq2q**** \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa07일 전'

			break;
	}

	



 	


}

function next_car() {
	  var myImage = document.getElementById('rc');
	  var altText = myImage.alt;
	  var car_name = altText.slice(0, -2);
	  var car_num = altText.slice(-1) // 차 번호


	  car_num = parseInt(car_num) + 1;

	  if (car_num > 4) { car_num = 1; }
    console.log("car nam : "+car_name);

    console.log("car num : "+car_num);


	  var car_rotaion = car_name + " " + car_num;

	  var alt;
	  var imagePath;

	  switch (car_name) {
	    case 'K9':
	      imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
	      alt = car_rotaion;
	      break;

	    case '투싼':
	      imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
	      alt = car_rotaion;
	      break;

	    case '토레스':
	      imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
	      alt = car_rotaion;
	      break;
	  }

  	myImage.alt = alt;
  	myImage.src= imagePath

  	// 선택 버튼 바꾸기
	// bt 클래스를 가진 div를 가져옵니다.
	var btDiv = document.querySelector('.bt');

	// div 안에 있는 모든 img 태그를 가져와서 반복합니다.
	var imgTags = btDiv.querySelectorAll('img');
	imgTags.forEach(function (imgTag, index) {
	  // 각 img 태그의 src를 조건에 따라 변경합니다.
	  if (index + 1 === car_num) {
	    // 3번째 img 태그는 "b.png"로 변경합니다.
	    imgTag.src = '이미지/1페이지/선택버튼.png';
	  } else {
	    // 나머지 img 태그는 "a.png"로 변경합니다.
	    imgTag.src = '이미지/1페이지/버튼.png';
	  }
	});

}

function prev_car() {
	  var myImage = document.getElementById('rc');
	  var altText = myImage.alt;
	  var car_name = altText.slice(0, -2);
	  var car_num = altText.slice(-1) // 차 번호

	  car_num = parseInt(car_num) - 1;
	  if (car_num < 1) { car_num = 4; }
    console.log("car nam : "+car_name);

    console.log("car num : "+car_num);


	  var car_rotaion = car_name + " " + car_num;

	  var alt;
	  var imagePath;

	  switch (car_name) {
	    case 'K9':
	      imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
	      alt = car_rotaion;
	      break;

	    case '투싼':
	      imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
	      alt = car_rotaion;
	      break;

	    case '토레스':
	      imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
	      alt = car_rotaion;
	      break;
	  }

  	myImage.alt = alt;
  	myImage.src= imagePath

  	// 선택 버튼 바꾸기
	// bt 클래스를 가진 div를 가져옵니다.
	var btDiv = document.querySelector('.bt');

	// div 안에 있는 모든 img 태그를 가져와서 반복합니다.
	var imgTags = btDiv.querySelectorAll('img');
	imgTags.forEach(function (imgTag, index) {
	  // 각 img 태그의 src를 조건에 따라 변경합니다.
	  if (index + 1 === car_num) {
	    // 3번째 img 태그는 "b.png"로 변경합니다.
	    imgTag.src = '이미지/1페이지/선택버튼.png';
	  } else {
	    // 나머지 img 태그는 "a.png"로 변경합니다.
	    imgTag.src = '이미지/1페이지/버튼.png';
	  }
	});

}