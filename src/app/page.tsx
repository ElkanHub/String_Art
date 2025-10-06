// pages/index.js
"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  FaInstagram,
  FaPinterest,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";

export default function StringArtHomepage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const featuredProducts = [
    {
      id: 1,
      name: "Gift Size",
      price: "$30 || GHC300",
      description:
        "Size-30x30 cm. Handcrafted string art capturing the serene beauty of mountain landscapes at dusk.",
      image: "/mountain-sunset.jpg",
      isLimited: false,
    },
    {
      id: 2,
      name: "Signature Size",
      price: "$50 || GHC500",
      description:
        "Size-50x50 cm. Dynamic string art representing the rhythmic motion of ocean waves.",
      image: "/ocean-waves.jpg",
      isBestseller: true,
      isLimited: false,
    },
    {
      id: 3,
      name: "Premium Size",
      price: "$60 || GHC600",
      description:
        "Size-60x60 cm. Intricate design depicting a mystical journey through an enchanted forest.",
      image: "/forest-path.jpg",
      isNew: true,
      isLimited: false,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Freeman.",
      content:
        "The string art I purchased exceeded my expectations. It's now the centerpiece of my living room!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Tewiah.",
      content:
        "Incredible craftsmanship and attention to detail. This was the perfect anniversary gift.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma.",
      content:
        "I just love the way the way the strings create the image. It's so unique and beautiful.",
      rating: 4,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your inquiry! We will contact you soon.");
    setEmail("");
    setName("");
    setMessage("");
  };

  // Step 1: List your background images
    const images = [
    '/hero1.png',
    '/hero2.png',
    '/hero3.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Head>
        <title>Artisan Strings | Handcrafted String Art</title>
        <meta
          name="description"
          content="Transform your space with our handcrafted string art pieces. Each creation tells a unique story through intricate thread patterns."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="z-100 fixed top-0 left-0 right-0 flex items-center justify-between p-6 bg-white shadow-sm">
        <div className="text-2xl font-bold text-amber-700">Artisan Strings</div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#products"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Gallery
          </a>
          <a
            href="#process"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Our Process
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-amber-600 transition-colors"
          >
            Contact
          </a>
        </div>
        <a href="#contact">
          <Button className="bg-amber-600 hover:bg-amber-700">Order Now</Button>
        </a>
      </nav>

      {/* Hero Section */}
      <section
        className={` mt-18 relative py-16 px-4 md:px-8 text-center max-w-4xl mx-auto transition-all ease-in-out`}>
         {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Background ${index + 1}`}
          fill
          priority={index === currentImage}
          quality={85}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
         ))}
        
        <div className="absolute inset-0 bg-amber-50/80"></div>
        <div className="relative z-10">
          <Badge className="mb-4 bg-amber-100 text-amber-800">
            100% Handcrafted with Love
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Where Threads Tell Stories
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Each string art piece is meticulously crafted to transform your
            space and evoke emotions through the interplay of color, shadow, and
            texture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
            Explore Collection
          </Button> */}
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-lg px-8"
            >
              Watch Our Process
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Free shipping on orders over $40 • 30-day satisfaction guarantee
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Featured Creations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved pieces, each telling a unique story
              through intricate thread patterns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gradient-to-r from-amber-200 to-amber-300 flex items-center justify-center">
                  <span className="text-gray-700">Product Image</span>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <span className="text-lg font-semibold text-amber-700">
                      {product.price}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {product.isLimited && (
                      <Badge className="bg-red-100 text-red-800">
                        Limited Edition
                      </Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-green-100 text-green-800">
                        Bestseller
                      </Badge>
                    )}
                    {product.isNew && (
                      <Badge className="bg-blue-100 text-blue-800">New</Badge>
                    )}
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  {/* <span className="text-sm text-gray-500">⭐ {product.reviews} reviews</span> */}
                  <a href="#contact-form">
                    <Button
                      onClick={() => {
                        setMessage(
                          `Hello, \nI am interested in the ${product.name.toUpperCase()}. \nI want to place an order. \n[......Add extra details and requests here.....]`
                        );
                      }}
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      Place Order
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              View Full Collection
            </Button>
          </div> */}
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              The Art Behind Our Craft
            </h2>
            <p className="text-gray-600">
              Each piece is a labor of love, taking over 20 hours to complete
            </p>
          </div>

          <Tabs defaultValue="design" className="w-full ">
            <TabsList className="grid w-full grid-cols-4 bg-amber-500/50">
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="creation">Creation</TabsTrigger>
              <TabsTrigger value="finishing">Finishing</TabsTrigger>
            </TabsList>
            <TabsContent value="design" className="mt-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">
                    Inspired by Nature
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Every design begins with a concept inspired by natural
                    landscapes, emotions, or abstract ideas. We sketch and
                    refine until the vision perfectly captures the intended
                    feeling.
                  </p>
                  <p className="text-gray-600">
                    This design phase ensures that each piece will not only be
                    beautiful but will also evoke the intended emotional
                    response from its viewer.
                  </p>
                </div>
                <div className="md:w-1/2 h-64 bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-700">Design Process Image</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="materials" className="mt-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">
                    Quality Materials
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We source only the finest materials for our art pieces. From
                    premium threads in a spectrum of colors to sustainably
                    harvested wood for our frames, quality is never compromised.
                  </p>
                  <p className="text-gray-600">
                    Each material is selected not just for its aesthetic
                    qualities but for its durability and ability to maintain its
                    beauty for years to come.
                  </p>
                </div>
                <div className="md:w-1/2 h-64 bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-700">Materials Image</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="creation" className="mt-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">
                    Meticulous Craftsmanship
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The creation process is where our art truly comes to life.
                    Each string is carefully placed, sometimes hundreds of
                    times, to create the intricate patterns and shading that
                    give our pieces their unique character.
                  </p>
                  <p className="text-gray-600">
                    This painstaking process can take over 20 hours for a single
                    piece, ensuring every detail is perfect.
                  </p>
                </div>
                <div className="md:w-1/2 h-64 bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-700">Creation Process Image</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="finishing" className="mt-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">
                    The Final Touch
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Once the string work is complete, each piece undergoes a
                    rigorous finishing process. This includes securing all
                    threads, applying protective coatings, and carefully
                    packaging to ensure it arrives in perfect condition.
                  </p>
                  <p className="text-gray-600">
                    Before leaving our studio, every piece is personally
                    inspected by the artist to ensure it meets our exacting
                    standards.
                  </p>
                </div>
                <div className="md:w-1/2 h-64 bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-700">Finishing Process Image</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Collectors Say
            </h2>
            <p className="text-gray-600">
              Join thousands of satisfied customers who have transformed their
              spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < testimonial.rating
                            ? "text-amber-500"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Art Community on Social Media
          </h2>
          <p className="mb-8 text-amber-100">
            Join us for exclusive offers, early access to new collections, and a
            free guide to caring for your string art.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-2xl md:text-6xl hover:text-gray-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-2xl md:text-6xl hover:text-gray-200"
            >
              <FaPinterest />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-2xl md:text-6xl hover:text-gray-200"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-2xl md:text-6xl hover:text-gray-200"
            >
              <FaYoutube />
            </a>

            {/* <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="bg-gray-800 hover:bg-gray-900 text-white">Subscribe</Button> */}
          </div>
          {/* <p className="mt-4 text-sm text-amber-100">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Create Your Custom Piece
            </h2>
            <p className="text-gray-600">
              Have a vision in mind? Let us bring it to life with our custom
              string art service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Commission Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Consultation</h4>
                    <p className="text-gray-600 text-sm">
                      Share your vision, preferred size, color palette, and
                      timeline.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Design Proposal</h4>
                    <p className="text-gray-600 text-sm">
                      We&apos;ll create a custom design concept for your
                      approval.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Creation</h4>
                    <p className="text-gray-600 text-sm">
                      Once approved, our artist begins crafting your unique
                      piece.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Delivery</h4>
                    <p className="text-gray-600 text-sm">
                      Your completed artwork is carefully packaged and shipped
                      to you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Custom Commission FAQ</h4>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Timeline:</strong> Custom pieces typically take 4-6
                  weeks to complete.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Pricing:</strong> Starts at $200 and varies based on
                  size and complexity.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Deposit:</strong> 50% deposit required to begin work.
                </p>
              </div>
            </div>

            <div id="contact-form">
              <Card>
                <CardHeader>
                  <CardTitle>Request a Consultation</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll contact you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <Label htmlFor="message">Tell us about your Order.</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700"
                    >
                      Send Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-500">
                Artisan Strings
              </h3>
              <p className="text-gray-400">
                Transforming spaces with handcrafted string art since 2018.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Shop All
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Custom Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Pinterest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@artisanstrings.com</li>
                <li>(555) 123-4567</li>
                <li>Mon-Fri: 9am-5pm EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2023 Artisan Strings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
