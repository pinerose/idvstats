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
            switch (survivor_counter[1]){
                case 0:
                    select_survivor[0].style.backgroundColor = 'aqua';
                    survivor_counter[1] = 1;
                    survivor[0] = '.doctor';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[0].style.backgroundColor = 'aliceblue';
                    survivor_counter[1] = 0;
                    survivor[0] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'lawyer':
            switch (survivor_counter[2]){
                case 0:
                    select_survivor[1].style.backgroundColor = 'aqua';
                    survivor_counter[2] = 1;
                    survivor[1] = '.lawyer';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[1].style.backgroundColor = 'aliceblue';
                    survivor_counter[2] = 0;
                    survivor[1] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'thief':
            switch (survivor_counter[3]){
                case 0:
                    select_survivor[2].style.backgroundColor = 'aqua';
                    survivor_counter[3] = 1;
                    survivor[2] = '.thief';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[2].style.backgroundColor = 'aliceblue';
                    survivor_counter[3] = 0;
                    survivor[2] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'gardener':
            switch (survivor_counter[4]){
                case 0:
                    select_survivor[3].style.backgroundColor = 'aqua';
                    survivor_counter[4] = 1;
                    survivor[3] = '.gardener';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[3].style.backgroundColor = 'aliceblue';
                    survivor_counter[4] = 0;
                    survivor[3] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'magician':
            switch (survivor_counter[5]){
                case 0:
                    select_survivor[4].style.backgroundColor = 'aqua';
                    survivor_counter[5] = 1;
                    survivor[4] = '.magician';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[4].style.backgroundColor = 'aliceblue';
                    survivor_counter[5] = 0;
                    survivor[4] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'explorer':
            switch (survivor_counter[6]){
                case 0:
                    select_survivor[5].style.backgroundColor = 'aqua';
                    survivor_counter[6] = 1;
                    survivor[5] = '.explorer';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[5].style.backgroundColor = 'aliceblue';
                    survivor_counter[6] = 0;
                    survivor[5] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'mercenary':
            switch (survivor_counter[7]){
                case 0:
                    select_survivor[6].style.backgroundColor = 'aqua';
                    survivor_counter[7] = 1;
                    survivor[6] = '.mercenary';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[6].style.backgroundColor = 'aliceblue';
                    survivor_counter[7] = 0;
                    survivor[6] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'coordinator':
            switch (survivor_counter[8]){
                case 0:
                    select_survivor[7].style.backgroundColor = 'aqua';
                    survivor_counter[8] = 1;
                    survivor[7] = '.coordinator';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[7].style.backgroundColor = 'aliceblue';
                    survivor_counter[8] = 0;
                    survivor[7] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'mechanic':
            switch (survivor_counter[9]){
                case 0:
                    select_survivor[8].style.backgroundColor = 'aqua';
                    survivor_counter[9] = 1;
                    survivor[8] = '.mechanic';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[8].style.backgroundColor = 'aliceblue';
                    survivor_counter[9] = 0;
                    survivor[8] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'forward':
            switch (survivor_counter[10]){
                case 0:
                    select_survivor[9].style.backgroundColor = 'aqua';
                    survivor_counter[10] = 1;
                    survivor[9] = '.forward';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[9].style.backgroundColor = 'aliceblue';
                    survivor_counter[10] = 0;
                    survivor[9] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'mindeye':
            switch (survivor_counter[11]){
                case 0:
                    select_survivor[10].style.backgroundColor = 'aqua';
                    survivor_counter[11] = 1;
                    survivor[10] = '.mindeye';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[10].style.backgroundColor = 'aliceblue';
                    survivor_counter[11] = 0;
                    survivor[10] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'priestess':
            switch (survivor_counter[12]){
                case 0:
                    select_survivor[11].style.backgroundColor = 'aqua';
                    survivor_counter[12] = 1;
                    survivor[11] = '.priestess';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[11].style.backgroundColor = 'aliceblue';
                    survivor_counter[12] = 0;
                    survivor[11] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'perfumer':
            switch (survivor_counter[13]){
                case 0:
                    select_survivor[12].style.backgroundColor = 'aqua';
                    survivor_counter[13] = 1;
                    survivor[12] = '.perfumer';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[12].style.backgroundColor = 'aliceblue';
                    survivor_counter[13] = 0;
                    survivor[12] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'cowboy':
            switch (survivor_counter[14]){
                case 0:
                    select_survivor[13].style.backgroundColor = 'aqua';
                    survivor_counter[14] = 1;
                    survivor[13] = '.cowboy';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[13].style.backgroundColor = 'aliceblue';
                    survivor_counter[14] = 0;
                    survivor[13] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'dancer':
            switch (survivor_counter[15]){
                case 0:
                    select_survivor[14].style.backgroundColor = 'aqua';
                    survivor_counter[15] = 1;
                    survivor[14] = '.dancer';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[14].style.backgroundColor = 'aliceblue';
                    survivor_counter[15] = 0;
                    survivor[14] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'seer':
            switch (survivor_counter[16]){
                case 0:
                    select_survivor[15].style.backgroundColor = 'aqua';
                    survivor_counter[16] = 1;
                    survivor[15] = '.seer';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[15].style.backgroundColor = 'aliceblue';
                    survivor_counter[16] = 0;
                    survivor[15] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'embalmer':
            switch (survivor_counter[17]){
                case 0:
                    select_survivor[16].style.backgroundColor = 'aqua';
                    survivor_counter[17] = 1;
                    survivor[16] = '.embalmer';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[16].style.backgroundColor = 'aliceblue';
                    survivor_counter[17] = 0;
                    survivor[16] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'prospector':
            switch (survivor_counter[18]){
                case 0:
                    select_survivor[17].style.backgroundColor = 'aqua';
                    survivor_counter[18] = 1;
                    survivor[17] = '.prospector';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[17].style.backgroundColor = 'aliceblue';
                    survivor_counter[18] = 0;
                    survivor[17] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'enchantress':
            switch (survivor_counter[19]){
                case 0:
                    select_survivor[18].style.backgroundColor = 'aqua';
                    survivor_counter[19] = 1;
                    survivor[18] = '.enchantress';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[18].style.backgroundColor = 'aliceblue';
                    survivor_counter[19] = 0;
                    survivor[18] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'wildling':
            switch (survivor_counter[20]){
                case 0:
                    select_survivor[19].style.backgroundColor = 'aqua';
                    survivor_counter[20] = 1;
                    survivor[19] = '.wildling';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[19].style.backgroundColor = 'aliceblue';
                    survivor_counter[20] = 0;
                    survivor[19] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'acrobat':
            switch (survivor_counter[21]){
                case 0:
                    select_survivor[20].style.backgroundColor = 'aqua';
                    survivor_counter[21] = 1;
                    survivor[20] = '.acrobat';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[20].style.backgroundColor = 'aliceblue';
                    survivor_counter[21] = 0;
                    survivor[20] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'officer':
            switch (survivor_counter[22]){
                case 0:
                    select_survivor[21].style.backgroundColor = 'aqua';
                    survivor_counter[22] = 1;
                    survivor[21] = '.officer';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[21].style.backgroundColor = 'aliceblue';
                    survivor_counter[22] = 0;
                    survivor[21] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'barmaid':
            switch (survivor_counter[23]){
                case 0:
                    select_survivor[22].style.backgroundColor = 'aqua';
                    survivor_counter[23] = 1;
                    survivor[22] = '.barmaid';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[22].style.backgroundColor = 'aliceblue';
                    survivor_counter[23] = 0;
                    survivor[22] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'postman':
            switch (survivor_counter[24]){
                case 0:
                    select_survivor[23].style.backgroundColor = 'aqua';
                    survivor_counter[24] = 1;
                    survivor[23] = '.postman';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[23].style.backgroundColor = 'aliceblue';
                    survivor_counter[24] = 0;
                    survivor[23] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'graveyard':
            switch (survivor_counter[25]){
                case 0:
                    select_survivor[24].style.backgroundColor = 'aqua';
                    survivor_counter[25] = 1;
                    survivor[24] = '.graveyard';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[24].style.backgroundColor = 'aliceblue';
                    survivor_counter[25] = 0;
                    survivor[24] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'prisoner':
            switch (survivor_counter[26]){
                case 0:
                    select_survivor[25].style.backgroundColor = 'aqua';
                    survivor_counter[26] = 1;
                    survivor[25] = '.prisoner';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[25].style.backgroundColor = 'aliceblue';
                    survivor_counter[26] = 0;
                    survivor[25] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'entomologist':
            switch (survivor_counter[27]){
                case 0:
                    select_survivor[26].style.backgroundColor = 'aqua';
                    survivor_counter[27] = 1;
                    survivor[26] = '.entomologist';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[26].style.backgroundColor = 'aliceblue';
                    survivor_counter[27] = 0;
                    survivor[26] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'painter':
            switch (survivor_counter[28]){
                case 0:
                    select_survivor[27].style.backgroundColor = 'aqua';
                    survivor_counter[28] = 1;
                    survivor[27] = '.painter';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[27].style.backgroundColor = 'aliceblue';
                    survivor_counter[28] = 0;
                    survivor[27] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'batter':
            switch (survivor_counter[29]){
                case 0:
                    select_survivor[28].style.backgroundColor = 'aqua';
                    survivor_counter[29] = 1;
                    survivor[28] = '.batter';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[28].style.backgroundColor = 'aliceblue';
                    survivor_counter[29] = 0;
                    survivor[28] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'merchant':
            switch (survivor_counter[30]){
                case 0:
                    select_survivor[29].style.backgroundColor = 'aqua';
                    survivor_counter[30] = 1;
                    survivor[29] = '.merchant';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[29].style.backgroundColor = 'aliceblue';
                    survivor_counter[30] = 0;
                    survivor[29] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'psychologist':
            switch (survivor_counter[31]){
                case 0:
                    select_survivor[30].style.backgroundColor = 'aqua';
                    survivor_counter[31] = 1;
                    survivor[30] = '.psychologist';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[30].style.backgroundColor = 'aliceblue';
                    survivor_counter[31] = 0;
                    survivor[30] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'patient':
            switch (survivor_counter[32]){
                case 0:
                    select_survivor[31].style.backgroundColor = 'aqua';
                    survivor_counter[32] = 1;
                    survivor[31] = '.patient';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[31].style.backgroundColor = 'aliceblue';
                    survivor_counter[32] = 0;
                    survivor[31] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'unlucky':
            switch (survivor_counter[33]){
                case 0:
                    select_survivor[32].style.backgroundColor = 'aqua';
                    survivor_counter[33] = 1;
                    survivor[32] = '.unlucky';
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_survivor.style.backgroundColor = 'aqua';
                        survivor_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_survivor[32].style.backgroundColor = 'aliceblue';
                    survivor_counter[33] = 0;
                    survivor[32] = undefined;
                    var i = 0;
                    for (let x of survivor){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_survivor.style.backgroundColor = 'aliceblue';
                        survivor_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'hell_ember':
            switch (hunter_counter[1]){
                case 0:
                    select_hunter[0].style.backgroundColor = 'aqua';
                    hunter_counter[1] = 1;
                    hunter[0] = '.hell_ember';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[0].style.backgroundColor = 'aliceblue';
                    hunter_counter[1] = 0;
                    hunter[0] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'joker':
            switch (hunter_counter[2]){
                case 0:
                    select_hunter[1].style.backgroundColor = 'aqua';
                    hunter_counter[2] = 1;
                    hunter[1] = '.joker';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[1].style.backgroundColor = 'aliceblue';
                    hunter_counter[2] = 0;
                    hunter[1] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'game_keeper':
            switch (hunter_counter[3]){
                case 0:
                    select_hunter[2].style.backgroundColor = 'aqua';
                    hunter_counter[3] = 1;
                    hunter[2] = '.game_keeper';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[2].style.backgroundColor = 'aliceblue';
                    hunter_counter[3] = 0;
                    hunter[2] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'reaper':
            switch (hunter_counter[4]){
                case 0:
                    select_hunter[3].style.backgroundColor = 'aqua';
                    hunter_counter[4] = 1;
                    hunter[3] = '.reaper';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[3].style.backgroundColor = 'aliceblue';
                    hunter_counter[4] = 0;
                    hunter[3] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'soul_weaver':
            switch (hunter_counter[5]){
                case 0:
                    select_hunter[4].style.backgroundColor = 'aqua';
                    hunter_counter[5] = 1;
                    hunter[4] = '.soul_weaver';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[4].style.backgroundColor = 'aliceblue';
                    hunter_counter[5] = 0;
                    hunter[4] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'geisha':
            switch (hunter_counter[6]){
                case 0:
                    select_hunter[5].style.backgroundColor = 'aqua';
                    hunter_counter[6] = 1;
                    hunter[5] = '.geisha';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[5].style.backgroundColor = 'aliceblue';
                    hunter_counter[6] = 0;
                    hunter[5] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'feaster':
            switch (hunter_counter[7]){
                case 0:
                    select_hunter[6].style.backgroundColor = 'aqua';
                    hunter_counter[7] = 1;
                    hunter[6] = '.feaster';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[6].style.backgroundColor = 'aliceblue';
                    hunter_counter[7] = 0;
                    hunter[6] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'wu_chang':
            switch (hunter_counter[8]){
                case 0:
                    select_hunter[7].style.backgroundColor = 'aqua';
                    hunter_counter[8] = 1;
                    hunter[7] = '.wu_chang';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[7].style.backgroundColor = 'aliceblue';
                    hunter_counter[8] = 0;
                    hunter[7] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'photographer':
            switch (hunter_counter[9]){
                case 0:
                    select_hunter[8].style.backgroundColor = 'aqua';
                    hunter_counter[9] = 1;
                    hunter[8] = '.photographer';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[8].style.backgroundColor = 'aliceblue';
                    hunter_counter[9] = 0;
                    hunter[8] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'mad_eye':
            switch (hunter_counter[10]){
                case 0:
                    select_hunter[9].style.backgroundColor = 'aqua';
                    hunter_counter[10] = 1;
                    hunter[9] = '.mad_eye';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[9].style.backgroundColor = 'aliceblue';
                    hunter_counter[10] = 0;
                    hunter[9] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'dream_witch':
            switch (hunter_counter[11]){
                case 0:
                    select_hunter[10].style.backgroundColor = 'aqua';
                    hunter_counter[11] = 1;
                    hunter[10] = '.dream_witch';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[10].style.backgroundColor = 'aliceblue';
                    hunter_counter[11] = 0;
                    hunter[10] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'axe_boy':
            switch (hunter_counter[12]){
                case 0:
                    select_hunter[11].style.backgroundColor = 'aqua';
                    hunter_counter[12] = 1;
                    hunter[11] = '.axe_boy';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[11].style.backgroundColor = 'aliceblue';
                    hunter_counter[12] = 0;
                    hunter[11] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'evil_raptilian':
            switch (hunter_counter[13]){
                case 0:
                    select_hunter[12].style.backgroundColor = 'aqua';
                    hunter_counter[13] = 1;
                    hunter[12] = '.evil_raptilian';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[12].style.backgroundColor = 'aliceblue';
                    hunter_counter[13] = 0;
                    hunter[12] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'mary':
            switch (hunter_counter[14]){
                case 0:
                    select_hunter[13].style.backgroundColor = 'aqua';
                    hunter_counter[14] = 1;
                    hunter[13] = '.mary';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[13].style.backgroundColor = 'aliceblue';
                    hunter_counter[14] = 0;
                    hunter[13] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'guard_26':
            switch (hunter_counter[15]){
                case 0:
                    select_hunter[14].style.backgroundColor = 'aqua';
                    hunter_counter[15] = 1;
                    hunter[14] = '.guard_26';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[14].style.backgroundColor = 'aliceblue';
                    hunter_counter[15] = 0;
                    hunter[14] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'disciple':
            switch (hunter_counter[16]){
                case 0:
                    select_hunter[15].style.backgroundColor = 'aqua';
                    hunter_counter[16] = 1;
                    hunter[15] = '.disciple';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[15].style.backgroundColor = 'aliceblue';
                    hunter_counter[16] = 0;
                    hunter[15] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'violinist':
            switch (hunter_counter[17]){
                case 0:
                    select_hunter[16].style.backgroundColor = 'aqua';
                    hunter_counter[17] = 1;
                    hunter[16] = '.violinist';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[16].style.backgroundColor = 'aliceblue';
                    hunter_counter[17] = 0;
                    hunter[16] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'sculptor':
            switch (hunter_counter[18]){
                case 0:
                    select_hunter[17].style.backgroundColor = 'aqua';
                    hunter_counter[18] = 1;
                    hunter[17] = '.sculptor';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[17].style.backgroundColor = 'aliceblue';
                    hunter_counter[18] = 0;
                    hunter[17] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'undead':
            switch (hunter_counter[19]){
                case 0:
                    select_hunter[18].style.backgroundColor = 'aqua';
                    hunter_counter[19] = 1;
                    hunter[18] = '.undead';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[18].style.backgroundColor = 'aliceblue';
                    hunter_counter[19] = 0;
                    hunter[18] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'breaking_wheel':
            switch (hunter_counter[20]){
                case 0:
                    select_hunter[19].style.backgroundColor = 'aqua';
                    hunter_counter[20] = 1;
                    hunter[19] = '.breaking_wheel';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[19].style.backgroundColor = 'aliceblue';
                    hunter_counter[20] = 0;
                    hunter[19] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
        case 'naiad':
            switch (hunter_counter[21]){
                case 0:
                    select_hunter[20].style.backgroundColor = 'aqua';
                    hunter_counter[21] = 1;
                    hunter[20] = '.naiad';
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 0){
                        select_every_hunter.style.backgroundColor = 'aqua';
                        hunter_counter[0] = 1;
                    }
                    break;
                case 1:
                    select_hunter[20].style.backgroundColor = 'aliceblue';
                    hunter_counter[21] = 0;
                    hunter[20] = undefined;
                    var i = 0;
                    for (let x of hunter){
                        if (x == undefined){
                            i++;
                        }
                    }
                    if (i == 1){
                        select_every_hunter.style.backgroundColor = 'aliceblue';
                        hunter_counter[0] = 0;
                    }
                    break;
            }
            break;
    }

}

function menu_display(displaying){
    switch(displaying){
        case 'hide':
            document.querySelector('#wrap').style.display = 'none';
            document.querySelector('#sub_title').style.display = 'block';
            break;
        case 'show':
            document.querySelector('#wrap').style.display = 'flex';
            document.querySelector('#sub_title').style.display = 'none';
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
            body_bgcolor = 'black';
            break;
        case 'black':
            document.querySelector('body').style.backgroundColor = "aliceblue";
            document.querySelector('body').style.color = 'black';
            document.querySelector('#wrap').style.filter = 'brightness(1)';
            document.querySelector('#sub_title').style.filter = 'brightness(1)';
            body_bgcolor = 'aliceblue';
            break;
    }
}
