const myBtn = document.getElementById('btn');
myBtn.addEventListener('click', checkForLink);
function checkForLink(){
    const myLink = document.getElementById('link').value;
    let myRes = '';
    if (!(myLink.includes('http') || myLink.includes('https'))){
        myRes = 'https://' + myLink;
        console.log(myRes);
    }
    return myRes;
}

