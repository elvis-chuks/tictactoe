const reload = () => {
    let boxList = document.querySelectorAll('tr button');
    let a1 = boxList[0];
    let a2 = boxList[3];
    let a3 = boxList[6];
    let b1 = boxList[1];
    let b2 = boxList[4];
    let b3 = boxList[7];
    let c1 = boxList[2];
    let c2 = boxList[5];
    let c3 = boxList[8];
    let _list = [a1,a2,a3,b1,b2,b3,c1,c2,c3];
    console.log(_list);
    _list.forEach(listy =>{
        listy.textContent = '';
        listy.disabled = false;
    })
    let btn = document.getElementById('reload');
    btn.style.display = 'none';
    let win = document.getElementById('win');
    win.style.display = 'none';

}
const begin = () => {
    let boxList = document.querySelectorAll('tr button');
    let a1 = boxList[0];
    let a2 = boxList[3];
    let a3 = boxList[6];
    let b1 = boxList[1];
    let b2 = boxList[4];
    let b3 = boxList[7];
    let c1 = boxList[2];
    let c2 = boxList[5];
    let c3 = boxList[8];
    let _list = [a1,a2,a3,b1,b2,b3,c1,c2,c3];
    // console.log(_list)
    // let appState = {};
    _list.forEach(listy => {
        listy.addEventListener('click',log);
    });
    
    function log(){
        let matrix = [a1.textContent,b1.textContent,c1.textContent,a2.textContent,b2.textContent,c2.textContent,a3.textContent,b3.textContent,c3.textContent];
        console.log(matrix);
        if ((a1.textContent == b1.textContent && a1.textContent == c1.textContent && b1.textContent == c1.textContent) && ((a1.textContent != '' && b1.textContent != '' && c1.textContent != ''))){
            console.log('winner');
            let btn = document.getElementById('reload');
            btn.style.display = 'block';
            let win = document.getElementById('win');
            win.style.display = 'block';
            _list.forEach(listy =>{
                listy.disabled = true;
            })
        }
        if ((a2.textContent == b2.textContent && a2.textContent == c2.textContent && b2.textContent == c2.textContent) && ((a2.textContent != '' && b2.textContent != '' && c2.textContent != ''))){
            console.log('winner');
            let btn = document.getElementById('reload');
            btn.style.display = 'block';
            let win = document.getElementById('win');
            win.style.display = 'block';
            _list.forEach(listy =>{
                listy.disabled = true;
            })
        }
        if ((a3.textContent == b3.textContent && a3.textContent == c3.textContent && b3.textContent == c3.textContent) && ((a3.textContent != '' && b3.textContent != '' && c3.textContent != ''))){
            console.log('winner');
            let btn = document.getElementById('reload');
            btn.style.display = 'block';
            let win = document.getElementById('win');
            win.style.display = 'block';
            _list.forEach(listy =>{
                listy.disabled = true;
            })
        }
        if ((a1.textContent == a2.textContent && a2.textContent == a3.textContent && a1.textContent == a3.textContent) && ((a1.textContent != '' && a2.textContent != '' && a3.textContent != ''))){
            console.log('winner');
            let btn = document.getElementById('reload');
            btn.style.display = 'block';
            let win = document.getElementById('win');
            win.style.display = 'block';
            _list.forEach(listy =>{
                listy.disabled = true;
            })
        }
        if ((b1.textContent == b2.textContent && b2.textContent == b3.textContent && b1.textContent == b3.textContent) && ((b1.textContent != '' && b2.textContent != '' && b3.textContent != ''))){
            console.log('winner');
            let btn = document.getElementById('reload');
            btn.style.display = 'block';
            let win = document.getElementById('win');
            win.style.display = 'block';
            _list.forEach(listy =>{
                listy.disabled = true;
            })
        }
        if ((c1.textContent == c2.textContent && c2.textContent == c3.textContent && c1.textContent == c3.textContent) && ((c1.textContent != '' && c2.textContent != '' && c3.textContent != ''))){
            console.log('winner');
            let btn = document.getElementById('reload');
            btn.style.display = 'block';
            let win = document.getElementById('win');
            win.style.display = 'block';
            _list.forEach(listy =>{
                listy.disabled = true;
            })
        }
        if ((a1.textContent == b2.textContent && a1.textContent == c3.textContent && b2.textContent == c3.textContent) && ((a1.textContent != '' && b2.textContent != '' && c3.textContent != ''))){
            console.log('winner');
            let btn = document.getElementById('reload');
            btn.style.display = 'block';
            let win = document.getElementById('win');
            win.style.display = 'block';
            _list.forEach(listy =>{
                listy.disabled = true;
            })
        }
        if ((c1.textContent == b2.textContent && a3.textContent == b2.textContent && b2.textContent == c1.textContent) && ((a3.textContent != '' && b2.textContent != '' && c1.textContent != ''))){
            console.log('winner');
            let btn = document.getElementById('reload');
            btn.style.display = 'block';
            let win = document.getElementById('win');
            win.style.display = 'block';
            _list.forEach(listy =>{
                listy.disabled = true;
            })
        }
    }
};
const start = () =>{
    let btn = document.getElementById('reload');
    btn.style.display = 'none';
    let win = document.getElementById('win');
    win.style.display = 'none';
    begin();
}