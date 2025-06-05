import Link from 'next/link';
import ColorBox from '../components/ColorBox';

export default function ColorBoxPage() {
  return (
    <div>
      {/* Nav Menu */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '10px', fontSize: '20px' }}>
        <h2 style={{marginBottom: '10px'}}>My Next.js App Navigation</h2>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
          <li><Link href="/" style={{ textDecoration: 'underline', color: 'blue' }}>Home</Link></li>
          <li><Link href="/toggle-message" style={{ textDecoration: 'underline', color: 'blue' }}>Toggle Message</Link></li>
          <li><Link href="/color-box" style={{ textDecoration: 'underline', color: 'blue', fontWeight: 'bold' }}>Color Box</Link></li>
          <li><Link href="/random-quote" style={{ textDecoration: 'underline', color: 'blue' }}>Random Quote</Link></li>
        </ul>
      </nav>

      <main style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
        <h1>Color Box Component Demo</h1>

        {/* Component Demo Section */}
        <section style={{ marginTop: '30px', padding: '20px', border: '2px solid #ddd', borderRadius: '8px' }}>
          
          {/* First example */}
          <div style={{ marginBottom: '30px' }}>
            <h3>Example 1: Starting with Blue</h3>
            <ColorBox 
              initialColor="blue" 
              buttonText="Change My Color!"
            />
          </div>

          {/* Second example */}
          <div>
            <h3>Example 2: Starting with Green</h3>
            <ColorBox 
              initialColor="green" 
              buttonText="Pick Random Color"
            />
          </div>
        </section>

      </main>
    </div>
  );
}