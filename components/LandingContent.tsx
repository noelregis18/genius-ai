"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Shrikant",
    avatar: "S",
    title: "Software Developer",
    description: "this is the best application in the market",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "Sr Software Developer",
    description: "Hands on the best application in the market",
  },
  {
    name: "Anshika",
    avatar: "A",
    title: "Software Developer",
    description: "Could not get the best of it",
  },
  {
    name: "Hrithik",
    avatar: "H",
    title: "Software Developer",
    description: "This is a wonderful application",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-3 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
