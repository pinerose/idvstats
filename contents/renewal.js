/* 변수 정의 */
menu = 'hidden';
selector = 'hidden';

function show_menu(){
    switch (menu){
        case 'hidden':
            document.querySelector('#contents_nav').style.display = 'flex';
            menu = 'shown';
            document.querySelector('#selector').style.display = 'none';
            selector = 'hidden';
            break;
        case 'shown':
            document.querySelector('#contents_nav').style.display = 'none';
            menu = 'hidden';
            break;
    }
}

function show_selector(){
    switch (selector){
        case 'hidden':
            document.querySelector('#selector').style.display = 'flex';
            selector = 'shown';
            document.querySelector('#contents_nav').style.display = 'none';
            menu = 'hidden';
            break;
        case 'shown':
            document.querySelector('#selector').style.display = 'none';
            selector = 'hidden';
            break;
    }
}

/* 변수 정의 */
let kind = ['skin', 'acce', 'house', 'detective'];
let kind_counter = new Array(kind.length);
kind_counter.fill(0);

let grade = ['S', 'A', 'B', 'C'];
let grade_counter = new Array(grade.length);
grade_counter.fill(0);

let category = ['role', 'survivor', 'hunter', 'event'];
let category_counter = new Array(category.length);
category_counter.fill(0);
category_counter[0] = 1;

let survivor = ['doctor', 'lawyer', 'thief', 'gardener', 'magician', 'explorer', 'mercenary', 'coordinator', 'mechanic', 'forward', 'mindeye', 'priestess', 'perfumer', 'cowboy', 'dancer', 'seer', 'embalmer', 'prospector', 'enchantress', 'wildling', 'acrobat', 'officer', 'barmaid', 'postman', 'graveyard', 'prisoner', 'entomologist', 'painter', 'batter', 'merchant', 'psychologist', 'patient', 'unlucky'];
let survivor_counter = new Array(survivor.length);
survivor_counter.fill(0);

let hunter = ['hell_ember', 'joker', 'game_keeper', 'reaper', 'soul_weaver', 'geisha', 'feaster', 'wu_chang', 'photographer', 'mad_eye', 'dream_witch', 'axe_boy', 'evil_raptilian', 'mary', 'guard_26', 'disciple', 'violinist', 'sculptor', 'undead', 'breaking_wheel', 'naiad', 'philip'];
let hunter_counter = new Array(hunter.length);
hunter_counter.fill(0);

let event = ['Call_abyss', 'Itou_zyunzi', 'Scissorhands', 'Danganronpa', 'PromisedNeverLands', 'Persona5', 'Deathnote', 'Once', 'IvoryTower', 'halloween', 'logic_path', 'deduction_star'];
let event_counter = new Array(event.length);
event_counter.fill(0);

function kind_function(input){
    for (let i = 0; i < kind.length; i++){
        if (kind[i] == input){
            switch (kind_counter[i]){
                case 0:
                    document.querySelector('#kind_'+kind[i]).style.backgroundColor = 'aqua';
                    kind_counter[i] = 1;
                    break;
                case 1:
                    document.querySelector('#kind_'+kind[i]).style.backgroundColor = 'aliceblue';
                    kind_counter[i] = 0;
                    break;
            }
        }
    }
    if (kind_counter.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    }) == 4){
        document.querySelector('#kind_all').style.backgroundColor = 'aqua';
    } else {
        document.querySelector('#kind_all').style.backgroundColor = 'aliceblue';
    }
    if (input == 'all'){
        switch (document.querySelector('#kind_all').style.backgroundColor){
            case 'aqua':
                document.querySelector('#kind_all').style.backgroundColor = 'aliceblue';
                for (let i = 0; i < kind.length; i++){
                    document.querySelector('#kind_'+kind[i]).style.backgroundColor = 'aliceblue';
                    kind_counter[i] = 0;
                }
                break;
            case 'aliceblue':
                document.querySelector('#kind_all').style.backgroundColor = 'aqua';
                for (let i = 0; i < kind.length; i++){
                    document.querySelector('#kind_'+kind[i]).style.backgroundColor = 'aqua';
                    kind_counter[i] = 1;
                }
                break;
        }
    }
}

function grade_function(input){
    for (let i = 0; i < grade.length; i++){
        if (grade[i] == input){
            switch (grade_counter[i]){
                case 0:
                    document.querySelector('#grade_'+grade[i]).style.backgroundColor = 'aqua';
                    grade_counter[i] = 1;
                    break;
                case 1:
                    document.querySelector('#grade_'+grade[i]).style.backgroundColor = 'aliceblue';
                    grade_counter[i] = 0;
                    break;
            }
        }
    }
    if (grade_counter.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    }) == 4){
        document.querySelector('#grade_all').style.backgroundColor = 'aqua';
    } else {
        document.querySelector('#grade_all').style.backgroundColor = 'aliceblue';
    }
    if (input == 'all'){
        switch (document.querySelector('#grade_all').style.backgroundColor){
            case 'aqua':
                document.querySelector('#grade_all').style.backgroundColor = 'aliceblue';
                for (let i = 0; i < grade.length; i++){
                    document.querySelector('#grade_'+grade[i]).style.backgroundColor = 'aliceblue';
                    grade_counter[i] = 0;
                }
                break;
            case 'aliceblue':
                document.querySelector('#grade_all').style.backgroundColor = 'aqua';
                for (let i = 0; i < grade.length; i++){
                    document.querySelector('#grade_'+grade[i]).style.backgroundColor = 'aqua';
                    grade_counter[i] = 1;
                }
                break;
        }
    }
}

function category_kind_function(input){
    for (let i = 0; i < category.length; i++){
        if (category[i] == input){
            switch (category_counter[i]){
                case 0:
                    if (i == 0){
                        document.querySelector('#survivor_selector').style.display = 'flex';
                        document.querySelector('#hunter_selector').style.display = 'flex';
                        document.querySelector('#event_selector').style.display = 'none';
                        category_counter.fill(0);
                        category_counter[0] = 1;
                        for (let j = 1; j < category.length; j++){
                            document.querySelector('#category_'+category[j]).style.backgroundColor = 'aliceblue';
                        }
                        document.querySelector('#category_'+category[i]).style.backgroundColor = 'aqua';
                    } else {
                        for (let j = 1; j < category.length; j++){
                            document.querySelector('#'+category[j]+'_selector').style.display = 'none';
                            document.querySelector('#category_'+category[j]).style.backgroundColor = 'aliceblue';
                            category_counter[j] = 0;
                        }
                        document.querySelector('#category_role').style.backgroundColor = 'aliceblue';
                        category_counter[0] = 0;
                        document.querySelector('#'+category[i]+'_selector').style.display = 'flex';
                        document.querySelector('#category_'+category[i]).style.backgroundColor = 'aqua';
                        category_counter[i] = 1;
                    }
                    survivor_counter.fill(1);
                    hunter_counter.fill(1);
                    event_counter.fill(1);
                    for (let i = 0; i < survivor.length; i++){
                        category_select_function(survivor[i]);
                    }
                    for (let i = 0; i < hunter.length; i++){
                        category_select_function(hunter[i]);
                    }
                    for (let i = 0; i < event.length; i++){
                        category_select_function(event[i]);
                    }
                    break;
                case 1:
                    document.querySelector('#category_'+category[i]).style.backgroundColor = 'aliceblue';
                    category_counter[i] = 0;
                    if (category_counter.reduce(function(accumulator, currentValue){
                        return accumulator + currentValue;
                    }) == 0){
                        document.querySelector('#category_'+category[0]).style.backgroundColor = 'aqua';
                        category_counter[0] = 1;
                    }
                    if (i == 3){
                        event_counter.fill(1);
                        for (let x of event){
                            category_select_function(x);
                        }
                    }
                    document.querySelector('#survivor_selector').style.display = 'flex';
                    document.querySelector('#hunter_selector').style.display = 'flex';
                    document.querySelector('#event_selector').style.display = 'none';
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
            for (let x of document.querySelectorAll('div img')){
                x.style.filter = 'brightness(1.0)';
            }
            break;
        case 'unchoose':
            for (let x of document.querySelectorAll('div img')){
                x.style.filter = 'brightness(0.3)';
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
            for (let j = 0; j < grade.length; j++){
                if (grade_counter[j] != 0){
                    for (let y of document.querySelectorAll('.'+kind[i]+'.'+grade[j]+'_grade')){
                        y.style.display = 'flex';
                    }
                }
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

let present_page = 1;

function select_change_function(){
    switch (present_page){
        case 1:
            kind_counter.fill(1);
            document.querySelector('#kind_selector').style.display = 'none';
            for (let i = 0; i < kind.length; i++){
                kind_function(kind[i]);
            }
            grade_counter.fill(1);
            document.querySelector('#grade_selector').style.display = 'none';
            for (let i = 0; i < grade.length; i++){
                grade_function(grade[i]);
            }
            document.querySelector('#category_selector').style.display = 'flex';
            document.querySelector('#survivor_selector').style.display = 'flex';
            document.querySelector('#hunter_selector').style.display = 'flex';
            present_page = 2;
            break;
        case 2:
            document.querySelector('#kind_selector').style.display = 'flex';
            document.querySelector('#grade_selector').style.display = 'flex';
            category_counter.fill(1);
            document.querySelector('#category_selector').style.display = 'none';
            for (let i = 0; i < category.length; i++){
                category_kind_function(category[i]);
            }
            category_kind_function(category[0]);
            survivor_counter.fill(1);
            hunter_counter.fill(1);
            event_counter.fill(1);
            document.querySelector('#survivor_selector').style.display = 'none';
            document.querySelector('#hunter_selector').style.display = 'none';
            document.querySelector('#event_selector').style.display = 'none';
            for (let i = 0; i < survivor.length; i++){
                category_select_function(survivor[i]);
            }
            for (let i = 0; i < hunter.length; i++){
                category_select_function(hunter[i]);
            }
            for (let i = 0; i < event.length; i++){
                category_select_function(event[i]);
            }
            present_page = 1;
            break;

    }
}


function select(self){
    if (self.style.filter == 'brightness(1)'){
        self.style.filter = 'brightness(0.3)';
    } else {
        self.style.filter = 'brightness(1)';
    }
}


let body_background = 'aliceblue';
function switch_bgcolor(){
    switch (body_background){
        case 'aliceblue':
            document.querySelector('#wrap').style.backgroundColor = 'black';
            document.querySelector('#wrap').style.color = 'white';
            document.querySelector('#selector').style.color = 'black';
            document.querySelector('#wrap').style.filter = 'brightness(0.7)';
            document.querySelector('#skin_checking').style.filter = 'brightness(1.2)';
            document.querySelector('#selector').style.backgroundColor = 'aliceblue';
            body_background = 'black';
            break;
        case 'black':
            document.querySelector('#wrap').style.backgroundColor = 'aliceblue';
            document.querySelector('#wrap').style.color = 'black';
            document.querySelector('#wrap').style.filter = 'brightness(1)';
            body_background = 'aliceblue';
            break;
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
            menubar = 'hidden';
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
            document.querySelector('h3').innerHTML = "안내사항";
            document.querySelector('.loading_information').innerText = 
            "배경색 변경: 배경색을 검정으로 바꿔줍니다.\n다시 누르면 원래대로 돌아옵니다.\n\n선택스킨 표시: 선택한 스킨만을 보여줍니다.\n다시 누르면 모든 스킨을 표시합니다.\n\n화면 상단의 'idvstats'를 눌러\n메뉴를 가리거나 띄울 수 있습니다.\n\n"
            present_info = 2;
            break;
        case 2:
            document.querySelector('.loading_information').innerText = 
            "\"항목 변경 - 원하는 캐릭터명 - 모두 표시\"\n를 눌러 캐릭터 스킨체크표를 제작할 수 있습니다.\n\n또는 \"이벤트 - 이벤트명 - 모두 표시\"\n를 눌러 이벤트 스킨체크표를 제작할 수 있습니다.\n\n"
            present_info = 3;
            break;
        case 3:
            document.querySelector('h3').innerHTML = "주의사항";
            document.querySelector('.loading_information').innerText = 
            "브라우저의 캐시를 삭제하지 않는 것을 권장합니다.\n\n처음 시작시 또는 업데이트 이후 처음 접속시\n와이파이를 통한 접속을 권장합니다.\n(사이트 크기 50MB 이상)"
            present_info = 1;
            break;
    }
}