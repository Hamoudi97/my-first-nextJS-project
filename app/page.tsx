import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Nav Menu */}
     <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '10px', fontSize: '20px' }}>
        <h2 style={{marginBottom: '10px'}}>My Next.js App Navigation</h2>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
          <li><Link href="/" style={{ textDecoration: 'underline', color: 'blue' }}>Home</Link></li>
          <li><Link href="/toggle-message" style={{ textDecoration: 'underline', color: 'blue' }}>Toggle Message</Link></li>
          <li><Link href="/color-box" style={{ textDecoration: 'underline', color: 'blue' }}>Color Box</Link></li>
          <li><Link href="/random-quote" style={{ textDecoration: 'underline', color: 'blue' }}>Random Quote</Link></li>
        </ul>
      </nav>

      {/* Welcome Message */}
      <main style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
        <h1>Welcome to My First Next.js Project!</h1>
        <p>This is a simple application where I'm learning React components with TypeScript.</p>
        
        <section style={{ marginTop: '30px'}}>
          <h2>Available Components:</h2>
          <div style={{ marginTop: '20px' }}>
            <h3><Link href="/toggle-message" style={{ color: 'blue' }}>1. Toggle Message Component</Link></h3>
            <p>Show and hide messages with useState hook and conditional rendering.</p>
            
            <h3><Link href="/color-box" style={{ color: 'blue' }}>2. Color Box Component</Link></h3>
            <p>Changing colors dynamically and working with arrays.</p>
            
            <h3><Link href="/random-quote" style={{ color: 'blue' }}>3. Random Quote Generator</Link></h3>
            <p>Generate random quotes from an array and manage multiple state variables.</p>
          </div>
        </section>
      </main>
    </div>
  );
}