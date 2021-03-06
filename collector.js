/* 변수 정의 */
// 화면 상단 타이틀 양쪽 버튼 관련
menu = 'hidden';
selector = 'hidden';

function show_menu(){
    switch (menu){
        case 'hidden':
            document.querySelector('#collector_setting').style.display = 'flex';
            menu = 'shown';
            document.querySelector('#selector').style.display = 'none';
            selector = 'hidden';
            break;
        case 'shown':
            document.querySelector('#collector_setting').style.display = 'none';
            menu = 'hidden';
            break;
    }
}

function show_selector(){
    switch (selector){
        case 'hidden':
            document.querySelector('#selector').style.display = 'flex';
            selector = 'shown';
            document.querySelector('#collector_setting').style.display = 'none';
            menu = 'hidden';
            break;
        case 'shown':
            document.querySelector('#selector').style.display = 'none';
            selector = 'hidden';
            break;
    }
}

// 스킨 카테고리 선택 관련
/* 변수 정의 */

let kind = ['kind_all', 'S_skin', 'A_skin', 'S_acce', 'A_acce', 'others'];
let kind_counter = new Array(kind.length);
kind_counter.fill(0);

let survivor = ['doctor', 'lawyer', 'thief', 'gardener', 'magician', 'explorer', 'mercenary', 'coordinator', 'mechanic', 'forward', 'mindeye', 'priestess', 'perfumer', 'cowboy', 'dancer', 'seer', 'embalmer', 'prospector', 'enchantress', 'wildling', 'acrobat', 'officer', 'barmaid', 'postman', 'graveyard', 'prisoner', 'entomologist', 'painter', 'batter', 'merchant', 'psychologist', 'patient', 'novelist', 'memory', 'unlucky'];
let survivor_counter = new Array(survivor.length);
survivor_counter.fill(0);

let hunter = ['hell_ember', 'joker', 'game_keeper', 'reaper', 'soul_weaver', 'geisha', 'feaster', 'wu_chang', 'photographer', 'mad_eye', 'dream_witch', 'axe_boy', 'evil_raptilian', 'mary', 'guard_26', 'disciple', 'violinist', 'sculptor', 'undead', 'breaking_wheel', 'naiad', 'philip', 'nightmare'];
let hunter_counter = new Array(hunter.length);
hunter_counter.fill(0);

let event = ['Call_abyss', 'Itou_zyunzi', 'Scissorhands', 'Danganronpa', 'PromisedNeverLands', 'Persona5', 'Deathnote', 'Once', 'IvoryTower', 'halloween', 'logic_path', 'deduction_star', 'conan'];
let event_counter = new Array(event.length);
event_counter.fill(0);

function kind_function(input){
    for (let i = 0; i < kind.length; i++){
        if (kind[i] == input){
            switch (kind_counter[i]){
                case 0:
                    document.querySelector('#'+kind[i]).style.backgroundColor = 'aqua';
                    kind_counter[i] = 1;
                    if (i == 0){
                        for (let j = 1; j < kind.length; j++){
                            document.querySelector('#'+kind[j]).style.backgroundColor = 'aqua';
                            kind_counter[j] = 1;
                        }
                    }
                    break;
                case 1:
                    document.querySelector('#'+kind[i]).style.backgroundColor = 'aliceblue';
                    kind_counter[i] = 0;
                    if (i == 0){
                        for (let j = 1; j < kind.length; j++){
                            document.querySelector('#'+kind[j]).style.backgroundColor = 'aliceblue';
                            kind_counter[j] = 0;
                        }
                    }
                    break;
            }
        }
    }
    if (kind_counter.slice(1).reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    }) == 5){
        document.querySelector('#kind_all').style.backgroundColor = 'aqua';
    } else {
        document.querySelector('#kind_all').style.backgroundColor = 'aliceblue';
    }
}

let category = ['kind', 'survivor', 'hunter', 'event'];
let category_counter = new Array(category.length);
category_counter.fill(0);

function category_kind_function(input){
    for (let i = 0; i < category.length; i++){
        if (category[i] == input){
            for (let j = 0; j < kind.length; j++){
                document.querySelector('#'+kind[j]).style.backgroundColor = 'aliceblue';
                kind_counter[j] = 0;
            }
            for (let j = 0; j < survivor.length; j++){
                document.querySelector('#survivor_'+survivor[j]).style.backgroundColor = 'aliceblue';
                survivor_counter[j] = 0;
            }
            for (let j = 0; j < hunter.length; j++){
                document.querySelector('#hunter_'+hunter[j]).style.backgroundColor = 'aliceblue';
                hunter_counter[j] = 0;
            }
            for (let j = 0; j < event.length; j++){
                document.querySelector('#event_'+event[j]).style.backgroundColor = 'aliceblue';
                event_counter[j] = 0;
            }
            switch (category_counter[i]){
                case 0:
                    document.querySelector('#command_button').style.display = 'flex';
                    for (let j = 0; j < category.length; j++){
                        document.querySelector('#category_'+category[j]).style.backgroundColor = 'aliceblue';
                        document.querySelector('#'+category[j]+'_selector').style.display = 'none';
                        category_counter[j] = 0;
                    }
                    document.querySelector('#category_'+category[i]).style.backgroundColor = 'aqua';
                    document.querySelector('#'+category[i]+'_selector').style.display = 'flex';
                    category_counter[i] = 1;
                    break;
                case 1:
                    document.querySelector('#category_'+category[i]).style.backgroundColor = 'aliceblue';
                    document.querySelector('#'+category[i]+'_selector').style.display = 'none';
                    category_counter[i] = 0;
                    document.querySelector('#command_button').style.display = 'none';
                    break;
            }
        }
    }
}

function category_select_function(input){
    for (let i = 0; i < survivor.length; i++){
        if (survivor[i] == input){
            switch (survivor_counter[i]){
                case 0:
                    document.querySelector('#survivor_'+survivor[i]).style.backgroundColor = 'aqua';
                    survivor_counter[i] = 1;
                    break;
                case 1:
                    document.querySelector('#survivor_'+survivor[i]).style.backgroundColor = 'aliceblue';
                    survivor_counter[i] = 0;
                    break;
            }
        }
    }
    for (let i = 0; i < hunter.length; i++){
        if (hunter[i] == input){
            switch (hunter_counter[i]){
                case 0:
                    document.querySelector('#hunter_'+input).style.backgroundColor = 'aqua';
                    hunter_counter[i] = 1;
                    break;
                case 1:
                    document.querySelector('#hunter_'+input).style.backgroundColor = 'aliceblue';
                    hunter_counter[i] = 0;
                    break;
            }
        }
    }
    for (let i = 0; i < event.length; i++){
        if (event[i] == input){
            switch (event_counter[i]){
                case 0:
                    document.querySelector('#event_'+input).style.backgroundColor = 'aqua';
                    event_counter[i] = 1;
                    break;
                case 1:
                    document.querySelector('#event_'+input).style.backgroundColor = 'aliceblue';
                    event_counter[i] = 0;
                    break;
            }
        }
    }
}

function checking(turn){
    switch (turn){
        case 'choose':
            for (let i = 0; i < kind.length; i++){
                if (kind_counter[i] != 0){
                    for (let x of document.querySelectorAll('.'+kind[i])){
                        x.style.filter = 'brightness(1.0)';
                    }
                }
            }
            for (let i = 0; i < survivor.length; i++){
                if (survivor_counter[i] != 0){
                    for (let x of document.querySelectorAll('.'+survivor[i])) {
                        x.style.filter = 'brightness(1.0)';
                    }
                }
            }
            for (let i = 0; i < hunter.length; i++){
                if (hunter_counter[i] != 0){
                    for (let x of document.querySelectorAll('.'+hunter[i])) {
                        x.style.filter = 'brightness(1.0)';
                    }
                }
            }
            for (let i = 0; i < event.length; i++){
                if (event_counter[i] != 0){
                    for (let x of document.querySelectorAll('.'+event[i])) {
                        x.style.filter = 'brightness(1.0)';
                    }
                }
            }
            break;
        case 'unchoose':
            for (let i = 0; i < kind.length; i++){
                if (kind_counter[i] != 0){
                    for (let x of document.querySelectorAll('.'+kind[i])){
                        x.style.filter = 'brightness(0.3)';
                    }
                }
            }
            for (let i = 0; i < survivor.length; i++){
                if (survivor_counter[i] != 0){
                    for (let x of document.querySelectorAll('.'+survivor[i])) {
                        x.style.filter = 'brightness(0.3)';
                    }
                }
            }
            for (let i = 0; i < hunter.length; i++){
                if (hunter_counter[i] != 0){
                    for (let x of document.querySelectorAll('.'+hunter[i])) {
                        x.style.filter = 'brightness(0.3)';
                    }
                }
            }
            for (let i = 0; i < event.length; i++){
                if (event_counter[i] != 0){
                    for (let x of document.querySelectorAll('.'+event[i])) {
                        x.style.filter = 'brightness(0.3)';
                    }
                }
            }
            break;
    }
}

function display(){
    for (let x of document.querySelectorAll('div img')){
        x.style.display = 'none';
    }
    for (let i = 0; i < kind.length; i++){
        if (kind_counter[i] != 0){
            for (let x of document.querySelectorAll('.'+kind[i])){
                x.style.display = 'flex';
            }
        }
    }
    for (let i = 0; i < survivor.length; i++){
        if (survivor_counter[i] != 0){
            for (let y of document.querySelectorAll('.'+survivor[i])) {
                y.style.display = 'flex';
            }
        }
    }
    for (let i = 0; i < hunter.length; i++){
        if (hunter_counter[i] != 0){
            for (let y of document.querySelectorAll('.'+hunter[i])) {
                y.style.display = 'flex';
            }
        }
    }
    for (let i = 0; i < event.length; i++){
        if (event_counter[i] != 0){
            for (let y of document.querySelectorAll('.'+event[i])) {
                y.style.display = 'flex';
            }
        }
    }
}


function select(self){
    if (self.style.filter == 'brightness(1)'){
        self.style.filter = 'brightness(0.3)';
    } else {
        self.style.filter = 'brightness(1)';
    }
}

let menubar = 'shown';
function hide_menubar(){
    switch (menubar){
        case 'shown':
            for (let x of document.querySelectorAll('#contents_title span')){
                x.style.display = 'none';
            }
            document.querySelector('#selector').style.display = 'none';
            document.querySelector('#collector_setting').style.display = 'none';
            menubar = 'hidden';
            menu = 'hidden';
            selector = 'hidden';
            break;
        case 'hidden':
            for (let x of document.querySelectorAll('#contents_title span')){
                x.style.display = 'block';
            }
            menubar = 'shown';
            break;
    }
}

let show_selected_counter = 0;
function show_selected(){
    switch (show_selected_counter){
        case 0:
            for (let x of document.querySelectorAll('div img')) {
                if (x.style.filter == 'brightness(0.3)'){
                    x.style.display = 'none';
                }
            }
            show_selected_counter = 1;
            break;
        case 1:
            for (let x of document.querySelectorAll('div img')) {
                if (x.style.filter == 'brightness(0.3)'){
                    x.style.display = 'block';
                }
            }
            for (let x of document.querySelectorAll('img.B_skin')){
                x.style.display = 'none';
            }
            for (let x of document.querySelectorAll('img.B_acce')){
                x.style.display = 'none';
            }
            for (let x of document.querySelectorAll('img.C_skin')){
                x.style.display = 'none';
            }
            for (let x of document.querySelectorAll('img.C_acce')){
                x.style.display = 'none';
            }
            for (let x of document.querySelectorAll('img.B_emote')){
                x.style.display = 'none';
            }
            for (let x of document.querySelectorAll('img.C_emote')){
                x.style.display = 'none';
            }
            for (let x of document.querySelectorAll('img.B_motion')){
                x.style.display = 'none';
            }
            for (let x of document.querySelectorAll('img.C_motion')){
                x.style.display = 'none';
            }
            for (let x of document.querySelectorAll('img.C_graffiti')){
                x.style.display = 'none';
            }
            for (let x of document.querySelectorAll('img.D_graffiti')){
                x.style.display = 'none';
            }
            show_selected_counter = 0;
            break;
        }
}

function onloaded_table(){
    for (let x of document.querySelectorAll('div img')) {
        x.style.filter = 'brightness(0.3)';
    }
    document.querySelector('#loading_screen footer').innerText = '스킨체크표 로딩완료!';
    document.querySelector("#screen_exit_button").style.visibility = 'visible';
}

function exit_screen(){
    document.querySelector('#loading_screen').style.display = 'none';
    document.querySelector('#wrap').style.display = 'flex';
}


let present_info = 1;
function goto_next_info(){
    switch (present_info){
        case 1:
            document.querySelector('h3').innerText = "ver 21.11.10 업데이트 내역";
            document.querySelector('#goto_next_info').innerText = "안내사항";
            document.querySelector('.loading_information').innerText = 
            "분류기준이 8가지에서 6가지로 간소화되었으며,\n 파랑등급 이하 스킨은 분류기준에 포함되지 않습니다.\n\n 단, 캐릭터별 / 이벤트별 스킨체크표에서는 \n 모든 등급의 스킨과 악세가 정상적으로 출력됩니다. \n\n 시즌18 정수3 스킨이 추가되었습니다. \n 의사와 변호사의 감표가 추가되었습니다.\n"
            present_info = 2;
            break;
        case 2:
            document.querySelector('h3').innerText = "안내사항";
            document.querySelector('.loading_information').innerText = 
            "배경색 변경: 배경색을 검정으로 바꿔줍니다.\n다시 누르면 원래대로 돌아옵니다.\n\n선택스킨 표시: 선택한 스킨만을 보여줍니다.\n다시 누르면 모든 스킨을 표시합니다.\n\n화면 상단의 'idvstats'를 눌러\n메뉴를 가리거나 띄울 수 있습니다.\n\n"
            present_info = 3;
            break;
        case 3:
            document.querySelector('.loading_information').innerText = 
            "전부 체크: 분류기준에 맞는 스킨만 선택합니다.\n\n전부 해제: 분류기준에 맞는 스킨만 선택 해제합니다.\n\n표시하기: 분류기준에 맞는 스킨만 표시합니다.\n\n\n"
            present_info = 4;
            break;
        case 4:
            document.querySelector('#goto_next_info').innerText = "주의사항";
            document.querySelector('.loading_information').innerText = 
            "\"항목 변경 - 원하는 캐릭터명 - 모두 표시\"\n를 눌러 캐릭터 스킨체크표를 제작할 수 있습니다.\n\n또는 \"이벤트 - 이벤트명 - 모두 표시\"\n를 눌러 이벤트 스킨체크표를 제작할 수 있습니다.\n\n"
            present_info = 5;
            break;
        case 5:
            document.querySelector('#goto_next_info').innerText = "업뎃 내역";
            document.querySelector('h3').innerHTML = "주의사항";
            document.querySelector('.loading_information').innerText = 
            "브라우저의 캐시를 삭제하지 않는 것을 권장합니다.\n\n처음 시작시 또는 업데이트 이후 처음 접속시\nWifi를 통한 접속을 권장합니다.\n(사이트 크기 50MB 이상)\n\n버그 제보는 이메일로 부탁드립니다.\nerurang1004@gmail.com"
            present_info = 1;
            break;
    }
}

function set_collection(input){
    switch (input){
        case 'skin_width':
            let skin_width = document.getElementById('skin_width').value;
            skin_width = skin_width.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");
            skin_width = skin_width.replace(/\:javascript|&#x3A;|&#x6A;|&#x61;|&#x76;|&#x61;|&#x73;|&#x63;|&#x72;|&#x69;|&#x70;|&#x74;/gi, "");
            for (let x of document.querySelectorAll('div img')){
                x.style.width = skin_width + '%';
            }
            /* 0; alert('hello, world!'); name = 1 
            &#x3A;&#x6A;&#x61;&#x76;&#x61;&#x73;&#x63;&#x72;&#x69;&#x70;&#x74;*/
            break;
        case 'skin_margin_width':
            let skin_margin_width = document.getElementById('skin_margin_width').value;
            skin_margin_width = skin_margin_width.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");
            skin_margin_width = skin_margin_width.replace(/:javascript|&#x3A;|&#x6A;|&#x61;|&#x76;|&#x61;|&#x73;|&#x63;|&#x72;|&#x69;|&#x70;|&#x74;/gi, "");
            for (let x of document.querySelectorAll('div img')){
                x.style.paddingLeft = skin_margin_width/2 + '%';
                x.style.paddingRight = skin_margin_width/2 + '%';
            }
            break;
        case 'skin_margin_height':
            let skin_margin_height = document.getElementById('skin_margin_height').value;
            skin_margin_height = skin_margin_height.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");
            skin_margin_height = skin_margin_height.replace(/:javascript|&#x3A;|&#x6A;|&#x61;|&#x76;|&#x61;|&#x73;|&#x63;|&#x72;|&#x69;|&#x70;|&#x74;/gi, "");
            for (let x of document.querySelectorAll('div img')){
                x.style.paddingTop = skin_margin_height/2 + '%';
                x.style.paddingBottom = skin_margin_height/2 + '%';
            }
            break;
        case 'bgcolor':
            let bgcolor = document.getElementById('bgcolor').value;
            bgcolor = bgcolor.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");
            bgcolor = bgcolor.replace(/:javascript|&#x3A;|&#x6A;|&#x61;|&#x76;|&#x61;|&#x73;|&#x63;|&#x72;|&#x69;|&#x70;|&#x74;/gi, "");
            bgcolor = bgcolor.replace(/black|#000000/gi, "black");
            bgcolor = bgcolor.replace(/gray|grey|#808080/gi, "grey");
            bgcolor = bgcolor.replace(/azalea/, "#f8d4d1");
            document.querySelector('#wrap').style.backgroundColor = bgcolor;
            switch (bgcolor){
                case 'grey':
                    document.querySelector('#wrap').style.backgroundColor = 'aliceblue';
                    alert('회색은 사용하실 수 없습니다!');
                    break;
                case '':
                    document.querySelector('#wrap').style.backgroundColor = 'aliceblue';
                    break;
            }
            if (bgcolor == 'black'){
                document.querySelector('#wrap').style.color = 'white';
                document.querySelector('#selector').style.color = 'black';
                document.querySelector('#wrap').style.filter = 'brightness(0.7)';
                document.querySelector('#skin_checking').style.filter = 'brightness(1.2)';
                document.querySelector('#selector').style.backgroundColor = 'aliceblue';
            } else {
                document.querySelector('#wrap').style.color = 'black';
                document.querySelector('#wrap').style.filter = 'brightness(1)';
                document.querySelector('#skin_checking').style.filter = 'brightness(1)';
            }
            break;
        case 'collection_title':
            let collection_title = document.getElementById('collection_title').value;
            collection_title = collection_title.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");
            collection_title = collection_title.replace(/:javascript|&#x3A;|&#x6A;|&#x61;|&#x76;|&#x61;|&#x73;|&#x63;|&#x72;|&#x69;|&#x70;|&#x74;/gi, "");
            document.querySelector('h2').innerText = collection_title;
            break;
        }
}

window.addEventListener('beforeunload', (event) => { 
    // 명세에 따라 preventDefault는 호출해야하며, 기본 동작을 방지합니다. 
    event.preventDefault(); 

    // 대표적으로 Chrome에서는 returnValue 설정이 필요합니다. 
    event.returnValue = ''; 
});