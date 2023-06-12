import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {user.isSignedIn ? (
            <SignOutButton>
              <span className="text-white">Sign Out</span>
            </SignOutButton>
          ) : (
            <SignInButton>
              <span className="text-white">Sign In</span>
            </SignInButton>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;