import prismaClient from "../src/services/db";
import medicines from './medicine.json'
import users from './users.json'
import transaction_history from './transaction_history.json'

const toISOString = (datetime: string): string => {
  // Replace space with 'T' and add 'Z' for UTC if needed
  const iso = new Date(datetime.replace(' ', 'T')).toISOString();
  return iso;
};


async function main() {
    console.log("HELLO")
    const res = await prismaClient.medicine.createMany({
        data: medicines.map((e)=>({id: e.id, name: e.medicine_name, brief: e.brief, description: e.description, imageUrl: e.photo_link})),
        skipDuplicates: true
    })
    
    await prismaClient.user.createMany({
      data: users.map((e)=> ({...e, id:parseInt(e.id)})),
      skipDuplicates: true
    })

    await prismaClient.transactionHistory.createMany({
      data: transaction_history.map((e)=> ({medicineId: parseInt(e.medicineId), userId: parseInt(e.userId), price: parseInt(e.price), amount: parseInt(e.amount), createdAt: toISOString(e.timestamp)})),
      skipDuplicates: true
    })
    await prismaClient.$executeRawUnsafe(`
      ALTER SEQUENCE "User_id_seq" RESTART WITH 1000;
    `);
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