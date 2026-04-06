let npm = document.getElementById("npm");
let nama = document.getElementById("nama");

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
        nama: nama.value
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

    //lakukan perulangan menggunkan  forEach
    hasil.forEach(element => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += `<li>${element.npm} ${element.nama}</li>`
        
//clear element ul id = list-mhs
document.getElementById("list-mhs").innerHTML = ""

    });
}
//jalankan fuction tampil()
tampil()
