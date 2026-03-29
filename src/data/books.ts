// src/data/books.ts

export interface Book {
  id: number;
  title: string;
  year: number;
  cover: string;
  pdfUrl: string;
  description: string;
  author: string;
  pageCount: number;
  edition: string;
  color?: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "SPE Drilling Book",
    year: 2026,
    cover: "/books/SPE_Drilling_Book_26_cover.jpeg",
    pdfUrl: "/books/SPE_Drilling_Book_26.pdf",
    description:
      "Mastering drilling engineering has never been easier. This guide, curated by the SPE Suez Student Chapter, simplifies complex drilling concepts into an easy-to-understand reference. It covers the full spectrum of drilling operations in a straightforward way, providing a complete and accessible roadmap for every aspiring engineer.",
    author: "SPE Suez Student Chapter",
    pageCount: 164,
    edition: "1st Edition",
    color: "from-amber-500 to-orange-600",
  },
];

// Get all books sorted by year (newest first)
export const sortedBooks = [...books].sort((a, b) => b.year - a.year);

// Get the latest book
export const latestBook = sortedBooks[0];
