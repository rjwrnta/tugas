// Array
// const siswa = ["Rosa", "Ambar", "Rizki", "Mila", "Bagas"]
// const jenKel = ["P", "L", "P", "P", "L"]
// const umur = ["17", "16", "16", "18", "15"]
// const wfavorit = ["kuning", "merah", "ungu", "biru", "coklat"]

// Object

// Array And Object
const daftarSiswa= [
    
        {
            nama :"Rosa",
            jenKel : "Perempuan",
            umur : "17",
            wfavorit :"Kuning"
        
        },
        {
            nama :"Ambar",
            jenKel : "Perempuan",
            umur : "16",
            wfavorit :"Merah"
        
        },
        {
            nama :"Rizki",
            jenKel : "Laki Laki",
            umur : "18",
            wfavorit :"Ungu"
        
        },
        {
            nama :"Mila",
            jenKel : "Perempuan",
            umur : "18",
            wfavorit :"Biru"
            
        
        },
        {
            nama :"Bagas",
            jenKel : "Laki Laki",
            umur : "16",
            wfavorit :"Coklat"
            
        }
    
];
 let mode = "tambah"
// arrow funciton
const tampilSiswa = () => {
        
    const tblSiswa = document.getElementById("tbl-siswa")
    tblSiswa.innerHTML = '<tr><th>No</th><th>Nama</th><th>JenKel</th><th>Umur</th><th>Warna</th><th>Action<th></tr>'
    for (let i in daftarSiswa){
        console.log(`${parseInt(i)+1}.${daftarSiswa[i].nama} suka  warna ${daftarSiswa[i].wfavorit} jenis kelaminnya ${daftarSiswa[i].jenKel} dan berumur ${daftarSiswa[i].umur} tahun.`)
        // Akses dom
        tblSiswa.innerHTML += `<tr><th>${parseInt(i)+1}.</th><td>${daftarSiswa[i].nama}</td><td> ${daftarSiswa[i].jenKel}</td><td> ${daftarSiswa[i].umur}</td><td>${daftarSiswa[i].wfavorit} </td><td><button type="button" class="btn btn-outline-danger" onclick= "hapusSiswa('${daftarSiswa[i].nama}'),tampilSiswa()">Delete</button><button type="button" class="btn btn-outline-warning" onclick ="editSiswa('${daftarSiswa[i].nama}')">Edit</button><td></tr>`
        
    }
 }


tampilSiswa()

const tambahSiswa = () =>{
    const nama = document.getElementById("txtnama").value
    const jenKel = document.getElementById("jenKel").value
    const umur = document.getElementById("umur").value
    const wFavorit = document.getElementById("wFav").value
    const siswaBaru ={
        nama : nama,
        jenKel : jenKel,
        umur : umur,
        wfavorit : wFavorit,
    }
    // if tambah
    if(mode === 'tambah'){
        daftarSiswa.push(siswaBaru)
    }else{
        daftarSiswa[mode] = siswaBaru
    }
    tampilSiswa()
    daftarSiswa.push(siswaBaru)
    document.getElementById("txtnama").value = ""
    document.getElementById("jenKel").value =""
    document.getElementById("umur").value =""
    document.getElementById("wFav").value =""
    mode = 'tambah'
}

const cariIndex = (nama) => {
    for (let  i = 0; i<daftarSiswa.length; i++){
        if (daftarSiswa[i].nama == nama){
           return i

        }
    }

}
cariIndex()

const hapusSiswa = (target) =>{
    const indexDihapus = cariIndex(target)
    daftarSiswa.splice(indexDihapus, 1)
}

const editSiswa = (target) =>{
    const indexDiedit = cariIndex(target)
    console.log(target)
    console.log(indexDiedit)
    console.log(daftarSiswa[indexDiedit])

    const siswaEdit = daftarSiswa[indexDiedit]
        document.getElementById("txtnama").value = siswaEdit.nama
        document.getElementById("jenKel").value = siswaEdit.jenKel
        document.getElementById("umur").value = siswaEdit.umur
        document.getElementById("wFav").value = siswaEdit.wfavorit
        mode = indexDiedit

    // daftarSiswa[indexDiedit] = {
    //     nama:namaBaru,
    //     jenKel: jenKelBaru,
    //     wfavorit: wbaru,
    //     umur :umurBaru
    // }
}

const cancel =() =>{
    
    document.getElementById("txtnama").value =''
    document.getElementById("jenKel").value  =''
    document.getElementById("umur").value    =''
    document.getElementById("wFav").value    =''
    mode = 'tambah'
}

