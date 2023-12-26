class Article{
    constructor(title,date){
    this.title = title
    this.date = date
}
static createTodays(){
    return new this("The Earth",new Date())
}
}
let article1 = Article.createTodays()
console.log(article1.title)