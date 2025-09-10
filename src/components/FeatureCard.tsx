import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

const FeatureCard = ({ icon: Icon, title, description, gradient = "bg-gradient-to-br from-primary/10 to-accent/10" }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className={`w-12 h-12 rounded-lg ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;