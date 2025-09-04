import { getCurrentUserFromSupabase } from "@/actions/users";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
async function UserDashboardPage() {
  const user = await currentUser();
  const supabaseUserResponse = await getCurrentUserFromSupabase();
 

  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <h1>User Dashboard Page</h1>
        <UserButton />

        <div className="flex flex-col gap-2 ">
          <h1 className="text-3xl font-semibold text-gray-800 sm:text-5xl">Welcome back, {user?.firstName + " " + user?.lastName}</h1>
          <p className="text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Ready to continue your exam preparation journey?</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
               <Card className="">
            <CardHeader>
              <div className="">
              <CardTitle>Total Exams</CardTitle>
              <CardContent className="text-4xl">12</CardContent>
              <CardDescription>Exams completed</CardDescription>
              </div>
              
            </CardHeader>
          </Card>
          <Card className="">
            <CardHeader>
              <div className="">
              <CardTitle>Average Score</CardTitle>
              <CardContent className="text-4xl">78%</CardContent>
              <CardDescription>Across all exams</CardDescription>
              </div>
              
            </CardHeader>
          </Card>
          <Card className="">
            <CardHeader>
              <div className="">
              <CardTitle>Improvement</CardTitle>
              <CardContent className="text-4xl">+15%</CardContent>
              <CardDescription>Exams completed</CardDescription>
              </div>
              
            </CardHeader>
          </Card>
          
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 sm:text-3xl">Filter Exams below</h1>
            <p className="text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Choose country, certificate type, year and subject</p>
          </div>
      </div>
    </>
  );
}

export default UserDashboardPage;
