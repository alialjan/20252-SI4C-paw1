let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let image = document.getElementById("imageURl");
function simpan(){
    console.log(npm.value)
    console.log(nama.value)
        
    // localStorage.setItem("npm", npm.value)
    // localStorage.setItem("nama", nama.value)

    // jika lokal storage belum ada isi/ value
    if (localStorage.getItem("mahasiswa")===null){
        //simpan array kosong
        localStorage.setItem("mahasiswa", "[]")
    }

    //panggil local storage (konversi string ke object)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value npm dan nama ke dalam object data
    data.push({
        npm: npm.value,
        nama: nama.value,
        image: image.value

    })
    console.log(data)

    //simpan data ke dalam local storage
    //konversikan dari object ke string 
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    //panggil tampil
    tampil()
}

function tampil(){
    //panggil local storage
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))
    //clear element ul id = list-mhs
    document.getElementById("list-mhs").innerHTML = ""

    //lakukan perulangan menggunkan  forEach
    hasil.forEach(element => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += `<div class ="col-lg-4 col-md-6" >
        <img class="img fluid" src="${element.image}" /><class ="text-primary">${element.nama}</><h6 class ="text-danger"> ${element.npm}</h6> 
        </div>`
        

    });
}
//jalankan fuction tampil()
tampil()
