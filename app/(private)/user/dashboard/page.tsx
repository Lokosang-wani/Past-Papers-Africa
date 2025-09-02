import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
async function UserDashboardPage() {
  const user = await currentUser();

  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <h1>User Dashboard Page</h1>
        <UserButton />

        <div className="flex flex-col gap-2">
          <h1>clerk User ID : {user?.id}</h1>
          <h1>Clerk User Email : {user?.emailAddresses[0].emailAddress}</h1>
          <h1>User Full Name: {user?.firstName + " " + user?.lastName}</h1>
          <h1>Username : {user?.username}</h1>
          <h1>
            User Profile Picture :{" "}
            <img
              src={user?.imageUrl}
              alt="user profile picture"
              className="w-20 h-20 rounded-full"
            />{" "}
          </h1>
        </div>
      </div>
    </>
  );
}

export default UserDashboardPage;
