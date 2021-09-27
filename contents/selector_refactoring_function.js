function select_survivor_function(turning){
    switch (turning){
        case 'on':
            for (let x of select_survivor){
                x.style.backgroundColor = 'aqua';
            }
            select_every_survivor.style.backgroundColor = 'aqua';
            for (var i = 0; i < survivor_counter.length; i++){
                survivor_counter[i] = 1;
            }
            survivor = ['.doctor', '.lawyer', '.thief', '.gardener', '.magician', '.explorer', '.mercenary', '.coordinator', '.mechanic', '.forward', '.mindeye', '.priestess', '.perfumer', '.cowboy', '.dancer', '.seer', '.embalmer', '.prospector', '.enchantress', '.wildling', '.acrobat', '.officer', '.barmaid', '.postman', '.graveyard', '.prisoner', '.entomologist', '.painter', '.batter', '.merchant', '.psychologist', '.patient', '.unlucky'];
            break;
        case 'off':
            for (let x of select_survivor){
                x.style.backgroundColor = 'aliceblue';
            }
            select_every_survivor.style.backgroundColor = 'aliceblue';
            for (var i = 0; i < survivor_counter.length; i++){
                survivor_counter[i] = 0;
            }
            survivor = new Array(33);
            break;
    }
}

function select_hunter_function(turning){
    switch (turning){
        case 'on':
            for (let x of select_hunter){
                x.style.backgroundColor = 'aqua';
            }
            select_every_hunter.style.backgroundColor = 'aqua';
            for (var i = 0; i < hunter_counter.length; i++){
                hunter_counter[i] = 1;
            }
            hunter = ['.hell_ember', '.joker', '.game_keeper', '.reaper', '.soul_weaver', '.geisha', '.feaster', '.wu_chang', '.photographer', '.mad_eye', '.dream_witch', '.axe_boy', '.evil_raptilian', '.mary', '.guard_26', '.disciple', '.violinist', '.sculptor', '.undead', '.breaking_wheel', '.naiad'];
            break;
        case 'off':
            for (let x of select_hunter){
                x.style.backgroundColor = 'aliceblue';
            }
            select_every_hunter.style.backgroundColor = 'aliceblue';
            for (var i = 0; i < hunter_counter.length; i++){
                hunter_counter[i] = 0;
            }
            hunter = new Array(21);
            break;
    }
}

function select_every_grade_function(turning){
    switch (turning){
        case 'on':
            for (let x of select_grade){
                x.style.backgroundColor = 'aqua';
            }
            for (var i = 0; i < grade_counter.length; i++){
                grade_counter[i] = 1;
            }
            grade = ['.S_grade', '.A_grade', '.B_grade', '.C_grade'];
            break;
        case 'off':
            for (let x of select_grade){
                x.style.backgroundColor = 'aliceblue';
            }
            for (var i = 0; i < grade_counter.length; i++){
                grade_counter[i] = 0;
            }
            grade = new Array(4);
            break;
    }
}

function select_skin_function(turning){
    switch (turning){
        case 'on':
            select_skin.style.backgroundColor = "aqua";
            counter_skin = 1;
            kind[0] = '.skin';
            break;
        case 'off':
            select_skin.style.backgroundColor = "aliceblue";
            counter_skin = 0;
            kind[0] = undefined;
            break;
    }
}

function select_acce_function(turning){
    switch (turning){
        case 'on':
            select_acce.style.backgroundColor = "aqua";
            counter_acce = 1;
            kind[1] = '.acce';
            break;
        case 'off':
            select_acce.style.backgroundColor = "aliceblue";
            counter_acce = 0;
            kind[1] = undefined;
            break;
    }
}

function select_house_function(turning){
    switch (turning){
        case 'on':
            document.querySelector('.every_house').style.backgroundColor = 'aqua';
            house = 'house';
            break;
        case 'off':
            document.querySelector('.every_house').style.backgroundColor = 'aliceblue';
            house = '';
            break;
    }
}

function select_detective_function(turning){
    switch (turning){
        case 'on':
            document.querySelector('.every_detective').style.backgroundColor = 'aqua';
            detective = 'detective';
            break;
        case 'off':
            document.querySelector('.every_detective').style.backgroundColor = 'aliceblue';
            detective = '';
            break;
    }
}