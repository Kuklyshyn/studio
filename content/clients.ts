export type Client = {
  name: string;
  logo: string; // path under /public, e.g. /clients/company.svg
  url: string | null;
};

// Client logos are shown only with the client's permission.
// An empty list means the logo strip is not rendered at all.
export const clients: Client[] = [];
