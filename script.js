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
    switch (inpMenu) {
        case 'pers':
            pengertian(`Persegi`, `Persegi adalah bangun datar dua dimensi yang dibentuk oleh empat buah rusuk ( a ) yang sama panjang dan memiliki empat buah sudut yang kesemuanya adalah sudut siku-siku. Bangun ini disebut juga sebagai <strong>bujur sangkar</strong>.`);
            imagePath(`https://upload.wikimedia.org/wikipedia/id/2/2d/Persegi.JPG`);
            inpRumus(`Sisi * 4 atau 4(Sisi)`, `Sisi * sisi`);
            inputNilai(inpMenu);
            break;
        case 'persPanj':
            pengertian(`Persegi Panjang`, `Persegi panjang adalah bangun datar dua dimensi yang dibentuk oleh dua pasang sisi yang masing-masing sama panjang dan sejajar dengan pasangannya, dan memiliki empat buah sudut yang kesemuanya adalah sudut siku-siku. Persegi panjang merupakan turunan dari segi empat yang mempunyai ciri khusus dua sisi sejajar sama panjang dan keempat sudutnya siku-siku (90°).\n
            Rusuk terpanjang disebut sebagai panjang ( p ) dan rusuk terpendek disebut sebagai lebar ( l ).`);
            imagePath(`https://upload.wikimedia.org/wikipedia/id/b/b2/Persegi_panjang.JPG`);
            inpRumus('2 * ( panjang + lebar)', `panjang * lebar`);
            inputNilai(inpMenu);
            break;
        case 'segi':
            pengertian(`Segitiga`, `Sebuah segitiga adalah poligon dengan tiga ujung dan tiga simpul. Ini adalah salah satu bentuk dasar dalam geometri.`);
            imagePath(`https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Equilateral-triangle-heights.svg/450px-Equilateral-triangle-heights.svg.png`);
            inpRumus('Sisi * 3 atau 3(sisi)', `1/2 * alas * tinggi`);
            inputNilai(inpMenu);
            break;
        case 'ling':
            pengertian(`Lingkaran`, `Lingkaran adalah bentuk yang terdiri dari semua titik dalam bidang yang berjarak tertentu dari titik tertentu, pusat; ekuivalennya adalah kurva yang dilacak oleh titik yang bergerak dalam bidang sehingga jaraknya dari titik tertentu adalah konstan. Jarak antara titik mana pun dari lingkaran dan pusat disebut jari-jari. Artikel ini adalah tentang lingkaran dalam geometri Euclidean, dan, khususnya, bidang Euclidean, kecuali jika dinyatakan sebaliknya.`);
            imagePath(`https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Circle-withsegments.svg/330px-Circle-withsegments.svg.png`);
            inpRumus('2 * phi * jari-jari atau phi * diameter', `Phi * jari-jari * jari-jari`);
            inputNilai(inpMenu);
            break;
        case 'jajaGenj':
            pengertian(`Jajar Genjang`, `Jajar genjang atau jajaran genjang adalah bangun datar dua dimensi yang dibentuk oleh dua pasang rusuk yang masing-masing sama panjang dan sejajar dengan pasangannya, dan memiliki dua pasang sudut yang masing-masing sama besar dengan sudut di hadapannya.

            Jajar genjang termasuk turunan segiempat yang mempunyai ciri khusus.
            
            Jajar genjang dengan empat rusuk yang sama panjang disebut belah ketupat. `);
            imagePath(`https://upload.wikimedia.org/wikipedia/id/9/90/Jajaran_genjang.JPG`);
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
            imagePath(`https://upload.wikimedia.org/wikipedia/id/1/18/Trapesium.JPG`);
            inpRumus(`Sisi atas + sisi kanan + sisi bawah + sisi kiri`, `(Sisi atas + sisi bawah) * t / 2`);
            inputNilai(inpMenu);
            break;
        case 'layaLaya':
            pengertian(`Layang - Layang`, `Layang-layang adalah bangun datar (bangun berdimensi dua) yang dibentuk oleh dua pasang sisi yang masing-masing pasangannya sama panjang dan saling membentuk sudut.

            Layang-layang merupakan turunan dari segi empat yang mempunyai ciri khusus dua sisi yang membentuk sudut sama panjang dan besaran sudut yang saling berhadapan sama besar. `);
            imagePath(`https://upload.wikimedia.org/wikipedia/id/5/5a/Layang.JPG`);
            inpRumus(`2 * (sisi kanan + sisi kiri)`, `Diagonal1 * diagonal2 / 2`);
            inputNilai(inpMenu);
            break;
        default:
            pengertian(`Persegi`, `Persegi adalah bangun datar dua dimensi yang dibentuk oleh empat buah rusuk ( a ) yang sama panjang dan memiliki empat buah sudut yang kesemuanya adalah sudut siku-siku. Bangun ini disebut juga sebagai <strong>bujur sangkar</strong>.`);
            imagePath(`https://upload.wikimedia.org/wikipedia/id/2/2d/Persegi.JPG`);
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
    var hasilKeli = document.getElementById('hasilKeli');
    var hasilLuas = document.getElementById('hasilLuas');
    
    if (inpMenu() === 'pers') {
        a = parseFloat(document.getElementById('nilaiSisiPers').value);

        return parseFloat(hasilKeli.value = a * 4, hasilLuas.value = a * a);
    } else if (inpMenu() === 'persPanj') {
        a = parseFloat(document.getElementById('nilaiPanjPersPanj').value);
        b = parseFloat(document.getElementById('nilaiLebaPersPanj').value);

        return parseFloat(hasilKeli.value = (a * 2) + (b * 2), hasilLuas.value = a * b);
    } else if (inpMenu() === 'segi') {
        a = parseFloat(document.getElementById('nilaiSisiSegi').value);
        b = parseFloat(document.getElementById('nilaiAlasSegi').value);
        c = parseFloat(document.getElementById('nilaiTingSegi').value);

        return parseFloat(hasilKeli.value = a * 3, hasilLuas.value = b * c / 2);
    } else if (inpMenu() === 'ling') {
        a = document.getElementById('nilaiROrDLing').value;
        b = parseFloat(document.getElementById('nilaiLing').value);

        if (a === 'd') {
            return parseFloat(hasilKeli.value = Math.PI * b, hasilLuas.value = Math.PI * Math.pow(b/2, 2));
        } else {
            return parseFloat(hasilKeli.value = 2 * Math.PI * b, hasilLuas.value = Math.PI * Math.pow(b, 2));
        }
    } else if (inpMenu() === 'jajaGenj') {
        a = parseFloat(document.getElementById('nilaiAlasJajaGenj').value);
        b = parseFloat(document.getElementById('nilaiSmJajaGenj').value);
        c = parseFloat(document.getElementById('nilaiTingJajaGenj').value);

        return parseFloat(hasilKeli.value = 2 * (a + b),hasilLuas.value = b * c / 2);
    } else if (inpMenu() === 'belaKetu') {
        a = parseFloat(document.getElementById('nilaiSisiBelaKetu').value);
        b = parseFloat(document.getElementById('nilaiDia1BelaKetu').value);
        c = parseFloat(document.getElementById('nilaiDia2BelaKetu').value);

        return parseFloat(hasilKeli.value = 4 * a, hasilLuas.value = a * b / 2);
    } else if (inpMenu() === 'trap') {
        a = parseFloat(document.getElementById('nilaiSisi1Trap').value);
        b = parseFloat(document.getElementById('nilaiSisi2Trap').value);
        c = parseFloat(document.getElementById('nilaiSisi3Trap').value);
        d = parseFloat(document.getElementById('nilaiSisi4Trap').value);
        e = parseFloat(document.getElementById('nilaiTingTrap').value);

        return parseFloat(hasilKeli.value = a + b + c + d, hasilLuas.value = (a + c) * e / 2);
    } else if(inpMenu() === 'layaLaya') {
        a = parseFloat(document.getElementById('nilaiSisiKanaLayaLaya').value);
        b = parseFloat(document.getElementById('nilaiSisiKiriLayaLaya').value);
        c = parseFloat(document.getElementById('nilaiSisiDiag1LayaLaya').value);
        d = parseFloat(document.getElementById('nilaiSisiDiag2LayaLaya').value);

        return parseFloat(hasilKeli.value = 2 * (a + b), hasilLuas.value = c * d / 2);
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
            return document.getElementById('nilaiSisiKanaLayaLaya').value = null,
            document.getElementById('nilaiSisiKiriLayaLaya').value = null, document.getElementById('nilaiSisiDiag1LayaLaya').value = null, document.getElementById('nilaiSisiDiag2LayaLaya').value = null;
        }
    }
}