import Link from 'next/link';
import Head from 'next/head';

class NavLink {
  constructor(title = '', link = '') {
    this.title = title;
    this.link = link;
  }
}

const Home = () => {
  const navLinks = [
    new NavLink('FAQs', '/blog/faq'),
    new NavLink('Docker', '/blog/docker'),
    new NavLink('Command Line', '/blog/command-line'),
  ];

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <header>
        <h1>Home</h1>
      </header>
      <nav>
        <ul>
          <li key="blogs">Blogs</li>
          <ul>
            {navLinks.map(({ title, link }) => (
              <li key={link}>
                <Link href={link}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </>
  );
}

export default Home
