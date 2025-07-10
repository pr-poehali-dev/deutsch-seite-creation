import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentLang, setCurrentLang] = useState("de");

  const languages = {
    de: {
      hero: {
        title: "Digiguru",
        subtitle: "Professionelle Seminare für digitale Transformation",
        description:
          "Entdecken Sie unsere hochwertigen Seminare und bleiben Sie mit unserem Blog auf dem neuesten Stand der digitalen Trends.",
        cta: "Jetzt anmelden",
      },
      nav: {
        home: "Startseite",
        seminars: "Seminare",
        register: "Anmelden",
        blog: "Blog",
      },
      seminars: {
        title: "Aktuelle Seminare",
        subtitle: "Erweitern Sie Ihr Wissen mit unseren Expertenseminaren",
      },
      blog: {
        title: "Neueste Artikel",
        subtitle: "Bleiben Sie informiert über die neuesten Entwicklungen",
      },
      register: {
        title: "Für Seminare anmelden",
        subtitle: "Verpassen Sie keine Gelegenheit zur Weiterbildung",
      },
    },
    en: {
      hero: {
        title: "Digiguru",
        subtitle: "Professional Seminars for Digital Transformation",
        description:
          "Discover our high-quality seminars and stay updated with our blog on the latest digital trends.",
        cta: "Register Now",
      },
      nav: {
        home: "Home",
        seminars: "Seminars",
        register: "Register",
        blog: "Blog",
      },
      seminars: {
        title: "Current Seminars",
        subtitle: "Expand your knowledge with our expert seminars",
      },
      blog: {
        title: "Latest Articles",
        subtitle: "Stay informed about the latest developments",
      },
      register: {
        title: "Register for Seminars",
        subtitle: "Don't miss any opportunity for further education",
      },
    },
    it: {
      hero: {
        title: "Digiguru",
        subtitle: "Seminari Professionali per la Trasformazione Digitale",
        description:
          "Scopri i nostri seminari di alta qualità e rimani aggiornato con il nostro blog sulle ultime tendenze digitali.",
        cta: "Iscriviti Ora",
      },
      nav: {
        home: "Home",
        seminars: "Seminari",
        register: "Iscrizione",
        blog: "Blog",
      },
      seminars: {
        title: "Seminari Attuali",
        subtitle: "Espandi le tue conoscenze con i nostri seminari di esperti",
      },
      blog: {
        title: "Ultimi Articoli",
        subtitle: "Rimani informato sugli ultimi sviluppi",
      },
      register: {
        title: "Iscriviti ai Seminari",
        subtitle: "Non perdere alcuna opportunità di formazione",
      },
    },
    fr: {
      hero: {
        title: "Digiguru",
        subtitle: "Séminaires Professionnels pour la Transformation Digitale",
        description:
          "Découvrez nos séminaires de haute qualité et restez informé avec notre blog sur les dernières tendances numériques.",
        cta: "S'inscrire Maintenant",
      },
      nav: {
        home: "Accueil",
        seminars: "Séminaires",
        register: "S'inscrire",
        blog: "Blog",
      },
      seminars: {
        title: "Séminaires Actuels",
        subtitle: "Élargissez vos connaissances avec nos séminaires d'experts",
      },
      blog: {
        title: "Derniers Articles",
        subtitle: "Restez informé des derniers développements",
      },
      register: {
        title: "S'inscrire aux Séminaires",
        subtitle: "Ne manquez aucune opportunité de formation",
      },
    },
  };

  const t = languages[currentLang];

  const seminars = [
    {
      title: "21 Smartphone-Tipps für Senioren",
      subtitle: "Praktische Smartphone-Hilfe für Einsteiger",
      date: "12. März 2025",
      duration: "3 Stunden",
      level: "Einsteiger",
      price: "€49",
      description:
        "Lernen Sie in entspannter Atmosphäre die wichtigsten Smartphone-Funktionen kennen. Von der Bedienung bis zu WhatsApp - alles Schritt für Schritt erklärt.",
      highlights: [
        "Ein/Aus und Laden",
        "Telefonieren und SMS",
        "WhatsApp und Kamera",
        "WLAN einrichten",
        "Schrift vergrößern",
        "Sicherheitstipps",
      ],
      targetGroup: "Senioren und Smartphone-Neulinge",
    },
    {
      title: "Digital Strategy Workshop",
      subtitle: "Strategische Digitalisierung für Unternehmen",
      date: "15. März 2025",
      duration: "2 Tage",
      level: "Fortgeschritten",
      price: "€899",
      description:
        "Entwickeln Sie eine maßgeschneiderte Digitalisierungsstrategie für Ihr Unternehmen.",
      highlights: [
        "Digitale Transformation",
        "Strategieentwicklung",
        "Technologie-Bewertung",
        "Change Management",
      ],
      targetGroup: "Führungskräfte und Entscheider",
    },
    {
      title: "KI im Unternehmen",
      subtitle: "Künstliche Intelligenz praktisch anwenden",
      date: "22. März 2025",
      duration: "1 Tag",
      level: "Einsteiger",
      price: "€449",
      description:
        "Entdecken Sie die Möglichkeiten von KI für Ihr Unternehmen und lernen Sie praktische Anwendungen kennen.",
      highlights: [
        "KI-Grundlagen",
        "Anwendungsbereiche",
        "Tool-Übersicht",
        "Praxisbeispiele",
      ],
      targetGroup: "Fachkräfte und Interessierte",
    },
    {
      title: "Agile Transformation",
      subtitle: "Agile Methoden erfolgreich implementieren",
      date: "5. April 2025",
      duration: "3 Tage",
      level: "Experte",
      price: "€1299",
      description:
        "Lernen Sie, wie Sie agile Arbeitsweisen in Ihrem Unternehmen erfolgreich einführen und etablieren.",
      highlights: [
        "Scrum & Kanban",
        "Agile Führung",
        "Team-Coaching",
        "Skalierung",
      ],
      targetGroup: "Projektleiter und Agile Coaches",
    },
  ];

  const blogPosts = [
    {
      title: "Die Zukunft der Digitalisierung",
      excerpt:
        "Wie sich Unternehmen auf die digitale Transformation vorbereiten können...",
      date: "10. März 2025",
      readTime: "5 min",
    },
    {
      title: "KI-Tools für den Alltag",
      excerpt:
        "Praktische Anwendungen künstlicher Intelligenz im Geschäftsalltag...",
      date: "8. März 2025",
      readTime: "8 min",
    },
    {
      title: "Agile Methoden im Überblick",
      excerpt: "Ein Leitfaden für die Implementierung agiler Arbeitsweisen...",
      date: "5. März 2025",
      readTime: "12 min",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-gray-900" />
              <h1 className="text-2xl font-bold text-gray-900">Digiguru</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t.nav.home}
              </a>
              <a
                href="#seminars"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t.nav.seminars}
              </a>
              <a
                href="#blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t.nav.blog}
              </a>
              <a
                href="#register"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t.nav.register}
              </a>
            </nav>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              {Object.keys(languages).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    currentLang === lang
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Icon name="Globe" className="h-4 w-4 mr-2" />
                  Mehrsprachig verfügbar
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  {t.hero.subtitle}
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {t.hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                  {t.hero.cta}
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Play" className="mr-2 h-4 w-4" />
                  Demo ansehen
                </Button>
              </div>
            </div>

            <div className="lg:text-center">
              <img
                src="/img/3d1b9d17-540c-4935-982a-60a61be4a3b0.jpg"
                alt="Professional seminar environment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seminars Section */}
      <section id="seminars" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.seminars.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.seminars.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seminars.map((seminar, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-gray-200 h-full flex flex-col"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{seminar.level}</Badge>
                    <span className="text-2xl font-bold text-gray-900">
                      {seminar.price}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {seminar.title}
                  </CardTitle>
                  {seminar.subtitle && (
                    <p className="text-sm text-gray-600 font-medium mb-2">
                      {seminar.subtitle}
                    </p>
                  )}
                  <CardDescription className="text-gray-600">
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="flex items-center">
                        <Icon name="Calendar" className="h-4 w-4 mr-1" />
                        {seminar.date}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Clock" className="h-4 w-4 mr-1" />
                        {seminar.duration}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  {seminar.description && (
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {seminar.description}
                    </p>
                  )}
                  {seminar.highlights && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                        Das lernen Sie:
                      </h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {seminar.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <Icon
                              name="Check"
                              className="h-3 w-3 mr-2 text-green-600"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {seminar.targetGroup && (
                    <div className="mb-4">
                      <Badge variant="secondary" className="text-xs">
                        <Icon name="Users" className="h-3 w-3 mr-1" />
                        {seminar.targetGroup}
                      </Badge>
                    </div>
                  )}
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 mt-auto">
                    Jetzt buchen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.blog.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.blog.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-white border-gray-200"
              >
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">{post.readTime}</Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-gray-600 transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                    Weiterlesen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.register.title}</h2>
            <p className="text-xl text-gray-300">{t.register.subtitle}</p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 max-w-md mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Mail" className="h-6 w-6 text-gray-400" />
                <span className="text-gray-300">Newsletter abonnieren</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Bell" className="h-6 w-6 text-gray-400" />
                <span className="text-gray-300">
                  Seminar-Benachrichtigungen
                </span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Users" className="h-6 w-6 text-gray-400" />
                <span className="text-gray-300">Exklusive Inhalte</span>
              </div>
              <Separator className="bg-gray-700" />
              <Button
                size="lg"
                className="w-full bg-white text-gray-900 hover:bg-gray-100"
              >
                <Icon name="UserPlus" className="mr-2 h-4 w-4" />
                Jetzt registrieren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Zap" className="h-6 w-6 text-gray-900" />
              <span className="text-lg font-semibold text-gray-900">
                Digiguru
              </span>
            </div>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Impressum
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Datenschutz
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-gray-500">
            <p>&copy; 2025 Digiguru. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
