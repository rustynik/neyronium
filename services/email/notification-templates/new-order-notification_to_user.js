const factory = settings => {
    return {
    
        address: (data) => data.model.email,
    
        subject: (data) => `Neyronium (${ data.course.title })`,
        
        text: (data) => `С сайта neyronium.pro Поступила заявка на продукт ${ data.course.title } (${ new Date().toLocaleString() })
        от пользователя ${ data.model.name } (${ data.model.email }, ${ data.model.phone }). 
        Дополнительная информация: возраст ребенка ${ data.model.age || "не указано" },
        комментарий: ${ data.model.comment || "отсутствует "}.`
    };
}

module.exports = factory;