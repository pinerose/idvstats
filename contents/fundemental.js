// kind_select_function variables

    // array
    var kind = new Array(2);

    // css selector
    var select_skin = document.querySelector(".select_skin");
    var select_acce = document.querySelector(".select_acce");


    // counter
    var counter_skin = 0;
    var counter_acce = 0;
    var counter_all = 0;

// grade_select_function variables

    // array
    var grade = new Array(4);

    // css selector
    var select_grade = document.querySelectorAll("#grade_selector li");
    var select_every_grade = document.querySelector(".every_grade");
    var select_S_grade = document.querySelector(".S_grade");
    var select_A_grade = document.querySelector(".A_grade");
    var select_B_grade = document.querySelector(".B_grade");
    var select_C_grade = document.querySelector(".C_grade");

    // counter
    var grade_counter = new Array(5);
    for (var i = 0; i < grade_counter.length; i++){
        grade_counter[i] = 0;
    }

//select_house and detective variables
    var house = '';
    var detective = '';

//char_select_function variables

    // array
    var survivor = new Array(33);
    var hunter = new Array(21);

    // css selector
    var select_survivor = document.querySelectorAll('.survivor');
    var select_hunter = document.querySelectorAll('.hunter');

    var select_every_survivor = document.querySelector('.every_survivor');
    var select_every_hunter = document.querySelector('.every_hunter');

    var select_doctor = document.querySelector('.doctor');
    var select_lawyer = document.querySelector('.lawyer');
    var select_thief = document.querySelector('.thief');
    var select_gardener = document.querySelector('.gardener');
    var select_magician = document.querySelector('.magician');
    var select_explorer = document.querySelector('.explorer');
    var select_mercenary = document.querySelector('.mercenary');
    var select_coordinator = document.querySelector('.coordinator');
    var select_mechanic = document.querySelector('.mechanic');
    var select_forward = document.querySelector('.forward');
    var select_mindeye = document.querySelector('.mindeye');
    var select_priestess = document.querySelector('.priestess');
    var select_perfumer = document.querySelector('.perfumer');
    var select_cowboy = document.querySelector('.cowboy');
    var select_dancer = document.querySelector('.dancer');
    var select_seer = document.querySelector('.seer');
    var select_embalmer = document.querySelector('.embalmer');
    var select_prospector = document.querySelector('.prospector');
    var select_enchantress = document.querySelector('.enchantress');
    var select_wildling = document.querySelector('.wildling');
    var select_acrobat = document.querySelector('.acrobat');
    var select_officer = document.querySelector('.officer');
    var select_barmaid = document.querySelector('.barmaid');
    var select_postman = document.querySelector('.postman');
    var select_graveyard = document.querySelector('.graveyard');
    var select_prisoner = document.querySelector('.prisoner');
    var select_entomologist = document.querySelector('.entomologist');
    var select_painter = document.querySelector('.painter');
    var select_batter = document.querySelector('.batter');
    var select_merchant = document.querySelector('.merchant');
    var select_psychologist = document.querySelector('.psychologist');
    var select_patient = document.querySelector('.patient');
    var select_unlucky = document.querySelector('.unlucky');
    var select_hell_ember = document.querySelector('.hell_ember');
    var select_joker = document.querySelector('.joker');
    var select_game_keeper = document.querySelector('.game_keeper');
    var select_reaper = document.querySelector('.reaper');
    var select_soul_weaver = document.querySelector('.soul_weaver');
    var select_geisha = document.querySelector('.geisha');
    var select_feaster = document.querySelector('.feaster');
    var select_wu_chang = document.querySelector('.wu_chang');
    var select_photographer = document.querySelector('.photographer');
    var select_mad_eye = document.querySelector('.mad_eye');
    var select_dream_witch = document.querySelector('.dream_witch');
    var select_axe_boy = document.querySelector('.axe_boy');
    var select_evil_raptilian = document.querySelector('.evil_raptilian');
    var select_mary = document.querySelector('.mary');
    var select_guard_26 = document.querySelector('.guard_26');
    var select_disciple = document.querySelector('.disciple');
    var select_violinist = document.querySelector('.violinist');
    var select_sculptor = document.querySelector('.sculptor');
    var select_undead = document.querySelector('.undead');
    var select_breaking_wheel = document.querySelector('.breaking_wheel');
    var select_naiad = document.querySelector('.naiad');

    // counter
    var survivor_counter = new Array(34);
    for (var i = 0; i < survivor_counter.length; i++){
        survivor_counter[i] = 0;
    }
    var hunter_counter = new Array (22);
    for (var i = 0; i < hunter_counter.length; i++){
        hunter_counter[i] = 0;
    }

// select_all 함수

    // array
    var grade_skin = document.querySelectorAll('.skin');
    var grade_acce = document.querySelectorAll('.acce');

// switching_bgcolor

    // variable
    var body_bgcolor = 'aliceblue';

// select_icon

    // variable
    var menu = '';
    var categories = '';