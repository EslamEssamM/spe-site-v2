import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { BookOpen } from "lucide-react";
import { magazines } from "@/data/magazines"; // Import the magazines data

export default function MagazinesList() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16"
      id="home"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          SPE Suez Chapter Magazines
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {magazines.map((magazine) => (
            <motion.div
              key={magazine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredId(magazine.id || 1)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <Card className="bg-gray-800 text-white overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    src={magazine.cover}
                    alt={`${magazine.title} cover`}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-blue-600">
                    {magazine.year}
                  </Badge>
                </div>
                <CardContent className="flex-grow flex flex-col p-6">
                  <h2 className="text-2xl font-bold mb-2">{magazine.title}</h2>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {magazine.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      Editor: {magazine.editor}
                    </span>
                    <Badge variant="outline">{magazine.pageCount} pages</Badge>
                  </div>
                  <Link to={`/magazine/${magazine.id}`} className="mt-4">
                    <Button className="w-full group" variant="outline">
                      <span className="mr-2">Read Magazine</span>
                      <BookOpen className="w-4 h-4 transition-transform group-hover:rotate-12" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              {hoveredId === magazine.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
