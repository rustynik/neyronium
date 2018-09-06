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
},
{
    id: "groups",
    title: "Групповое обучение",
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
    description: "It's my description",
    contents: `Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio. 
    Eloquentiam voluptatibus ut mea. Cu simul solet usu, reque fugit no sit, te iriure integre dolorem usu. Ex ius volutpat laboramus, eum discere scaevola imperdiet no, sea an sonet alienum. Eum nibh zril aperiam te. Quem praesent incorrupte his et, pri an sumo nostro.
    
    Ex eam debitis neglegentur, eos ne magna option. Ei nec detraxit legendos, duo no perpetua instructior suscipiantur. Mutat deleniti ius in. Pro petentium mediocritatem et. Te est justo nemore scriptorem, erat philosophia ad nam. Brute oratio ut sed. Id his saepe adolescens, eos at iusto tantas voluptatum.
    
    Has populo animal urbanitas id, ex offendit pertinacia qui. Omnium hendrerit theophrastus vis ad, eu tale consetetur theophrastus eos, et quo prima illud adipisci. Ei agam eirmod neglegentur usu. Ei mutat postulant temporibus vim. Paulo labitur eu mea, prima perfecto mea te.
    
    Ne vix recusabo appellantur. Ea postea expetenda repudiandae vis. Ei mazim soluta aperiri sed. Cu sed liber democritum, mea veniam tempor reprimique te. Vis docendi consectetuer cu, cu sed placerat iracundia adolescens, vel tation laudem ne. Vel dignissim aliquando expetendis ex. Et sed soleat senserit, enim admodum te pro, id consul accumsan expetenda vim.`
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
    description: "Любим читать",
    widgetClass: "books",
	contents: "Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio."
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
	description: "Любим читать",
	contents: "Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio.",
	widgetClass: "rainbow_school"
}

];

module.exports = {
    types,
    courses
}