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
    </>
  );
};

export default Page;
