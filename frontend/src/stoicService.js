class StoicService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    // Read/Index Action

    getStoics(){
        fetch(`${this.endpoint}/stoics`)
        .then(resp => resp.json())
        .then(stoics => {
            for (const stoic of stoics){
                const s = new Stoic(stoic)
                s.slapOnDom()
            }
        })

    }

    createStoic(){
        const stoic = {
            name: document.getElementById('name').value,

            // i think we need to do getElementByID('stoic').value^
        }   

        const configObj = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(stoic)
        }

       fetch(`${this.endpoint}/stoics`, configObj)
       .then(resp => resp.json())
       .then(stoic => {
           const s = new Stoic(stoic)
           s.slapOnDom()
       })
    }

    deleteStoic(id){
        fetch(`${this.endpoint}/stoics/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))

    }

}