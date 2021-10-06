function kind_select_function(kind_selector){
    switch (kind_selector){
        case "skin":
            switch (counter_skin){
                case 0:
                    select_skin_function('on');
                    break;
                case 1:
                    select_skin_function('off');
                    break;
            }
            break;
        case "acce":
            switch (counter_acce){
                case 0:
                    select_acce_function('on');
                    break;
                case 1:
                    select_acce_function('off');
                    break;
            }
            break;
        case "all":
            switch (counter_all){
                case 0:
                    select_every_grade_function('on');
                    select_survivor_function('on');
                    select_hunter_function('on');
                    select_skin_function('on');
                    select_acce_function('on');
                    select_house_function('on');
                    select_detective_function('on');
                    document.querySelector('.select_all').style.backgroundColor = 'aqua';
                    counter_all = 1;
                    break;
                case 1:
                    select_every_grade_function('off');
                    select_survivor_function('off');
                    select_hunter_function('off');
                    select_skin_function('off');
                    select_acce_function('off');
                    select_house_function('off');
                    select_detective_function('off');
                    document.querySelector('.select_all').style.backgroundColor = 'aliceblue';
                    counter_all = 0;
                    break;
            }
    }
}

function grade_select_function(grade_selector){
    switch (grade_selector){
        case "every":
            switch (grade_counter[0]){
                case 0:
                    select_every_grade_function('on');
                    break;
                case 1:
                    select_every_grade_function('off');
                    break;
            }
            break;
        case "S":
            switch (grade_counter[1]){
                case 0:
                    select_S_grade.style.backgroundColor = 'aqua';
                    grade_counter[1] = 1;
                    grade[0] = '.S_grade';
                    var i = 0;
                    for (let x of grade){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_grade.style.backgroundColor = 'aqua';
                        grade_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_S_grade.style.backgroundColor = 'aliceblue';
                    grade_counter[1] = 0;
                    grade[0] = undefined;
                    var i = 0;
                    for (let x of grade){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_grade.style.backgroundColor = 'aliceblue';
                        grade_counter[0] = 0;
                    }
                    break;
            }
            break;
        case "A":
            switch (grade_counter[2]){
                case 0:
                    select_A_grade.style.backgroundColor = 'aqua';
                    grade_counter[2] = 1;
                    grade[1] = '.A_grade';
                    var i = 0;
                    for (let x of grade){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_grade.style.backgroundColor = 'aqua';
                        grade_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_A_grade.style.backgroundColor = 'aliceblue';
                    grade_counter[2] = 0;
                    grade[1] = undefined;
                    var i = 0;
                    for (let x of grade){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_grade.style.backgroundColor = 'aliceblue';
                        grade_counter[0] = 0;
                    }
                    break;
            }
            break;
        case "B":
            switch (grade_counter[3]){
                case 0:
                    select_B_grade.style.backgroundColor = 'aqua';
                    grade_counter[3] = 1;
                    grade[2] = '.B_grade';
                    var i = 0;
                    for (let x of grade){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_grade.style.backgroundColor = 'aqua';
                        grade_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_B_grade.style.backgroundColor = 'aliceblue';
                    grade_counter[3] = 0;
                    grade[2] = undefined;
                    var i = 0;
                    for (let x of grade){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_grade.style.backgroundColor = 'aliceblue';
                        grade_counter[0] = 0;
                    }
                    break;
            }
            break;
        case "C":
            switch (grade_counter[4]){
                case 0:
                    select_C_grade.style.backgroundColor = 'aqua';
                    grade_counter[4] = 1;
                    grade[3] = '.C_grade';
                    var i = 0;
                    for (let x of grade){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_grade.style.backgroundColor = 'aqua';
                        grade_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_C_grade.style.backgroundColor = 'aliceblue';
                    grade_counter[4] = 0;
                    grade[3] = undefined;
                    var i = 0;
                    for (let x of grade){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_grade.style.backgroundColor = 'aliceblue';
                        grade_counter[0] = 0;
                    }
                    break;
            }
            break;
    }
}

function select_house(){
    switch (house){
        case '':
            select_house_function('on');
            break;
        case 'house':
            select_house_function('off');
            break;
    }
}

function select_detective(){
    switch (detective){
        case '':
            select_detective_function('on');
            break;
        case 'detective':
            select_detective_function('off');
            break;
    }
}

function select_hahoetal(){
    switch (hahoetal){
        case '':
            select_hahoetal_function('on');
            break;
        case 'hahoetal':
            select_hahoetal_function('off');
            break;
    }
}

function char_select_function(char_selector) {
    switch (char_selector){
        case 'survivor':
            switch (survivor_counter[0]){
                case 0:
                    select_survivor_function('on');
                    break;
                case 1:
                    select_survivor_function('off');
                    break;
            }
            break;
        case 'hunter':
            switch (hunter_counter[0]){
                case 0:
                    select_hunter_function('on');
                    break;
                case 1:
                    select_hunter_function('off');
                    break;
            }
            break;
        case 'doctor':
            select_each_survivor_function(1);
            break;
        case 'lawyer':
            select_each_survivor_function(2);
            break;
        case 'thief':
            select_each_survivor_function(3);
            break;
        case 'gardener':
            select_each_survivor_function(4);
            break;
        case 'magician':
            select_each_survivor_function(5);
            break;
        case 'explorer':
            select_each_survivor_function(6);
            break;
        case 'mercenary':
            select_each_survivor_function(7);
            break;
        case 'coordinator':
            select_each_survivor_function(8);
            break;
        case 'mechanic':
            select_each_survivor_function(9);
            break;
        case 'forward':
            select_each_survivor_function(10);
            break;
        case 'mindeye':
            select_each_survivor_function(11);
            break;
        case 'priestess':
            select_each_survivor_function(12);
            break;
        case 'perfumer':
            select_each_survivor_function(13);
            break;
        case 'cowboy':
            select_each_survivor_function(14);
            break;
        case 'dancer':
            select_each_survivor_function(15);
            break;
        case 'seer':
            select_each_survivor_function(16);
            break;
        case 'embalmer':
            select_each_survivor_function(17);
            break;
        case 'prospector':
            select_each_survivor_function(18);
            break;
        case 'enchantress':
            select_each_survivor_function(19);
            break;
        case 'wildling':
            select_each_survivor_function(20);
            break;
        case 'acrobat':
            select_each_survivor_function(21);
            break;
        case 'officer':
            select_each_survivor_function(22);
            break;
        case 'barmaid':
            select_each_survivor_function(23);
            break;
        case 'postman':
            select_each_survivor_function(24);
            break;
        case 'graveyard':
            select_each_survivor_function(25);
            break;
        case 'prisoner':
            select_each_survivor_function(26);
            break;
        case 'entomologist':
            select_each_survivor_function(27);
            break;
        case 'painter':
            select_each_survivor_function(28);
            break;
        case 'batter':
            select_each_survivor_function(29);
            break;
        case 'merchant':
            select_each_survivor_function(30);
            break;
        case 'psychologist':
            select_each_survivor_function(31);
            break;
        case 'patient':
            select_each_survivor_function(32);
            break;
        case 'unlucky':
            select_each_survivor_function(33);
            break;
        case 'hell_ember':
            select_each_hunter_function(1);
            break;
        case 'joker':
            select_each_hunter_function(2);
            break;
        case 'game_keeper':
            select_each_hunter_function(3);
            break;
        case 'reaper':
            select_each_hunter_function(4);
            break;
        case 'soul_weaver':
            select_each_hunter_function(5);
            break;
        case 'geisha':
            select_each_hunter_function(6);
            break;
        case 'feaster':
            select_each_hunter_function(7);
            break;
        case 'wu_chang':
            select_each_hunter_function(8);
            break;
        case 'photographer':
            select_each_hunter_function(9);
            break;
        case 'mad_eye':
            select_each_hunter_function(10);
            break;
        case 'dream_witch':
            select_each_hunter_function(11);
            break;
        case 'axe_boy':
            select_each_hunter_function(12);
            break;
        case 'evil_raptilian':
            select_each_hunter_function(13);
            break;
        case 'mary':
            select_each_hunter_function(14);
            break;
        case 'guard_26':
            select_each_hunter_function(15);
            break;
        case 'disciple':
            select_each_hunter_function(16);
            break;
        case 'violinist':
            select_each_hunter_function(17);
            break;
        case 'sculptor':
            select_each_hunter_function(18);
            break;
        case 'undead':
            select_each_hunter_function(19);
            break;
        case 'breaking_wheel':
            select_each_hunter_function(20);
            break;
        case 'naiad':
            select_each_hunter_function(21);
            break;
        case 'philip':
            select_each_hunter_function(22);
            break;
    }

}

function menu_display(displaying){
    switch(displaying){
        case 'hide':
            document.querySelector('#contents_title').style.display = 'none';
            document.querySelector('#selector').style.display = 'none';
            document.querySelector('#contents_nav').style.display = 'none';
            document.querySelector('#sub_title').style.display = 'block';
            break;
        case 'show':
            document.querySelector('#contents_title').style.display = 'flex';
            document.querySelector('#selector').style.display = 'flex';
            document.querySelector('#contents_nav').style.display = 'flex';
            document.querySelector('#sub_title').style.display = 'none';
            break;
    }
}

function mobile_menu_display(displaying){
    switch (displaying){
        case 'hide':
            document.querySelector('#contents_title').style.display = 'none';
            select_categories('off');
            document.querySelector('#sub_title_mobile').style.display = 'block';
            break;
        case 'show':
            document.querySelector('#contents_title').style.display = 'flex';
            for (let x of document.querySelectorAll('#contents_title *:not(#categories_icon)')){
                x.style.filter = 'opacity(1)';
            }
            document.querySelector('#sub_title_mobile').style.display = 'none';
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

function select_all(displaying){
    let survivor_element_exist = 0;
    switch (displaying){
        case 'select':
            for (let x of kind){
                if (x != undefined){
                    for (let y of grade){
                        if (y != undefined){
                            for (let z of survivor){
                                if (z != undefined){
                                    for (var l = 0; l < document.querySelectorAll(x+y+z).length; l++){
                                        document.querySelectorAll(x+y+z)[l].style.filter = "brightness(1.0)";
                                    }
                                    survivor_element_exist++;
                                }
                            }
                            for (let z of hunter){
                                if (z != undefined){
                                    for (var l = 0; l < document.querySelectorAll(x+y+z).length; l++){
                                        document.querySelectorAll(x+y+z)[l].style.filter = "brightness(1.0)";
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (house == 'house'){
                for (let x of document.querySelectorAll('.house')){
                    x.style.filter = 'brightness(1.0)';
                }
            }
            if (detective == 'detective'){
                for (let x of document.querySelectorAll('.detective')){
                    x.style.filter = 'brightness(1.0)';
                }
            }
            if (survivor_element_exist == survivor.length){
                for (let x of document.querySelectorAll('.hahoetal')){
                    x.style.filter = 'brightness(1.0)';
                }
            }
            break;
        case 'unselect':
            for (let x of kind){
                if (x != undefined){
                    for (let y of grade){
                        if (y != undefined){
                            for (let z of survivor){
                                if (z != undefined){
                                    for (var l = 0; l < document.querySelectorAll(x+y+z).length; l++){
                                        document.querySelectorAll(x+y+z)[l].style.filter = "brightness(0.3)";
                                    }
                                }
                            }
                            for (let z of hunter){
                                if (z != undefined){
                                    for (var l = 0; l < document.querySelectorAll(x+y+z).length; l++){
                                        document.querySelectorAll(x+y+z)[l].style.filter = "brightness(0.3)";
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (house == 'house'){
                for (let x of document.querySelectorAll('.house')){
                    x.style.filter = 'brightness(0.3)';
                }
            }
            if (detective == 'detective'){
                for (let x of document.querySelectorAll('.detective')){
                    x.style.filter = 'brightness(0.3)';
                }
            }
            if (survivor_element_exist == survivor.length){
                for (let x of document.querySelectorAll('.hahoetal')){
                    x.style.filter = 'brightness(0.3)';
                }
            }
            break;
        case 'showing':
            for (var i = 0; i < document.querySelectorAll('div img').length; i++){
                document.querySelectorAll('div img')[i].style.display = 'none';
            }
            for (let x of document.querySelectorAll('#others img')){
                x.style.display = 'none';
            }
            for (let x of kind){
                if (x != undefined){
                    for (let y of grade){
                        if (y != undefined){
                            for (let z of survivor){
                                if (z != undefined){
                                    for (var l = 0; l < document.querySelectorAll(x+y+z).length; l++){
                                        document.querySelectorAll(x+y+z)[l].style.display = "block";
                                    }
                                }
                            }
                            for (let z of hunter){
                                if (z != undefined){
                                    for (var l = 0; l < document.querySelectorAll(x+y+z).length; l++){
                                        document.querySelectorAll(x+y+z)[l].style.display = "block";
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (house == 'house'){
                for (let x of document.querySelectorAll('.house')){
                    x.style.display = 'block';
                }
            }
            if (detective == 'detective'){
                for (let x of document.querySelectorAll('.detective')){
                    x.style.display = 'block';
                }
            }
            if (survivor_element_exist == survivor.length){
                for (let x of document.querySelectorAll('.hahoetal')){
                    x.style.display = 'block';
                }
            }
            break;
    }
}

function switching_bgcolor(){
    switch (body_bgcolor){
        case 'aliceblue':
            document.querySelector('body').style.backgroundColor = "black";
            document.querySelector('body').style.color = 'white';
            document.querySelector('#selector').style.backgroundColor = "aliceblue";
            document.querySelector('#selector').style.color = 'black';
            document.querySelector('#wrap').style.filter = 'brightness(0.8)';
            document.querySelector('#sub_title').style.filter = 'brightness(0.8)';
            document.querySelector('#others span').style.filter = 'brightness(0.8)';
            body_bgcolor = 'black';
            break;
        case 'black':
            document.querySelector('body').style.backgroundColor = "aliceblue";
            document.querySelector('body').style.color = 'black';
            document.querySelector('#wrap').style.filter = 'brightness(1)';
            document.querySelector('#sub_title').style.filter = 'brightness(1)';
            document.querySelector('#others span').style.filter = 'brightness(1)';
            body_bgcolor = 'aliceblue';
            break;
    }
}

function select_icon(kinds){
    switch (kinds){
        case 'menu':
            switch (menu){
                case '':
                    select_menu('on');
                    select_categories('off');
                    categories = '';
                    break;
                case 'menu':
                    select_menu('off');
                    for (let x of document.querySelectorAll('#contents_title *:not(#menu_icon)')){
                        x.style.filter = 'opacity(1)';
                    }
                    break;
            }
            break;
        case 'categories':
            switch (categories){
                case '':
                    select_categories('on');
                    select_menu('off');
                    break;
                case 'categories':
                    select_categories('off');
                    for (let x of document.querySelectorAll('#contents_title *:not(#categories_icon)')){
                        x.style.filter = 'opacity(1)';
                    }
                    break;
            }
    }
}

function information(turning){
    switch (turning){
        case 'on':
            for (let x of document.querySelectorAll('#selector div:not(informations)')){
                x.style.display = 'none';
            }
            document.querySelector('#informations').style.display = 'flex';
            break;
        case 'off':
            for (let x of document.querySelectorAll('#selector div:not(informations)')){
                x.style.display = 'flex';
            }
            document.querySelector('#informations').style.display = 'none';
    }
}