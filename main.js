let n
initialize()
setInterval(()=>{
    makeLeave(getImage(n))//第一图转为Leave状态
    .one('transitionend',(elm)=>{makeEnter(elm.currentTarget)})//进入Enter状态，待进入
    makeCurrent(getImage(n+1))//下一图变为Current状态
    n += 1
},3000)
















//初始化

function initialize (){
    n=1
    $(getImage(n)).addClass('current').siblings().addClass('enter')
}


//进行状态转换
function getImage(n){
   return  `.images > img:nth-child(${x(n)})`
}
function makeLeave(a) {
    return $(a).removeClass('current').addClass('leave')
}
function makeEnter(b){
    return $(b).removeClass('leave').addClass('enter')
}
function makeCurrent(c){
    return $(c).removeClass('enter').addClass('current')
}

//////////////···········！！！！！！···function不要忘了加return！！！！！！！！！！！·············////////

function x(n){
    if(n>5){
        n = n%5
        if(n===0){
            n=5
        }
    }
    return n
}

