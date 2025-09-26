'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollAnimation } from '@/components/scroll-animation';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().optional(),
  quantity: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const officeLocations = [
    {
        name: '5017 50 Street',
        address: '5017 50 Street Llydminster, SK',
        phone: '780 - 870 - 2905',
        email: 'amtechindustries2@gmail.com'
    }
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      phone: '',
      quantity: '',
      country: ''
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Contact form submitted:', values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 flex items-center justify-center">
        <ScrollAnimation>
            <Card className="max-w-lg w-full text-center shadow-lg">
                <CardHeader className="items-center">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                    <CardTitle className="text-3xl text-primary">Message Sent!</CardTitle>
                    <CardDescription className="text-lg">
                    Thank you for contacting us.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                    We have received your message and will get back to you shortly.
                    </p>
                </CardContent>
            </Card>
        </ScrollAnimation>
      </div>
    );
  }

  return (
    <div>
        <section className="relative h-[50vh] flex items-center justify-start text-white">
            <div className="absolute inset-0">
                <Image
                    src={getImage('contact_hero').url}
                    alt="Woman working on a laptop"
                    data-ai-hint={getImage('contact_hero').hint}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative container mx-auto px-4 z-10">
                <ScrollAnimation>
                    <h1 className="text-5xl font-bold mb-2">Contact Us</h1>
                    <p className="text-lg">Home / Contact Us</p>
                </ScrollAnimation>
            </div>
        </section>
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12">
                <aside>
                    <ScrollAnimation>
                        <Accordion type="single" collapsible defaultValue={officeLocations[0].name} className="w-full">
                            {officeLocations.map(location => (
                                <AccordionItem value={location.name} key={location.name}>
                                    <AccordionTrigger className="font-semibold text-lg py-4">{location.name}</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-3 text-muted-foreground">
                                            <p className="flex items-start gap-3">
                                                <MapPin className="h-5 w-5 mt-1 text-primary"/>
                                                <span>{location.address}</span>
                                            </p>
                                            <p className="flex items-center gap-3">
                                                <Phone className="h-5 w-5 text-primary"/>
                                                <span>{location.phone}</span>
                                            </p>
                                            <p className="flex items-center gap-3">
                                                <Mail className="h-5 w-5 text-primary"/>
                                                <span>{location.email}</span>
                                            </p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </ScrollAnimation>
                </aside>
                <main>
                    <ScrollAnimation>
                        <h2 className="text-2xl font-bold mb-4">We Will Get Back to You Within One Business Day.</h2>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Input placeholder="Name" {...field} />
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
                                            <FormControl>
                                            <Input placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Input placeholder="Phone" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="quantity"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                            <Input placeholder="Quantity" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Input placeholder="Country" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Textarea placeholder="Message" className="min-h-[120px]" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" size="lg">
                                    Submit
                                </Button>
                            </form>
                        </Form>
                    </ScrollAnimation>
                </main>
            </div>
        </div>
    </div>
  );
}
