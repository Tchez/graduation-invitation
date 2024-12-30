import Head from 'next/head';
import ConviteCard from './components/ConviteCard';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      <Head>
        <title>Convite de Formatura</title>
        <meta
          name="description"
          content="Convite de Formatura de Marco Antônio"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/kTcXmrIXLb5Hlt1u9sh8ERuj1qgZhZT0I6+PgB4p1BfZvWopn7j6bY5L2akIjK8goMhzj/ahfR8Ug=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <main className="flex items-center justify-center min-h-screen">
        <ConviteCard />
      </main>
    </div>
  );
}
