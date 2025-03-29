import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { authApi } from '@/api/authApi';
import { useNavigate } from 'react-router';
import { AxiosError } from 'axios';
import { useAuth } from '@/components/AuthContext';

const formSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

function Login() {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await authApi.login(values);
      if (res?.token) {
        localStorage.setItem('token', res.token);
        setToken(res.token);
        toast.success('Login Successfull');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError && error.response?.data.error) {
        form.setError('root.serverError', {
          message: error.response.data.error,
        });
      } else {
        form.setError('root.serverError', {
          message: 'Something went wrong. Please try again.',
        });
      }
    }
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="mb-2" type="submit">
                  Submit
                </Button>
                {form.formState.errors.root?.serverError && (
                  <p className="text-red-500 text-sm text-center">
                    {form.formState.errors.root.serverError.message}
                  </p>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default Login;
