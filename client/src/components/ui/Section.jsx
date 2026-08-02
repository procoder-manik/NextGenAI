import Container from "./Container";

export default function Section({
  children,
  className = "",
  id,
  dark = false,
  containerClassName = "",
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 lg:py-28 ${
        dark
          ? "bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]"
          : "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
      } ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}