function HomePage() {
  return (
    <div>
      <div>Welcome to Next.js!</div>
      <div>First Public Key: {process.env.NEXT_PUBLIC_FIRST_KEY}</div>
      <div>Second Public Key: {process.env.NEXT_PUBLIC_SECOND_KEY}</div>
      <div>Third Public Key: {process.env.NEXT_PUBLIC_THIRD_KEY}</div>
    </div>
  );
}

export default HomePage;
