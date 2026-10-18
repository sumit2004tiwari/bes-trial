import Image from "next/image";
import { getImageSize } from "@/app/Utility/lib/image-sizes";
const partners = [
  { href: "https://mib.gov.in/", src: "/Images/homepage/MIB_Logo.png", alt: "Ministry of Information and Broadcasting" },
  { href: "https://www.meity.gov.in/", src: "/Images/homepage/meity.jpg", alt: "Ministry of Electronics and Information Technology" },
  { href: "https://prasarbharati.gov.in/doordarshan/", src: "/Images/homepage/doordarshan.png", alt: "Doordarshan" },
  { href: "https://www.abu.org.my/", src: "/Images/homepage/abu_1.jpg", alt: "Asia-Pacific Broadcasting Union" },
  { href: "http://www.aesindia.org", src: "/Images/homepage/aes.png", alt: "Audio Engineering Society India" },
  { href: "", src: "/Images/homepage/aimbda.jpg", alt: "AIMBDA" },
];
export default function Partener() {
  return <section className="partners-section" aria-label="Approved and supported by"><div className="site-container"><h2 className="eyebrow">Approved & supported by</h2><div className="partners-row">{partners.map(partner => {
    const size = getImageSize(partner.src) || { width: 180, height: 100 };
    const logo = <Image src={partner.src} alt={partner.alt} width={size.width} height={size.height} sizes="140px" />;
    return partner.href ? <a href={partner.href} target="_blank" rel="noopener noreferrer" key={partner.src}>{logo}</a> : <span key={partner.src}>{logo}</span>;
  })}</div></div></section>;
}
