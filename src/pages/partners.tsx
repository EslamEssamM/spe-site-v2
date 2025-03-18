import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, ExternalLink, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import dataCampImage from "@/assets/news/datacamp.webp";
import etsImage from "@/assets/news/ets.webp";
import dataCampLogo from "@/assets/logos/data-camp-logo.svg";
import etsLogo from "@/assets/logos/ets.svg";

function PartnersPage() {
  const partnerships = [
    {
      name: "DataCamp",
      description: "Free Scholarship Program",
      logo: dataCampLogo,
      image: dataCampImage,
      deadline: "27/11/2024",
      benefits: [
        "Full year of free access to all DataCamp courses",
        "440+ courses on data science, machine learning, Python, R, SQL, and more",
        "Learn from industry experts and apply skills through real-world projects",
      ],
      applyLink: "https://forms.gle/jMTfSGep5Fwu32cr9",
      viewMoreLink: "/data-camp",
    },
    {
      name: "ETS TOEFL iBT®",
      description: "25% Discount on TOEFL iBT® Exam",
      logo: etsLogo,
      image: etsImage,
      deadline: "Ongoing",
      benefits: [
        "25% off on TOEFL iBT® exam registration",
        "Widely recognized by thousands of institutions globally",
        "Comprehensive assessment of all four key English skills",
      ],
      applyLink: "https://forms.gle/m7Au3jMMW3QY85ax9",
      viewMoreLink: "/ets",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 px-4 pt-16 ">
      <div className="container mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-8 text-center text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Partnerships
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerships.map((partnership, index) => (
            <motion.div
              key={partnership.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="relative border-none overflow-hidden shadow-2xl h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${partnership.image})` }}
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10" />
                <div className="relative z-20">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <img
                        src={partnership.logo || "/placeholder.svg"}
                        alt={`${partnership.name} Logo`}
                        className="h-12 object-contain"
                      />
                      <div className="flex items-center bg-blue-600/30 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 mr-2 text-yellow-300" />
                        <span className="text-sm font-semibold text-yellow-300">
                          Deadline: {partnership.deadline}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                      {partnership.name}
                    </CardTitle>
                    <CardDescription className="text-lg sm:text-xl text-cyan-300">
                      {partnership.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                      Key Benefits
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {partnership.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-white/85">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() =>
                        window.open(partnership.applyLink, "_blank")
                      }
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white transition-colors font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
                    >
                      Apply Now
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                      asChild
                      //   variant="secondary"
                      size="lg"
                      className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 transition-colors font-bold py-2 px-4 rounded-full"
                    >
                      <Link to={partnership.viewMoreLink}>View More</Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            asChild
            // variant="secondary"
            size="lg"
            className="text-white border-white/20 hover:bg-white/10 transition-colors text-lg font-bold py-2 px-6 rounded-full"
          >
            <Link to="/">Back to Home</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default PartnersPage;
