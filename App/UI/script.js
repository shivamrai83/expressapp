let file = document.getElementById('upload');
let uploadButton = document.getElementById('uploadButton');
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
        getFile(filename, file.files[0]);
    }else{
        document.querySelector('.ex').innerText = 'This file format is not supported';
    }
    document.querySelector('.size').innerText = filesize;
}

let upload = () => {
    if(load >= 100) {
        clearInterval(process);
        progress_indicator.innerHTML = '100%' + ' ' + 'Upload Complete';
        button[1].style.visibility = 'inherit';
    }else{
        load++;
        progress.value = load;
        progress_indicator.innerHTML = load + '%' + ' ' + 'Upload ';
    }
}

function getFile(fileName, file) {
    if(fileName){
        document.querySelector('.pr').style.display = "block";
        load = 0;
        progress.value = 0;
        progress_indicator.innerText = '';
        process = setInterval(upload, 10);
        }
}

document.querySelector('#upload').addEventListener('change', event => {
    handleImageUpload(event)
  })

  const handleImageUpload = event => {
    const files = event.target.files
    console.log('Shivam', files);
    const formData = new FormData()
    formData.append('myFile', files[0])
  
    fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData
            })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  }
  