import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WholesalePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-primary text-center">Wholesale Inquiries</CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-muted-foreground">
          <p>
            Amtech Industries is proud to offer wholesale opportunities for businesses looking to carry our products. We provide competitive pricing and dedicated support for our wholesale partners. Please use the contact form for any inquiries.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
