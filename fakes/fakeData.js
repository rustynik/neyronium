const types = [{
    id: "psychologist",
    title: "Психолог",
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
    contents: `Психологическое обследование детей раннего возраста.
    В обследование входят:
    1. Анализ уровня и особенностей развития эмоциональной и коммуникативной сферы ребенка;
    2. Анализ уровня и особенностей развития сенсорных и двигательных функций.
    3. Анализ уровня развития манипулятивной, предметной и игровой деятельности.
    4. Анализ уровня и особенностей развития умственного и речевого уровня развития (исследование психологических функций речи).
    5. Анализ уровня и особенностей развития социально-бытовой ориентировки.
    6. Характеристика детско-родительских отношений.
    7. Оценка психического развития, определение потенциальных возможностей ребенка, а также прогноз дальнейшего развития и разработка стратегии для коррекции имеющихся нарушений, в случае необходимости. 
    8. Разработка рекомендаций для родителей, специалистов, оказывающих коррекционную помощь ребенку.
    Беседа с родителем происходит на следующий день. Продолжительность до 30 минут.
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
        description: "Каллиграфия",
        contents: "Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo"
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