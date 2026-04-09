import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="p-6">
      <h1>Admin Dashboard</h1>
    </div>
  );
}