/*

Project latihan membuat kalkulator 2 dimensi dari semua bangun datar
list daftar bangun datar :
1. Persegi.
2. Persegi Panjang.
3. Segitiga.
4. Lingkaran.
5. Jajar Genjang.
6. Belah Ketupat.
7. Trapesium.
8. Layang - Layang

Catatan : Masih belum bisa kembali ke menu utam dari sub menu.

*/
// pengertian bangun datar.
function show() {
    return document.getElementById('hide').style.display = 'block', document.getElementById('show').style.display = 'none';
}
function hide() {
    return document.getElementById('hide').style.display = 'none', document.getElementById('show').style.display = 'block';
}


// main menu
function inpMenu() {
    var inpMenu = document.getElementById('inpMenu').value;
    if (inpMenu === undefined) {
        inpMenu = 'pers';
    }

    switch (inpMenu) {
        case 'pers':
            pengertian(`Persegi`, `Persegi adalah bangun datar dua dimensi yang dibentuk oleh empat buah rusuk ( a ) yang sama panjang dan memiliki empat buah sudut yang kesemuanya adalah sudut siku-siku. Bangun ini disebut juga sebagai <strong>bujur sangkar</strong>.`);
            imagePath(`./img/Persegi.png`);
            inpRumus(`Sisi * 4 atau 4(Sisi)`, `Sisi * sisi`);
            inputNilai(inpMenu);
            break;
        case 'persPanj':
            pengertian(`Persegi Panjang`, `Persegi panjang adalah bangun datar dua dimensi yang dibentuk oleh dua pasang sisi yang masing-masing sama panjang dan sejajar dengan pasangannya, dan memiliki empat buah sudut yang kesemuanya adalah sudut siku-siku. Persegi panjang merupakan turunan dari segi empat yang mempunyai ciri khusus dua sisi sejajar sama panjang dan keempat sudutnya siku-siku (90°).\n
            Rusuk terpanjang disebut sebagai panjang ( p ) dan rusuk terpendek disebut sebagai lebar ( l ).`);
            imagePath(`./img/Persegi Panjang.png`);
            inpRumus('2 * ( panjang + lebar)', `panjang * lebar`);
            inputNilai(inpMenu);
            break;
        case 'segi':
            pengertian(`Segitiga`, `Sebuah segitiga adalah poligon dengan tiga ujung dan tiga simpul. Ini adalah salah satu bentuk dasar dalam geometri.`);
            imagePath(`./img/Segitiga.png`);
            inpRumus('Sisi * 3 atau 3(sisi)', `1/2 * alas * tinggi`);
            inputNilai(inpMenu);
            break;
        case 'ling':
            pengertian(`Lingkaran`, `Lingkaran adalah bentuk yang terdiri dari semua titik dalam bidang yang berjarak tertentu dari titik tertentu, pusat; ekuivalennya adalah kurva yang dilacak oleh titik yang bergerak dalam bidang sehingga jaraknya dari titik tertentu adalah konstan. Jarak antara titik mana pun dari lingkaran dan pusat disebut jari-jari. Artikel ini adalah tentang lingkaran dalam geometri Euclidean, dan, khususnya, bidang Euclidean, kecuali jika dinyatakan sebaliknya.`);
            imagePath(`./img/Lingkaran.png`);
            inpRumus('2 * phi * jari-jari atau phi * diameter', `Phi * jari-jari * jari-jari`);
            inputNilai(inpMenu);
            break;
        case 'jajaGenj':
            pengertian(`Jajar Genjang`, `Jajar genjang atau jajaran genjang adalah bangun datar dua dimensi yang dibentuk oleh dua pasang rusuk yang masing-masing sama panjang dan sejajar dengan pasangannya, dan memiliki dua pasang sudut yang masing-masing sama besar dengan sudut di hadapannya.

            Jajar genjang termasuk turunan segiempat yang mempunyai ciri khusus.
            
            Jajar genjang dengan empat rusuk yang sama panjang disebut belah ketupat. `);
            imagePath(`./img/Jajar Genjang.png`);
            inpRumus(`2 * (alas + sisi miring)`, `Alas * tinggi`);
            inputNilai(inpMenu);
            break;
        case 'belaKetu':
            pengertian(`Belah Ketupat`, `Belah ketupat adalah bangun datar dua dimensi yang dibentuk oleh empat buah masing-masing sama besar dengan sudut di hadapannya.`);
            imagePath(`./img/Belah Ketupat.png`);
            inpRumus(`4 * sisi`, `Diagonal1 * diagonal2 / 2`);
            inputNilai(inpMenu);
            break;
        case 'trap':
            pengertian(`Trapesium`, `Trapesium adalah bangun datar dua dimensi yang dibentuk oleh empat buah rusuk yang dua di antaranya saling sejajar namun tidak sama panjang.

            Trapesium termasuk jenis bangun datar segi empat yang mempunyai ciri khusus.`);
            imagePath(`./img/Trapesium.png`);
            inpRumus(`Sisi atas + sisi kanan + sisi bawah + sisi kiri`, `(Sisi atas + sisi bawah) * t / 2`);
            inputNilai(inpMenu);
            break;
        case 'layaLaya':
            pengertian(`Layang - Layang`, `Layang-layang adalah bangun datar (bangun berdimensi dua) yang dibentuk oleh dua pasang sisi yang masing-masing pasangannya sama panjang dan saling membentuk sudut.

            Layang-layang merupakan turunan dari segi empat yang mempunyai ciri khusus dua sisi yang membentuk sudut sama panjang dan besaran sudut yang saling berhadapan sama besar. `);
            imagePath(`./img/Layang -  layang.png`);
            inpRumus(`2 * (sisi kanan + sisi kiri)`, `Diagonal1 * diagonal2 / 2`);
            inputNilai(inpMenu);
            break;
        default:
            pengertian(`Persegi`, `Persegi adalah bangun datar dua dimensi yang dibentuk oleh empat buah rusuk ( a ) yang sama panjang dan memiliki empat buah sudut yang kesemuanya adalah sudut siku-siku. Bangun ini disebut juga sebagai <strong>bujur sangkar</strong>.`);
            imagePath(`./img/Persegi.png`);
            inpRumus(`Sisi * 4 atau 4(Sisi)`, `Sisi * sisi`);
            inputNilai(inpMenu);
            break;
    }
    return inpMenu;
}
// input pengertian.
function pengertian(a, b) {
    return document.getElementById('peng').innerHTML = `<h5 class="font-weight-bold">${a}</h5><p>${b}</p>`;
}
// input image relative path.
function imagePath(a) {
    return document.getElementById('gmbr').innerHTML = `<div class="d-flex justify-content-center"><img src="${a}" alt="gambar persegi"></div>`
}

// Rumus : input keliling dan luas.
function inpRumus(keli, luas) {
    return document.getElementById('ketRumusKeli').innerHTML = `<span class="font-weight-bold">Keliling</span> = ${keli}`, document.getElementById('ketRumusLuas').innerHTML = `<span class="font-weight-bold">Luas</span> = ${luas}`;
}

function inputNilai(a) {
    // bisa dibuat looping
    var b, c, d, e, f, g, h, i;
    b = document.getElementById('inpNilaiPers');
    c = document.getElementById('inpNilaiPersPanj');
    d = document.getElementById('inpNilaiSegi');
    e = document.getElementById('inpNilaiLing');
    f = document.getElementById('inpNilaiJajaGenj');
    g = document.getElementById('inpNilaiBelaKetu');
    h = document.getElementById('inpNilaiTrap');
    i = document.getElementById('inpNilaiLayaLaya');

    switch (a) {
        case 'pers':
            b.style.display = 'block';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            break;

        case 'persPanj':
            b.style.display = 'none';
            c.style.display = 'block';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            break;

        case 'segi':
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'block';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            break;

        case 'ling':
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'block';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            break;

        case 'jajaGenj':
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'block';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            break;

        case 'belaKetu':
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'block';
            h.style.display = 'none';
            i.style.display = 'none';
            break;

        case 'trap':
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'block';
            i.style.display = 'none';
            break;

        case 'layaLaya':
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'block';
            break;

        default:
            b.style.display = 'block';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
            f.style.display = 'none';
            g.style.display = 'none';
            h.style.display = 'none';
            i.style.display = 'none';
            break;
    }
}

// Rumus : input hasil.
function getHasil() {
    if (inpMenu() === 'pers') {
        a = document.getElementById('nilaiSisiPers').value;

        return document.getElementById('hasilKeli').value = parseFloat(a * 4), document.getElementById('hasilLuas').value = parseFloat(a * a);
    } else if (inpMenu() === 'persPanj') {
        a = document.getElementById('nilaiPanjPersPanj').value;
        b = document.getElementById('nilaiLebaPersPanj').value;

        return console.log(document.getElementById('hasilKeli').value = parseFloat(2 * (a + b)), document.getElementById('hasilLuas').value = parseFloat(a * b));
    } else if (inpMenu() === 'segi') {
        a = document.getElementById('nilaiSisiSegi').value;
        b = document.getElementById('nilaiAlasSegi').value;
        c = document.getElementById('nilaiTingSegi').value;

        return console.log(document.getElementById('hasilKeli').value = parseFloat(a * 3), document.getElementById('hasilLuas').value = parseFloat(b * c / 2));
    } else if (inpMenu() === 'ling') {
        a = document.getElementById('nilaiROrDLing').value;
        b = document.getElementById('nilaiLing').value;

        if (a === 'd') {
            return console.log(document.getElementById('hasilKeli').value = parseFloat(3.14 * b)), console.log(document.getElementById('hasilLuas').value = parseFloat(3.14 * Math.sqrt(b)));
        } else {
            return console.log(document.getElementById('hasilKeli').value = parseFloat(2 * 3.14 * b * b)), console.log(document.getElementById('hasilLuas').value = parseFloat(3.14 * b * b));
        }
    } else if (inpMenu() === 'jajaGenj') {
        a = document.getElementById('nilaiAlasJajaGenj').value;
        b = document.getElementById('nilaiSmJajaGenj').value;
        c = document.getElementById('nilaiTingJajaGenj').value;

        return console.log(document.getElementById('hasilKeli').value = parseFloat(2 * (a + b)), document.getElementById('hasilLuas').value = parseFloat(b * c / 2));
    } else if (inpMenu() === 'belaKetu') {
        a = document.getElementById('nilaiSisiBelaKetu').value;
        b = document.getElementById('nilaiDia1BelaKetu').value;
        c = document.getElementById('nilaiDia2BelaKetu').value;

        return console.log(document.getElementById('hasilKeli').value = parseFloat(4 * a), document.getElementById('hasilLuas').value = parseFloat((a * b) / 2));
    } else if (inpMenu() === 'trap') {
        a = document.getElementById('nilaiSisi1Trap').value;
        b = document.getElementById('nilaiSisi2Trap').value;
        c = document.getElementById('nilaiSisi3Trap').value;
        d = document.getElementById('nilaiSisi4Trap').value;
        e = document.getElementById('nilaiTingTrap').value;

        return console.log(document.getElementById('hasilKeli').value = parseFloat(a + b + c + d), document.getElementById('hasilLuas').value = parseFloat((a + c) * e / 2));
    } else if (inpMenu() === 'layaLaya') {
        a = document.getElementById('nilaiSisiKanaLayaLaya').value;
        b = document.getElementById('nilaiSisiKiriLayaLaya').value;
        c = document.getElementById('nilaiSisiDia1LayaLaya').value;
        d = document.getElementById('nilaiSisiDia2LayaLaya').value;

        return console.log(document.getElementById('hasilKeli').value = parseFloat(2 * (a + b)), document.getElementById('hasilLuas').value = parseFloat((c * d) / 2));
    }
}

// Rumus : reset hasil
function resetHasil() {
    if (inpMenu() === inpMenu()) {
        document.getElementById('hasilKeli').value = null, document.getElementById('hasilLuas').value = null;
        if (inpMenu() === 'pers') {
            return document.getElementById('nilaiSisiPers').value = null;
        } else if (inpMenu() === 'persPanj') {
            return document.getElementById('nilaiPanjPersPanj').value = null,
                document.getElementById('nilaiLebaPersPanj').value = null;
        } else if (inpMenu() === 'segi') {
            return document.getElementById('nilaiSisiSegi').value = null, document.getElementById('nilaiAlasSegi').value = null, document.getElementById('nilaiTingSegi').value = null;
        } else if (inpMenu() === 'ling') {
            return document.getElementById('nilaiROrDLing').value = "null", document.getElementById('nilaiLing').value = null;
        } else if (inpMenu() === 'jajaGenj') {
            return document.getElementById('nilaiAlasJajaGenj').value = null, document.getElementById('nilaiSmJajaGenj').value = null, document.getElementById('nilaiTingJajaGenj').value = null, document.getElementById('nilaiLing').value = null;
        } else if (inpMenu() === 'belaKetu') {
            return document.getElementById('nilaiSisiBelaKetu').value = null, document.getElementById('nilaiDia1BelaKetu').value = null, document.getElementById('nilaiDia2BelaKetu').value = null;
        } else if (inpMenu() === 'trap') {
            return document.getElementById('nilaiSisi1Trap').value = null,
                document.getElementById('nilaiSisi2Trap').value = null,
                document.getElementById('nilaiSisi3Trap').value = null,
                document.getElementById('nilaiSisi4Trap').value = null,
                document.getElementById('nilaiTingTrap').value = null;
        } else if (inpMenu() === 'layaLaya') {
        }
    }

}
















































/*
var cntrl = true;
while (cntrl === true) {
    var inp = parseInt(prompt('Kalkulator Bangun Datar\nPilih menu :\n1.Persegi.\n2. Persegi Panjang.\n3. Segitiga.\n4. Lingkaran.\n5. Jajar Genjang.\n6. Belah Ketupat.\n7. Trapesium.\n8. Layang - Layang.\n9. Keluar.'));
    var inp2, inp3, inp4, inp5, inp6;
    switch (inp) {
        // case persegi
        case 1:
            while (cntrl === true) {
                inp2 = parseInt(prompt('Pilih menu :\n1. Keliling\n2. Luas\n3. Keluar.'));
                switch (inp2) {
                    case 1:
                        inp3 = parseFloat(prompt('KELILING PERSEGI\nMasukan nilai sisi'));
                        kelilingPersegi(inp3);
                        break;
                    case 2:
                        inp3 = parseFloat(prompt('LUAS PERSEGI\nMasukan nilai sisi'));
                        luasPersegi(inp3);
                        break;
                    case 3:
                        cntrl = confirm('Apakah anda yakin, ingin keluar ?');
                        cntrl = (cntrl === true) ? false : true;
                        break;
                    default:
                        alert('Anda memasukan menu yang salah!')
                        break;
                }
            }
            break;
        // case persegi panjang
        case 2:
            while (cntrl === true) {
                inp2 = parseInt(prompt('Pilih menu :\n1. Keliling\n2. Luas.\n3. Keluar.'));
                switch (inp2) {
                    case 1:
                        inp3 = parseFloat(prompt('KELILING PERSEGI PANJANG\nMasukan nilai panjang'));
                        inp4 = parseFloat(prompt('KELILING PERSEGI PANJANG\nMasukan nilai lebar'));
                        kelilingPersegiPanjang(inp3, inp4);
                        break;
                    case 2:
                        inp3 = parseFloat(prompt('LUAS PERSEGI PANJANG\nMasukan nilai panjang'));
                        inp4 = parseFloat(prompt('LUAS PERSEGI PANJANG\nMasukan nilai lebar'));
                        luasPersegiPanjang(inp3, inp4);
                        break;
                    case 3:
                        cntrl = confirm('Apakah anda yakin, ingin keluar ?');
                        cntrl = (cntrl === true) ? false : true;
                        break;
                    default:
                        alert('Anda memasukan menu yang salah!')
                        break;
                }
            }
            break;
        // case segitiga
        case 3:
            while (cntrl === true) {
                inp2 = parseInt(prompt('Pilih menu :\n1. Keliling\n2. Luas.\n3. Keluar.'));
                switch (inp2) {
                    case 1:
                        inp3 = parseFloat(prompt('KELILING SEGITIGA\nMasukan nilai sisi'));
                        kelilingSegitiga(inp3);
                        break;
                    case 2:
                        inp3 = parseFloat(prompt('LUAS SEGITIGA\nMasukan nilai alas'));
                        inp4 = parseFloat(prompt('LUAS SEGITIGA\nMasukan nilai tinggi'));
                        luasSegitiga(inp3, inp4);
                        break;
                    case 3:
                        cntrl = confirm('Apakah anda yakin, ingin keluar ?');
                        cntrl = (cntrl === true) ? false : true;
                        break;
                    default:
                        alert('Anda memasukan menu yang salah!')
                        break;
                }
            }
            break;
        // case lingkaran
        case 4:
            while (cntrl === true) {
                inp2 = parseInt(prompt('Pilih menu :\n1. Keliling\n2. Luas.\n3. Keluar.'));
                switch (inp2) {
                    case 1:
                        inp3 = parseFloat(prompt('KELILING LINGKARAN\nMasukan nilai jari - jari'));
                        kelilingLingkaran(inp3);
                        break;
                    case 2:
                        inp3 = parseFloat(prompt('LUAS LINGKARAN\nMasukan nilai jari - jari'));
                        luasLingkaran(inp3);
                        break;
                    case 3:
                        cntrl = confirm('Apakah anda yakin, ingin keluar ?');
                        cntrl = (cntrl === true) ? false : true;
                        break;
                    default:
                        alert('Anda memasukan menu yang salah!')
                        break;
                }
            }
            break;
        // case jajar genjang
        case 5:
            while (cntrl === true) {
                inp2 = parseInt(prompt('Pilih menu :\n1. Keliling\n2. Luas.\n3. Keluar.'));
                switch (inp2) {
                    case 1:
                        inp3 = parseFloat(prompt('KELILING JAJAR GENJANG\nMasukan nilai alas'));
                        inp4 = parseFloat(prompt('KELILING JAJAR GENJANG\nMasukan nilai sisi miring'));
                        kelilingJajarGenjang(inp3, inp4);
                        break;
                    case 2:
                        inp3 = parseFloat(prompt('LUAS JAJAR GENJANG\nMasukan nilai alas'));
                        inp4 = parseFloat(prompt('LUAS JAJAR GENJANG\nMasukan nilai tinggi'));
                        luasJajarGenjang(inp3, inp4);
                        break;
                    case 3:
                        cntrl = confirm('Apakah anda yakin, ingin keluar ?');
                        cntrl = (cntrl === true) ? false : true;
                        break;
                    default:
                        alert('Anda memasukan menu yang salah!')
                        break;
                }
            }
            break;
        // case belah ketupat
        case 6:
            while (cntrl === true) {
                inp2 = parseInt(prompt('Pilih menu :\n1. Keliling\n2. Luas.\n3. Keluar.'));
                switch (inp2) {
                    case 1:
                        inp3 = parseFloat(prompt('KELILING BELAH KETUPAT\nMasukan nilai sisi'));
                        kelilingBelahKetupat(inp3);
                        break;
                    case 2:
                        inp3 = parseFloat(prompt('LUAS BELAH KETUPAT\nMasukan nilai diagonal 1'));
                        inp4 = parseFloat(prompt('LUAS BELAH KETUPAT\nMasukan nilai diagonal 2'));
                        luasBelahKetupat(inp3, inp4);
                        break;
                    case 3:
                        cntrl = confirm('Apakah anda yakin, ingin keluar ?');
                        cntrl = (cntrl === true) ? false : true;
                        break;
                    default:
                        alert('Anda memasukan menu yang salah!')
                        break;
                }
            }
            break;
        // case trapesium
        case 7:
            while (cntrl === true) {
                inp2 = parseInt(prompt('Pilih menu :\n1. Keliling\n2. Luas.\n3. Keluar.'));
                switch (inp2) {
                    case 1:
                        inp3 = parseFloat(prompt('KELILING TRAPESIUM\nMasukan nilai sisi atas'));
                        inp4 = parseFloat(prompt('KELILING TRAPESIUM\nMasukan nilai sisi bawah'));
                        inp5 = parseFloat(prompt('KELILING TRAPESIUM\nMasukan nilai sisi miring'));
                        inp6 = parseFloat(prompt('KELILING TRAPESIUM\nMasukan nilai tinggi'));
                        kelilingTrapesium(inp3, inp4, inp5, inp6);
                        break;
                    case 2:
                        inp3 = parseFloat(prompt('LUAS TRAPESIUM\nMasukan nilai sisi atas'));
                        inp4 = parseFloat(prompt('LUAS TRAPESIUM\nMasukan nilai sisi bawah'));
                        inp5 = parseFloat(prompt('LUAS TRAPESIUM\nMasukan nilai tinggi'));
                        luasTrapesium(inp3, inp4, inp5);
                        break;
                    case 3:
                        cntrl = confirm('Apakah anda yakin, ingin keluar ?');
                        cntrl = (cntrl === true) ? false : true;
                        break;
                    default:
                        alert('Anda memasukan menu yang salah!')
                        break;
                }
            }
            break;
        // case layang layang
        case 8:
            while (cntrl === true) {
                inp2 = parseInt(prompt('Pilih menu :\n1. Keliling\n2. Luas.\n3. Keluar.'));
                switch (inp2) {
                    case 1:
                        inp3 = parseFloat(prompt('KELILING LAYANG - LAYANG\nMasukan nilai sisi 1'));
                        inp4 = parseFloat(prompt('KELILING LAYANG - LAYANG\nMasukan nilai sisi 2'));
                        kelilingLayang(inp3, inp4);
                        break;
                    case 2:
                        inp3 = parseFloat(prompt('LUAS LAYANG - LAYANG\nMasukan nilai diagonal 1'));
                        inp4 = parseFloat(prompt('LUAS LAYANG - LAYANG\nMasukan nilai diagonal 2'));
                        luasLayang(inp3, inp4);
                        break;
                    case 3:
                        cntrl = confirm('Apakah anda yakin, ingin keluar ?');
                        cntrl = (cntrl === true) ? false : true;
                        break;
                    default:
                        alert('Anda memasukan menu yang salah!')
                        break;
                }
            }
            break;
        case 9:
            cntrl = confirm('Apakah anda yakin, ingin keluar ?');
            cntrl = (cntrl === true) ? false : true;
            break;
        default:
            alert('Anda memasukan menu yang salah!');
            break;
    }

    alert('Goodbye~')
}

// function

// Persegi
function luasPersegi(sisi) {
    return alert(`Luas Persegi :\n${sisi * sisi}`);
}

function kelilingPersegi(sisi) {
    return alert(`Keliling Persegi :\n${sisi * 4}`);
}

//Persegi Panjang
function luasPersegiPanjang(p, l) {
    return alert(`Luas Persegi Panjang :\n${p * l}`);

}

function kelilingPersegiPanjang(p, l) {
    return alert(`Keliling Persegi Panjang :\n${(p + l) * 2}`);
}

// Segitiga
function luasSegitiga(a, t) {
    return alert(`Luas segitiga :\n${(a * t) / 2}`);
}

function kelilingSegitiga(sisi) {
    return alert(`Keliling Segitiga :\n${sisi * 3}`);
}

// Lingkaran
function luasLingkaran(r) {
    return alert(`Luas Lingkaran :\n${3.14 * r * r}`);
}

function kelilingLingkaran(r) {
    return alert(`Keliling Lingkaran :\n${3.14 * r * 2}`);
}

// jajar genjang
function luasJajarGenjang(a, t) {
    return alert(`Luas Jajar Genjang :\n${a * t}`);
}

function kelilingJajarGenjang(a, sm) {
    return alert(`Keliling Jajar Genjang :\n${2 * (a * sm)}`);
}

// Belah Ketupat
function luasBelahKetupat(diag1, diag2) {
    return alert(`Luas Belah Ketupat :\n${(diag1 * diag2)/2}`);
}

function kelilingBelahKetupat(sisi) {
    return alert(`Keliling Belah Ketupat :\n${4 * sisi}`);
}

// Trapesium
function luasTrapesium(sa, sb, t) {
    return alert(`Luas Trapesium :\n${((sa + sb)*t)/2}`);
}

function kelilingTrapesium(sa, sb, sm, t) {
    return alert(`Keliling Trapesium :\n${sa + sb + sm + t}`);
}

// Layang - layang
function luasLayang(diag1, diag2) {
    return alert(`Luas Layang - Layang :\n${(diag1 * diag2)/2}`);
}

function kelilingLayang(sisi1, sisi2) {
    return alert(`Keliling Layang - Layang :\n${(sisi1 + sisi2)*2}`);
}
*/