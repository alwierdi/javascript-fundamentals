let hero = prompt("Choose Your Hero : ");

// alert("Your hero is " + hero);
alert(`Your hero is ${hero}`);

for (let i = 0; i < 5; i++) {
  console.log("alwi");
}

let namaGuru = ["alwi", "azka", "zidan"];
for (let x = 0; x < namaGuru.length; x++) {
  console.log(namaGuru[x]);
}

let hari = new Date().getDay();
switch (hari) {
  case 1:
    hari = "Senin";
    break;

  case 2:
    hari = "Selasa";
    break;

  case 3:
    hari = "Rabu";
    break;

  case 4:
    hari = "Kamis";
    break;

  case 5:
    hari = "Jumat";
    break;

  case 6:
    hari = "Sabtu";
    break;

  case 0:
    hari = "Minggu";
    break;
}

alert(`Sekarang hari ${hari}`);
