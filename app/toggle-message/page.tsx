import Link from 'next/link';
import ToggleMessage from '../components/ToggleMessage';

export default function ToggleMessagePage() {
  return (
    <div>
      {/* Nav Menu */}
     <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '10px', fontSize: '20px' }}>
        <h2 style={{marginBottom: '10px'}}>My Next.js App Navigation</h2>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
          <li><Link href="/" style={{ textDecoration: 'underline', color: 'blue' }}>Home</Link></li>
          <li><Link href="/toggle-message" style={{ textDecoration: 'underline', color: 'blue', fontWeight: 'bold' }}>Toggle Message</Link></li>
          <li><Link href="/color-box" style={{ textDecoration: 'underline', color: 'blue' }}>Color Box</Link></li>
          <li><Link href="/random-quote" style={{ textDecoration: 'underline', color: 'blue' }}>Random Quote</Link></li>
        </ul>
      </nav>

    <main style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
        <h1>Toggle Message Component Demo</h1>

        {/* Component Demo Section */}
        <section style={{ marginTop: '30px', padding: '20px', border: '2px solid #ddd', borderRadius: '8px' }}>
          
          {/* First example with default props */}
          <div style={{ marginBottom: '30px' }}>
            <h3>Example 1: Basic Toggle</h3>
            <ToggleMessage 
              initialText="This message can be hidden and shown!" 
              buttonLabel="Hide/Show Message"
            />
          </div>

          {/* Second example with different props */}
          <div>
            <h3>Example 2: Different Text</h3>
            <ToggleMessage 
              initialText="Fancy a cup of tea!" 
              buttonLabel="Toggle Visibility"
            />
          </div>
        </section>
      </main>
    </div>
  );
}