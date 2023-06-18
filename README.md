# Next.js First Tutorial

### Getting Started 
- `npm init -y`
- `npm install next react react-dom`
- **package.json** dosyasının içerisine değişik ortamlar eklendi :
`  "scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
  },`
- **pages** paketi oluşturuldu ve **index.js** dosyası oluşturuldu. Temel içerik yazıldı.
- `npm run dev` dev ortamında çalıştırıldı.
- localhost:3000/ adresine girildi.
- **about.js** dosyası oluşturuldu ve kaydedildi. Temel içerik yazıldı. localhost:3000/about adresine girildi.

### Linking Pages
- `import Link from "next/link"` ile Link kütüphanesini import edildi.
- `index.js` içerisinde `Link href="/about">Visit about page</Link>` Link elementi kullanıldı.
- Aynı şekilde about içerisinde yapıldı, back to homepage sağlandı `<Link href="/">back to homepage</Link>`

### App-Wide Code







































---
#### [Source Video](https://www.youtube.com/watch?v=qwhMyVVnmKM&t=74s)