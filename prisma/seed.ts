import prismaClient from "../src/services/db";
import medicines from './medicine.json'

async function main() {
    console.log("HELLO")
    const res = await prismaClient.medicine.createMany({
        data: medicines.map((e)=>({id: e.id, name: e.medicine_name, brief: e.brief, description: e.description, imageUrl: e.photo_link})),
        skipDuplicates: true
    })
    console.log(res)
}


main()
  .then(() => {
    console.log('Seeding completed.');
  })
  .catch((e) => {
    console.error('Seeding error:', e);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });