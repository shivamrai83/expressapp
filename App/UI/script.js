let file = document.getElementById('upload');
let button = document.getElementsByTagName('button');
let progress = document.querySelector('progress');
let progress_indicator = document.querySelector('.progress-indicator');
let load = 0;
let process = "";

file.oninput = () => {
    let filename = file.files[0].name;
    let extension = filename.split('.').pop();
    let filesize = file.files[0].size;

    if (filesize <= 1000000){
        filesize = (filesize/1000).toFixed(2) + 'kb';
    }
    if (filesize === 1000000 || filesize <= 1000000000){
        filesize = (filesize/1000000).toFixed(2) + 'mb';
    }
    if (filesize === 1000000000 || filesize <= 1000000000000){
        filesize = (filesize/1000000000).toFixed(2) + 'gb';
    }
    document.querySelector('label').innerText = filename;
    button[1].style.visibility = 'hidden';
    if(extension === 'xls' || extension === 'xlsx'){
        document.querySelector('.ex').innerText = extension;
        button[0].style.visibility = 'inherit';
    }else{
        document.querySelector('.ex').innerText = 'not supported';
        button[0].style.visibility = 'hidden';
    }
    document.querySelector('.size').innerText = filesize;
    getFile(filename);
}

let upload = () => {
    if(load >= 100) {
        clearInterval(process);
        progress_indicator.innerHTML = '100%' + ' ' + 'Upload Complete';
        button[0].classList.remove('active');
        button[1].style.visibility = 'inherit';
    }else{
        load++;
        progress.value = load;
        progress_indicator.innerHTML = load + '%' + ' ' + 'Upload ';
    }
}

function getFile(fileName) {
    if(fileName){
        document.querySelector('.pr').style.display = "block";
        load = 0;
        progress.value = 0;
        progress_indicator.innerText = '';
        button[0].onclick = e => {
            e.preventDefault();
            button[0].classList.add('active');
            process = setInterval(upload, 50);
        }
    }
}