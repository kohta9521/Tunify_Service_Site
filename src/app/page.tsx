import Button from "@/components/atoms/Button";
import Header from "@/components/organisms/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Button size="lg" color="secondary" />
      <Button size="md" color="secondary" />
      <Button size="sm" color="secondary" />
      <Button size="lg" color="primary" />
      <Button size="md" color="primary" />
      <Button size="sm" color="primary" />
      <Button size="lg" color="danger" />
      <Button size="md" color="danger" />
      <Button size="sm" color="danger" />
    </main>
  );
}
