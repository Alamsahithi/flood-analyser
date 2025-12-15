
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Globe, Shield, MapPin } from "lucide-react";
export default function Home() {
  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full mr-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">
              Flood Detection System
            </h1>
          </div>
          <p className="text-slate-600">
            Analyze flood risk using coordinates or upload images for AI-powered
            terrain analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Input Section */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Analysis Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs
                defaultValue="coordinates"
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="coordinates"
                    className="flex items-center gap-2"
                  >
                    <MapPin className="h-4 w-4" />
                    Coordinates
                  </TabsTrigger>
                  </TabsList>
                  </Tabs>
            </CardContent>
          </Card>
          </div>
      </div>
    </div>
);

}
