import React, { useState } from 'react';

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const socialLinks = [
    {
      href: 'mailto:newman.ogbo.s@gmail.com?subject=work  Here&body=Hello Newman',
      normalIcon: 'icons/mail.svg',
      hoverIcon: 'icons/mail-h.svg',
    },
    {
      href: 'https://www.behance.net/newmanogbo',
      normalIcon: 'icons/behance.svg',
      hoverIcon: 'icons/behance-h.svg',
    },
    {
      href: 'https://www.dribbble.com/Nesky',
      normalIcon: 'icons/dribble.svg',
      hoverIcon: 'icons/dribble-h.svg',
    },
    {
      href: 'https://www.linkedin.com/in/newman-ogbo-964213250',
      normalIcon: 'icons/linkedin.svg',
      hoverIcon: 'icons/linkedin-h.svg',
    },
    {
      href: 'https://wa.me/+2349028260161?text=Hello%20Newman',
      normalIcon: 'icons/call.svg',
      hoverIcon: 'icons/call-h.svg',
    },
  ];

  return (
    <section className="flex gap-x-14 w-fit m-auto">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="m-auto"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={index === hoveredIndex ? link.hoverIcon : link.normalIcon} alt={link.href} />
        </a>
      ))}
    </section>
  );
};

export default Contact;