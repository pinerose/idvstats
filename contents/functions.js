// 진영 설정 틀 관련 함수
var survivor_frame = document.querySelector('.survivor_frame');
var survivor_arrow = document.querySelector('.survivor_arrow');
var hunter_frame = document.querySelector('.hunter_frame');
var hunter_arrow = document.querySelector('.hunter_arrow');

function frame(position){
    document.querySelector('.select_position').style.display = 'none';
    document.querySelector('.info_position').style.visibility = 'visible';
    switch (position){
        case 'survivor':
            survivor_frame.style.display = 'flex';
            survivor_arrow.style.display = 'flex';
            hunter_frame.style.display = 'none';
            hunter_arrow.style.display = 'none';
            break;
        case 'hunter':
            survivor_frame.style.display = 'none';
            survivor_arrow.style.display = 'none';
            hunter_frame.style.display = 'flex';
            hunter_arrow.style.display = 'flex';
            break;
    }
}
// 캐릭터 설정 틀 관련 함수
var survivor1 = document.querySelector('.survivor_first');
var survivor2 = document.querySelector('.survivor_second');
var survivor3 = document.querySelector('.survivor_third');
var survivor4 = document.querySelector('.survivor_fourth');
var hunter1 = document.querySelector('.hunter_first');
var hunter2 = document.querySelector('.hunter_second');
var hunter3 = document.querySelector('.hunter_third');

var passive = document.querySelector('#passive');
var active = document.querySelector('#active');
var talent = document.querySelector('#talent');
var skins = document.querySelector('#skins');
var howtouse = document.querySelector('#howtouse');

function page(pagename){
    switch (pagename){
        case 'survivor1':
            survivor1.style.display = 'flex';
            survivor2.style.display = 'flex';
            survivor3.style.display = 'none';
            survivor4.style.display = 'none';
            break;
        case 'survivor2':
            survivor1.style.display = 'none';
            survivor2.style.display = 'none';
            survivor3.style.display = 'flex';
            survivor4.style.display = 'flex';
            break;
        case 'hunter1':
            hunter1.style.display = 'flex';
            hunter2.style.display = 'flex';
            hunter3.style.display = 'none';
            break;
        case 'hunter2':
            hunter1.style.display = 'none';
            hunter2.style.display = 'none';
            hunter3.style.display = 'flex';
            break;
        case 'passive':
            passive.style.display = 'flex';
            active.style.display = 'none';
            talent.style.display = 'none';
            skins.style.display = 'none';
            howtouse.style.display = 'none';
            break;
        case 'active':
            passive.style.display = 'none';
            active.style.display = 'flex';
            talent.style.display = 'none';
            skins.style.display = 'none';
            howtouse.style.display = 'none';
            break;
        case 'talent':
            passive.style.display = 'none';
            active.style.display = 'none';
            talent.style.display = 'flex';
            skins.style.display = 'none';
            howtouse.style.display = 'none';
            break;
        case 'skins':
            passive.style.display = 'none';
            active.style.display = 'none';
            talent.style.display = 'none';
            skins.style.display = 'flex';
            howtouse.style.display = 'none';
            break;
        case 'howtouse':
            passive.style.display = 'none';
            active.style.display = 'none';
            talent.style.display = 'none';
            skins.style.display = 'none';
            howtouse.style.display = 'flex';
            break;
    }
}