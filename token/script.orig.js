'use strict'

const auth_apps = [//app_id,client_secret,name,icon,desc,mini_icon,sections
        [2274003, 'hHbZxrka2uZ6jB1inYsH', 'Android', 'https://sun2.userapi.com/WX9xGGOSMx1dEG0WlL0t5BCznMSirX5KYAzssA/SZVMdRl1IuI.jpg', 'Мобильное приложение VK — это сообщения, новости и музыка, которые всегда с Вами. Также прямо в приложении доступны доставка еды, вызов такси и другие сервисы.', 96],
        [3140623, 'VeWdmVclDCtn6ihuP1nt', 'IPhone', 'https://sun2.userapi.com/WX9xGGOSMx1dEG0WlL0t5BCznMSirX5KYAzssA/SZVMdRl1IuI.jpg', 'Мобильное приложение VK — это сообщения, новости и музыка, которые всегда с Вами. Также прямо в приложении доступны доставка еды, вызов такси и другие сервисы.', 110],
        [6482950, 'WiJ3BM57JojCptQ6lEsj', 'VK Messenger (iPhone)', 'https://sun2.userapi.com/WA8z5uzo_fqRTfawdwKAr8NoFpnakPk6KO8n5Q/3uAVu4d_pg4.jpg'],
    //        [3697615, 'AlVXZFMUqyrnABp8ncuU', 'Windows', 'https://sun9-44.userapi.com/c851128/v851128628/438e7/NkrSKrOhOaQ.jpg', 'Официальное приложение. Поддерживается полный набор возможностей ВКонтакте — от личных сообщений, фотографий и новостей до музыки, сообществ и закладок.', 143],
        [3502557, 'PEObAuQi6KloPM4T30DV', 'Windows Phone', 'https://sun9-82.userapi.com/c848528/v848528641/bcec0/xRTlApc1qw4.jpg','Официальное приложение ВКонтакте. Предоставляет удобный доступ к социальной сети.', 143],
        [8093730, '0wgvoh3ffPihhTEwI2WY', 'VK Calls', 'https://sun1.userapi.com/ZrQZoVF7vWbI_HQDIMAmOLCMrCn9ePtG1v33HA/9EuKqILmTSo.jpg'],
        [6767438, 'ppBOmwQYYOMGulmaiPyK', 'VK Музыка', 'https://sun1.userapi.com/NMcctE1gzLnCILVjTxyLYgmIxqRJbNDVE9uOGg/zMHsAmmwWAg.jpg'],
    ], 
    apps = [//app_id,name,icon,desc,mini_icon,sections
        [6121396, 'VK Admin', 'https://pp.userapi.com/c836324/v836324157/57e47/kmuk5kWubsA.jpg', 'VK Admin — приложение для администраторов сообществ. Общайтесь с клиентами и подписчиками от имени Ваших сообществ ВКонтакте, управляйте группой и отслеживайте статистику с мобильного телефона.', 330],
        [5776857, 'VK Admin (iOS)', 'https://pp.userapi.com/c831308/v831308960/d4af9/0o-EVdYjXmk.jpg', 'Приложение для организации обратной связи с клиентами, пользователями и подписчиками Ваших сообществ.', 330],
        [6831669, 'Мобильный баг-трекер', 'https://sun9-77.userapi.com/c845123/v845123928/1df467/yH-ALZbR7Pc.jpg'],
        [6363684, 'Реклама ВКонтакте', 'https://sun2.userapi.com/V8exhZDPKAGe9cMcMv8dd81YEQ5clpPEMdOR5g/9jiOC8r29Jk.jpg', 'Продвижение сообществ ВКонтакте'],
        [6463690, 'Маруся', 'https://sun9-56.userapi.com/Zbl1njzBDZ4v9shXbclysDxLjeG7KHgYFAlwMw/rb-hbmdVyxI.jpg', 'Медиапоиск'],
        [7556576, 'Сферум', 'https://sun9-6.userapi.com/IkdFMjfnmJl4HJBmooU5si87hJDQsnzp0AsNuA/FJOGudRv_KM.jpg'],
        [7598572, 'Сферум Android', 'https://sun9-6.userapi.com/IkdFMjfnmJl4HJBmooU5si87hJDQsnzp0AsNuA/FJOGudRv_KM.jpg'],
        [7571751, 'VK Education iOS', 'https://sun9-6.userapi.com/IkdFMjfnmJl4HJBmooU5si87hJDQsnzp0AsNuA/FJOGudRv_KM.jpg'],
        [7793118, 'Звонки ВКонтакте', 'https://sun9-70.userapi.com/tLjtkuMT7KLnrF5Y6oLWde6d28VukfCSXD7U8g/9QgR70ZKFG8.jpg'],
        [6287487, 'vk.com', 'https://sun9-26.userapi.com/R01NieP5YFWfLuBeXh16HsCY8wV6_Se_ZWbDfA/8YNxS0zNoFc.jpg'],
        [7913379, 'vk.com Авторизация', 'https://sun1.userapi.com/6-QHbYt1-08zUWAaav0t_AotSjbOsRkItQKGIQ/p33HW_SZ3Vs.jpg'],
        [7879029, 'm.vk.com', 'https://sun2.userapi.com/tLjtkuMT7KLnrF5Y6oLWde6d28VukfCSXD7U8g/9QgR70ZKFG8.jpg'],
        [7598768, 'dev.vk.com'],
        [7799655, 'VK Почта', 'https://sun9-72.userapi.com/GmN1wML-yv_PWHSbmTQ5-zVukaItizcL3M3_Xw/y4fC58Uj6lg.jpg'],
        [7539952, 'Почта Mail.ru', 'https://sun9-37.userapi.com/mAVW07zs1VXCpH8q-vwccaIyz3pZ49JkW1-8eQ/G87utOTbowo.jpg', 'Почта'],
        [7497650, 'VK ID'],
        [6126832, 'Поддержка', 'https://sun1.userapi.com/dXALOkx82CtzjQlZIVBrsCeMuhiCiidDUDd4Sg/LOuloCJdWPM.jpg'],
        [6994323, 'Приложение недоступно','https://sun9-20.userapi.com/c855028/v855028049/5a0dc/OgUCVxvc37o.jpg'],
        [3265802, 'API.Console'],
        [7754831, 'VK для разработчиков', 'https://sun2.userapi.com/bZBPFO7WkP-MH6nTXglpNp0GLuLrgjK4WbpH0w/IN-NODs9UO0.jpg'],
        [6217559, 'VK Pay', 'https://sun1.userapi.com/CCSLamMfpUMVI5V1qnfg6j2OKoPGEPI6F1PVeA/HbBpiRM4fH0.jpg', 'Умное приложение ваших денег'],
        [6707577, 'Биржа авторов', 'https://sun9-56.userapi.com/c854016/v854016454/10eae/1eElTjlu36c.jpg'],
        [5530956, 'Prisma', 'https://pp.userapi.com/c633324/v633324499/3a9b0/8ZaEuKGfypU.jpg', 'Почувствуй себя художником! Преврати фотографии в уникальные произведения искусства:<br>— Фильтры в стиле художников<br>— Завораживающие фотоэффекты<br>— Делись шедеврами в одно нажатие', 288],
        [3698024, 'Instagram', 'https://pp.userapi.com/c633227/v633227376/33212/KU3LDlKwxo0.jpg', 'Мобильное приложение для публикации фотографий.', 240],
        [2685278, 'Kate Mobile', 'https://pp.userapi.com/c412825/v412825174/6522/nEKTkD_Uqcg.jpg', 'ВКонтакте для Android'],
        [4083558, 'VFeed', 'https://pp.userapi.com/c613529/v613529371/16761/Mjwh_-ADFK8.jpg', 'VFeed для iphone']
    ],
    disabled_apps = [//app_id,name,icon,desc,mini_icon,sections
        [5256902,'VK Live','https://pp.userapi.com/c637831/v637831651/1a1f8/qm4Rf9IX-dw.jpg'],
        [5676187,'VK Live Android','https://pp.userapi.com/c638919/v638919892/28b52/kHZvh2UeXk8.jpg'],
        [3116505,'VK API','https://pp.userapi.com/c840138/v840138345/787f9/ZTLHQaj4S7U.jpg'],
        [6334949,'Клевер','https://pp.userapi.com/c841521/v841521530/7d187/IKobOsNO_lY.jpg'],
        [6378721,'Клевер — игра с призами','https://pp.userapi.com/c841122/v841122545/7b5be/mjTfevye8ZY.jpg'],
        [5554806, 'Vinci', 'https://pp.userapi.com/c615828/v615828550/26d9c/Z7F5bOheDO8.jpg', 'Преображайте свои фотографии с помощью нейросетей и искусственного разума.', 308],
    ],
    sections = [
        'account','actionLinks', 'adex', 'admins','ads','adsint','aliexpress','antispam','appWidgets','apps','articles','audio','auth','badges','bestFriends','biz','board','bot','botsConf','bugtracker','captcha','catalog','classifields','combo','coupons','database','delivaryClub','docs','documentation','donut','downloadedGames','education','educationForeign','email','exchange','exchangeRates','execute','experts','explore','externalUsers','fave','forbiddenRegistry','fortuneSquare','fortuneWheel','friends','gifts','golunch','groups','healthApp','healthCommon','identity','internal','kive','kiveReceiver','leadForms','leads','likes','lovina','loyalty','loyaltyTeen','market','marusia','masks','matching','memories','messages','microlandings','mobile','money','narratives','newsfeed','nospam','notes','notifications','odnoklassniki','orders','pages','photos','places','platform','platformConsole','podcasts','polls','prettyCards','promoCodes','questions','queue','reports','restore','rightholders','search','secure','serverCalls','settings','shortVideo','situationalSuggests','sms','social','specials','statEvents','statlogs','status','storage','store','stories','streaming','studentsVerification','superApp','support','tags','textlives','tickets','translations','uma','users','utils','video','vkCharity','vkRun','vkTaxi','vmoji','voicerooms','wall','weather','widgets','widgetsKit','wishlists'
    ],
    utypes = [
        [0, 'Уведомления', 'notify', 'только для iframe-приложений'],
        [1, 'Друзья', 'friends'],
        [2, 'Фотографии', 'photos'],
        [3, 'Аудиозаписи', 'audio', 'доступ к API аудиозаписей ограничен'],
        [4, 'Видеозаписи', 'video'],
        [6, 'Истории', 'stories'],
        [7, 'Wiki-страницы', 'pages'],
        [8, 'Добавление в меню слева', 'menu', 'только для iframe-приложений'],
        [9, 'Быстрая публикация на стенах', 'wallmenu', 'устаревший параметр'],
        [10, 'Статус', 'status'],
        [11, 'Заметки', 'notes'],
        [12, 'Сообщения', 'messages', 'доступ к API сообщений ограничен'],
        [13, 'Стена', 'wall'],
        [15, 'Рекламные кабинеты', 'ads'],
        [16, 'Доступ в любое время', 'offline'],
        [17, 'Документы', 'docs'],
        [18, 'Группы', 'groups'],
        [19, 'Ответы', 'notifications'],
        [20, 'Статистика', 'stats'],
        [22, 'Электронная почта', 'email'],
        [23, 'Кабинеты рекламной сети', 'adsweb'],
        [24, 'Рекламные акции', 'leads', 'только для рекламных партнёров'],
        [26, 'Кабинеты биржи рекламы', 'exchange'],
        [27, 'Товары', 'market'],
        [28, 'Номер телефона', 'phone', 'только для сервисов и доверенных iframe-приложений']
    ],
    gtypes = [
        [0, 'Истории', 'stories'],
        [2, 'Фотографии', 'photos'],
        [12, 'Сообщения', 'messages'],
        [13, 'Стена', 'wall'],
        [17, 'Документы', 'docs'],
        [18, 'Администрирование', 'manage'],
        [27, 'Товары', 'market']
    ];
//<p>Доступные секции: ' + (auth_app[6] ? auth_app[6].split(",").map(function section_add(item, index, arr){if (arr.length-1 == index){return sections[item]}else{return sections[item]+", "}}).join("") : 'Нет информации') + '</p>
auth_apps.map(auth_app => auth_apps_block.insertAdjacentHTML('beforeend', '<div class="app"><button onclick="login(' + auth_app[0] + ',\''+ auth_app[1] + '\')" class="btn">' + auth_app[2] + '</button><span><img src="' + (auth_app[3] ? auth_app[3] : 'https://vk.com/images/dquestion_a.png') + '" class="p_icon"><div class="desc"><p>' + (auth_app[4] ? auth_app[4] : 'Описание отсутствует') + '</p><p>ID приложения: ' + auth_app[0] + '</p>Иконка в записях:<div class="icon" style="background-position: 0 -' + (auth_app[5] ? auth_app[5] : 132)  + 'px;"></div></div></span></div>'));
apps.map(app => apps_block.insertAdjacentHTML('beforeend', '<div class="app"><button onclick="auth(' + app[0] + ')" class="btn">' + app[1] + '</button><span><img src="' + (app[2] ? app[2] : 'https://vk.com/images/dquestion_a.png') + '" class="p_icon"><div class="desc"><p>' + (app[3] ? app[3] : 'Описание отсутствует') + '</p><p>ID приложения: ' + app[0] + '</p>Иконка в записях:<div class="icon" style="background-position: 0 -' + (app[4] ? app[4] : 132) + 'px;"></div></div></span></div>'));
apps_block.insertAdjacentHTML('beforeend', '<div class="app"><button class="btn" id="settings">Настройки &raquo;</button><span><div class="desc">Настройка прав, указание ID приложения, а также получение токена для группы</div></span></div>');
disabled_apps.map(disabled_app => disabled_apps_block.insertAdjacentHTML('beforeend', '<div class="app"><button disabled class="btn">' + disabled_app[1] + '</button><span><img src="' + (disabled_app[2] ? disabled_app[2] : 'https://vk.com/images/dquestion_a.png')  + '" class="p_icon"><div class="desc"><p>' + (disabled_app[3] ? disabled_app[3] : 'Описание отсутствует') + '</p><p>ID приложения: ' + disabled_app[0] + '</p>Иконка в записях:<div class="icon" style="background-position: 0 -' + (disabled_app[4] ? disabled_app[4] : 132) + 'px;"></div></div></span></div>'));

addPermissions(utypes, permissions);
addPermissions(gtypes, gpermissions);

settings.onclick = function() {
    showOptions(1);
};

close_button.onclick = function() {
    showOptions();
};

uncheck.onclick = function() {
    Array.prototype.slice.call(document.querySelectorAll('input[scope]')).map(check => check.checked = false);
};

submit.onclick = function() {
    if (token_type_user.checked) {
        var scope = document.querySelectorAll('#permissions > input:checked'),
            groups = 0;
    } else {
        var scope = document.querySelectorAll('#gpermissions > input:checked'),
            groups = 1;
    }
    let app = app_id.value;
    let group = group_id.value;
    if ((app && !groups) || (app && groups && group && scope.length)) {
        auth(app, Array.prototype.slice.call(scope).reduce((cc, sc) => cc + Math.pow(2, sc.getAttribute('scope')), 0), (groups ? group : ''));
        err_msg.style.display = 'none';
    } else {
        err_msg.style.display = 'block';
    }
};

document.onkeydown = function(e) {
    if (e.key == 'Escape') {
        showOptions();
    }
};


window.onclick = function(event) {
    if (event.target == myModal) {
        showOptions();
    }
};

window.EventTarget.prototype.addDelegatedListener = function(type, delegateSelector, listener) {
    this.addEventListener(type, function(event) {
        if (event.target && event.target.matches(delegateSelector)) {
            listener.call(event.target, event)
        }
    })
};

document.addDelegatedListener('change', 'input[type="radio"]', function(event) {
    if (token_type_user.checked) {
        permissions.style.display = offline_warning.style.display = 'block';
        gpermissions.style.display = group_block.style.display = 'none';
    } else {
        permissions.style.display = offline_warning.style.display = 'none';
        gpermissions.style.display = group_block.style.display = 'block';
    }
    err_msg.style.display = 'none';
})

function showOptions(d) {
    myModal.style.display = (d ? 'block' : 'none');
}

function addPermissions(arr, el) {
    arr.map(type => el.insertAdjacentHTML('beforeend', '<input type="checkbox" id="' + el.id + '_' + type[0] + '" class="pcheck" scope="' + type[0] + '" ' + (!type[3] ? 'checked' : '') + '><label for="' + el.id + '_' + type[0] + '" class="btn" title="' + type[2] + '' + (type[3] ? ' (' + type[3] + ')' : '') + '">' + type[1] + '</label>'));
}

function auth(app, scope = 1073737727, groups = false) {
    window.open('https://oauth.vk.com/authorize?client_id=' + app + '&scope=' + scope + '&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token' + (groups ? '&group_ids=' + groups.replace(/[^0-9\,]/gim, '') : '&revoke=1'));
}

function login(app, secret){
    window.open('https://oauth.vk.com/token?client_id=' + app + '&client_secret=' + secret + '&https=1&scope=all&grant_type=password&2fa_supported=1&v=5.170&username=&password=');
}
