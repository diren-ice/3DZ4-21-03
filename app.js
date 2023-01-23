const rcsBtn = document.querySelector('.btn')

rcsBtn.onclick = () => {
    const query = new XMLHttpRequest()
    query.open("GET", "data.json" )
    query.setRequestHeader("Content-type", "application/json")
    query.send()
    query.onload = () => {
        const data = JSON.parse(query.response)
        data.forEach( people => {
            const div = document.createElement('div')
            const div1 = document.createElement('div')
            div.innerHTML = people.name
            div1.innerHTML = people.age
            document.body.append(div)
            document.body.append(div1)
        })
    }
}