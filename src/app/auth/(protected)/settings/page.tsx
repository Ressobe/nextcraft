import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";

export default async function SettingsPage() {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)} <LogoutButton />
    </div>
  );
}
