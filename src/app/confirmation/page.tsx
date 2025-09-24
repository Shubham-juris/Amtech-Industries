import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { ScrollAnimation } from '@/components/scroll-animation';

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-20 flex items-center justify-center">
      <ScrollAnimation>
        <Card className="max-w-lg w-full text-center shadow-lg">
          <CardHeader className="items-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <CardTitle className="text-3xl text-primary">Thank You for Your Order!</CardTitle>
            <CardDescription className="text-lg">
              Your order has been successfully placed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              You will receive an email confirmation shortly with your order details. We appreciate your business with Amtech Industries.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      </ScrollAnimation>
    </div>
  );
}
