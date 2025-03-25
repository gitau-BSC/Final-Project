import {Link} from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react'
import { toast } from 'sonner'
import {useMutation} from 'react-query'
import apiUrl from "../../../services/apiUrl"
import { useNavigate } from 'react-router-dom'

export default function SignupPage() {
  const [schoolId, setSchoolId] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = useNavigate();


   const {isLoading, mutate} = useMutation({
    mutationFn: async (registerData) => {
      const response = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if(response.ok === false){
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      return data;
    },

    onError: (error) => {
      toast.error(error.message);
    },

    onSuccess: () => {
      toast.success("account created successfully");

      setTimeout(() => {
        redirect("/login");
      }, 2000)
    }
   });

  const handleSumbit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    }

    const studentInfo = {
      schoolId,
      fullName,
      email,
      password
    }

    mutate(studentInfo);
  }

  return (
    <div className="w-screen flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          </div>
          <form className="mt-8 space-y-6 border rounded-md p-4" action="#" method="POST">
            <div className="rounded-md shadow-sm space-y-5 p-2">
              <div>

                <Label htmlFor="name" className="sr-only">
                  School id
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="rounded-t-md"
                  placeholder="School Id"
                  value={schoolId}
                  onChange={(e) => setSchoolId(e.target.value)}
                />
              </div>
              <div>

                <Label htmlFor="name" className="sr-only">
                Full Names
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="rounded-t-md"
                  placeholder="Enter Full Names"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>


              <div>
                <Label htmlFor="email-address" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="rounded-b-md"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full"
                onClick={handleSumbit}
                disabled={isLoading}
              >
                {
                  isLoading ? "registering student" : "Sign up"
                }
              </Button>
            </div>
          </form>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary hover:text-primary-dark">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

