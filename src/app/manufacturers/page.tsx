import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ManufacturersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-primary text-center">Our Manufacturers</CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-muted-foreground">
          <p>
            We partner with the world's leading manufacturers to bring you top-tier components and products. Our partners are selected through a rigorous process to ensure they meet our high standards of quality, innovation, and ethical practices.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
