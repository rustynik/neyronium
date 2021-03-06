const types = [{
    id: "psychologist",
    title: "Психолог",
    description: "Развивающие коррекционные занятия (задержка психического развития, умственная отсталость, аутизм)",
    widgetClass: "green"
},
{
	id: "psycho_diagnostics",
	parentId: "psychologist",
    title: "Диагностика",
    widgetClass: "green"
},	
{
    id: "speech_therapist",
    title: "Логопед",
    description: "Логопедические занятия (индивидуальные и групповые)",
    widgetClass: "magenta"
},
{
    id: "groups",
    title: "Групповое обучение",
    widgetClass: "blue"
},
{
    id: "online",
    title: "Онлайн-обучение",
    description: "Консультации для родителей и педагогов",
    widgetClass: "yellow"
},
];
const courses = [{
    id: "full_diag",
    title: "Полная диагностика",
    typeId: "psycho_diagnostics",
    description: "It's my description",
    contents: `Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio. 
    Eloquentiam voluptatibus ut mea. Cu simul solet usu, reque fugit no sit, te iriure integre dolorem usu. Ex ius volutpat laboramus, eum discere scaevola imperdiet no, sea an sonet alienum. Eum nibh zril aperiam te. Quem praesent incorrupte his et, pri an sumo nostro.
    
    Ex eam debitis neglegentur, eos ne magna option. Ei nec detraxit legendos, duo no perpetua instructior suscipiantur. Mutat deleniti ius in. Pro petentium mediocritatem et. Te est justo nemore scriptorem, erat philosophia ad nam. Brute oratio ut sed. Id his saepe adolescens, eos at iusto tantas voluptatum.
    
    Has populo animal urbanitas id, ex offendit pertinacia qui. Omnium hendrerit theophrastus vis ad, eu tale consetetur theophrastus eos, et quo prima illud adipisci. Ei agam eirmod neglegentur usu. Ei mutat postulant temporibus vim. Paulo labitur eu mea, prima perfecto mea te.
    
    Ne vix recusabo appellantur. Ea postea expetenda repudiandae vis. Ei mazim soluta aperiri sed. Cu sed liber democritum, mea veniam tempor reprimique te. Vis docendi consectetuer cu, cu sed placerat iracundia adolescens, vel tation laudem ne. Vel dignissim aliquando expetendis ex. Et sed soleat senserit, enim admodum te pro, id consul accumsan expetenda vim.`
,widgetClass: "magenta"
},
{
    id: "diag_2_3",
    widgetClass: "green",
    title: "Диагностика детей 2-3 лет",
    typeId: "psycho_diagnostics",
    description: "Полная психологическая диагностика ребенка от 2 до 3 лет",
    contents: `Психологическое обследование детей раннего возраста.<b4/>
    В обследование входят:<br/>
    <ol>
    <li>Анализ уровня и особенностей развития эмоциональной и коммуникативной сферы ребенка;</li>
    <li>Анализ уровня и особенностей развития сенсорных и двигательных функций.</li>
    <li>Анализ уровня развития манипулятивной, предметной и игровой деятельности.</li>
    <li>Анализ уровня и особенностей развития умственного и речевого уровня развития (исследование психологических функций речи).</li>
    <li>Анализ уровня и особенностей развития социально-бытовой ориентировки.</li>
    <li>Характеристика детско-родительских отношений.</li>
    <li>Оценка психического развития, определение потенциальных возможностей ребенка, а также прогноз дальнейшего развития и разработка стратегии для коррекции имеющихся нарушений, в случае необходимости.</li> 
    <li>Разработка рекомендаций для родителей, специалистов, оказывающих коррекционную помощь ребенку.</lI>
    </ol>
    Беседа с родителем происходит на следующий день. Продолжительность до 30 минут.<br/>
    Продолжительность диагностики 30 минут.`,
    price: 2500
},
{
    id: "school_prepared",
    title: "Готовность к школе",
    typeId: "psychologist",
    description: "It's my description",
    contents: `Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio. 
    Eloquentiam voluptatibus ut mea. Cu simul solet usu, reque fugit no sit, te iriure integre dolorem usu. Ex ius volutpat laboramus, eum discere scaevola imperdiet no, sea an sonet alienum. Eum nibh zril aperiam te. Quem praesent incorrupte his et, pri an sumo nostro.
    
    Ex eam debitis neglegentur, eos ne magna option. Ei nec detraxit legendos, duo no perpetua instructior suscipiantur. Mutat deleniti ius in. Pro petentium mediocritatem et. Te est justo nemore scriptorem, erat philosophia ad nam. Brute oratio ut sed. Id his saepe adolescens, eos at iusto tantas voluptatum.
    
    Has populo animal urbanitas id, ex offendit pertinacia qui. Omnium hendrerit theophrastus vis ad, eu tale consetetur theophrastus eos, et quo prima illud adipisci. Ei agam eirmod neglegentur usu. Ei mutat postulant temporibus vim. Paulo labitur eu mea, prima perfecto mea te.
    
    Ne vix recusabo appellantur. Ea postea expetenda repudiandae vis. Ei mazim soluta aperiri sed. Cu sed liber democritum, mea veniam tempor reprimique te. Vis docendi consectetuer cu, cu sed placerat iracundia adolescens, vel tation laudem ne. Vel dignissim aliquando expetendis ex. Et sed soleat senserit, enim admodum te pro, id consul accumsan expetenda vim.`
},
{
    id: "individual",
    title: "Индивидуальные занятия",
    typeId: "psychologist",
    description: "It's my description",
    contents: `Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio. 
    Eloquentiam voluptatibus ut mea. Cu simul solet usu, reque fugit no sit, te iriure integre dolorem usu. Ex ius volutpat laboramus, eum discere scaevola imperdiet no, sea an sonet alienum. Eum nibh zril aperiam te. Quem praesent incorrupte his et, pri an sumo nostro.
    
    Ex eam debitis neglegentur, eos ne magna option. Ei nec detraxit legendos, duo no perpetua instructior suscipiantur. Mutat deleniti ius in. Pro petentium mediocritatem et. Te est justo nemore scriptorem, erat philosophia ad nam. Brute oratio ut sed. Id his saepe adolescens, eos at iusto tantas voluptatum.
    
    Has populo animal urbanitas id, ex offendit pertinacia qui. Omnium hendrerit theophrastus vis ad, eu tale consetetur theophrastus eos, et quo prima illud adipisci. Ei agam eirmod neglegentur usu. Ei mutat postulant temporibus vim. Paulo labitur eu mea, prima perfecto mea te.
    
    Ne vix recusabo appellantur. Ea postea expetenda repudiandae vis. Ei mazim soluta aperiri sed. Cu sed liber democritum, mea veniam tempor reprimique te. Vis docendi consectetuer cu, cu sed placerat iracundia adolescens, vel tation laudem ne. Vel dignissim aliquando expetendis ex. Et sed soleat senserit, enim admodum te pro, id consul accumsan expetenda vim.`
},
{
    id: "speech_diag",
    title: "Развитие речи и диагностика",
    typeId: "speech_therapist",
    description: "It's my description",
    contents: `Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio. 
    Eloquentiam voluptatibus ut mea. Cu simul solet usu, reque fugit no sit, te iriure integre dolorem usu. Ex ius volutpat laboramus, eum discere scaevola imperdiet no, sea an sonet alienum. Eum nibh zril aperiam te. Quem praesent incorrupte his et, pri an sumo nostro.
    
    Ex eam debitis neglegentur, eos ne magna option. Ei nec detraxit legendos, duo no perpetua instructior suscipiantur. Mutat deleniti ius in. Pro petentium mediocritatem et. Te est justo nemore scriptorem, erat philosophia ad nam. Brute oratio ut sed. Id his saepe adolescens, eos at iusto tantas voluptatum.
    
    Has populo animal urbanitas id, ex offendit pertinacia qui. Omnium hendrerit theophrastus vis ad, eu tale consetetur theophrastus eos, et quo prima illud adipisci. Ei agam eirmod neglegentur usu. Ei mutat postulant temporibus vim. Paulo labitur eu mea, prima perfecto mea te.
    
    Ne vix recusabo appellantur. Ea postea expetenda repudiandae vis. Ei mazim soluta aperiri sed. Cu sed liber democritum, mea veniam tempor reprimique te. Vis docendi consectetuer cu, cu sed placerat iracundia adolescens, vel tation laudem ne. Vel dignissim aliquando expetendis ex. Et sed soleat senserit, enim admodum te pro, id consul accumsan expetenda vim.`
},
{
    id: "individual_logo",
    title: "Индивидуальные занятия",
    typeId: "speech_therapist",
    description: "It's my description",
    contents: `Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio. 
    Eloquentiam voluptatibus ut mea. Cu simul solet usu, reque fugit no sit, te iriure integre dolorem usu. Ex ius volutpat laboramus, eum discere scaevola imperdiet no, sea an sonet alienum. Eum nibh zril aperiam te. Quem praesent incorrupte his et, pri an sumo nostro.
    
    Ex eam debitis neglegentur, eos ne magna option. Ei nec detraxit legendos, duo no perpetua instructior suscipiantur. Mutat deleniti ius in. Pro petentium mediocritatem et. Te est justo nemore scriptorem, erat philosophia ad nam. Brute oratio ut sed. Id his saepe adolescens, eos at iusto tantas voluptatum.
    
    Has populo animal urbanitas id, ex offendit pertinacia qui. Omnium hendrerit theophrastus vis ad, eu tale consetetur theophrastus eos, et quo prima illud adipisci. Ei agam eirmod neglegentur usu. Ei mutat postulant temporibus vim. Paulo labitur eu mea, prima perfecto mea te.
    
    Ne vix recusabo appellantur. Ea postea expetenda repudiandae vis. Ei mazim soluta aperiri sed. Cu sed liber democritum, mea veniam tempor reprimique te. Vis docendi consectetuer cu, cu sed placerat iracundia adolescens, vel tation laudem ne. Vel dignissim aliquando expetendis ex. Et sed soleat senserit, enim admodum te pro, id consul accumsan expetenda vim.`
    },
    {
        id: "calligraphy",
        title: "Каллиграфия",
        typeId: "groups",
        ageRequired: true,
        widgetClass: "calligraphy",
        description: "Курс для детей 6-10 лет",
        contents: `Очень часто взрослые видят, что у ребенка "ужасный" почерк. В чем причина? В наследственности? Или в отсутствии способностей к письму? 
        Некрасивый почерк свидетельствует только об одном: ребёнок не знает, как нужно писать элементы букв и правильно их соединять, чтобы получалось красиво. 
        Занятия каллиграфии будут проходить в виде увлекательно тренировки. Каждый ученик станет чемпионом в написании букв и слов. Тренировка до полной победы! До достижения состояния лёгкости в написании. 
        Сначала будем разбирать каждую букву в два этапа:<br/>
        <ul>
            <li>Первый – как нужно писать,</li> 
            <li>второй – как не нужно писать</li>
        </ul>
        Разберём и найдём типичные ошибки, которые делают дети при написании буквы или элемента. Нагрузка во время тренировки распределяется равномерно, предусмотрены перерывы и смены видов деятельности. Внимание к написанному, тщательный анализ, наблюдение за процессом письма, позой ребёнка, тем, как он держит ручку – основа достижения результата. 
        Цель каждого урока – успешное написание отдельного элемента или буквы.<br/>

        Достиг цели – иди к новой вершине!<br/>
        
        На уроках ребёнок:<br/>
        <ul>
            <li>Научится соблюдать правильную позу при рисовании и письме;</li> 
            <li>научится правильно держать карандаш и ручку;</li>
            <li>Сформирует графический навык.</li>
        </ul> 
        Для того, чтобы ребенок начал красиво писать в тетради в узкую линейку, у него должна быть развита мелкая моторика.
        Проверяем готовность к урокам каллиграфии:
        <ul>
        <li>начертить горизонтальную линию в пределах 1-2 клеточку. 
        <li>начертить вертикальную линию
        <li>начертить диагональную линию
        <li>вписать круг в клетку
        <li>вписать овал в клетку
        <li>скопировать рисунок по клетками, рассчитав пропорции и размеры изображения
        <li>дорисовать по клеточку вторую половину рисунка
        <li>срисовать геометрические фигуру в зеркальной отражении 
        <li>выполнить графический диктант 
        <li>выполнить штриховку рисунка разными способами. 
        </ul>
        Детям 6-7 лет перед курсом каллиграфии желательно посещать курс по подготовке к школе, где содержатся все выше указанные виды заданий и упражнений. Назовём это навыками печатной каллиграфии. Если эти навыки не сформированы, то нужно их отрабатывать одновременно с изучением письменных букв. 
        Скорость обучения на курсе «Каллиграфия» зависит от предварительной подготовки ученика.<br> 
        Конечная цель: формирования графического навыка - это письмо красивое и быстрое.<br> 
        Показатели сформированости графического навыка:
        <ul>
        <li>графическая грамотность – умение подобрать нужную букву к заданному звуку (соотносить печатный и письменный вариант написания буквы). 
        <li>каллиграфическая чёткость и устойчивость начертание букв и их соединений. 
        <li>связанность (безотрывность) письма. Она характеризуется количеством буквенных знаков, написанных в слове за один приём, то есть единым росчерком пера. Безотрывность позволяет увеличить устойчивость и скорость письма. 
        <li>скорость письма.
        </ul> 
        Система упражнений выстроена по принципу : сначала пишем правильно и красиво (осмысление способа письма, методов соединения), а только потом пишем быстро. 
        Разумеется, каллиграфические навыки не сводятся к механическому многократно у повторению упражнений. Письмо – процесс тонкий, который отражает психологическое и физическое состояние человека, тренирует намерение ученика, волю, настойчивость и терпение. 
        <br>
        <br>
        Продолжительность занятий: 2 раза в неделю по 40 минут.`
    },
    {
        id: "readers_club",
        title: "Клуб любителей чтения",
        typeId: "groups",
        ageRequired: true,
        description: "Клуб любителей чтения",
        widgetClass: "books",
        price: 1200,
        contents: "Описания нет ..."
    },
    {
        id: "luboznateli1",
        title: "Любознатели-1",
        widgetClass: "luboznateli",
        typeId: "groups",
        ageRequired: true,
        description: "Любим читать",
        contents: "Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio."
    },
    {
        id: "luboznateli2",
        title: "Любознатели-2",
        widgetClass: "luboznateli",
        typeId: "groups",
        ageRequired: true,
        description: "Любим читать",
        contents: "Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio."
    },
    {
        id: "luboznateli3",
        title: "Любознатели-3",
        widgetClass: "luboznateli",
        typeId: "groups",
        ageRequired: true,
        description: "Любим читать",
        contents: "Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio."
    },
    {
        id: "luboznateli4",
        title: "Любознатели-4",
        widgetClass: "luboznateli",
        typeId: "groups",
        ageRequired: true,
        description: "Любим читать",
        contents: "Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio."
    },
    {
        id: "rainbow_school",
        title: "Школа радуги",
        typeId: "groups",
        ageRequired: true,
        description: "Развивающие занятия для мам и малышей",
        contents: `На занятиях малыши играют в сенсорные игрушки, придумывают сказки, поют песни, раскладывают пазлы. 

        Занятия проходят два раза в неделю в утренние часы.`,
        widgetClass: "rainbow_school",
        price: 750
    }

];

module.exports = {
    types,
    courses
}