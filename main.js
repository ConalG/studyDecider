const messageOptions = {
    language : ['Pyhton', 'Javascript'],
    topic : ['Syntax', 'Datatypes', 'Algoritms','Objects', 'Classes'],
    time : [1, 2, 3],

    pickLanguage(){
        let randomint = Math.floor(Math.random() * this.language.length)
        return this.language[randomint]
    },

    pickTopic(){
        let randomint = Math.floor(Math.random() * this.topic.length)
        return this.topic[randomint]
    },

    pickTime(){
        let randomint = Math.floor(Math.random() * this.time.length)
        return this.time[randomint]
    },

    logMessage(){
        console.log(`You should study: ${this.pickLanguage()}\nThe topic you should study: ${this.pickTopic()}\nYou should study for: ${this.pickTime()} Hours`)
    }
}

messageOptions.logMessage()