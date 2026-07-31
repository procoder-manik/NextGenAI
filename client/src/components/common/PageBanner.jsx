import Container from "../ui/Container";

export default function PageBanner({
  title,
  description,
}) {
  return (
    <section className="bg-gray-50 py-20 border-b">
      <Container>
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>

        <p className="text-gray-600 max-w-2xl">
          {description}
        </p>
      </Container>
    </section>
  );
}