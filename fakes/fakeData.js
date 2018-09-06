const types = [{
    id: "psychologist",
    title: "Психолог"
},
{
    id: "logopaeda",
    title: "Логопед"
},
{
    id: "group",
    title: "Групповые занятия"
},
{
    id: "recorded",
    title: "Онлайн в записи"
},
{
    id: "live",
    title: "Онлайн вживую"
}
];
const courses = [{
    id: "full_diag",
    title: "Полная диагностика",
    typeId: "psychologist",
    description: "It's my description",
    contents: `Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio. 
    Eloquentiam voluptatibus ut mea. Cu simul solet usu, reque fugit no sit, te iriure integre dolorem usu. Ex ius volutpat laboramus, eum discere scaevola imperdiet no, sea an sonet alienum. Eum nibh zril aperiam te. Quem praesent incorrupte his et, pri an sumo nostro.
    
    Ex eam debitis neglegentur, eos ne magna option. Ei nec detraxit legendos, duo no perpetua instructior suscipiantur. Mutat deleniti ius in. Pro petentium mediocritatem et. Te est justo nemore scriptorem, erat philosophia ad nam. Brute oratio ut sed. Id his saepe adolescens, eos at iusto tantas voluptatum.
    
    Has populo animal urbanitas id, ex offendit pertinacia qui. Omnium hendrerit theophrastus vis ad, eu tale consetetur theophrastus eos, et quo prima illud adipisci. Ei agam eirmod neglegentur usu. Ei mutat postulant temporibus vim. Paulo labitur eu mea, prima perfecto mea te.
    
    Ne vix recusabo appellantur. Ea postea expetenda repudiandae vis. Ei mazim soluta aperiri sed. Cu sed liber democritum, mea veniam tempor reprimique te. Vis docendi consectetuer cu, cu sed placerat iracundia adolescens, vel tation laudem ne. Vel dignissim aliquando expetendis ex. Et sed soleat senserit, enim admodum te pro, id consul accumsan expetenda vim.`
},
{
    id: "diag_2_3",
    title: "Диагностика детей 2-3 лет",
    typeId: "psychologist",
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
    typeId: "logopaeda",
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
    typeId: "logopaeda",
    description: "It's my description",
    contents: `Lorem ipsum dolor sit amet, et eum labore essent, nam omnesque laboramus ei. An sed vidisse maiorum incorrupte. Audire omittam no usu, eu omnes omittam placerat eam. Pri id veniam dolorem qualisque, velit contentiones te usu. His legere nonumes accusam ad. Cu mel justo voluptua consequat, ex cum etiam summo quaestio. 
    Eloquentiam voluptatibus ut mea. Cu simul solet usu, reque fugit no sit, te iriure integre dolorem usu. Ex ius volutpat laboramus, eum discere scaevola imperdiet no, sea an sonet alienum. Eum nibh zril aperiam te. Quem praesent incorrupte his et, pri an sumo nostro.
    
    Ex eam debitis neglegentur, eos ne magna option. Ei nec detraxit legendos, duo no perpetua instructior suscipiantur. Mutat deleniti ius in. Pro petentium mediocritatem et. Te est justo nemore scriptorem, erat philosophia ad nam. Brute oratio ut sed. Id his saepe adolescens, eos at iusto tantas voluptatum.
    
    Has populo animal urbanitas id, ex offendit pertinacia qui. Omnium hendrerit theophrastus vis ad, eu tale consetetur theophrastus eos, et quo prima illud adipisci. Ei agam eirmod neglegentur usu. Ei mutat postulant temporibus vim. Paulo labitur eu mea, prima perfecto mea te.
    
    Ne vix recusabo appellantur. Ea postea expetenda repudiandae vis. Ei mazim soluta aperiri sed. Cu sed liber democritum, mea veniam tempor reprimique te. Vis docendi consectetuer cu, cu sed placerat iracundia adolescens, vel tation laudem ne. Vel dignissim aliquando expetendis ex. Et sed soleat senserit, enim admodum te pro, id consul accumsan expetenda vim.`
}

];

module.exports = {
    types,
    courses
}