import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pawsome Puppies — Healthy Puppies for Sale in Delhi NCR" },
      { name: "description", content: "Find healthy, KCI-certified, and vaccinated puppies for sale in Delhi NCR (Delhi, Gurgaon, Noida, Ghaziabad, Faridabad) from ethical dog breeders. Call +91 7678494050." },
      { name: "keywords", content: "pawsome, pawsome puppies, pawsome puppies delhi, pawsome puppies gurgaon, pawsome puppies noida, pawsome pet shop, puppy for sale in Delhi NCR, buy puppies in Delhi, dog breeder Delhi NCR, puppies for sale Gurgaon, pet shop Dwarka, certified puppies Delhi, Golden Retriever price Delhi, Toy Poodle price Delhi, Shih Tzu puppy Noida, puppies for sale Delhi NCR" },
      { name: "robots", content: "index, follow" },
      // Open Graph — complete set for Google Ads preview quality
      { property: "og:title", content: "Pawsome Puppies — Healthy Puppies for Sale in Delhi NCR" },
      { property: "og:description", content: "Find healthy, KCI-certified, and vaccinated puppies for sale in Delhi NCR from trusted ethical dog breeders. Doorstep delivery available. Call +91 7678494050." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pawsome-puppies.vercel.app/" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Pawsome Puppies" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/92e47f73-5e0a-46cd-9d36-5ef1c29309d3/id-preview-4c2e6649--36188f29-26f1-43f2-b2f5-0ad148d6bd21.lovable.app-1782141240154.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pawsome Puppies — Healthy Puppies for Sale in Delhi NCR" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pawsome Puppies — Healthy Puppies for Sale in Delhi NCR" },
      { name: "twitter:description", content: "Find healthy, KCI-certified, and vaccinated puppies for sale in Delhi NCR from trusted ethical dog breeders. Doorstep delivery available. Call +91 7678494050." },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/92e47f73-5e0a-46cd-9d36-5ef1c29309d3/id-preview-4c2e6649--36188f29-26f1-43f2-b2f5-0ad148d6bd21.lovable.app-1782141240154.png" },
      { name: "twitter:site", content: "@pawsomepuppies" },
      // Geo meta tags — boosts local Delhi NCR Google Ads Quality Score
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Dwarka, New Delhi, Delhi NCR, India" },
      { name: "geo.position", content: "28.5823;77.0597" },
      { name: "ICBM", content: "28.5823, 77.0597" },
    ],
    links: [
      // Canonical URL — required for Google Ads landing page Quality Score
      { rel: "canonical", href: "https://pawsome-puppies.vercel.app/" },
      // Favicon — impacts CTR via brand recognition in browser tabs
      { rel: "icon", href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐾</text></svg>" },
      { rel: "apple-touch-icon", href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐾</text></svg>" },
      // Fonts
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18348892652" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18348892652');
            `,
          }}
        />
        {/* Google Ads Click Conversion Helper */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-18348892652/RdNPCOKJ4tYcEOzDt61E',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
