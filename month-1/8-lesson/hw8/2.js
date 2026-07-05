const yil = 2024;

const fevral = new Date(yil, 2, 0).getDate();

if (fevral === 29) {
    console.log(`${yil} - kabisa yili`);
} else {
    console.log(`${yil} - oddiy yil`);
}