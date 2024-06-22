import { db } from "@/lib/db"

async function main() {
  // Membuat pengguna baru
  const user = await db.user.create({
    data: {
      email: '',
      password: '',
      name: '',
    },
  });
}
  

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await db.$disconnect();
  })
