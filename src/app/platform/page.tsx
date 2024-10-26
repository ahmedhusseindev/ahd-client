"use client";

import Hero from "@/components/heros/Hero";
import Header from "@/components/headers/Header";
import Container from "@/components/containers/Container";

const Page = () => {
  return (
    <>
      <Hero />
      <Header title="Collections" />
      <Container />
      <Header title="Popular restaurant in countery" />
      <Container />
    </>
  );
};

export default Page;
