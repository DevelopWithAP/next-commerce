const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex justify-center items-center">
        {currentYear} My Store. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
