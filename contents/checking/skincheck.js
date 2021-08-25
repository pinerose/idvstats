var hell_ember = document.querySelectorAll('.hell_ember');
var joker = document.querySelectorAll('.joker');
var game_keeper = document.querySelectorAll('.game_keeper');
var ripper = document.querySelectorAll('.ripper');
var feaster = document.querySelectorAll('.feaster');
var wu_chang = document.querySelectorAll('.wu_chang');
var photographer = document.querySelectorAll('.photographer');
var mad_eye = document.querySelectorAll('.mad_eye');
var axe_boy = document.querySelectorAll('.axe_boy');
var evil_raptilian = document.querySelectorAll('.evil_raptilian');
var guard_26 = document.querySelectorAll('.guard_26');
var violinist = document.querySelectorAll('.violinist');
var undead = document.querySelectorAll('.undead');
var breaking_wheel = document.querySelectorAll('.breaking_wheel');
var violeta = document.querySelectorAll('.violeta');
var geisha = document.querySelectorAll('.geisha');
var yidra = document.querySelectorAll('.yidra');
var mary = document.querySelectorAll('.mary');
var disciple = document.querySelectorAll('.disciple');
var sculptor = document.querySelectorAll('.sculptor');
var naiad = document.querySelectorAll('.naiad');

var thief = document.querySelectorAll('.thief');
var magician = document.querySelectorAll('.magician');
var mercenary = document.querySelectorAll('.mercenary');
var forward = document.querySelectorAll('.forward');
var cowboy = document.querySelectorAll('.cowboy');
var seer = document.querySelectorAll('.seer');
var embalmer = document.querySelectorAll('.embalmer');
var prospector = document.querySelectorAll('.prospector');
var wildling = document.querySelectorAll('.wildling');
var acrobat = document.querySelectorAll('.acrobat');
var officer = document.querySelectorAll('.officer');
var postman = document.querySelectorAll('.postman');
var graveyard = document.querySelectorAll('.graveyard');
var prisoner = document.querySelectorAll('.prisoner');
var painter = document.querySelectorAll('.painter');
var batter = document.querySelectorAll('.batter');
var patient = document.querySelectorAll('.patient');

var doctor = document.querySelectorAll('.doctor');
var gardener = document.querySelectorAll('.gardener');
var coordinator = document.querySelectorAll('.coordinator');
var mechanic = document.querySelectorAll('.mechanic');
var mindeye = document.querySelectorAll('.mindeye');
var priestess = document.querySelectorAll('.priestess');
var perfumer = document.querySelectorAll('.perfumer');
var dancer = document.querySelectorAll('.dancer');
var enchantress = document.querySelectorAll('.enchantress');
var barmaid = document.querySelectorAll('.barmaid');
var entomologist = document.querySelectorAll('.entomologist');
var merchant = document.querySelectorAll('.merchant');
var psychologist = document.querySelectorAll('.psychologist');

var choicer = document.querySelector('#choicer');
var remover = document.querySelector('#remover');

function show(selecting){
    switch (selecting){
        case 'choicer':
            choicer.style.display = 'flex';
            remover.style.display = 'none';
            break;
        case 'remover':
            choicer.style.display = 'none';
            remover.style.display = 'flex';
    }
}


function selector(character, turn){
    switch (character){
        case 'hell_ember':
            for (var i = 0; i < hell_ember.length; ++i){
                var char = hell_ember[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'joker':
            for (var i = 0; i < joker.length; ++i){
                var char = joker[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'ripper':
            for (var i = 0; i < ripper.length; ++i){
                var char = ripper[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'game_keeper':
            for (var i = 0; i < game_keeper.length; ++i){
                var char = game_keeper[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'feaster':
            for (var i = 0; i < feaster.length; ++i){
                var char = feaster[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'wu_chang':
            for (var i = 0; i < wu_chang.length; ++i){
                var char = wu_chang[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'photographer':
            for (var i = 0; i < photographer.length; ++i){
                var char = photographer[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'mad_eye':
            for (var i = 0; i < mad_eye.length; ++i){
                var char = mad_eye[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'axe_boy':
            for (var i = 0; i < axe_boy.length; ++i){
                var char = axe_boy[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'evil_raptilian':
            for (var i = 0; i < evil_raptilian.length; ++i){
                var char = evil_raptilian[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'guard_26':
            for (var i = 0; i < guard_26.length; ++i){
                var char = guard_26[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'violinist':
            for (var i = 0; i < violinist.length; ++i){
                var char = violinist[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'undead':
            for (var i = 0; i < undead.length; ++i){
                var char = undead[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'breaking_wheel':
            for (var i = 0; i < breaking_wheel.length; ++i){
                var char = breaking_wheel[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'violeta':
            for (var i = 0; i < violeta.length; ++i){
                var char = violeta[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'geisha':
            for (var i = 0; i < geisha.length; ++i){
                var char = geisha[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'yidra':
            for (var i = 0; i < yidra.length; ++i){
                var char = yidra[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'mary':
            for (var i = 0; i < mary.length; ++i){
                var char = mary[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'disciple':
            for (var i = 0; i < disciple.length; ++i){
                var char = disciple[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'sculptor':
            for (var i = 0; i < sculptor.length; ++i){
                var char = sculptor[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'naiad':
            for (var i = 0; i < naiad.length; ++i){
                var char = naiad[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'thief':
            for (var i = 0; i < thief.length; ++i){
                var char = thief[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'magician':
            for (var i = 0; i < magician.length; ++i){
                var char = magician[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'mercenary':
            for (var i = 0; i < mercenary.length; ++i){
                var char = mercenary[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'forward':
            for (var i = 0; i < forward.length; ++i){
                var char = forward[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'cowboy':
            for (var i = 0; i < cowboy.length; ++i){
                var char = cowboy[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'seer':
            for (var i = 0; i < seer.length; ++i){
                var char = seer[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'embalmer':
            for (var i = 0; i < embalmer.length; ++i){
                var char = embalmer[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'prospector':
            for (var i = 0; i < prospector.length; ++i){
                var char = prospector[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'wildling':
            for (var i = 0; i < wildling.length; ++i){
                var char = wildling[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'acrobat':
            for (var i = 0; i < acrobat.length; ++i){
                var char = naiad[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'officer':
            for (var i = 0; i < officer.length; ++i){
                var char = officer[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'postman':
            for (var i = 0; i < postman.length; ++i){
                var char = postman[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'graveyard':
            for (var i = 0; i < graveyard.length; ++i){
                var char = graveyard[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'prisoner':
            for (var i = 0; i < prisoner.length; ++i){
                var char = prisoner[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'painter':
            for (var i = 0; i < painter.length; ++i){
                var char = painter[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'batter':
            for (var i = 0; i < batter.length; ++i){
                var char = batter[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'doctor':
            for (var i = 0; i < doctor.length; ++i){
                var char = doctor[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'gardener':
            for (var i = 0; i < gardener.length; ++i){
                var char = gardener[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'coordinator':
            for (var i = 0; i < coordinator.length; ++i){
                var char = coordinator[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'mechanic':
            for (var i = 0; i < mechanic.length; ++i){
                var char = mechanic[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'mindeye':
            for (var i = 0; i < mindeye.length; ++i){
                var char = mindeye[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'priestess':
            for (var i = 0; i < priestess.length; ++i){
                var char = priestess[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'perfumer':
            for (var i = 0; i < perfumer.length; ++i){
                var char = perfumer[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'dancer':
            for (var i = 0; i < dancer.length; ++i){
                var char = dancer[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'enchantress':
            for (var i = 0; i < enchantress.length; ++i){
                var char = enchantress[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'barmaid':
            for (var i = 0; i < barmaid.length; ++i){
                var char = barmaid[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'entomologist':
            for (var i = 0; i < entomologist.length; ++i){
                var char = entomologist[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'merchant':
            for (var i = 0; i < merchant.length; ++i){
                var char = merchant[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'psychologist':
            for (var i = 0; i < psychologist.length; ++i){
                var char = psychologist[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'patient':
            for (var i = 0; i < patient.length; ++i){
                var char = patient[i];
                switch (turn){
                    case 'on':
                        char.style.filter = 'brightness(1)';
                        break;
                    case 'off':
                        char.style.filter = 'brightness(0.5)';
                        break;
                }
            }
            break;
        case 'lawyer':
            alert('변호사는 황스가 없습니다.');
            break;
        case 'explorer':
            alert('모험가는 황스가 없습니다.');
            break;
        case 'unlucky':
            alert('불운아는 황스가 없습니다.');
            break;
        }
    }