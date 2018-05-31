const dataBarang = [
  {
    name: "Uncharted 4",
    category: "Games",
    price: 500000,
    city: "Jakarta"
  },
  {
    name: "Adidas Jogger Pants",
    category: "Sport",
    price: 400000,
    city: "Tangerang"
  },
  {
    name: "Nike",
    category: "Running",
    price: 750000,
    city: "Bogor"
  },
  {
    name: "Man Shirt with Mandarin Collar",
    category: "Fashion",
    price: 350000,
    city: "Bandung"
  },
  {
    name: "Rise of Tomb Raider",
    category: "Games",
    price: 750000,
    city: "Jakarta"
  }
];

dataBarang.map((item, idx) => {
  const namabarang = item.name;
  const kategoribarang = item.category;
  const hargabarang = item.price;
  const kotabarang = item.city;

  const pajak = hitungpajak(hargabarang);
  const diskon = hitungdiskon(hargabarang);
  const hargaongkir = hitungongkir(kotabarang);
  const hargaakhir = hitungtotalhargabarang(
    hargabarang,
    pajak,
    hargaongkir,
    diskon
  );

  console.log(`${hargaakhir}`);
});

const hitungpajak = harga => { //KATA OMNYA SALAH
  const totalharga = harga * 0.15;
  return totalharga;
};

const hitungongkir = city => {
  let totalongkir;
  if (city == "jakarta") {
    totalongkir = 10000;
  } else if (city == "tangerang") {
    totalongkir = 15000;
  } else if (city == "bandung") {
    totalongkir = 20000;
  } else {
    totalongkir = 17000;
  }
  return totalongkir;
};

const hitungdiskon = harga => {
  const totaldiskon = harga * 0.1;
  return totaldiskon;
};

const hitungtotalhargabarang = (originalprice, tax, shipping, discount) => {
  const nettprice = originalprice + tax + shipping - discount;
  return nettprice;
};
