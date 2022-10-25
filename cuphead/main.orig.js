var filenameSave = ""
const levels = {
    0: "Обучение",
    1: "Тест",
    2: "Капитан Дорогобород",
    3: "BAT",
    5: "Призрачный экспресс",
    6: "Овощебанда",
    7: "Рибби и Квак",
    8: "AirshipJelly",
    1428495827: "Уолли Щебетун",
    1429603775: "FlyingTest",
    1429976377: "Королева Медобрюшко",
    1430652919: "Ганс Грызун",
    1432722919: "Грим Огнепых",
    1446558823: "Кайла Морина",
    1449745424: "Хильда Берг",
    1450266910: "Грозная Гвоздика",
    1450863107: "Тянук де ля Гранд",
    1451300935: "Баронесса фон Бон-Бон",
    1452935394: "Робот доктора Кашля",
    1456125457: "Клоун Беппи",
    1456740288: "Салли Примадонна",
    1458062114: "Костяшки (В Казино)",
    1458289179: "DicePalaceCard",
    1458336090: "Ва-Банк (В Казино)",
    1458551456: "Мистер Пыхль (В Казино)",
    1458559869: "DicePalaceTest",
    1458719430: "Три друга ",
    1459105708: "Пирулетка (В Казино)",
    1459338579: "AirshipStork",
    1459444983: "Однорукий Бандит (В Казино)",
    1459489001: "Фанхаус Фразл",
    1459928905: "Сим-Салабим (В Казино)",
    1459950766: "Проклятый цирк",
    1460200177: "Джинн Великолепный",
    1463124738: "DicePalaceLight",
    1463479514: "Понь в кальто (В Казино)",
    1464322003: "Диндон (В Казино)",
    1464969490: "1-1: Лесные безумцы",
    1464969491: "1-2: Проблемы в верхах",
    1464969492: "3-1: Опасные опоры",
    1464969493: "3-2: На самом краю",
    1465296077: "Шестигранный Король",
    1466688317: "Дьявол",
    1468483834: "Счастливчик (В Казино)",
    1469187579: "Лунар Уильямс",
    1481199742: "Мавзолей",
    1484633053: "Дом",
    1495090481: "Смертельный дом",
    1496818712: "2-2: Смешная суматоха",
    1499704951: "2-1: Ярмарочная лихорадка",
    1504847973: "ЧЕРТЕЖ АЭРОПЛАНА",
    1580294079: "Рецепт для Золотой Чаши",
    1530096313: "Бурена Кольт",
    1511943573: "Воющие асы",
    1526556188: "Шахматный слон",
    1557479427: "ChessBOldA",
    1571650861: "ChessBOldB",
    1624358789: "Шахматный замок",
    1562579243: "Король шахмат",
    1560339521: "Шахматный рыцарь",
    1562078899: "Шахматные пешки",
    1561124831: "Королева шахмат",
    1560855325: "Шахматная ладья",
    1616405510: "Кладбище",
    1566994171: "Кухня",
    1523429320: "Великан Мрачногор",
    1518081307: "Контра-банда",
    1573044456: "Шеф-повар Солонкин",
    1527591209: "Мортимер Хладовей",
    1553597811: "Башня силы"
}
const maps = {
    4: "Чернильный остров II",
    5: "Чернильный остров III",
    68: "Чернильный остров IV"
}
function readSingleFile(e) {
    try {
        var file = e.target.files[0];
        filenameSave = e.target.files[0].name
        if (!file) {
            return;
        }
        var filenameExtenstion = filenameSave.split(".")[filenameSave.split(".").length - 1].toLowerCase()
        if (filenameExtenstion != "sav") {
            throw "notSav." + filenameExtenstion;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var contents = e.target.result;
            displayContents(contents);
        };
        reader.readAsText(file);
    } catch (e) {
        if (e.split(".")[0] == "notSav") {
            alert("[Error] You didn't provide a .sav file\nBut instead a ." + e.split(".")[1] + " file")
            console.log("[Error] You didn't provide a .sav file\nBut instead a ." + e.split(".")[1] + " file")
        } else {
            alert("[Error] " + e)
            console.log("[Error] " + e)
        }
    }
}

var savebefore = []

function createOption(table, id,  name, checked = false,  title = null, type = "check", value = 0) {
    if (type == "check") {
        table.insertAdjacentHTML('beforeend', `
        <tr>
            <td ${title != null && `title="${title}"`}>${name}</td>
            <td><input type="checkbox" ${checked ? `checked` : ``} id="${id}"></td>
        </tr>`);
    } else if (type == "number") {
        table.insertAdjacentHTML('beforeend', `
        <tr>
            <td ${title != null && `title="${title}"`}>${name}</td>
            <td><input type="number" value="${value}" id="${id}"></td>
        </tr>`);
    }
}

function displayContents(contents) {
    try {
        var element = document.getElementById('file-content');
        element.textContent = JSON.stringify(JSON.parse(contents), null, "\t");
        var obj = JSON.parse(contents)
        savebefore.push(obj)
        document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);

        var RMGeneral = document.getElementById("Basics");
        try {
            while (RMGeneral.lastElementChild.tagName == 'TABLE') {
                RMGeneral.removeChild(RMGeneral.lastElementChild);
            }
        } catch {}

        document.getElementById('NoOptions').style.display = 'none'
        const Generaltable = document.createElement('table');
        Generaltable.align = "center"
        Generaltable.id = "General"
        Generaltable.insertAdjacentHTML('beforeend', `<col width="300px"><tr><th colspan="2">Основное</th></tr>`)
        const Activetable = document.createElement('table');
        Activetable.align = "center"
        Activetable.id = "Active"
        Activetable.insertAdjacentHTML('beforeend', `<col width="300px"><tr><th colspan="2">Активности</th></tr>`)
        const Tooltiptable = document.createElement('table');
        Tooltiptable.align = "center"
        Tooltiptable.id = "Tooltip"
        Tooltiptable.insertAdjacentHTML('beforeend', `<col width="300px"><tr><th colspan="2">Подсказки</th></tr>`)
        const Filtertable = document.createElement('table');
        Filtertable.align = "center"
        Filtertable.id = "Filter"
        Filtertable.insertAdjacentHTML('beforeend', `<col width="300px"><tr><th colspan="2">Подсказки</th></tr>`)
        const HZtable = document.createElement('table');
        HZtable.align = "center"
        HZtable.id = "HZ"
        HZtable.insertAdjacentHTML('beforeend', `<col width="300px"><tr><th colspan="2">Не известно</th></tr>`)
        for (var option in obj) {
            if (option != 'curseCharmPuzzleOrder' && option != 'usedChessBossZones' && option != 'loadouts' && option != 'inventories' && option != 'coinManager' && option != 'mapDataManager' && option != 'levelDataManager' && option != 'statictics' && option != 'dialoguerState') {
                if (option == 'isPlayer1Mugman') {
                    createOption(Generaltable, option, "Ваш персонаж Mugman?", obj[option], "В качестве основного персонажа будет Mugman")
                } else if (option == '_isTutorialCompleted') {
                    createOption(Generaltable, option, "Обучение пройдено?", obj[option])
                } else if (option == '_isFlyingTutorialCompleted') {
                    createOption(Generaltable, option, "Обучение полетам пройдено?", obj[option])
                } else if (option == '_isChaliceTutorialCompleted') {
                    createOption(Generaltable, option, "Обучение Чаши пройдено?", obj[option])
                } else if (option == 'hasUnlockedBoatman') {
                    createOption(Generaltable, option, "Разблокирован ли Лодочник?", obj[option], "Перемещает вас на чернильный остров четыре с 3-х основных островов")
                } else if (option == '_isHardModeAvailable') {
                    createOption(Generaltable, option, "Доступен ли режим эксперта?", obj[option])
                } else if (option == 'hasMadeFirstPurchase') {
                    createOption(Activetable, option, "Сделали первую покупку?", obj[option], "Купите что-нибуть у Поркринда")
                } else if (option == 'hasBeatenAnyBossOnEasy') {
                    createOption(Activetable, option, "Победили любого босса на легкой сложности?", obj[option], "Вы сможете и на экстриме")
                } else if (option == 'hasUnlockedFirstSuper') {
                    createOption(Activetable, option, "Победили любого босса на легкой сложности в DLC?", obj[option], "Вы сможете и на экстриме")
                } else if (option == 'hasBeatenAnyDLCBossOnEasy') {
                    createOption(Activetable, option, "Разблокирована ли первая спецатака?", obj[option], "Спецатака выдается после прохождения мавзолея")
                } else if (option == 'hasTalkedToChaliceFan') {
                    createOption(Activetable, option, "Поговорили с фанаткой Чаши?", obj[option], "Это кактус, которая появляется на пляже чернильного острова четыре. В нагладу выдает скин золотой чаши")
                } else if (option == 'shouldShowShopkeepTooltip') {
                    createOption(Tooltiptable, option, "Появится ли всплывающая подсказка Поркринда?", obj[option])
                } else if (option == 'shouldShowTurtleTooltip') {
                    createOption(Tooltiptable, option, "Появится ли всплывающая подсказка Талли?", obj[option], "Персонаж выдающий черно-белый фильтр")
                } else if (option == 'shouldShowCanteenTooltip') {
                    createOption(Tooltiptable, option, "Появится ли всплывающая подсказка Фляги Хьюза?", obj[option], "Персонаж выдающий мини-бомбы для самолета")
                } else if (option == 'shouldShowForkTooltip') {
                    createOption(Tooltiptable, option, "Появится ли всплывающая подсказка Сильверворта?", obj[option], "Персонаж выдающий 2-тональный фильтр")
                } else if (option == 'shouldShowKineDiceTooltip') {
                    createOption(Tooltiptable, option, "Появится ли всплывающая подсказка King Dice?", obj[option], "Если вы проходили боссов на легкой сложности")
                } else if (option == 'shouldShowMausoleumTooltip') {
                    createOption(Tooltiptable, option, "Появится ли всплывающая подсказка мавзолея?", obj[option], "После прохождения мавзолея подсказка об использовании суператак")
                } else if (option == 'shouldShowBoatmanTooltip') {
                    createOption(Tooltiptable, option, "Появится ли всплывающая подсказка Лодочника?", obj[option])
                } else if (option == 'shouldShowChaliceTooltip') {
                    createOption(Tooltiptable, option, "Появится ли всплывающая подсказка Чаши?", obj[option], "По прибытию на чернильный остров четыре")
                } else if (option == 'vintageAudioEnabled') {
                    createOption(Filtertable, option, "Включить винтажный звук?", obj[option])
                } else if (option == 'pianoAudioEnabled') {
                    createOption(Filtertable, option, "Включить звук фортепиано?", obj[option]) 
                } else if (option == 'filter') {
                    Filtertable.insertAdjacentHTML('beforeend', `
                    <tr>
                        <td>Включенный фильтр</td>
                        <td>
                            <select id="filter">
                                <option ${obj[option] == 0 && `selected`} value="0">Ничего</option>
                                <option ${obj[option] == 1 && `selected`} value="1">2-тональный</option>
                                <option ${obj[option] == 2 && `selected`} value="2">Черно-белый</option>
                                <option ${obj[option] == 3 && `selected`} value="3">(D) Чаша</option>
                            </select>
                        </td>
                    </tr>`);  
                } else if (option == 'unlockedBlackAndWhite') {
                    createOption(Filtertable, option, "Разблокирован черно-белый?", obj[option])
                } else if (option == 'unlocked2Strip') {
                    createOption(Filtertable, option, "Разблокирован 2-тональный?", obj[option]) 
                } else if (option == '_isHardModeAvailableDLC') {
                    createOption(Generaltable, option, "Доступен ли режим эксперта в DLC?", obj[option]) 
                } else if (option == 'unlockedChaliceRecolor') {
                    createOption(Filtertable, option, "Разблокирован фильтр Чаша?", obj[option])
                } else if (Number.isInteger(obj[option])) {
                    createOption(HZtable, option, option, false, null, "number", obj[option])
                } else {
                    createOption(HZtable, option, option, obj[option])
                }
                
            }
        };
        document.getElementById('Basics').appendChild(Generaltable);
        document.getElementById('Basics').appendChild(Activetable);
        document.getElementById('Basics').appendChild(Tooltiptable);
        document.getElementById('Basics').appendChild(Filtertable);
        document.getElementById('Basics').appendChild(HZtable);

        //Инвентарь
        //Игрок 1
        document.getElementById('NoInventories').style.display = 'none'
        document.getElementById('Player1').style.display = ''
        if ("primaryWeapon" in obj["loadouts"]["playerOne"]){
            document.getElementById('primaryWeapon1').value = obj["loadouts"]["playerOne"]["primaryWeapon"].toString();
        }
        if ("secondaryWeapon" in obj["loadouts"]["playerOne"]) {
            document.getElementById('secondaryWeapon1').value = obj["loadouts"]["playerOne"]["secondaryWeapon"].toString();
        }
        if ("super" in obj["loadouts"]["playerOne"]) {
            document.getElementById('super1').value = obj["loadouts"]["playerOne"]["super"].toString();
        }
        if ("charm" in obj["loadouts"]["playerOne"]) {
            document.getElementById('charm1').value = obj["loadouts"]["playerOne"]["charm"].toString();
        }
        if ("numDeaths" in obj["statictics"]["playerOne"]) {
            document.getElementById('deaths1').value = obj["statictics"]["playerOne"]["numDeaths"].toString();
        }
        if ("numParriesInRow" in obj["statictics"]["playerOne"]) {
            document.getElementById('parries1').value = obj["statictics"]["playerOne"]["numParriesInRow"].toString();
        }
        if ("money" in obj["inventories"]["playerOne"]) {
            document.getElementById('money1').value = obj["inventories"]["playerOne"]["money"].toString();
        }
        if ("newPurchase" in obj["inventories"]["playerOne"]) {
            document.getElementById('newPurchase1').checked = obj["inventories"]["playerOne"]["newPurchase"];
        }

        obj["inventories"]["playerOne"]["_weapons"].forEach((item) => {
            if (item == document.getElementById('1weapon1').value) {
                document.getElementById("1weapon1").checked = true;
            } else if (item == document.getElementById('1weapon2').value) {
                document.getElementById("1weapon2").checked = true;
            } else if (item == document.getElementById('1weapon3').value) {
                document.getElementById("1weapon3").checked = true;
            } else if (item == document.getElementById('1weapon4').value) {
                document.getElementById("1weapon4").checked = true;
            } else if (item == document.getElementById('1weapon5').value) {
                document.getElementById("1weapon5").checked = true;
            } else if (item == document.getElementById('1weapon6').value) {
                document.getElementById("1weapon6").checked = true;
            } else if (item == document.getElementById('1weapon7').value) {
                document.getElementById("1weapon7").checked = true;
            } else if (item == document.getElementById('1weapon8').value) {
                document.getElementById("1weapon8").checked = true;
            } else if (item == document.getElementById('1weapon9').value) {
                document.getElementById("1weapon9").checked = true;
            } else if (item == document.getElementById('1weapon10').value) {
                document.getElementById("1weapon10").checked = true;
            } else if (item == document.getElementById('1weapon11').value) {
                document.getElementById("1weapon11").checked = true;
            } else if (item == document.getElementById('1weapon12').value) {
                document.getElementById("1weapon12").checked = true;
            } else if (item == document.getElementById('1weapon13').value) {
                document.getElementById("1weapon13").checked = true;
            } else if (item == document.getElementById('1weapon14').value) {
                document.getElementById("1weapon14").checked = true;
            } else if (item == document.getElementById('1weapon15').value) {
                document.getElementById("1weapon15").checked = true;
            } else if (item == document.getElementById('1weapon16').value) {
                document.getElementById("1weapon16").checked = true;
            } else if (item == document.getElementById('1weapon17').value) {
                document.getElementById("1weapon17").checked = true;
            } else if (item == document.getElementById('1weapon18').value) {
                document.getElementById("1weapon18").checked = true;
            } else if (item == document.getElementById('1weapon19').value) {
                document.getElementById("1weapon19").checked = true;
            } else if (item == document.getElementById('1weapon20').value) {
                document.getElementById("1weapon20").checked = true;
            } else if (item == document.getElementById('1weapon21').value) {
                document.getElementById("1weapon21").checked = true;
            } else if (item == document.getElementById('1weapon22').value) {
                document.getElementById("1weapon22").checked = true;
            } else if (item == document.getElementById('1weapon23').value) {
                document.getElementById("1weapon23").checked = true;
            }
        });

        obj["inventories"]["playerOne"]["_supers"].forEach((item) => {
            if (item == document.getElementById('1super1').value) {
                document.getElementById("1super1").checked = true;
            } else if (item == document.getElementById('1super2').value) {
                document.getElementById("1super2").checked = true;
            } else if (item == document.getElementById('1super3').value) {
                document.getElementById("1super3").checked = true;
            } else if (item == document.getElementById('1super4').value) {
                document.getElementById("1super4").checked = true;
            } else if (item == document.getElementById('1super5').value) {
                document.getElementById("1super5").checked = true;
            } else if (item == document.getElementById('1super6').value) {
                document.getElementById("1super6").checked = true;
            } else if (item == document.getElementById('1super7').value) {
                document.getElementById("1super7").checked = true;
            } else if (item == document.getElementById('1super8').value) {
                document.getElementById("1super8").checked = true;
            } else if (item == document.getElementById('1super9').value) {
                document.getElementById("1super9").checked = true;
            }
        });

        obj["inventories"]["playerOne"]["_charms"].forEach((item) => {
            if (item == document.getElementById('1charm1').value) {
                document.getElementById("1charm1").checked = true;
            } else if (item == document.getElementById('1charm2').value) {
                document.getElementById("1charm2").checked = true;
            } else if (item == document.getElementById('1charm3').value) {
                document.getElementById("1charm3").checked = true;
            } else if (item == document.getElementById('1charm4').value) {
                document.getElementById("1charm4").checked = true;
            } else if (item == document.getElementById('1charm5').value) {
                document.getElementById("1charm5").checked = true;
            } else if (item == document.getElementById('1charm6').value) {
                document.getElementById("1charm6").checked = true;
            } else if (item == document.getElementById('1charm7').value) {
                document.getElementById("1charm7").checked = true;
            } else if (item == document.getElementById('1charm8').value) {
                document.getElementById("1charm8").checked = true;
            } else if (item == document.getElementById('1charm9').value) {
                document.getElementById("1charm9").checked = true;
            } else if (item == document.getElementById('1charm10').value) {
                document.getElementById("1charm10").checked = true;
            } else if (item == document.getElementById('1charm11').value) {
                document.getElementById("1charm11").checked = true;
            } else if (item == document.getElementById('1charm12').value) {
                document.getElementById("1charm12").checked = true;
            } else if (item == document.getElementById('1charm13').value) {
                document.getElementById("1charm13").checked = true;
            }
        });
        //Игрок 2
        document.getElementById('Player2').style.display = ''
        if ("primaryWeapon" in  obj["loadouts"]["playerTwo"]) {
            document.getElementById('primaryWeapon2').value = obj["loadouts"]["playerTwo"]["primaryWeapon"].toString();
        }
        if ("secondaryWeapon" in  obj["loadouts"]["playerTwo"]) {
            document.getElementById('secondaryWeapon2').value = obj["loadouts"]["playerTwo"]["secondaryWeapon"].toString();
        }
        if ("super" in  obj["loadouts"]["playerTwo"]) {
            document.getElementById('super2').value = obj["loadouts"]["playerTwo"]["super"].toString();
        }
        if ("charm" in  obj["loadouts"]["playerTwo"]) {
            document.getElementById('charm2').value = obj["loadouts"]["playerTwo"]["charm"].toString();
        }
        if ("numDeaths" in   obj["statictics"]["playerTwo"]) {
            document.getElementById('deaths2').value = obj["statictics"]["playerTwo"]["numDeaths"].toString();
        }
        if ("numParriesInRow" in  obj["statictics"]["playerTwo"]) {
            document.getElementById('parries2').value = obj["statictics"]["playerTwo"]["numParriesInRow"].toString();
        }
        if ("money" in obj["inventories"]["playerTwo"]) {
            document.getElementById('money2').value = obj["inventories"]["playerTwo"]["money"].toString();
        }
        if ("newPurchase" in obj["inventories"]["playerTwo"]) {
            document.getElementById('newPurchase2').value = obj["inventories"]["playerTwo"]["newPurchase"].toString();
        }

        obj["inventories"]["playerTwo"]["_weapons"].forEach((item) => {
            if (item == document.getElementById('2weapon1').value) {
                document.getElementById("2weapon1").checked = true;
            } else if (item == document.getElementById('2weapon2').value) {
                document.getElementById("2weapon2").checked = true;
            } else if (item == document.getElementById('2weapon3').value) {
                document.getElementById("2weapon3").checked = true;
            } else if (item == document.getElementById('2weapon4').value) {
                document.getElementById("2weapon4").checked = true;
            } else if (item == document.getElementById('2weapon5').value) {
                document.getElementById("2weapon5").checked = true;
            } else if (item == document.getElementById('2weapon6').value) {
                document.getElementById("2weapon6").checked = true;
            } else if (item == document.getElementById('2weapon7').value) {
                document.getElementById("2weapon7").checked = true;
            } else if (item == document.getElementById('2weapon8').value) {
                document.getElementById("2weapon8").checked = true;
            } else if (item == document.getElementById('2weapon9').value) {
                document.getElementById("2weapon9").checked = true;
            } else if (item == document.getElementById('2weapon10').value) {
                document.getElementById("2weapon10").checked = true;
            } else if (item == document.getElementById('2weapon11').value) {
                document.getElementById("2weapon11").checked = true;
            } else if (item == document.getElementById('2weapon12').value) {
                document.getElementById("2weapon12").checked = true;
            } else if (item == document.getElementById('2weapon13').value) {
                document.getElementById("2weapon13").checked = true;
            } else if (item == document.getElementById('2weapon14').value) {
                document.getElementById("2weapon14").checked = true;
            } else if (item == document.getElementById('2weapon15').value) {
                document.getElementById("2weapon15").checked = true;
            } else if (item == document.getElementById('2weapon16').value) {
                document.getElementById("2weapon16").checked = true;
            } else if (item == document.getElementById('2weapon17').value) {
                document.getElementById("2weapon17").checked = true;
            } else if (item == document.getElementById('2weapon18').value) {
                document.getElementById("2weapon18").checked = true;
            } else if (item == document.getElementById('2weapon19').value) {
                document.getElementById("2weapon19").checked = true;
            } else if (item == document.getElementById('2weapon20').value) {
                document.getElementById("2weapon20").checked = true;
            } else if (item == document.getElementById('2weapon21').value) {
                document.getElementById("2weapon21").checked = true;
            } else if (item == document.getElementById('2weapon22').value) {
                document.getElementById("2weapon22").checked = true;
            } else if (item == document.getElementById('2weapon23').value) {
                document.getElementById("2weapon23").checked = true;
            }
        });

        obj["inventories"]["playerTwo"]["_supers"].forEach((item) => {
            if (item == document.getElementById('2super1').value) {
                document.getElementById("2super1").checked = true;
            } else if (item == document.getElementById('2super2').value) {
                document.getElementById("2super2").checked = true;
            } else if (item == document.getElementById('2super3').value) {
                document.getElementById("2super3").checked = true;
            } else if (item == document.getElementById('2super4').value) {
                document.getElementById("2super4").checked = true;
            } else if (item == document.getElementById('2super5').value) {
                document.getElementById("2super5").checked = true;
            } else if (item == document.getElementById('2super6').value) {
                document.getElementById("2super6").checked = true;
            } else if (item == document.getElementById('2super7').value) {
                document.getElementById("2super7").checked = true;
            } else if (item == document.getElementById('2super8').value) {
                document.getElementById("2super8").checked = true;
            } else if (item == document.getElementById('2super9').value) {
                document.getElementById("2super9").checked = true;
            }
        });

        obj["inventories"]["playerTwo"]["_charms"].forEach((item) => {
            if (item == document.getElementById('2charm1').value) {
                document.getElementById("2charm1").checked = true;
            } else if (item == document.getElementById('2charm2').value) {
                document.getElementById("2charm2").checked = true;
            } else if (item == document.getElementById('2charm3').value) {
                document.getElementById("2charm3").checked = true;
            } else if (item == document.getElementById('2charm4').value) {
                document.getElementById("2charm4").checked = true;
            } else if (item == document.getElementById('2charm5').value) {
                document.getElementById("2charm5").checked = true;
            } else if (item == document.getElementById('2charm6').value) {
                document.getElementById("2charm6").checked = true;
            } else if (item == document.getElementById('2charm7').value) {
                document.getElementById("2charm7").checked = true;
            } else if (item == document.getElementById('2charm8').value) {
                document.getElementById("2charm8").checked = true;
            } else if (item == document.getElementById('2charm9').value) {
                document.getElementById("2charm9").checked = true;
            } else if (item == document.getElementById('2charm10').value) {
                document.getElementById("2charm10").checked = true;
            } else if (item == document.getElementById('2charm11').value) {
                document.getElementById("2charm11").checked = true;
            } else if (item == document.getElementById('2charm12').value) {
                document.getElementById("2charm12").checked = true;
            } else if (item == document.getElementById('2charm13').value) {
                document.getElementById("2charm13").checked = true;
            }
        });
        //Уровни
        var RMLevels = document.getElementById("Levels");
        try {
            while (RMLevels.lastElementChild.tagName == 'TABLE') {
                RMLevels.removeChild(RMLevels.lastElementChild);
            }
        } catch {}
        document.getElementById('NoLevels').style.display = 'none'
        obj["levelDataManager"]["levelObjects"].forEach((item) => {
            const Leveltable = document.createElement('table');
            Leveltable.align = "center"
            Leveltable.id = "Level"
            Leveltable.innerHTML = `
            <tr>
                <th colspan="2">${levels[item["levelID"]] ? levels[item["levelID"]] : item["levelID"]}</th>
            </tr>
            <tr>
                <td>Сыгран?</td>
                <td><input type="checkbox" ${item["played"] && `checked`} id="${item["levelID"]}played"></td>
            </tr>
            <tr>
                <td>Пройден?</td>
                <td><input type="checkbox" ${item["completed"] && `checked`} id="${item["levelID"]}completed"></td>
            </tr>
            ${"completedAsChaliceP1" in item ? `
            <tr>
                <td title="Первый игрок">Пройден за Чашу? (P1)</td>
                <td><input type="checkbox" ${item["completedAsChaliceP1"] && `checked`} id="${item["levelID"]}completedAsChaliceP1"></td>
            </tr>` : ``}
            ${"completedAsChaliceP2" in item ? `
            <tr>
                <td title="Второй игрок">Пройден за Чашу? (P2)</td>
                <td><input type="checkbox" ${item["completedAsChaliceP2"] && `checked`} id="${item["levelID"]}completedAsChaliceP2"></td>
            </tr>` : ``}
            ${"curseCharmP1" in item ? `
            <tr>
                <td title="Первый игрок">Пройден с Чудным кулоном? (P1)</td>
                <td><input type="checkbox" ${item["curseCharmP1"] && `checked`} id="${item["levelID"]}curseCharmP1"></td>
            </tr>` : ``}
            ${"curseCharmP2" in item ? `
            <tr>
                <td title="Второй игрок">Пройден с Чудным кулоном? (P2)</td>
                <td><input type="checkbox" ${item["curseCharmP2"] && `checked`} id="${item["levelID"]}curseCharmP2"></td>
            </tr>` : ``}
            <tr>
                <td>Ранг</td>
                <td>
                    <select id="${item["levelID"]}grade">
                        <option ${item["grade"] == 0 && `selected`} value="0">Не сыгран / D-</option>
                        <option ${item["grade"] == 1 && `selected`} value="1">D</option>
                        <option ${item["grade"] == 2 && `selected`} value="2">D+</option>
                        <option ${item["grade"] == 3 && `selected`} value="3">C-</option>
                        <option ${item["grade"] == 4 && `selected`} value="4">C</option>
                        <option ${item["grade"] == 5 && `selected`} value="5">C+</option>
                        <option ${item["grade"] == 6 && `selected`} value="6">B-</option>
                        <option ${item["grade"] == 7 && `selected`} value="7">B</option>
                        <option ${item["grade"] == 8 && `selected`} value="8">B+-</option>
                        <option ${item["grade"] == 9 && `selected`} value="9">A-</option>
                        <option ${item["grade"] == 10 && `selected`} value="10">A</option>
                        <option ${item["grade"] == 11 && `selected`} value="11">A+</option>
                        <option ${item["grade"] == 12 && `selected`} value="12">S</option>
                        <option ${item["grade"] == 13 && `selected`} value="13">P</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Сложность</td>
                <td>
                    <select id="${item["levelID"]}diff">
                        <option ${item["difficultyBeaten"] == 0 && `selected`} value="0">Легкая</option>
                        <option ${item["difficultyBeaten"] == 1 && `selected`} value="1">Обычная</option>
                        <option ${item["difficultyBeaten"] == 2 && `selected`} value="2">Эксперт</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td title="В секундах">Время</td>
                <td><input type="number" id="${item["levelID"]}time" value="${item["bestTime"] == "3.4028234663852886e+38" ? 0 : item["bestTime"]}"></td>
            </tr>
            <tr>
                <td title="До 5 монет">Монет</td>
                <td><input type="range" id="${item["levelID"]}money" list="money" min="0" max="5" value="0"></td>
            </tr>`
            document.getElementById('Levels').appendChild(Leveltable);
        })
        //Монеты
        obj["coinManager"]["LevelsAndCoins"].forEach((item) => {
            if (item["Coin5Collected"] == true) {
                var val = "5"
            } else if (item["Coin4Collected"] == true) {
                var val = "4"
            } else if (item["Coin3Collected"] == true) {
                var val = "3"
            } else if (item["Coin2Collected"] == true) {
                var val = "2"
            } else if (item["Coin1Collected"] == true) {
                var val = "1"
            } else {
                var val = "0"
            }
            document.getElementById(`${item["level"]}money`).value = val;
        })
        //Карты
        var RMCurrentMaps = document.getElementById("currentMap");
        try {
            while (RMCurrentMaps.lastElementChild.tagName == 'OPTION') {
                RMCurrentMaps.removeChild(RMCurrentMaps.lastElementChild);
            }
        } catch {}
        var RMMaps = document.getElementById("Maps");
        try {
            while (RMMaps.lastElementChild.tagName == 'TABLE') {
                RMMaps.removeChild(RMMaps.lastElementChild);
            }
        } catch {}
        document.getElementById('NoMaps').style.display = 'none'
        document.getElementById('tablecurrentMap').style.display = 'block'
        obj["mapDataManager"]["mapData"].forEach((item) => {
            document.getElementById('currentMap').insertAdjacentHTML('beforeend', `<option value="${item["mapId"]}">${maps[item["mapId"]] ? maps[item["mapId"]] : item["mapId"]}</option>`);

            const Maptable = document.createElement('table');
            Maptable.align = "center"
            Maptable.id = "Map"
            Maptable.innerHTML = `
            <tr>
                <th colspan="3">${maps[item["mapId"]] ? maps[item["mapId"]] : item["mapId"]}</th>
            </tr>
            <tr>
                <td colspan="2">Остров посещен?</td>
                <td><input type="checkbox" ${item["sessionStarted"] && `checked`} id="${item["mapId"]}sessionStarted"></td>
            </tr>
            <tr>
                <td colspan="2">Смертельный дом посещен?</td>
                <td><input type="checkbox" ${item["hasVisitedDieHouse"] && `checked`} id="${item["mapId"]}hasVisitedDieHouse"></td>
            </tr>
            <tr>
                <td colspan="2">Кинг Дайс исчез?</td>
                <td><input type="checkbox" ${item["hasKingDiceDisappeared"] && `checked`} id="${item["mapId"]}hasKingDiceDisappeared"></td>
            </tr>
            <tr>
                <td></td>
                <th>Игрок 1</th>
                <th>Игрок 2</th>
            </tr>
            <tr>
                <td>X</td>
                <td><input type="number" id="${item["mapId"]}playerOnePositionX" value="${item["playerOnePosition"]["x"]}"></td>
                <td><input type="number" id="${item["mapId"]}playerTwoPositionX" value="${item["playerTwoPosition"]["x"]}"></td>
            </tr>
            <tr>
                <td>Y</td>
                <td><input type="number" id="${item["mapId"]}playerOnePositionY" value="${item["playerOnePosition"]["y"]}"></td>
                <td><input type="number" id="${item["mapId"]}playerTwoPositionY" value="${item["playerTwoPosition"]["y"]}"></td>
            </tr>
            <tr>
                <td>Z</td>
                <td><input type="number" id="${item["mapId"]}playerOnePositionZ" value="${item["playerOnePosition"]["z"]}"></td>
                <td><input type="number" id="${item["mapId"]}playerTwoPositionZ" value="${item["playerTwoPosition"]["z"]}"></td>
            </tr>`
            document.getElementById('Maps').appendChild(Maptable);
        })
        document.getElementById('currentMap').value = obj["mapDataManager"]["currentMap"].toString();

        document.getElementById("savebtn").disabled = false;
    } catch (e) {
        alert("[Error] " + e)
        console.log("[Error] " + e)
    }
}

function download() {
    try {
        savedat = savebefore[0]
        for (var option in savebefore[0]) {
            if (option != 'curseCharmPuzzleOrder' && option != 'usedChessBossZones' && option != 'loadouts' && option != 'inventories' && option != 'coinManager' && option != 'mapDataManager' && option != 'levelDataManager' && option != 'statictics' && option != 'dialoguerState') {
                if (Number.isInteger(savebefore[0][option])) {
                    savedat[option] = parseInt(document.getElementById(option).value)
                } else {
                    savedat[option] = document.getElementById(option).checked 
                }
                   
            }
        };

        //Инфентарь
        savedat["loadouts"]["playerOne"]["primaryWeapon"] = parseInt(document.getElementById('primaryWeapon1').value)
        savedat["loadouts"]["playerOne"]["secondaryWeapon"] = parseInt(document.getElementById('secondaryWeapon1').value)
        savedat["loadouts"]["playerOne"]["super"] = parseInt(document.getElementById('super1').value)
        savedat["loadouts"]["playerOne"]["charm"] = parseInt(document.getElementById('charm1').value)
        savedat["statictics"]["playerOne"]["numDeaths"] = parseInt(document.getElementById('deaths1').value)
        savedat["statictics"]["playerOne"]["numParriesInRow"] = parseInt(document.getElementById('parries1').value)
        savedat["inventories"]["playerOne"]["money"] = parseInt(document.getElementById('money1').value)
        savedat["inventories"]["playerOne"]["newPurchase"] = parseInt(document.getElementById('newPurchase1').value)

        savedat["loadouts"]["playerTwo"]["primaryWeapon"] = parseInt(document.getElementById('primaryWeapon2').value)
        savedat["loadouts"]["playerTwo"]["secondaryWeapon"] = parseInt(document.getElementById('secondaryWeapon2').value)
        savedat["loadouts"]["playerTwo"]["super"] = parseInt(document.getElementById('super2').value)
        savedat["loadouts"]["playerTwo"]["charm"] = parseInt(document.getElementById('charm2').value)
        savedat["statictics"]["playerTwo"]["numDeaths"] = parseInt(document.getElementById('deaths2').value)
        savedat["statictics"]["playerTwo"]["numParriesInRow"] = parseInt(document.getElementById('parries2').value)
        savedat["inventories"]["playerTwo"]["money"] = parseInt(document.getElementById('money2').value)
        savedat["inventories"]["playerTwo"]["newPurchase"] = parseInt(document.getElementById('newPurchase2').value)

        var weaponz1 = [1457006169]
        var superz1 = []
        var charmz1 = []
        if (document.getElementById("1weapon1").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon1").value))
        }
        if (document.getElementById("1weapon2").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon2").value))
        }
        if (document.getElementById("1weapon3").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon3").value))
        }
        if (document.getElementById("1weapon4").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon4").value))
        }
        if (document.getElementById("1weapon5").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon5").value))
        }
        if (document.getElementById("1weapon6").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon6").value))
        }
        if (document.getElementById("1weapon7").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon7").value))
        }
        if (document.getElementById("1weapon8").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon8").value))
        }
        if (document.getElementById("1weapon9").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon9").value))
        }
        if (document.getElementById("1weapon10").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon10").value))
        }
        if (document.getElementById("1weapon11").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon11").value))
        }
        if (document.getElementById("1weapon12").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon12").value))
        }
        if (document.getElementById("1weapon13").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon13").value))
        }
        if (document.getElementById("1weapon14").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon14").value))
        }
        if (document.getElementById("1weapon15").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon15").value))
        }
        if (document.getElementById("1weapon16").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon16").value))
        }
        if (document.getElementById("1weapon17").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon17").value))
        }
        if (document.getElementById("1weapon18").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon18").value))
        }
        if (document.getElementById("1weapon19").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon19").value))
        }
        if (document.getElementById("1weapon20").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon20").value))
        }
        if (document.getElementById("1weapon21").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon21").value))
        }
        if (document.getElementById("1weapon22").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon22").value))
        }
        if (document.getElementById("1weapon23").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon23").value))
        }

        if (document.getElementById("1super1").checked) {
            superz1.push(parseInt(document.getElementById("1super1").value))
        }
        if (document.getElementById("1super2").checked) {
            superz1.push(parseInt(document.getElementById("1super2").value))
        }
        if (document.getElementById("1super3").checked) {
            superz1.push(parseInt(document.getElementById("1super3").value))
        }
        if (document.getElementById("1super4").checked) {
            superz1.push(parseInt(document.getElementById("1super4").value))
        }
        if (document.getElementById("1super5").checked) {
            superz1.push(parseInt(document.getElementById("1super5").value))
        }
        if (document.getElementById("1super6").checked) {
            superz1.push(parseInt(document.getElementById("1super6").value))
        }
        if (document.getElementById("1super7").checked) {
            superz1.push(parseInt(document.getElementById("1super7").value))
        }
        if (document.getElementById("1super8").checked) {
            superz1.push(parseInt(document.getElementById("1super8").value))
        }
        if (document.getElementById("1super9").checked) {
            superz1.push(parseInt(document.getElementById("1super9").value))
        }

        if (document.getElementById("1charm1").checked) {
            charmz1.push(parseInt(document.getElementById("1charm1").value))
        }
        if (document.getElementById("1charm2").checked) {
            charmz1.push(parseInt(document.getElementById("1charm2").value))
        }
        if (document.getElementById("1charm3").checked) {
            charmz1.push(parseInt(document.getElementById("1charm3").value))
        }
        if (document.getElementById("1charm4").checked) {
            charmz1.push(parseInt(document.getElementById("1charm4").value))
        }
        if (document.getElementById("1charm5").checked) {
            charmz1.push(parseInt(document.getElementById("1charm5").value))
        }
        if (document.getElementById("1charm6").checked) {
            charmz1.push(parseInt(document.getElementById("1charm6").value))
        }
        if (document.getElementById("1charm7").checked) {
            charmz1.push(parseInt(document.getElementById("1charm7").value))
        }
        if (document.getElementById("1charm8").checked) {
            charmz1.push(parseInt(document.getElementById("1charm8").value))
        }
        if (document.getElementById("1charm9").checked) {
            charmz1.push(parseInt(document.getElementById("1charm9").value))
        }
        if (document.getElementById("1charm10").checked) {
            charmz1.push(parseInt(document.getElementById("1charm10").value))
        }
        if (document.getElementById("1charm11").checked) {
            charmz1.push(parseInt(document.getElementById("1charm11").value))
        }
        if (document.getElementById("1charm12").checked) {
            charmz1.push(parseInt(document.getElementById("1charm12").value))
        }
        if (document.getElementById("1charm13").checked) {
            charmz1.push(parseInt(document.getElementById("1charm13").value))
        }

        var weaponz2 = [1457006169]
        var superz2 = []
        var charmz2 = []
        if (document.getElementById("2weapon1").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon1").value))
        }
        if (document.getElementById("2weapon2").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon2").value))
        }
        if (document.getElementById("2weapon3").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon3").value))
        }
        if (document.getElementById("2weapon4").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon4").value))
        }
        if (document.getElementById("2weapon5").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon5").value))
        }
        if (document.getElementById("2weapon6").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon6").value))
        }
        if (document.getElementById("2weapon7").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon7").value))
        }
        if (document.getElementById("2weapon8").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon8").value))
        }
        if (document.getElementById("2weapon9").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon9").value))
        }
        if (document.getElementById("2weapon11").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon11").value))
        }
        if (document.getElementById("2weapon12").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon12").value))
        }
        if (document.getElementById("2weapon13").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon13").value))
        }
        if (document.getElementById("2weapon14").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon14").value))
        }
        if (document.getElementById("2weapon15").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon15").value))
        }
        if (document.getElementById("2weapon16").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon16").value))
        }
        if (document.getElementById("2weapon17").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon17").value))
        }
        if (document.getElementById("2weapon18").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon18").value))
        }
        if (document.getElementById("2weapon19").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon19").value))
        }
        if (document.getElementById("2weapon20").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon20").value))
        }
        if (document.getElementById("2weapon21").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon21").value))
        }
        if (document.getElementById("2weapon22").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon22").value))
        }
        if (document.getElementById("2weapon23").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon23").value))
        }

        if (document.getElementById("2super1").checked) {
            superz2.push(parseInt(document.getElementById("2super1").value))
        }
        if (document.getElementById("2super2").checked) {
            superz2.push(parseInt(document.getElementById("2super2").value))
        }
        if (document.getElementById("2super3").checked) {
            superz2.push(parseInt(document.getElementById("2super3").value))
        }
        if (document.getElementById("2super4").checked) {
            superz1.push(parseInt(document.getElementById("2super4").value))
        }
        if (document.getElementById("2super5").checked) {
            superz1.push(parseInt(document.getElementById("2super5").value))
        }
        if (document.getElementById("2super6").checked) {
            superz1.push(parseInt(document.getElementById("2super6").value))
        }
        if (document.getElementById("2super7").checked) {
            superz1.push(parseInt(document.getElementById("2super7").value))
        }
        if (document.getElementById("2super8").checked) {
            superz1.push(parseInt(document.getElementById("2super8").value))
        }
        if (document.getElementById("2super9").checked) {
            superz1.push(parseInt(document.getElementById("2super9").value))
        }

        if (document.getElementById("2charm1").checked) {
            charmz2.push(parseInt(document.getElementById("2charm1").value))
        }
        if (document.getElementById("2charm2").checked) {
            charmz2.push(parseInt(document.getElementById("2charm2").value))
        }
        if (document.getElementById("2charm3").checked) {
            charmz2.push(parseInt(document.getElementById("2charm3").value))
        }
        if (document.getElementById("2charm4").checked) {
            charmz2.push(parseInt(document.getElementById("2charm4").value))
        }
        if (document.getElementById("2charm5").checked) {
            charmz2.push(parseInt(document.getElementById("2charm5").value))
        }
        if (document.getElementById("2charm6").checked) {
            charmz2.push(parseInt(document.getElementById("2charm6").value))
        }
        if (document.getElementById("2charm7").checked) {
            charmz2.push(parseInt(document.getElementById("2charm7").value))
        }
        if (document.getElementById("2charm8").checked) {
            charmz2.push(parseInt(document.getElementById("2charm8").value))
        }
        if (document.getElementById("2charm9").checked) {
            charmz2.push(parseInt(document.getElementById("2charm9").value))
        }
        if (document.getElementById("2charm10").checked) {
            charmz1.push(parseInt(document.getElementById("2charm10").value))
        }
        if (document.getElementById("2charm11").checked) {
            charmz1.push(parseInt(document.getElementById("2charm11").value))
        }
        if (document.getElementById("2charm12").checked) {
            charmz1.push(parseInt(document.getElementById("2charm12").value))
        }
        if (document.getElementById("2charm13").checked) {
            charmz1.push(parseInt(document.getElementById("2charm13").value))
        }

        savedat["inventories"]["playerOne"]["_weapons"] = weaponz1
        savedat["inventories"]["playerOne"]["_supers"] = superz1
        savedat["inventories"]["playerOne"]["_charms"] = charmz1

        savedat["inventories"]["playerTwo"]["_weapons"] = weaponz2
        savedat["inventories"]["playerTwo"]["_supers"] = superz2
        savedat["inventories"]["playerTwo"]["_charms"] = charmz2
        //Монеты
        savedat["coinManager"]["LevelsAndCoins"].forEach(function (item) {
            if (document.getElementById(`${item["level"]}money`).value == "5") {
                item["Coin1Collected"] = true
                item["Coin2Collected"] = true
                item["Coin3Collected"] = true
                item["Coin4Collected"] = true
                item["Coin5Collected"] = true
            } else if (document.getElementById(`${item["level"]}money`).value == "4") {
                item["Coin1Collected"] = true
                item["Coin2Collected"] = true
                item["Coin3Collected"] = true
                item["Coin4Collected"] = true
                item["Coin5Collected"] = false
            } else if (document.getElementById(`${item["level"]}money`).value == "3") {
                item["Coin1Collected"] = true
                item["Coin2Collected"] = true
                item["Coin3Collected"] = true
                item["Coin4Collected"] = false
                item["Coin5Collected"] = false
            } else if (document.getElementById(`${item["level"]}money`).value == "2") {
                item["Coin1Collected"] = true
                item["Coin2Collected"] = true
                item["Coin3Collected"] = false
                item["Coin4Collected"] = false
                item["Coin5Collected"] = false
            } else if (document.getElementById(`${item["level"]}money`).value == "1") {
                item["Coin1Collected"] = true
                item["Coin2Collected"] = false
                item["Coin3Collected"] = false
                item["Coin4Collected"] = false
                item["Coin5Collected"] = false
            } else if (document.getElementById(`${item["level"]}money`).value == "0") {
                item["Coin1Collected"] = false
                item["Coin2Collected"] = false
                item["Coin3Collected"] = false
                item["Coin4Collected"] = false
                item["Coin5Collected"] = false
            }
        })
        //Уровни
        savedat["levelDataManager"]["levelObjects"].forEach(function (item) {
            if (parseFloat((document.getElementById(`${item["levelID"]}time`).value).replace(/,/g, ".")) == 0) {
                item["bestTime"] = 3.4028234663852886e+38
            } else {
                item["bestTime"] = parseFloat((document.getElementById(`${item["levelID"]}time`).value).replace(/,/g, "."))
            }
            item["levelID"] = item["levelID"];
            item["completed"] = document.getElementById(`${item["levelID"]}completed`).checked;
            item["completedAsChaliceP1"] = document.getElementById(`${item["levelID"]}completedAsChaliceP1`).checked;
            item["completedAsChaliceP2"] = document.getElementById(`${item["levelID"]}completedAsChaliceP2`).checked;
            item["curseCharmP1"] = document.getElementById(`${item["levelID"]}curseCharmP1`).checked;
            item["curseCharmP2"] = document.getElementById(`${item["levelID"]}curseCharmP2`).checked;
            item["played"] = document.getElementById(`${item["levelID"]}played`).checked;
            item["grade"] = parseInt(document.getElementById(`${item["levelID"]}grade`).value);
            item["difficultyBeaten"] = parseInt(document.getElementById(`${item["levelID"]}diff`).value);
            item["bgmPlayListCurrent"] = item["bgmPlayListCurrent"];
        })
        //Карты
        savedat["mapDataManager"]["currentMap"] = parseInt(document.getElementById('currentMap').value)
        savedat["mapDataManager"]["mapData"].forEach(function (item) {
            item["mapId"] = item["mapId"];
            item["sessionStarted"] = document.getElementById(`${item["mapId"]}sessionStarted`).checked;
            item["hasVisitedDieHouse"] = document.getElementById(`${item["mapId"]}hasVisitedDieHouse`).checked;
            item["hasKingDiceDisappeared"] = document.getElementById(`${item["mapId"]}hasKingDiceDisappeared`).checked;
            item["playerOnePosition"]["x"] = parseInt(document.getElementById(`${item["mapId"]}playerOnePositionX`).value)
            item["playerOnePosition"]["y"] = parseInt(document.getElementById(`${item["mapId"]}playerOnePositionY`).value)
            item["playerOnePosition"]["z"] = parseInt(document.getElementById(`${item["mapId"]}playerOnePositionZ`).value)
            item["playerTwoPosition"]["x"] = parseInt(document.getElementById(`${item["mapId"]}playerTwoPositionX`).value)
            item["playerTwoPosition"]["y"] = parseInt(document.getElementById(`${item["mapId"]}playerTwoPositionY`).value)
            item["playerTwoPosition"]["z"] = parseInt(document.getElementById(`${item["mapId"]}playerTwoPositionZ`).value)
        })

        var saveafter = savedat
        var data = saveafter
        var file = new Blob([JSON.stringify(data)], {
            type: "json"
        });
        var filename = filenameSave
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    } catch (e) {
        alert("[Error] " + e)
        console.log("[Error] " + e)
    }
}

function updateJson() {
    try {
        savedat = savebefore[0]
        
        for (var option in savebefore[0]) {
            if (option != 'curseCharmPuzzleOrder' && option != 'usedChessBossZones' && option != 'loadouts' && option != 'inventories' && option != 'coinManager' && option != 'mapDataManager' && option != 'levelDataManager' && option != 'statictics' && option != 'dialoguerState') {
                if (Number.isInteger(savebefore[0][option])) {
                    savedat[option] = parseInt(document.getElementById(option).value)
                } else {
                    savedat[option] = document.getElementById(option).checked 
                }
                   
            }
        };
        //Инфентарь
        savedat["loadouts"]["playerOne"]["primaryWeapon"] = parseInt(document.getElementById('primaryWeapon1').value)
        savedat["loadouts"]["playerOne"]["secondaryWeapon"] = parseInt(document.getElementById('secondaryWeapon1').value)
        savedat["loadouts"]["playerOne"]["super"] = parseInt(document.getElementById('super1').value)
        savedat["loadouts"]["playerOne"]["charm"] = parseInt(document.getElementById('charm1').value)
        savedat["statictics"]["playerOne"]["numDeaths"] = parseInt(document.getElementById('deaths1').value)
        savedat["statictics"]["playerOne"]["numParriesInRow"] = parseInt(document.getElementById('parries1').value)
        savedat["inventories"]["playerOne"]["money"] = parseInt(document.getElementById('money1').value)
        savedat["inventories"]["playerOne"]["newPurchase"] = parseInt(document.getElementById('newPurchase1').value)

        savedat["loadouts"]["playerTwo"]["primaryWeapon"] = parseInt(document.getElementById('primaryWeapon2').value)
        savedat["loadouts"]["playerTwo"]["secondaryWeapon"] = parseInt(document.getElementById('secondaryWeapon2').value)
        savedat["loadouts"]["playerTwo"]["super"] = parseInt(document.getElementById('super2').value)
        savedat["loadouts"]["playerTwo"]["charm"] = parseInt(document.getElementById('charm2').value)
        savedat["statictics"]["playerTwo"]["numDeaths"] = parseInt(document.getElementById('deaths2').value)
        savedat["statictics"]["playerTwo"]["numParriesInRow"] = parseInt(document.getElementById('parries2').value)
        savedat["inventories"]["playerTwo"]["money"] = parseInt(document.getElementById('money2').value)
        savedat["inventories"]["playerTwo"]["newPurchase"] = parseInt(document.getElementById('newPurchase2').value)

        var weaponz1 = [1457006169]
        var superz1 = []
        var charmz1 = []
        if (document.getElementById("1weapon1").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon1").value))
        }
        if (document.getElementById("1weapon2").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon2").value))
        }
        if (document.getElementById("1weapon3").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon3").value))
        }
        if (document.getElementById("1weapon4").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon4").value))
        }
        if (document.getElementById("1weapon5").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon5").value))
        }
        if (document.getElementById("1weapon6").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon6").value))
        }
        if (document.getElementById("1weapon7").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon7").value))
        }
        if (document.getElementById("1weapon8").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon8").value))
        }
        if (document.getElementById("1weapon9").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon9").value))
        }
        if (document.getElementById("1weapon10").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon10").value))
        }
        if (document.getElementById("1weapon11").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon11").value))
        }
        if (document.getElementById("1weapon12").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon12").value))
        }
        if (document.getElementById("1weapon13").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon13").value))
        }
        if (document.getElementById("1weapon14").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon14").value))
        }
        if (document.getElementById("1weapon15").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon15").value))
        }
        if (document.getElementById("1weapon16").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon16").value))
        }
        if (document.getElementById("1weapon17").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon17").value))
        }
        if (document.getElementById("1weapon18").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon18").value))
        }
        if (document.getElementById("1weapon19").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon19").value))
        }
        if (document.getElementById("1weapon20").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon20").value))
        }
        if (document.getElementById("1weapon21").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon21").value))
        }
        if (document.getElementById("1weapon22").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon22").value))
        }
        if (document.getElementById("1weapon23").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon23").value))
        }

        if (document.getElementById("1super1").checked) {
            superz1.push(parseInt(document.getElementById("1super1").value))
        }
        if (document.getElementById("1super2").checked) {
            superz1.push(parseInt(document.getElementById("1super2").value))
        }
        if (document.getElementById("1super3").checked) {
            superz1.push(parseInt(document.getElementById("1super3").value))
        }
        if (document.getElementById("1super4").checked) {
            superz1.push(parseInt(document.getElementById("1super4").value))
        }
        if (document.getElementById("1super5").checked) {
            superz1.push(parseInt(document.getElementById("1super5").value))
        }
        if (document.getElementById("1super6").checked) {
            superz1.push(parseInt(document.getElementById("1super6").value))
        }
        if (document.getElementById("1super7").checked) {
            superz1.push(parseInt(document.getElementById("1super7").value))
        }
        if (document.getElementById("1super8").checked) {
            superz1.push(parseInt(document.getElementById("1super8").value))
        }
        if (document.getElementById("1super9").checked) {
            superz1.push(parseInt(document.getElementById("1super9").value))
        }

        if (document.getElementById("1charm1").checked) {
            charmz1.push(parseInt(document.getElementById("1charm1").value))
        }
        if (document.getElementById("1charm2").checked) {
            charmz1.push(parseInt(document.getElementById("1charm2").value))
        }
        if (document.getElementById("1charm3").checked) {
            charmz1.push(parseInt(document.getElementById("1charm3").value))
        }
        if (document.getElementById("1charm4").checked) {
            charmz1.push(parseInt(document.getElementById("1charm4").value))
        }
        if (document.getElementById("1charm5").checked) {
            charmz1.push(parseInt(document.getElementById("1charm5").value))
        }
        if (document.getElementById("1charm6").checked) {
            charmz1.push(parseInt(document.getElementById("1charm6").value))
        }
        if (document.getElementById("1charm7").checked) {
            charmz1.push(parseInt(document.getElementById("1charm7").value))
        }
        if (document.getElementById("1charm8").checked) {
            charmz1.push(parseInt(document.getElementById("1charm8").value))
        }
        if (document.getElementById("1charm9").checked) {
            charmz1.push(parseInt(document.getElementById("1charm9").value))
        }
        if (document.getElementById("1charm10").checked) {
            charmz1.push(parseInt(document.getElementById("1charm10").value))
        }
        if (document.getElementById("1charm11").checked) {
            charmz1.push(parseInt(document.getElementById("1charm11").value))
        }
        if (document.getElementById("1charm12").checked) {
            charmz1.push(parseInt(document.getElementById("1charm12").value))
        }
        if (document.getElementById("1charm13").checked) {
            charmz1.push(parseInt(document.getElementById("1charm13").value))
        }

        var weaponz2 = [1457006169]
        var superz2 = []
        var charmz2 = []
        if (document.getElementById("2weapon1").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon1").value))
        }
        if (document.getElementById("2weapon2").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon2").value))
        }
        if (document.getElementById("2weapon3").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon3").value))
        }
        if (document.getElementById("2weapon4").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon4").value))
        }
        if (document.getElementById("2weapon5").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon5").value))
        }
        if (document.getElementById("2weapon6").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon6").value))
        }
        if (document.getElementById("2weapon7").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon7").value))
        }
        if (document.getElementById("2weapon8").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon8").value))
        }
        if (document.getElementById("2weapon9").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon9").value))
        }
        if (document.getElementById("2weapon11").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon11").value))
        }
        if (document.getElementById("2weapon12").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon12").value))
        }
        if (document.getElementById("2weapon13").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon13").value))
        }
        if (document.getElementById("2weapon14").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon14").value))
        }
        if (document.getElementById("2weapon15").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon15").value))
        }
        if (document.getElementById("2weapon16").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon16").value))
        }
        if (document.getElementById("2weapon17").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon17").value))
        }
        if (document.getElementById("2weapon18").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon18").value))
        }
        if (document.getElementById("2weapon19").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon19").value))
        }
        if (document.getElementById("2weapon20").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon20").value))
        }
        if (document.getElementById("2weapon21").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon21").value))
        }
        if (document.getElementById("2weapon22").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon22").value))
        }
        if (document.getElementById("2weapon23").checked) {
            weaponz1.push(parseInt(document.getElementById("2weapon23").value))
        }

        if (document.getElementById("2super1").checked) {
            superz2.push(parseInt(document.getElementById("2super1").value))
        }
        if (document.getElementById("2super2").checked) {
            superz2.push(parseInt(document.getElementById("2super2").value))
        }
        if (document.getElementById("2super3").checked) {
            superz2.push(parseInt(document.getElementById("2super3").value))
        }
        if (document.getElementById("2super4").checked) {
            superz1.push(parseInt(document.getElementById("2super4").value))
        }
        if (document.getElementById("2super5").checked) {
            superz1.push(parseInt(document.getElementById("2super5").value))
        }
        if (document.getElementById("2super6").checked) {
            superz1.push(parseInt(document.getElementById("2super6").value))
        }
        if (document.getElementById("2super7").checked) {
            superz1.push(parseInt(document.getElementById("2super7").value))
        }
        if (document.getElementById("2super8").checked) {
            superz1.push(parseInt(document.getElementById("2super8").value))
        }
        if (document.getElementById("2super9").checked) {
            superz1.push(parseInt(document.getElementById("2super9").value))
        }

        if (document.getElementById("2charm1").checked) {
            charmz2.push(parseInt(document.getElementById("2charm1").value))
        }
        if (document.getElementById("2charm2").checked) {
            charmz2.push(parseInt(document.getElementById("2charm2").value))
        }
        if (document.getElementById("2charm3").checked) {
            charmz2.push(parseInt(document.getElementById("2charm3").value))
        }
        if (document.getElementById("2charm4").checked) {
            charmz2.push(parseInt(document.getElementById("2charm4").value))
        }
        if (document.getElementById("2charm5").checked) {
            charmz2.push(parseInt(document.getElementById("2charm5").value))
        }
        if (document.getElementById("2charm6").checked) {
            charmz2.push(parseInt(document.getElementById("2charm6").value))
        }
        if (document.getElementById("2charm7").checked) {
            charmz2.push(parseInt(document.getElementById("2charm7").value))
        }
        if (document.getElementById("2charm8").checked) {
            charmz2.push(parseInt(document.getElementById("2charm8").value))
        }
        if (document.getElementById("2charm9").checked) {
            charmz2.push(parseInt(document.getElementById("2charm9").value))
        }
        if (document.getElementById("2charm10").checked) {
            charmz1.push(parseInt(document.getElementById("2charm10").value))
        }
        if (document.getElementById("2charm11").checked) {
            charmz1.push(parseInt(document.getElementById("2charm11").value))
        }
        if (document.getElementById("2charm12").checked) {
            charmz1.push(parseInt(document.getElementById("2charm12").value))
        }
        if (document.getElementById("2charm13").checked) {
            charmz1.push(parseInt(document.getElementById("2charm13").value))
        }

        savedat["inventories"]["playerOne"]["_weapons"] = weaponz1
        savedat["inventories"]["playerOne"]["_supers"] = superz1
        savedat["inventories"]["playerOne"]["_charms"] = charmz1

        savedat["inventories"]["playerTwo"]["_weapons"] = weaponz2
        savedat["inventories"]["playerTwo"]["_supers"] = superz2
        savedat["inventories"]["playerTwo"]["_charms"] = charmz2
        //Монеты
        savedat["coinManager"]["LevelsAndCoins"].forEach(function (item) {
            if (document.getElementById(`${item["level"]}money`).value == "5") {
                item["Coin1Collected"] = true
                item["Coin2Collected"] = true
                item["Coin3Collected"] = true
                item["Coin4Collected"] = true
                item["Coin5Collected"] = true
            } else if (document.getElementById(`${item["level"]}money`).value == "4") {
                item["Coin1Collected"] = true
                item["Coin2Collected"] = true
                item["Coin3Collected"] = true
                item["Coin4Collected"] = true
                item["Coin5Collected"] = false
            } else if (document.getElementById(`${item["level"]}money`).value == "3") {
                item["Coin1Collected"] = true
                item["Coin2Collected"] = true
                item["Coin3Collected"] = true
                item["Coin4Collected"] = false
                item["Coin5Collected"] = false
            } else if (document.getElementById(`${item["level"]}money`).value == "2") {
                item["Coin1Collected"] = true
                item["Coin2Collected"] = true
                item["Coin3Collected"] = false
                item["Coin4Collected"] = false
                item["Coin5Collected"] = false
            } else if (document.getElementById(`${item["level"]}money`).value == "1") {
                item["Coin1Collected"] = true
                item["Coin2Collected"] = false
                item["Coin3Collected"] = false
                item["Coin4Collected"] = false
                item["Coin5Collected"] = false
            } else if (document.getElementById(`${item["level"]}money`).value == "0") {
                item["Coin1Collected"] = false
                item["Coin2Collected"] = false
                item["Coin3Collected"] = false
                item["Coin4Collected"] = false
                item["Coin5Collected"] = false
            }  
        })
        //Уровни
        savedat["levelDataManager"]["levelObjects"].forEach(function (item) {
            if (parseFloat((document.getElementById(`${item["levelID"]}time`).value).replace(/,/g, ".")) == 0) {

                item["bestTime"] = 3.4028234663852886e+38

            } else {
                item["bestTime"] = parseFloat((document.getElementById(`${item["levelID"]}time`).value).replace(/,/g, "."))
            }
            item["levelID"] = item["levelID"];
            item["completed"] = document.getElementById(`${item["levelID"]}completed`).checked;
            item["completedAsChaliceP1"] = document.getElementById(`${item["levelID"]}completedAsChaliceP1`).checked;
            item["completedAsChaliceP2"] = document.getElementById(`${item["levelID"]}completedAsChaliceP2`).checked;
            item["curseCharmP1"] = document.getElementById(`${item["levelID"]}curseCharmP1`).checked;
            item["curseCharmP2"] = document.getElementById(`${item["levelID"]}curseCharmP2`).checked;
            item["played"] = document.getElementById(`${item["levelID"]}played`).checked;
            item["grade"] = parseInt(document.getElementById(`${item["levelID"]}grade`).value);
            item["difficultyBeaten"] = parseInt(document.getElementById(`${item["levelID"]}diff`).value);
            item["bgmPlayListCurrent"] = item["bgmPlayListCurrent"];
        })
        //Карты
        savedat["mapDataManager"]["currentMap"] = parseInt(document.getElementById('currentMap').value)
        savedat["mapDataManager"]["mapData"].forEach(function (item) {
            item["mapId"] = item["mapId"];
            item["sessionStarted"] = document.getElementById(`${item["mapId"]}sessionStarted`).checked;
            item["hasVisitedDieHouse"] = document.getElementById(`${item["mapId"]}hasVisitedDieHouse`).checked;
            item["hasKingDiceDisappeared"] = document.getElementById(`${item["mapId"]}hasKingDiceDisappeared`).checked;
            item["playerOnePosition"]["x"] = parseInt(document.getElementById(`${item["mapId"]}playerOnePositionX`).value)
            item["playerOnePosition"]["y"] = parseInt(document.getElementById(`${item["mapId"]}playerOnePositionY`).value)
            item["playerOnePosition"]["z"] = parseInt(document.getElementById(`${item["mapId"]}playerOnePositionZ`).value)
            item["playerTwoPosition"]["x"] = parseInt(document.getElementById(`${item["mapId"]}playerTwoPositionX`).value)
            item["playerTwoPosition"]["y"] = parseInt(document.getElementById(`${item["mapId"]}playerTwoPositionY`).value)
            item["playerTwoPosition"]["z"] = parseInt(document.getElementById(`${item["mapId"]}playerTwoPositionZ`).value)
        })

        var saveafter = savedat
        var element = document.getElementById('file-content');
        element.textContent = JSON.stringify(saveafter, null, "\t");
    } catch (e) {
        alert("[Error] " + e)
        console.log("[Error] " + e)
    }
}
try {
    document.getElementById('file-input')
        .addEventListener('change', readSingleFile, false);
} catch (e) {
    alert("[Error] " + e)
    console.log("[Error] " + e)
}
