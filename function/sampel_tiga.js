const datasepatu ={
    brand: 'nike',
    type: 'jordan',
    category: 'sport',
    price: 750000,
    kota: 'jakarta',
    color: 'green'
}

const hitungpajak = harga => {
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
    
    const hargasepatu = 650000;
    const kota = "jakarta";
    
    const pajak = hitungpajak(datasepatu.price);
    const diskon = hitungdiskon(hargasepatu);
    const hargaongkir = hitungongkir(datasepatu.kota);
    const hargaakhir = hitungtotalhargabarang(
      hargasepatu,
      pajak,
      hargaongkir,
      diskon
    );
    console.log(hargaakhir);