'use server'
import { PrismaClient } from "@prisma/client";
import { useUser } from "@clerk/nextjs";

const TeamsPage = () => {
  const users = useUser();
  const idOnClerk = users.isSignedIn ? users.isLoaded : null;
  return (
    <section>
      <h1>Team</h1>
    </section>
  );
};

export default TeamsPage;
