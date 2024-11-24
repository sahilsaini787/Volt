export type articleType = {
  id: string;
  slug: string;
  content: string | null;
  author: {
    node: {
      firstName: string | null;
      lastName: string | null;
      slug: string | null;
      id: string;
      avatar: {
        url: string | null;
      } | null;
    };
  } | null;
  date: string | null;
  title: string | null;
};
