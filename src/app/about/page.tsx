import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-primary text-center">About Amtech Industries</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              Welcome to Amtech Industries, where innovation meets excellence. We are dedicated to providing the most advanced and reliable technological solutions on the market.
            </p>
            <p>
              Our journey began with a simple mission: to push the boundaries of what's possible. Today, we are a leading name in the tech industry, known for our cutting-edge products and commitment to quality.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
