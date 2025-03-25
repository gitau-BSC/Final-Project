import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Link, useNavigate} from 'react-router-dom'
import studentDetailsStore from "../../../store/studentDetails.js"
import {useMutation} from 'react-query'
import {useState} from 'react'
import apiUrl from "../../../services/apiUrl.js"
import {toast} from "sonner"




export default function LoginPage() {
  const[emailOrStudentId, setEmailOrStudentId] = useState('')
  const[password, setPassword] = useState('')
  const redirect = useNavigate();

  const setStudent = studentDetailsStore((state) => state.setStudent);

  const {isLoading, mutate} = useMutation({
    mutationFn: async (studentDetails) => {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentDetails),
        credentials: 'include'
      });

      if (response.ok === false) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      return data;
    },

    onError: (error) => {
      toast.error(error.message);
    },

    onSuccess: (data) => {
      toast.success(`Weclome back ${data.student.fullnames} to our site`);
      setStudent(data.student);
      setTimeout(() => {
        redirect('/dashboard');
      }, 2000);
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({emailOrStudentId, password});
  }


  return (
    <div className="w-screen flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6 p-5 border rounded-md" action="#" method="POST">
            <div className="rounded-md shadow-sm space-y-5">
              <div>
                <Label htmlFor="email-address" className="sr-only">
                  Email address or Student ID
                </Label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="rounded-t-md"
                  placeholder="Email address or Student ID"
                  value={emailOrStudentId}
                  onChange={(e) => setEmailOrStudentId(e.target.value)}
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
                  autoComplete="current-password"
                  required
                  className="rounded-b-md"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </Label>
              </div>

              <div className="text-sm">
                <Link to="#" className="font-medium text-primary hover:text-primary-dark">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full"
              onClick={handleSubmit}
              disabled={isLoading}
              >
               {
                isLoading ? "logging in..." : "Sign in"
               }
              </Button>
            </div>
          </form>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-primary hover:text-primary-dark">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

