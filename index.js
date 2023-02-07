let pos = 0
let dir = 1
let lion = document.getElementById('lion')
let grass = document.getElementById('grass')
let goat = document.getElementById('goat')
const woninter=setInterval(function(){
    let el=document.getElementById('secondground').querySelectorAll('img')
    if(el.length==3){
        alert('You Won')
        clearInterval(woninter)

    }
},10)
function playgame() {
    document.getElementById('go').classList.remove('d-none')
    document.getElementById('play').classList.add('d-none')

    lion.addEventListener('click', function () {
        // alert(this)
        if(pos===0){
            document.getElementById('firstground').removeChild(lion)
        }
        else if(pos==31){
            document.getElementById('secondground').removeChild(lion)

        }
        document.getElementById('imgcng').src = this.src
        document.getElementById('imgcng').alt='lion'
        // alert(document.getElementById('imgcng').alt)

        document.getElementById('imgcng').classList.remove('d-none')
    })
    goat.addEventListener('click', function () {
        if(pos===0){
            document.getElementById('firstground').removeChild(goat)
        }
        else if(pos==31){
            document.getElementById('secondground').removeChild(goat)

        }        
        document.getElementById('imgcng').src = this.src
        document.getElementById('imgcng').alt='goat'
        document.getElementById('imgcng').classList.remove('d-none')
    })
    grass.addEventListener('click', function () {
        if(pos===0){
            document.getElementById('firstground').removeChild(grass)
        }
        else if(pos==31){
            document.getElementById('secondground').removeChild(grass)

        }
        document.getElementById('imgcng').src = this.src
        document.getElementById('imgcng').alt='grass'
        document.getElementById('imgcng').classList.remove('d-none')
    })
}
function travel() {
    if(pos===0){
        let ele=document.getElementById('firstground').querySelectorAll('img')
        // alert(ele.length)
        if(ele.length==3){
            alert('start the game')
        }
        else if(ele.length==2){
            for(const x of ele){
                if(x.id=='lion'){
                    for(const y of ele){
                        if(y.id=='goat'){
                            // alert("Lion kill the goat")
                            gamestopped()
                        }
                    }
                }
                else if(x.id=='goat'){
                    for(const y of ele){
                        if (y.id=='grass'){
                            // alert('Goat eat the grass')
                            gamestopped()
                        }
                    }
                }
            }
        }
    }
    else if (pos==31){
        let ele=document.getElementById('secondground').querySelectorAll('img')
        // alert(ele.length)
        if(ele.length==3){
            alert('Game finished you won')
        }
        else if(ele.length==2){
            for(const x of ele){
                if(x.id=='lion'){
                    for(const y of ele){
                        if(y.id=='goat'){
                            // alert("Lion kill the goat")
                            gamestopped()
                        }
                    }
                }
                else if(x.id=='goat'){
                    for(const y of ele){
                        if (y.id=='grass'){
                            // alert('Goat eat the grass')
                            gamestopped()
                        }
                    }
                }
            }
        }
    }
    const myinterval = setInterval(function () {
        pos += dir
        document.getElementById('boatwithman').style.marginLeft = pos + 'rem'
        if (pos === 31 || pos === 0) {
            clearInterval(myinterval)
            dir *= -1
        }
    }, 50)
}

function elementremove(){
    // alert(pos)
    if(pos===0){
        if(document.getElementById('imgcng').alt=='lion'){

            document.getElementById('firstground').appendChild(lion)
            document.getElementById('imgcng').classList.add('d-none')
        }
        else if(document.getElementById('imgcng').alt=='goat'){

            document.getElementById('firstground').appendChild(goat)
            document.getElementById('imgcng').classList.add('d-none')
        }
        else if(document.getElementById('imgcng').alt=='grass'){

            document.getElementById('firstground').appendChild(grass)
            document.getElementById('imgcng').classList.add('d-none')
        }
    }
    else if(pos===31){
        if(document.getElementById('imgcng').alt=='lion'){

            document.getElementById('secondground').appendChild(lion)
            document.getElementById('imgcng').classList.add('d-none')
        }
        else if(document.getElementById('imgcng').alt=='goat'){

            document.getElementById('secondground').appendChild(goat)
            document.getElementById('imgcng').classList.add('d-none')
        }
        else if(document.getElementById('imgcng').alt=='grass'){

            document.getElementById('secondground').appendChild(grass)
            document.getElementById('imgcng').classList.add('d-none')
        }

    }

}
function gamestopped(){

    document.getElementById('launchmodal').click()
    // setTimeout(location.reload(),3000)
    // location.reload()
}