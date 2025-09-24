'use client';

import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useEffect } from 'react';
import { ScrollAnimation } from '@/components/scroll-animation';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  address: z.string().min(5, { message: 'Address must be at least 5 characters.' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters.' }),
  zip: z.string().min(5, { message: 'ZIP code must be at least 5 characters.' }),
});

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
    },
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/');
    }
  }, [cartItems, router]);


  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Order submitted:', values);
    clearCart();
    router.push('/confirmation');
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  if (cartItems.length === 0) {
    return null; // or a loading spinner, or a redirect message
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Checkout</h1>
      </ScrollAnimation>
      <div className="grid lg:grid-cols-2 gap-12">
        <ScrollAnimation>
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Innovation Dr" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                          <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                              <Input placeholder="Techville" {...field} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                      )}
                      />
                      <FormField
                      control={form.control}
                      name="zip"
                      render={({ field }) => (
                          <FormItem>
                          <FormLabel>ZIP Code</FormLabel>
                          <FormControl>
                              <Input placeholder="90210" {...field} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                      )}
                      />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                    Place Order
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64 pr-4">
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                          <div className="relative h-16 w-16 rounded-md overflow-hidden">
                              <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                      </div>
                      <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <Separator className="my-4" />
              <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>Free</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>{formatPrice(cartTotal)}</span>
                  </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  );
}
