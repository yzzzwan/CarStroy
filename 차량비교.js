const customMenu = document.getElementById('custom-menu');
const imageContainer = document.getElementsByClassName('plus');

var left_or_right = 0 // 2 == left, 3 == right

// + 버튼 클릭 시 이벤트
imageContainer[0].addEventListener('click', (e) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;

    left_or_right = 0

    customMenu.style.display = 'block';
    customMenu.style.left = `${x}px`;
    customMenu.style.top = `${y}px`;
  });

imageContainer[1].addEventListener('click', (e) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;

    left_or_right = 1


    customMenu.style.display = 'block';
    customMenu.style.left = `${x}px`;
    customMenu.style.top = `${y}px`;
  });


// 다른 곳 클릭 시 메뉴 다시 사라지게 하기
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = customMenu.contains(e.target);
    const isClickInsideImageContainer1 = imageContainer[0].contains(e.target);
    const isClickInsideImageContainer2 = imageContainer[1].contains(e.target);


    if (!isClickInsideMenu && !isClickInsideImageContainer1 && !isClickInsideImageContainer2) {
      customMenu.style.display = 'none';
    }
  });


var now_brand;
var car_num

function menu_pick(car_name){
  customMenu.style.display = 'none';
  console.log(left_or_right);
  var car_img = document.getElementsByClassName('carImage'); // 아래 div의 이미지 태그

  car_img = car_img[left_or_right];
  car_img.src = "이미지/2페이지/차/" + car_name + " 2.png";
  car_img.alt = car_name + " 2";


  var prices = document.getElementsByClassName('price');
  var car = document.getElementsByClassName('cars_name');

  var parentElement = document.querySelectorAll('.best_car');
  var tap_num = left_or_right;

  switch(car_name){
    // 기아
    case '니로EV':
      now_brand = 'KIA';
      car_num = 0;
      car[tap_num].textContent = '니로EV';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "5.3km/kWh";
      carInfoRightElements[2].textContent = "150kW";
      carInfoRightElements[3].textContent = "소형 SUV";
      price_span[0].innerText = '51,200,000원';
      break;

    case '니로 하이브리드':
    now_brand = 'KIA';
      car_num = 1;

      car[tap_num].textContent = '니로 하이브리드';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2023년";
      carInfoRightElements[1].textContent = "19.1~20.8km/ℓ최대 복합연비";
      carInfoRightElements[2].textContent = "104hp";
      carInfoRightElements[3].textContent = "소형 SUV";
      price_span[0].innerText = '33,760,000원';
      break;

    case '셀토스':
    now_brand = 'KIA';
      car_num = 2;

      car[tap_num].textContent = '셀토스';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "10.8~12.9km/ℓ최대 복합연비";
      carInfoRightElements[2].textContent = "149~198hp";
      carInfoRightElements[3].textContent = "소형 SUV";
      price_span[0].innerText = '29,030,000원';
      break;

    case 'K5':
    now_brand = 'KIA';
      car_num = 8;

      car[tap_num].textContent = 'K5';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "9.5~13.7km/ℓ";
      carInfoRightElements[2].textContent = "146~180hp";
      carInfoRightElements[3].textContent = "중형 세단";
      price_span[0].innerText = '35,260,000원';
      break;

    case '소렌토하이브리드':
    now_brand = 'KIA';
      car_num = 9;

      car[tap_num].textContent ='소렌토 하이브리드' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "13.8~15.7km/ℓ";
      carInfoRightElements[2].textContent = "235hp/180hp";
      carInfoRightElements[3].textContent = "중형 SUV";
      price_span[0].innerText = '48,310,000원';

      break;

    case 'K8':
    now_brand = 'KIA';
      car_num = 10;

      car[tap_num].textContent =  'K8';
      var tap_num = 10;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "7.7~12km/ℓ";
      carInfoRightElements[2].textContent = "198~300hp";
      carInfoRightElements[3].textContent = "준대형 세단";
      price_span[0].innerText = '46,240,000원';
      break;

    case '모하비':
    now_brand = 'KIA';
      car_num = 11;

      car[tap_num].textContent = '모하비';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 9.3km/ℓ";
      carInfoRightElements[2].textContent = "257hp";
      carInfoRightElements[3].textContent = "준대형 SUV";
      price_span[0].innerText = '59,930,000원';
      break;

    case 'K9':
    now_brand = 'KIA';
      car_num = 14;

      car[tap_num].textContent = 'K9';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2023년";
      carInfoRightElements[1].textContent = "8.1~9km/ℓ";
      carInfoRightElements[2].textContent = "315~370hp";
      carInfoRightElements[3].textContent = "대형 세단";
      price_span[0].innerText = '77,400,000원';
      break;

   // 현대

    case '코나':
    now_brand = '현대';
      car_num = 0;

      car[tap_num].textContent ='코나' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[0].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2023년";
      carInfoRightElements[1].textContent = "복합 11.2~13.6km/ℓ";
      carInfoRightElements[2].textContent = "149~198hp";
      carInfoRightElements[3].textContent = "소형 SUV";
      price_span[0].innerText = '33,230,000원';

      break;

    case '아반떼':
        now_brand = '현대';
      car_num = 4;

      car[tap_num].textContent ='아반떼' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2023년";
      carInfoRightElements[1].textContent = "복합 10.3~15.3km/ℓ";
      carInfoRightElements[2].textContent = "120~123hp";
      carInfoRightElements[3].textContent = "준중형 세단";
      price_span[0].innerText = '28,180,000원';


      break;

    case '아반떼N':
        now_brand = '현대';
      car_num = 5;

      car[tap_num].textContent ='아반떼N' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2023년";
      carInfoRightElements[1].textContent = "복합 10.4~10.6km/ℓ";
      carInfoRightElements[2].textContent = "280hp";
      carInfoRightElements[3].textContent = "준중형 세단";
      price_span[0].innerText = '35,600,000원';

      break;

    case '아이오닉 5N':
        now_brand = '현대';
      car_num = 6;

      car[tap_num].textContent = '아이오닉 5N' ;
      var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 3.7km/kWh";
      carInfoRightElements[2].textContent = "478kW";
      carInfoRightElements[3].textContent = "준중형 SUV";
      price_span[0].innerText = '76,000,000원';
      
      break;

    case '투싼':
    now_brand = '현대';
      car_num = 7;

      car[tap_num].textContent = '투싼';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2023년";
      carInfoRightElements[1].textContent = "복합 11~14.5km/ℓ";
      carInfoRightElements[2].textContent = "180~184hp";
      carInfoRightElements[3].textContent = "준중형 SUV";
      price_span[0].innerText = '38,220,000원';

      break;

    case '소나타':
    now_brand = '현대';
      car_num = 8;

      car[tap_num].textContent = '소나타';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 9.4~13.5km/ℓ";
      carInfoRightElements[2].textContent = "146~290hp";
      carInfoRightElements[3].textContent = "중형 세단";
      price_span[0].innerText = '39,170,000원';
      break;

    case '싼타페':
    now_brand = '현대';
      car_num = 9;


      car[tap_num].textContent ='싼타페' ;
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 14~15.5km/ℓ";
      carInfoRightElements[2].textContent = "235hp/180hp";
      carInfoRightElements[3].textContent = "중형 SUV";
      price_span[0].innerText = '50,360,000원';
      break;

    case '그랜저':
    now_brand = '현대';
      car_num =10 ;

      car[tap_num].textContent = '그랜저';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2023년";
      carInfoRightElements[1].textContent = "복합 7.8~11.7km/ℓ";
      carInfoRightElements[2].textContent = "198~300hp";
      carInfoRightElements[3].textContent = "준대형 세단";
      price_span[0].innerText = '51,030,000원';

      break;

    case '팰리세이드':
    now_brand = '현대';
      car_num = 11;


      car[tap_num].textContent =  '팰리세이드';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 8.5~12.4km/ℓ";
      carInfoRightElements[2].textContent = "202~295hp";
      carInfoRightElements[3].textContent = "준대형 SUV";
      price_span[0].innerText = '54,910,000원';

      break;

    case '스타리아라운지':
    now_brand = '현대';
      car_num = 14;


      car[tap_num].textContent ='스타리아 라운지' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2021년";
      carInfoRightElements[1].textContent = "복합 6.5~12.3km/ℓ";
      carInfoRightElements[2].textContent = "177~240hp";
      carInfoRightElements[3].textContent = "대형 RV";
      price_span[0].innerText = '43,350,000원';

      break;

    // 르노코리아

    case 'XM3':
    now_brand = '르노코리아';
      car_num = 0;

      car[tap_num].textContent ='XM3' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 13.2~13.8km/ℓ";
      carInfoRightElements[2].textContent = "123~152hp";
      carInfoRightElements[3].textContent = "소형 SUV";
      price_span[0].innerText = '28,640,000원';

      break;

    case 'XM3 E-TECH':
    now_brand = '르노코리아';
      car_num = 1;

      car[tap_num].textContent ='XM3 E-TECH' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 17~17.4km/ℓ";
      carInfoRightElements[2].textContent = "86hp";
      carInfoRightElements[3].textContent = "소형 SUV";
      price_span[0].innerText = '34,520,000원';

      break;

    case 'SM6':
      car_num = 8;

    now_brand = '르노코리아';
      car[tap_num].textContent = 'SM6' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 9.5~13.6km/ℓ";
      carInfoRightElements[2].textContent = "140~225hp";
      carInfoRightElements[3].textContent = "중형 세단";
      price_span[0].innerText = '36,950,000원';

      break;

    case 'QM6':
      car_num = 9;

    now_brand = '르노코리아';
      car[tap_num].textContent =  'QM6';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 8.6~12km/ℓ";
      carInfoRightElements[2].textContent = "140~144hp";
      carInfoRightElements[3].textContent = "중형 SUV";
      price_span[0].innerText = '36,700,000원';

      break;

    //KG

    case '코란도':
    now_brand = 'KG';
      car_num = 4;

      car[tap_num].textContent = '코란도';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 10.5~11.5km/ℓ";
      carInfoRightElements[2].textContent = "170hp";
      carInfoRightElements[3].textContent = "준중형 SUV";
      price_span[0].innerText = '30,600,000원';

      break;

    case '토레스':
    now_brand = 'KG';
      car_num = 8;

      car[tap_num].textContent ='토레스' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 8.9~11.2km/ℓ";
      carInfoRightElements[2].textContent = "165~170hp";
      carInfoRightElements[3].textContent = "중형 SUV";
      price_span[0].innerText = '37,060,000원';

      break;

    case '토레스 EV X':
    now_brand = 'KG';
      car_num = 9;

      car[tap_num].textContent ='토레스 EVX' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 5km/kWh";
      carInfoRightElements[2].textContent = "152.2kW";
      carInfoRightElements[3].textContent = "중형 SUV";
      price_span[0].innerText = '49,600,000원';

      break;

    case '렉스턴':
    now_brand = 'KG';
      car_num = 10;

      car[tap_num].textContent ='렉스턴' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 10.6~11.1km/ℓ";
      carInfoRightElements[2].textContent = "202hp";
      carInfoRightElements[3].textContent = "준대형 SUV";
      price_span[0].innerText = '52,130,000원';

      break;

    case '렉스턴스포츠':
    now_brand = 'KG';
      car_num = 11;

      car[tap_num].textContent ='렉스턴 스포츠' ;
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 10.4~10.6km/ℓ";
      carInfoRightElements[2].textContent = "202hp";
      carInfoRightElements[3].textContent = "준대형 트럭";
      price_span[0].innerText = '40,310,000원';

      break;


    // 쉐보레
    case '트레일 블레이저':
    now_brand = '쉐보레';
      car_num = 0;

      car[tap_num].textContent = '트레일 블레이저';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 11.6~12.9km/ℓ";
      carInfoRightElements[2].textContent = "156hp";
      carInfoRightElements[3].textContent = "소형 SUV";
      price_span[0].innerText = '33,390,000원';

      break;

    case '트랙스 크로스오버':
    now_brand = '쉐보레';
      car_num = 1;

      car[tap_num].textContent = '트랙스 크로스오버';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2024년";
      carInfoRightElements[1].textContent = "복합 12~12.7km/ℓ";
      carInfoRightElements[2].textContent = "139hp";
      carInfoRightElements[3].textContent = "소형 SUV";
      price_span[0].innerText = '28,800,000원';

      break;

    case '이쿼녹스':
    now_brand = '쉐보레';
      car_num = 8;

      car[tap_num].textContent = '이쿼녹스';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2023년";
      carInfoRightElements[1].textContent = "복합 10.6~11.5km/ℓ";
      carInfoRightElements[2].textContent = "172hp";
      carInfoRightElements[3].textContent = "중형SUV";
      price_span[0].innerText = '41,450,000원';

      break;

    case '트래버스':
    now_brand = '쉐보레';
      car_num = 10;

      car[tap_num].textContent ='트래버스';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2023년";
      carInfoRightElements[1].textContent = "복합 8.3km/ℓ";
      carInfoRightElements[2].textContent = "310hp";
      carInfoRightElements[3].textContent = "준대형 SUV";
      price_span[0].innerText = '66,150,000원';

      break;

    case '대형 타호':
    now_brand = '쉐보레';
      car_num = 14;

      car[tap_num].textContent = '타호';
      var carInfoRightElements = parentElement[tap_num+2].querySelectorAll('.car_info_right');
      var price_span = prices[tap_num].getElementsByTagName('span');
      carInfoRightElements[0].textContent = "2022년";
      carInfoRightElements[1].textContent = "복합 6.4km/ℓ";
      carInfoRightElements[2].textContent = "426hp";
      carInfoRightElements[3].textContent = "대형 SUV";
      price_span[0].innerText = '95,000,000원';

      break;


  }
    




}


function detail(car_num, tap_num) {

    // 리뷰 창 안보이게 하기
    const reviewElements = document.getElementsByClassName('reviews');
    reviewElements[tap_num].style.display = 'none';

    // 선택 버튼 2번 버튼으로 바꾸기
    var btDiv = document.querySelectorAll('.bt');
    btDiv = btDiv[tap_num]

    var imgTags = btDiv.querySelectorAll('img');
    imgTags.forEach(function (imgTag, index) {
      if (index + 1 == 2) {
        imgTag.src = '이미지/1페이지/선택버튼.png';
      } else {
        imgTag.src = '이미지/1페이지/버튼.png';
      }
    });
  

    
    
    var detailImageElement = document.getElementsByClassName('rc'); // detail 컨테이너의 이미지 태그
    detailImageElement = detailImageElement[tap_num];

    const altElements = document.getElementsByClassName('carImage');
    image_name = altElements[car_num].alt
    console.log(image_name);


    console.log("Car NUM : ", car_num);
    console.log("tap_num : ", tap_num);

    console.log("now_brand : ", now_brand);


    switch(now_brand){
        case 'KIA':
            switch (car_num) {
            case 0:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "255Nm";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동1단";
                carInfoRightElements[5].textContent = "4,420mm";
                carInfoRightElements[6].textContent = "1,570mm";
                carInfoRightElements[7].textContent = "1,825mm";
                carInfoRightElements[8].textContent = "2,720mm";
                break;

            case 1:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "14.7kg.m";
                carInfoRightElements[1].textContent = "1,580cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "DCT6단";
                carInfoRightElements[5].textContent = "4,420mm";
                carInfoRightElements[6].textContent = "1,545mm";
                carInfoRightElements[7].textContent = "1,825mm";
                carInfoRightElements[8].textContent = "2,720mm";
                break;

            case 2:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "18.3~27kg.m";
                carInfoRightElements[1].textContent = "1,598~1,999cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동8단, CVT";
                carInfoRightElements[5].textContent = "4,390mm";
                carInfoRightElements[6].textContent = "1,600~1,620mm";
                carInfoRightElements[7].textContent = "1,800mm";
                carInfoRightElements[8].textContent = "2,630mm";
                break;

            case 3:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 4:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 5:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 6:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 7:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 8:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "19.5~27kg.m";
                carInfoRightElements[1].textContent = "1,598~1,999cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "자동";
                carInfoRightElements[5].textContent = "4,905mm";
                carInfoRightElements[6].textContent = "1,445mm";
                carInfoRightElements[7].textContent = "1,860mm";
                carInfoRightElements[8].textContent = "2,850mm";
                break;

            case 9:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "35.7kg.m/27kg.m";
                carInfoRightElements[1].textContent = "1,598cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동6단";
                carInfoRightElements[5].textContent = "4,815mm";
                carInfoRightElements[6].textContent = "1,695~1,700mm";
                carInfoRightElements[7].textContent = "1,900mm";
                carInfoRightElements[8].textContent = "2,815mm";
                break;

            case 10:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "25.3~36.6kg.m";
                carInfoRightElements[1].textContent = "2,497~3,470cc";
                carInfoRightElements[2].textContent = "I4, V6";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,015mm";
                carInfoRightElements[6].textContent = "1,455mm";
                carInfoRightElements[7].textContent = "1,875mm";
                carInfoRightElements[8].textContent = "2,895mm";
                break;

            case 11:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "57.1kg.m";
                carInfoRightElements[1].textContent = "2,959cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "4,930mm";
                carInfoRightElements[6].textContent = "1,790mm";
                carInfoRightElements[7].textContent = "1,920mm";
                carInfoRightElements[8].textContent = "2,895mm";
                break;

            case 12:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 13:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 14:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
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

            case 15:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;
        }
        break;


        case '현대':
            switch (car_num) {
            case 0:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "18.3~27kg.m";
                carInfoRightElements[1].textContent = "1,598~1,999cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동8단, CVT";
                carInfoRightElements[5].textContent = "4,350mm";
                carInfoRightElements[6].textContent = "1,580~1,590mm";
                carInfoRightElements[7].textContent = "1,825mm";
                carInfoRightElements[8].textContent = "2,660mm";
                break;

            case 1:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "12kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 2:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 3:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 4:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "15.5~15.7kg.m";
                carInfoRightElements[1].textContent = "1,591~1,598cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "자동6단, CVT";
                carInfoRightElements[5].textContent = "4,710mm";
                carInfoRightElements[6].textContent = "1,420mm";
                carInfoRightElements[7].textContent = "1,825mm";
                carInfoRightElements[8].textContent = "2,720mm";
                break;

            case 5:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "40kg.m";
                carInfoRightElements[1].textContent = "1,998cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "수동6단, DCT8단";
                carInfoRightElements[5].textContent = "4,710mm";
                carInfoRightElements[6].textContent = "1,415mm";
                carInfoRightElements[7].textContent = "1,825mm";
                carInfoRightElements[8].textContent = "2,720mm";
                break;

            case 6:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "740Nm";
                carInfoRightElements[3].textContent = "AWD";
                carInfoRightElements[4].textContent = "자동1단";
                carInfoRightElements[5].textContent = "4,715mm";
                carInfoRightElements[6].textContent = "1,585mm";
                carInfoRightElements[7].textContent = "1,940mm";
                carInfoRightElements[8].textContent = "3,000mm";
                break;

            case 7:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
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

            case 8:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "19.5~43kg.m";
                carInfoRightElements[1].textContent = "1,598~2,497cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "자동, DCT8단";
                carInfoRightElements[5].textContent = "4,910mm";
                carInfoRightElements[6].textContent = "1,445mm";
                carInfoRightElements[7].textContent = "1,860mm";
                carInfoRightElements[8].textContent = "2,840mm";
                break;

            case 9:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "27kg.m";
                carInfoRightElements[1].textContent = "1,598cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동6단";
                carInfoRightElements[5].textContent = "4,830mm";
                carInfoRightElements[6].textContent = "1,720~1,770mm";
                carInfoRightElements[7].textContent = "1,900mm";
                carInfoRightElements[8].textContent = "2,815mm";
                break;

            case 10:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "25.3~36.6kg.m";
                carInfoRightElements[1].textContent = "2,497~3,470cc";
                carInfoRightElements[2].textContent = "I4, V6";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,035mm";
                carInfoRightElements[6].textContent = "1,460mm";
                carInfoRightElements[7].textContent = "1,880mm";
                carInfoRightElements[8].textContent = "2,895mm";
                break;

            case 11:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "36.2~45kg.m";
                carInfoRightElements[1].textContent = "2,199~3,778cc";
                carInfoRightElements[2].textContent = "V6, I4";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "4,995mm";
                carInfoRightElements[6].textContent = "1,750mm";
                carInfoRightElements[7].textContent = "1,975mm";
                carInfoRightElements[8].textContent = "2,900mm";

                break;

            case 12:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 13:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 14:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "32~44kg.m";
                carInfoRightElements[1].textContent = "2,199~3,470cc";
                carInfoRightElements[2].textContent = "V6, I4";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동8단, 수동6단";
                carInfoRightElements[5].textContent = "5,255mm";
                carInfoRightElements[6].textContent = "1,990~2,000mm";
                carInfoRightElements[7].textContent = "1,995mm";
                carInfoRightElements[8].textContent = "3,275mm";
                break;

            case 15:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;
        }
        break;


        case '르노코리아':
            switch (car_num) {
            case 0:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "15.8~26kg.m";
                carInfoRightElements[1].textContent = "1,332~1,598cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "CVT, DCT7단";
                carInfoRightElements[5].textContent = "4,570mm";
                carInfoRightElements[6].textContent = "1,570mm";
                carInfoRightElements[7].textContent = "1,820mm";
                carInfoRightElements[8].textContent = "2,720mm";
                break;

            case 1:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "13.9kg.m";
                carInfoRightElements[1].textContent = "1,598cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "자동6단";
                carInfoRightElements[5].textContent = "4,570mm";
                carInfoRightElements[6].textContent = "1,570mm";
                carInfoRightElements[7].textContent = "1,820mm";
                carInfoRightElements[8].textContent = "2,720mm";
                break;

            case 2:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 3:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 4:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 5:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 6:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 7:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 8:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "19.7~30.6kg.m";
                carInfoRightElements[1].textContent = "1,332~1,998cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "CVT, DCT7단";
                carInfoRightElements[5].textContent = "4,855mm";
                carInfoRightElements[6].textContent = "1,460mm";
                carInfoRightElements[7].textContent = "1,870mm";
                carInfoRightElements[8].textContent = "2,810mm";
                break;

            case 9:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "19.7~20.4kg.m";
                carInfoRightElements[1].textContent = "1,997~1,998cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "CVT";
                carInfoRightElements[5].textContent = "4,675mm";
                carInfoRightElements[6].textContent = "1,700~1,710mm";
                carInfoRightElements[7].textContent = "1,845mm";
                carInfoRightElements[8].textContent = "2,705mm";
                break;

            case 10:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 11:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 12:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 13:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 14:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 15:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;
        }
        break;


        case 'KG':
            switch (car_num) {
            case 0:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "qkg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 1:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "12kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 2:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 3:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 4:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "28.6kg.m";
                carInfoRightElements[1].textContent = "1,497cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동6단";
                carInfoRightElements[5].textContent = "4,450mm";
                carInfoRightElements[6].textContent = "1,630mm";
                carInfoRightElements[7].textContent = "1,870mm";
                carInfoRightElements[8].textContent = "2,675mm";
                break;

            case 5:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 6:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 7:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 8:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
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

            case 9:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "339Nm";
                carInfoRightElements[1].textContent = "-";
                carInfoRightElements[2].textContent = "-";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "자동1단";
                carInfoRightElements[5].textContent = "4,715mm";
                carInfoRightElements[6].textContent = "1,735mm";
                carInfoRightElements[7].textContent = "1,890mm";
                carInfoRightElements[8].textContent = "2,680mm";
                break;

            case 10:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "45kg.m";
                carInfoRightElements[1].textContent = "2,157cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FR, 4WD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "4,850mm";
                carInfoRightElements[6].textContent = "1,825mm";
                carInfoRightElements[7].textContent = "1,960mm";
                carInfoRightElements[8].textContent = "2,865mm";
                break;

            case 11:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "45kg.m";
                carInfoRightElements[1].textContent = "2,157cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FR, 4WD";
                carInfoRightElements[4].textContent = "자동6단";
                carInfoRightElements[5].textContent = "5,095~5,105mm";
                carInfoRightElements[6].textContent = "1,840~1,870mm";
                carInfoRightElements[7].textContent = "1,950mm";
                carInfoRightElements[8].textContent = "3,100mm";
                break;

            case 12:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 13:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 14:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "45kg.m";
                carInfoRightElements[1].textContent = "2,157cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FR, 4WD";
                carInfoRightElements[4].textContent = "자동6단";
                carInfoRightElements[5].textContent = "5,405~5,415mm";
                carInfoRightElements[6].textContent = "1,855~1,885mm";
                carInfoRightElements[7].textContent = "1,950mm";
                carInfoRightElements[8].textContent = "3,210mm";
                break;

            case 15:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;
        }
        break;

        case '쉐보레':
            switch (car_num) {
            case 0:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "24.1kg.m";
                carInfoRightElements[1].textContent = "1,341cc";
                carInfoRightElements[2].textContent = "I3";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동9단, CVT";
                carInfoRightElements[5].textContent = "4,410~4,425mm";
                carInfoRightElements[6].textContent = "1,630~1,670mm";
                carInfoRightElements[7].textContent = "1,810mm";
                carInfoRightElements[8].textContent = "2,640mm";
                break;

            case 1:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "22.4kg.m";
                carInfoRightElements[1].textContent = "1,199cc";
                carInfoRightElements[2].textContent = "I3";
                carInfoRightElements[3].textContent = "FF";
                carInfoRightElements[4].textContent = "자동6단";
                carInfoRightElements[5].textContent = "4,540mm";
                carInfoRightElements[6].textContent = "1,560mm";
                carInfoRightElements[7].textContent = "1,825mm";
                carInfoRightElements[8].textContent = "2,700mm";
                break;

            case 2:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 3:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 4:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 5:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 6:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 7:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 8:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "28kg.m";
                carInfoRightElements[1].textContent = "1,490cc";
                carInfoRightElements[2].textContent = "I4";
                carInfoRightElements[3].textContent = "FF, AWD";
                carInfoRightElements[4].textContent = "자동6단";
                carInfoRightElements[5].textContent = "4,650mm";
                carInfoRightElements[6].textContent = "1,660~1,690mm";
                carInfoRightElements[7].textContent = "1,845mm";
                carInfoRightElements[8].textContent = "2,725mm";
                break;

            case 9:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 10:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "36.8kg.m";
                carInfoRightElements[1].textContent = "3,564cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "AWD";
                carInfoRightElements[4].textContent = "자동9단";
                carInfoRightElements[5].textContent = "5,230mm";
                carInfoRightElements[6].textContent = "1,780mm";
                carInfoRightElements[7].textContent = "2,000mm";
                carInfoRightElements[8].textContent = "3,073mm";
                break;

            case 11:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 12:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 13:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;

            case 14:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "63.6kg.m";
                carInfoRightElements[1].textContent = "6,162cc";
                carInfoRightElements[2].textContent = "V8";
                carInfoRightElements[3].textContent = "4WD";
                carInfoRightElements[4].textContent = "자동10단";
                carInfoRightElements[5].textContent = "5,530mm";
                carInfoRightElements[6].textContent = "1,925mm";
                carInfoRightElements[7].textContent = "2,060mm";
                carInfoRightElements[8].textContent = "3,071mm";
                break;

            case 15:
                imagePath = "이미지/2페이지/차/"+ image_name +".png";
                alt = image_name;

                var parentElement = document.querySelectorAll('.details_car');
                var carInfoRightElements = parentElement[tap_num].querySelectorAll('.car_info_right');
                carInfoRightElements[0].textContent = "kg.m";
                carInfoRightElements[1].textContent = "3,342~3,778cc";
                carInfoRightElements[2].textContent = "V6";
                carInfoRightElements[3].textContent = "FR, AWD";
                carInfoRightElements[4].textContent = "자동8단";
                carInfoRightElements[5].textContent = "5,140mm";
                carInfoRightElements[6].textContent = "1,490mm";
                carInfoRightElements[7].textContent = "1,915mm";
                carInfoRightElements[8].textContent = "3,105mm";
                break;
        }
        break;

    }
    

    console.log(imagePath);
    console.log("alt : " + alt);


    detailImageElement.src = imagePath
    detailImageElement.alt = alt


    const detailElements = document.getElementsByClassName('details');

    detailElements[tap_num].style.display = 'block';
}

function del_review(tap_num) {
    var detailElements = document.getElementsByClassName('details');
    detailElements[tap_num].style.display = 'none';
    
    var detailElements = document.getElementsByClassName('reviews');
    detailElements[tap_num].style.display = 'none';
}

function rotation(car_num, tap_num) {
    var myImage = document.getElementsByClassName('rc'); // 자세히 보기의 이미지 태그
    myImage = myImage[tap_num]


    var altText = myImage.alt;
    var car_name = altText.slice(0, -2); // 뒤에 공백과 차 번호 를 제외한 차 순수 이름

    var car_rotaion = car_name + " " + car_num;

    var alt;                
    var imagePath;
    console.log("car name : "+car_name);


    imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
    alt = car_rotaion;


    console.log(imagePath);


    myImage.alt = alt;
    myImage.src= imagePath

    // 선택 버튼 바꾸기
    // bt 클래스를 가진 div를 가져옵니다.
    var btDiv = document.querySelectorAll('.bt');
    btDiv = btDiv[tap_num]

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

function next_car(tap_num) {
    var myImage = document.getElementsByClassName('rc'); // 자세히 보기의 이미지 태그
    myImage = myImage[tap_num]


    var altText = myImage.alt;
    var car_name = altText.slice(0, -2); // 뒤에 공백과 차 번호 를 제외한 차 순수 이름
    var car_num = altText.slice(-1) // 차 번호
    car_num = parseInt(car_num) + 1;
    console.log("car num : "+car_num);

    if (car_num > 4) { car_num = 1 }

    var car_rotaion = car_name + " " + car_num;

    var alt;                
    var imagePath;
    console.log("car name : "+car_name);


    imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
    alt = car_rotaion;


    console.log(imagePath);


    myImage.alt = alt;
    myImage.src= imagePath

    // 선택 버튼 바꾸기
    // bt 클래스를 가진 div를 가져옵니다.
    var btDiv = document.querySelectorAll('.bt');
    btDiv = btDiv[tap_num]

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

function prev_car(tap_num) {
    var myImage = document.getElementsByClassName('rc'); // 자세히 보기의 이미지 태그
    myImage = myImage[tap_num]


    var altText = myImage.alt;
    var car_name = altText.slice(0, -2); // 뒤에 공백과 차 번호 를 제외한 차 순수 이름
    var car_num = altText.slice(-1) // 차 번호
    car_num = parseInt(car_num) - 1;
    console.log("car num : "+car_num);

    if (car_num < 1) { car_num = 4 }

    var car_rotaion = car_name + " " + car_num;

    var alt;                
    var imagePath;
    console.log("car name : "+car_name);


    imagePath = "이미지/2페이지/차/" + car_rotaion + ".png";
    alt = car_rotaion;


    console.log(imagePath);


    myImage.alt = alt;
    myImage.src= imagePath

    // 선택 버튼 바꾸기
    // bt 클래스를 가진 div를 가져옵니다.
    var btDiv = document.querySelectorAll('.bt');
    btDiv = btDiv[tap_num]

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







// function review(car_num, tap_num){
//     var detailElements = document.getElementsByClassName('details');
//     detailElements[tap_num].style.display = 'none';
    
//     var detailElements = document.getElementsByClassName('reviews');
//     detailElements[tap_num].style.display = 'block';
// }

var star_p = ['9.33', '9.67', '9.17', '9.18', '8.68', '9.38', '9.00', '9.65', '9.36', '9.08', 
'9.12', '9.55', '9.59', '8.50', '9.26', '9.09', '9.58', '9.56', '9.48', '9.45', '9.88', '8.95', 
'9.44', '9.66', '9.00', '9.32', '9.33', '9.33', '9.24', '9.32', '8.57', '9.21', '9.17', '9.12', 
'9.23', '9.05', '9.49', '9.26', '8.26', '9.56', '9.53', '9.24', '9.22', '8.65', '8.88', '8.98', 
'9.21', '9.30', '8.87', '8.72', '9.11', '8.47', '9.43', '8.89', '9.02', '8.65', '9.44', '8.74', 
'9.00', '8.36', '8.69', '8.99', '9.50']; // 별점

var review_p = [ '가성비 차량이라고들 하지만 품질면에서도 뒤지지 않습니다.',
'가성비 대비 흠잡을때가 없는 차량입니다. 다시 또 구매하고 싶은 차량 입니다',
 '가성비 좋은 차이며 주행능력 또한 뛰어난 차량입니다.',
 '가성비 차량이라고들 하지만 품질면에서도 뒤지지 않습니다.',
  '대체로 만족하나 연비는 역시 시내주행 시 많이 떨어집니다.',
   '1년을 고민해서 구입한 차량. 디자인이 언제 봐도 질리지 않고 공간도 넉넉합니다',
'차량의 전반적인 편의장비나 주행보조장치는 만족합니다. 생각보다 연비도 좋습니다.',
 '하자는 하나도 없이 운행중이고 디자인이 마음에 들어서 구입했습니다.', 
'제가 탄 차량중에 가장 훌륭한 차 입니다. 강력 추천 드립니다', 
'승차감과 하차감 모두 만족스러운 차량입니다. 하지만 연비가 좋지 않은 점이 있어요', 
'보자마자 마음에 들어서 바로 샀습니다. 디자인, 가격, 파워 모두 만족합니다', 
'아주 좋습니다.', 
'별 기대없이 샀는데 너무 만족하고 있습니다. 주변 지인들한테 계속 자랑하고 다니고 있습니다', 
'연비가 조금 안좋습니다. 나머지는 좋습니다.', 
'가족들과 함께 타기 좋습니다. 내부도 생각보다 넓습니다.', 
'이 차 아주 물건입니다.', 
'다들 좋다고 해서 샀는데 뭐가 좋은지 모르겠네요.', 
'좋습니다. 매우 만족하면서 타고 있습니다.', 
'고속도로를 달릴 때 가슴이 뻥 뚫립니다. 너무 잘 산거 같습니다', 
'이 차를 꼭 탔으면 좋겠습니다. 너무 만족하는 중 입니다.', 
'여자친구가 너무 좋아해요. 같이 탈 때 행복합니다.', 
'너무 좋아요. 첫 차로 샀는데 다른 차 이제 못탈 것 같아요.', 
'차 바꾸길 잘했네요. 차 바꿀까 말까 고민하다가 산건데 괜히 고민한 거 같네요.', 
'디자인 하면 디자인, 연비 하면 연비, 승차감 하면 승차감 완벽한 차량입니다.', 
'샀으니까 타고 다녀야죠.', 
'저는 만족하고 타고 있습니다. 제 생각엔 호불호 갈리는 차량 같습니다.', '뭐가 안좋다고들 하는지 모르겠네요. 저는 만족하고 있습니다.', 
'생각했던거 보다는 별로네요. 너무 기대를 했던 걸까요.', 
'가성비하면 역시 국산차 입니다. 실내공간도 넓고 편의사항도 많고 잘 타고 있어요.', 
'아주 만족하고 타고 있습니다. 회전축도 작아서 초보분들도 잘 탈 수 있습니다.', 
'전체적으로 만족합니다. 성능 우수하고 디자인도 질리지 않습니다.', 
'전체적으로 멋, 실용성, 편안함 두루 갖춘 차량이라고 생각합니다.', 
'첫 새차라서 더 애정이 가는건 별 수 없지만 너무 만족스럽습니다.', 
'가격은 적당하고 거주성은 무난합니다.', 
'편의성 등 부족한 점은 있지만 디자인이 압도적입니다.', 
'가격부터 디자인, 공간까지 완벽한 차량입니다.', 
'좋아요.', 
'새로 샀더니 기분이 좋네요. 얼른 차 바꾸세요.', 
'만족하면서 타고 있습니다. 트렁크가 넓은게 마음에 드네요.', 
'남성분들이 좋아할 차량입니다.', 
'차량이 아주 잘 나갑니다. 승차감도 좋습니다.', 
'연비가 많이 안좋아요. 승차감은 좋은데 연비가 아쉽네요.', 
'만족하고 있습니다.', '승차감이 너무 좋습니다. 너무 편해요.',
'편안하고 조용합니다. 생각보다 연비가 떨어져요.', 
'디자인 주행연비 성능 갑인듯 합니다.', 
'생각 이상으로 연비가 좋습니다. 디자인도 괜찮습니다.', 
'내부가 만족스럽네요. 후회없는 선택이었네요.', 
'만족감 확실합니다. 주행성능 및 편의성으로 차를 모는 맛이 납니다.', 
'제일 맘에 드는 부분은 연비, 그 다음은 디자인 입니다.', 
'운전 시 눈부심이 없어서 편합니다.', 
'전반적으로 가성비 좋고 연비 잘 나옵니다.', 
'대체로 만족하나 연비는 시내주행 시 많이 떨어집니다.', 
'고민해서 구입한 차량. 디자인이 언제 봐도 질리지 않습니다.', 
'실내 플라스틱 소재가 조금 고급스러웠다하면하는 아쉬움이 있네요.', 
'너무 좋습니다. 성능과 편의성 둘 다 만족합니다.', 
'가격 대비 성능도 괜찮고 디자인도 예쁘게 나온 것 같습니다.', 
'이 가격에 이 성능이면 가성비 최고의 차.', 
'타본다면 만족하는 차 입니다.', 
'디자인, 옵션은 깔 수 없는 좋은 차 입니다.', 
'주행 시 안정감과 편안함이 있습니다.', 
'최신 기능 만족합니다. 주행 성능 만족합니다.', 
'실 연비는 좋지만 호불호가 갈릴 수 있습니다.']; // 한줄 리뷰

var id_p = ['alwa', 'sigm', 'alim', 'duwq', 'duwq', 'wocc', 'tjqd', 'ceo2', 'gpqm', 'aifw', 
'rowd', 'cyqu', 'wi1d', 'wcjd', 'qi2d', 'eid2', 'qwer', 'wo02', '82dq', 'qwod', 'sdq1', 
'cjd2', '128d', 'qyds', 'udw2', 'ewwq', 'wo92', 'wk23', 'wod1', 'vowe', 'mckl', 'ekzd', 
'dbwj', '2du0', 'auwd', 'idwm', 'rlaw', 'diwo', 'auei', 'stem', '34et,', 'dpw1', 'dlw2',
 'a123', 'owid', 'elw1', '29ep', 'qq2q', 'dkow', 'dek2', 'leoe', 'do2e', 'fukk', 'ekl2', 
 'wlke', 'dkek', 'elwi', 'lfks', 'sdfm', 'dkfj', 'slei', 'l28p', 'wod1', 'eods', '321a', 'alwa'] // id

var day_p = [
  3, 13, 2, 8, 5, 7, 12,
  9, 1, 14, 6, 11, 4, 10,
  3, 13, 2, 8, 5, 7, 12,
  9, 1, 14, 6, 11, 4, 10,
  3, 13, 2, 8, 5, 7, 12,
  9, 1, 14, 6, 11, 4, 10,
  3, 13, 2, 8, 5, 7, 12,
  9, 1, 14, 6, 11, 4, 10,
  3, 13, 2, 8, 5, 7, 12,
  9, 1, 14, 6, 11, 4, 10
];




function review(car_num, tap_num){
        // console.log("test")

        // console.log(star_p.length)
        // console.log(review_p.length)



    var detailElements = document.getElementsByClassName('details');
    detailElements[tap_num].style.display = 'none';
    
    var detailElements = document.getElementsByClassName('reviews');
    detailElements[tap_num].style.display = 'block';

    car_num = parseInt(car_num)
    tap_num = parseInt(tap_num)

    idx = car_num
    if (car_num % 2 !=0) idx = car_num-1;


    var Review_div1 = document.querySelectorAll('.a_review')[idx]
    var Review_div2 = document.querySelectorAll('.a_review')[(idx + 1)]






    var start_num;
    var number;

    switch(now_brand){
        case 'KIA':
                start_num = 0;
                break;

        case '현대':
                start_num = 10;
                break;

        case '르노코리아':
                start_num = 21;
                break;

        case 'KG':
                start_num = 30;
                break;

        case '쉐보레':
                start_num = 40;
                break;

    }

    number = start_num + ((car_num) * 2);

    number2 = number+1;
    if(number2>20) number2 = number2 % 20;

    day1= day_p[number];
    day2= day_p[number+1];

    if (day1 > day2) {
        var tmp = day1;
        day1 = day2;
        day2= tmp;
    }



    console.log(number)
    console.log(number2)


    var review_img = document.getElementsByClassName('review_img');
    review_img[idx].src = "이미지/2페이지/리뷰/" + (number2 +1) + "-1.png"
    review_img[idx + 1].src = "이미지/2페이지/리뷰/" + (number2 +1) + "-2.png"
    console.log( review_img[0].src)


    Review_div1.querySelectorAll('p').forEach(function(pTag, index) {
        if (index === 0) {
            pTag.innerHTML = '<img src="이미지/1페이지/star.png">' + star_p[number];

        } 
        else if (index === 1) {

            pTag.textContent = review_p[number];
        } 
        else if (index === 2) {
            pTag.textContent = id_p[number] + '**** \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + day1 + "일 전";

        }
    });

     Review_div2.querySelectorAll('p').forEach(function(pTag, index) {
        if (index === 0) {
            pTag.innerHTML = '<img src="이미지/1페이지/star.png">' + star_p[number+1];

        } 
        else if (index === 1) {
            pTag.textContent = review_p[number+1];
        } 
        else if (index === 2) {
            pTag.textContent = id_p[number+1] + '**** \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + day2 + "일 전";

        }
    });
     console.log("number: "+ number)

}
