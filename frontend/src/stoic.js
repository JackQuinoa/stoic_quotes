class Stoic {

    static all = []
    static stoicsContainer = document.getElementById("stoics-container")
    static stoicForm = document.getElementById('form-container')

    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id 
        this.element.id = `stoic-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Stoic.all.push(this)
    }

    stoicHTML(){
        this.element.innerHTML += `
            <div>
                <h4>${this.name}</h4>
            </div>
            <button id='delete-bttn'>Delete</button>
            <br>
            `
        return this.element
    }

    slapOnDom(){
        Stoic.stoicsContainer.append(this.stoicHTML())
    }

    static renderForm(){
        Stoic.stoicForm.innerHTML += `
            <form id="new-stoic-form">
                Stoic: <input type="text" id="name">
                <input type="submit" id="create">
            <form>
        `
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
           stoicService.deleteStoic(this.id)
           Stoic.stoicsContainer.removeChild(this.stoicHTML())
        }
    }



}