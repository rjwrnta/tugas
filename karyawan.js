
const karyawan= [
    
    { 
        nama :"Devyn Ramirez",
        NIK : 113542,
        masaKerja: 10,
        gaji: 7000000
    },
    {
        nama :"Harmony Duncan",
        NIK : 114632,
        masaKerja: 5,
        gaji: 4000000 
    },
    {
        nama :"Clarissa Burgess",
        NIK : 1146382,
        masaKerja: 8,
        gaji: 7000000
    },
    {
        nama :"Reilly Blanchard",
        NIK : 114872,
        masaKerja: 7,
        gaji: 7000000
    },
    {
        nama :"Zion Brooks",
        NIK : 117463,
        masaKerja: 4,
        gaji: 4000000
    },
    {
        nama :"Jovanny Mays",
        NIK : 117382,
        masaKerja: 10,
        gaji: 700000
    },
    {
        nama :"Cindy Chase",
        NIK : 117636,
        masaKerja: 9,
        gaji: 7000000
    },
    {
        nama :"Kristin Mcdaniel",
        NIK : 11943,
        masaKerja: 8 ,
        gaji: 7000000
    },
    {
        nama :"Macey Sanford",
        NIK : 11937,
        masaKerja: 7,
        gaji: 7000000
    },
    {
        nama :"Alfredo Faulkner",
        NIK : 119371,
        masaKerja: 10,
        gaji: 7000000
    }

];
let mode = "tambah"
// arrow funciton
const tampilKaryawan = () => {

const tblKaryawan = document.getElementById("tbl-Karyawan")
tblKaryawan.innerHTML = '<tr><th>No</th><th>Nama</th><th>NIK</th><th>Masa Kerja</th><th>Gaji</th><th>Action<th></tr>'
for (let i in karyawan){
    console.log(`${parseInt(i)+1}.${karyawan[i].NIK} bernama ${karyawan[i].nama} dengan masa kerja ${karyawan[i].masaKerja} dan gaji sebesar ${karyawan.gaji}.`)
    // Akses dom
    tblKaryawan.innerHTML += `<tr><th>${parseInt(i)+1}.</th><td>${karyawan[i].nama}</td><td> ${karyawan[i].NIK}</td><td> ${karyawan[i].masaKerja}</td><td>${karyawan[i].gaji} </td><td><button type="button" class="btn btn-outline-danger" onclick= "hapusKaryawan('${karyawan[i].nama}'),tampilKaryawan()">Delete</button><button type="button" class="btn btn-outline-warning" onclick ="editKaryawan('${karyawan[i].nama}')">Edit</button><td></tr>`
    
}
}


tampilKaryawan()

const tambahKaryawan = () =>{
const nama = document.getElementById("nama").value
const NIK = document.getElementById("nik").value
const masaKerja = document.getElementById("mk").value
if(masaKerja < 6){
    gaji = 4000000
}else{
    gaji = 7000000
}

const karyawanBaru ={
    nama : nama,
    NIK : NIK,
    masaKerja : masaKerja,
    gaji : gaji
   
}
// if tambah
if(mode === 'tambah'){
    karyawan.push(karyawanBaru)
}else{
    karyawan[mode] = karyawanBaru
}
tampilKaryawan()
// karyawan.push(karyawanBaru)
document.getElementById("nama").value = ""
document.getElementById("nik").value =""
document.getElementById("mk").value =""
mode = 'tambah'
}

const cariIndex = (nama) => {
for (let  i = 0; i<karyawan.length; i++){
    if (karyawan[i].nama == nama){
       return i

    }
}

}
cariIndex()

const hapusKaryawan = (target) =>{
const indexDihapus = cariIndex(target)
karyawan.splice(indexDihapus, 1)
}

const editKaryawan = (target) =>{
const indexDiedit = cariIndex(target)
console.log(target)
console.log(indexDiedit)
console.log(karyawan[indexDiedit])

const karyawanEdit = karyawan[indexDiedit]
    document.getElementById("nama").value = karyawanEdit.nama
    document.getElementById("nik").value = karyawanEdit.NIK
    document.getElementById("mk").value = karyawanEdit.masaKerja
    mode = indexDiedit

// karyawan[indexDiedit] = {
//     nama:namaBaru,
//     jenKel: jenKelBaru,
//     wfavorit: wbaru,
//     umur :umurBaru
// }
}

const cancel =() =>{

document.getElementById("nama").value =''
document.getElementById("nik").value  =''
document.getElementById("mk").value    =''
mode = 'tambah'
}

