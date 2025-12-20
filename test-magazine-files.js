import fs from 'fs';
import path from 'path';

// Import the magazines data
const magazines = [
  // Criterion Series
  {
    id: 1,
    title: "Criterion - Issue 1",
    cover: "/pdfs/Criterion/covers/Criterion1.webp",
    pdfUrl: "/pdfs/Criterion/Criterion1.pdf",
  },
  {
    id: 2,
    title: "Criterion - Issue 2",
    cover: "/pdfs/Criterion/covers/Criterion2.webp",
    pdfUrl: "/pdfs/Criterion/Criterion2.pdf",
  },
  {
    id: 3,
    title: "Criterion - Issue 3",
    cover: "/pdfs/Criterion/covers/Criterion-Issue-3.webp",
    pdfUrl: "/pdfs/Criterion/Criterion-Issue-3.pdf",
  },
  {
    id: 5,
    title: "Criterion - Issue 4",
    cover: "/pdfs/Criterion/covers/Criterion4.webp",
    pdfUrl: "/pdfs/Criterion/Criterion4.pdf",
  },
  
  // Echo Series
  {
    id: 6,
    title: "Echo - Issue 1",
    cover: "/pdfs/Echo/covers/ECHO1.webp",
    pdfUrl: "/pdfs/Echo/ECHO1.pdf",
  },
  {
    id: 7,
    title: "Echo - Issue 2",
    cover: "/pdfs/Echo/covers/ECHO2.webp",
    pdfUrl: "/pdfs/Echo/ECHO2.pdf",
  },
  {
    id: 8,
    title: "Echo - Issue 3",
    cover: "/pdfs/Echo/covers/ECHO3.webp",
    pdfUrl: "/pdfs/Echo/ECHO3.pdf",
  },
  {
    id: 9,
    title: "Echo - Issue 4",
    cover: "/pdfs/Echo/covers/ECHO4.webp",
    pdfUrl: "/pdfs/Echo/ECHO4.pdf",
  },
  {
    id: 10,
    title: "Echo - Issue 5",
    cover: "/pdfs/Echo/covers/ECHO5.webp",
    pdfUrl: "/pdfs/Echo/ECHO5.pdf",
  },
  {
    id: 11,
    title: "Echo - Issue 6",
    cover: "/pdfs/Echo/covers/ECHO6.webp",
    pdfUrl: "/pdfs/Echo/ECHO6.pdf",
  },
  {
    id: 12,
    title: "Echo - Issue 7",
    cover: "/pdfs/Echo/covers/ECHO7.webp",
    pdfUrl: "/pdfs/Echo/ECHO7.pdf",
  },
  {
    id: 13,
    title: "Echo - Issue 8",
    cover: "/pdfs/Echo/covers/ECHO8.webp",
    pdfUrl: "/pdfs/Echo/ECHO8.pdf",
  },
  {
    id: 14,
    title: "Echo - Issue 9",
    cover: "/pdfs/Echo/covers/ECHO9.webp",
    pdfUrl: "/pdfs/Echo/ECHO9.pdf",
  },
  {
    id: 15,
    title: "Echo - Issue 10",
    cover: "/pdfs/Echo/covers/ECHO10.webp",
    pdfUrl: "/pdfs/Echo/ECHO10.pdf",
  },
  {
    id: 16,
    title: "Echo - Issue 11",
    cover: "/pdfs/Echo/covers/ECHO11.webp",
    pdfUrl: "/pdfs/Echo/ECHO11.pdf",
  },
  {
    id: 18,
    title: "Echo - Issue 13",
    cover: "/pdfs/Echo/covers/ECHO13.webp",
    pdfUrl: "/pdfs/Echo/ECHO13.pdf",
  },
  {
    id: 19,
    title: "Echo - Issue 14",
    cover: "/pdfs/Echo/covers/ECHO14.webp",
    pdfUrl: "/pdfs/Echo/ECHO14.pdf",
  },
  {
    id: 20,
    title: "Echo - Issue 15",
    cover: "/pdfs/Echo/covers/ECHO15.webp",
    pdfUrl: "/pdfs/Echo/ECHO15.pdf",
  },
  {
    id: 21,
    title: "Echo - Issue 16",
    cover: "/pdfs/Echo/covers/ECHO16.webp",
    pdfUrl: "/pdfs/Echo/ECHO16.pdf",
  },
  {
    id: 22,
    title: "Echo - Issue 17",
    cover: "/pdfs/Echo/covers/ECHO17.webp",
    pdfUrl: "/pdfs/Echo/ECHO17.pdf",
  },
];

const publicPath = './public';
let missingFiles = [];
let existingFiles = [];

console.log('🔍 Testing magazine files...\n');

magazines.forEach(magazine => {
  console.log(`📖 Testing ${magazine.title}:`);
  
  // Test cover image
  const coverPath = path.join(publicPath, magazine.cover);
  if (fs.existsSync(coverPath)) {
    console.log(`  ✅ Cover: ${magazine.cover}`);
    existingFiles.push(magazine.cover);
  } else {
    console.log(`  ❌ Cover: ${magazine.cover}`);
    missingFiles.push(magazine.cover);
  }
  
  // Test PDF file
  const pdfPath = path.join(publicPath, magazine.pdfUrl);
  if (fs.existsSync(pdfPath)) {
    console.log(`  ✅ PDF: ${magazine.pdfUrl}`);
    existingFiles.push(magazine.pdfUrl);
  } else {
    console.log(`  ❌ PDF: ${magazine.pdfUrl}`);
    missingFiles.push(magazine.pdfUrl);
  }
  
  console.log('');
});

console.log('📊 SUMMARY:');
console.log(`✅ Found ${existingFiles.length} files`);
console.log(`❌ Missing ${missingFiles.length} files`);

if (missingFiles.length > 0) {
  console.log('\n🚨 Missing files:');
  missingFiles.forEach(file => console.log(`  - ${file}`));
}

console.log('\n✅ All existing files:');
existingFiles.forEach(file => console.log(`  - ${file}`));
