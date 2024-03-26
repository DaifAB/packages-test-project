'use client';

import {
  CardsSection,
  FooterLanding,
  HeroSection,
  ImageSection,
  TestimonialsSection,
  VideoSection,
} from '@mmpg-soft/components';

export default function Home() {
  const features = [
    {
      title: 'Feature 1',
      description:
        'This is a feature description. It can be short or long, but it should be clear and easy to understand.',
      imageUrl:
        'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_108c04p00000000000001o.jpg',
    },
    {
      title: 'Feature 2',
      description:
        'This is a feature description. It can be short or long, but it should be clear and easy to understand.',
      imageUrl:
        'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_108c04p00000000000001o.jpg',
    },
    {
      title: 'Feature 3',
      description:
        'This is a feature description. It can be short or long, but it should be clear and easy to understand.',
      imageUrl:
        'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_108c04p00000000000001o.jpg',
    },
  ];

  const testimonials: any = [
    {
      surname: 'Mikael',
      lastname: 'G.',
      rating: 5,
      position: 'Independent Consultant',
      company: 'Freelance',
      text: 'Leadia allows me to post regularly on LinkedIn and on my blog without investing too much time on it. Fantastic!',
      avatar: null,
      country: 'ES',
    },
    {
      surname: 'Anne',
      lastname: 'B.',
      rating: 4.5,
      position: 'General Director',
      company: 'Néon Mex SA',
      text: 'We generate specialized articles and marketing materials for our blog, print brochures and some Facebook post. Best way to keep our clients engaged.',
      avatar: null,
      country: 'CH',
    },
    {
      surname: 'Kevin',
      lastname: 'L.',
      rating: 5,
      position: 'Senior Consultant',
      company: 'Big Four Consulting Company',
      text: "I often use Leadia for my emailing and communications. It's a great tool to keep my clients engaged and informed. I love it!",
      avatar: null,
      country: 'NL',
    },
  ];
  return (
    <main className="">
      <HeroSection
        bgImage="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_11hc0nw00000000000001o.jpg"
        title="Describe the value of booking an appointment"
        description="No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition."
      />

      <VideoSection
        className="bg-text/20 text-text"
        title="Show visitors what they're signing up for"
        description="Include a video or photo from one of your sessions to help people understand your service (or just to hype 'em up)."
        videoUrl="https://www.youtube.com/embed/C0DPdy98e4c"
        // videoUrl="/assets/videos/TEST VIDEO.mp4"
      />

      <TestimonialsSection
        contentPerSlide={3}
        testimonials={testimonials}
        sectionTitle="DON'T JUST TAKE OUR WORD FOR IT"
        sectionTitleStyle="text-[#00C2C5] tracking-widest"
      />

      <CardsSection data={features} />
      <ImageSection
        topTitle="About"
        topTitleStyle="text-[#00C2C5] uppercase font-bold"
        title="Some more information about your business"
        description="Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you."
        image="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10cs0b400000000000001o.jpg"
        textsPartStyle="gap-5 max-w-[100%] md:max-w-[40%]"
      />

      <FooterLanding
        logoUrl="https://leadia.mmpg.xyz/_next/image?url=%2Fimages%2Flanding-page%2Flogo-leadia-white.png&w=128&q=75"
        copyrightText="Developed by MMPG Softwares"
        bgColor="bg-text"
      />
    </main>
  );
}
