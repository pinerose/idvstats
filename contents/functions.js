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

//캐릭터 창 정보 관련 변수
var char_info = 'passive';

var passive = document.querySelector('#passive');
var active = document.querySelector('#active');
var talent = document.querySelector('#talent');
var skins = document.querySelector('#skins');
var howtouse = document.querySelector('#howtouse');
var passive_arrow = document.querySelector('.passive_arrow');
var active_arrow = document.querySelector('.active_arrow');
var talent_arrow = document.querySelector('.talent_arrow');

//캐릭터 정보 관련 세부 변수
var passive_const = 1;
var active_const = 1;
var talent_const = 1;

var passive1 = document.querySelector('.passive1');
var passive2 = document.querySelector('.passive2');
var passive3 = document.querySelector('.passive3');
var passive4 = document.querySelector('.passive4');
var active1 = document.querySelector('.active1');
var active2 = document.querySelector('.active2');
var active3 = document.querySelector('.active3');
var talent1 = document.querySelector('.talent1');
var talent2 = document.querySelector('.talent2');
var talent3 = document.querySelector('.talent3');


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
            switch (char_info){
                case "passive":
                    break;
                case "active":
                    passive.style.display = 'flex';
                    passive_arrow.style.display = "flex";
                    active.style.display = 'none';
                    active_arrow.style.display = 'none';
                    char_info = 'passive';
                    break;
                case "talent":
                    passive.style.display = 'flex';
                    passive_arrow.style.display = "flex";
                    talent.style.display = 'none';
                    talent_arrow.style.display = 'none';
                    char_info = 'passive';
                    break;
                case "skins":
                    passive.style.display = 'flex';
                    passive_arrow.style.display = "flex";
                    skins.style.display = 'none';
                    char_info = 'passive';
                    break;
                case "howtouse":
                    passive.style.display = 'flex';
                    passive_arrow.style.display = "flex";
                    howtouse.style.display = 'none';
                    char_info = 'passive';
                    break;
            }
            break;
        case 'active':
            switch (char_info){
                case "passive":
                    active.style.display = 'flex';
                    active_arrow.style.display = "flex";
                    passive.style.display = 'none';
                    passive_arrow.style.display = 'none';
                    char_info = 'active';
                    break;
                case "active":
                    break;
                case "talent":
                    active.style.display = 'flex';
                    active_arrow.style.display = "flex";
                    talent.style.display = 'none';
                    talent_arrow.style.display = 'none';
                    char_info = 'active';
                    break;
                case "skins":
                    active.style.display = 'flex';
                    active_arrow.style.display = "flex";
                    skins.style.display = 'none';
                    char_info = 'active';
                    break;
                case "howtouse":
                    active.style.display = 'flex';
                    active_arrow.style.display = "flex";
                    howtouse.style.display = 'none';
                    char_info = 'active';
                    break;
            }
            break;
        case 'talent':
            switch (char_info){
                case "passive":
                    talent.style.display = 'flex';
                    talent_arrow.style.display = "flex";
                    passive.style.display = 'none';
                    passive_arrow.style.display = 'none';
                    char_info = 'talent';
                    break;
                case "active":
                    talent.style.display = 'flex';
                    talent_arrow.style.display = 'flex';
                    active.style.display = 'none';
                    active_arrow.style.display = 'none';
                    char_info = 'talent';
                    break;
                case "talent":
                    break;
                case "skins":
                    talent.style.display = 'flex';
                    talent_arrow.style.display = "flex";
                    skins.style.display = 'none';
                    char_info = 'talent';
                    break;
                case "howtouse":
                    talent.style.display = 'flex';
                    talent_arrow.style.display = "flex";
                    howtouse.style.display = 'none';
                    char_info = 'talent';
                    break;
            }
            break;
        case 'skins':
            switch (char_info){
                case "passive":
                    skins.style.display = 'flex';
                    passive.style.display = 'none';
                    passive_arrow.style.display = 'none';
                    char_info = 'skins';
                    break;
                case "active":
                    skins.style.display = 'flex';
                    active.style.display = 'none';
                    active_arrow.style.display = 'none';
                    char_info = 'skins';
                    break;
                case "talent":
                    skins.style.display = 'flex';
                    talent.style.display = 'none';
                    talent_arrow.style.display = 'none';
                    char_info = 'skins';
                    break;
                case "skins":
                    break;
                case "howtouse":
                    skins.style.display = 'flex';
                    howtouse.style.display = 'none';
                    char_info = 'skins';
                    break;
            }
            break;
        case 'howtouse':
            switch (char_info){
                case "passive":
                    howtouse.style.display = 'flex';
                    passive.style.display = 'none';
                    passive_arrow.style.display = 'none';
                    char_info = 'howtouse';
                    break;
                case "active":
                    howtouse.style.display = 'flex';
                    active.style.display = 'none';
                    active_arrow.style.display = 'none';
                    char_info = 'howtouse';
                    break;
                case "talent":
                    howtouse.style.display = 'flex';
                    talent.style.display = 'none';
                    talent_arrow.style.display = 'none';
                    char_info = 'howtouse';
                    break;
                case "skins":
                    howtouse.style.display = 'flex';
                    skins.style.display = 'none';
                    char_info = 'howtouse';
                    break;
                case "howtouse":
                    break;
            }
            break;
        case 'passive1':
            switch (passive_const){
                case 1:
                    break;
                case 2:
                    passive1.style.display = 'flex';
                    passive2.style.display = 'none';
                    passive_const = 1;
                    break;
                case 3:
                    passive1.style.display = 'flex';
                    passive3.style.display = 'none';
                    passive_const = 1;
                    break;
                case 4:
                    passive1.style.display = 'flex';
                    passive4.style.display = 'none';
                    passive_const = 1;
                    break;
            }
            break;
        case 'passive2':
            switch (passive_const){
                case 1:
                    passive2.style.display = 'flex';
                    passive1.style.display = 'none';
                    passive_const = 2;
                    break;
                case 2:
                    break;
                case 3:
                    passive2.style.display = 'flex';
                    passive3.style.display = 'none';
                    passive_const = 2;
                    break;
                case 4:
                    passive2.style.display = 'flex';
                    passive4.style.display = 'none';
                    passive_const = 2;
                    break;
            }
            break;
        case 'passive3':
            switch (passive_const){
                case 1:
                    passive3.style.display = 'flex';
                    passive1.style.display = 'none';
                    passive_const = 3;
                    break;
                case 2:
                    passive3.style.display = 'flex';
                    passive2.style.display = 'none';
                    passive_const = 3;
                    break;
                case 3:
                    break;
                case 4:
                    passive3.style.display = 'flex';
                    passive4.style.display = 'none';
                    passive_const = 3;
                    break;
            }
            break;
        case 'passive4':
            switch (passive_const){
                case 1:
                    passive4.style.display = 'flex';
                    passive1.style.display = 'none';
                    passive_const = 4;
                    break;
                case 2:
                    passive4.style.display = 'flex';
                    passive2.style.display = 'none';
                    passive_const = 4;
                    break;
                case 3:
                    passive4.style.display = 'flex';
                    passive3.style.display = 'none';
                    passive_const = 4;
                    break;
                case 4:
                    break;
            }
            break;
        case 'active1':
            switch (active_const){
                case 1:
                    break;
                case 2:
                    active1.style.display = 'flex';
                    active2.style.display = 'none';
                    active_const = 1;
                    break;
                case 3:
                    active1.style.display = 'flex';
                    active3.style.display = 'none';
                    active_const = 1;
                    break;
            }
        break;
        case 'active2':
            switch (active_const){
                case 1:
                    active2.style.display = 'flex';
                    active1.style.display = 'none';
                    active_const = 2;
                    break;
                case 2:
                    break;
                case 3:
                    active2.style.display = 'flex';
                    active3.style.display = 'none';
                    active_const = 2;
                    break;
            }
        break;
        case 'active3':
            switch (active_const){
                case 1:
                    active3.style.display = 'flex';
                    active1.style.display = 'none';
                    active_const = 3;
                    break;
                case 2:
                    active3.style.display = 'flex';
                    active2.style.display = 'none';
                    active_const = 3;
                    break;
                case 3:
                    break;
            }
        break;
        case 'talent1':
            switch (talent_const){
                case 1:
                    break;
                case 2:
                    talent1.style.display = 'flex';
                    talent2.style.display = 'none';
                    talent_const = 1;
                    break;
                case 3:
                    talent1.style.display = 'flex';
                    talent3.style.display = 'none';
                    talent_const = 1;
                    break;
            }
        break;
        case 'talent2':
            switch (talent_const){
                case 1:
                    talent2.style.display = 'flex';
                    talent1.style.display = 'none';
                    talent_const = 2;
                    break;
                case 2:
                    break;
                case 3:
                    talent2.style.display = 'flex';
                    talent3.style.display = 'none';
                    talent_const = 2;
                    break;
            }
        break;
        case 'talent3':
            switch (talent_const){
                case 1:
                    talent3.style.display = 'flex';
                    talent1.style.display = 'none';
                    talent_const = 3;
                    break;
                case 2:
                    talent3.style.display = 'flex';
                    talent2.style.display = 'none';
                    talent_const = 3;
                    break;
                case 3:
                    break;
            }
        break;
    }
}