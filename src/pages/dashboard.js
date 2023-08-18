import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <SignedIn>Signed in</SignedIn>
      <SignedOut>Signed out</SignedOut>
    </div>
  );
}
