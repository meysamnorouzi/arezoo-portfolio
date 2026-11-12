import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <h1 className="headline display-lg text-white">This page isn’t here.</h1>
      <p className="mx-auto mt-5 max-w-md font-ui text-[16px] font-medium text-subtle">
        The path you opened doesn’t match a page. Head back to the work.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/projects" variant="solid">
          View Work
        </Button>
      </div>
    </Container>
  );
}
