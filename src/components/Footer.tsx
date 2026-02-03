const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} ЗИП-Центр. Все права защищены.
          </p>
          
          <a 
            href="https://шлифовальнаятехника.рф" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-sm text-white/40 hover:text-white/60 transition-colors duration-300"
          >
            шлифовальнаятехника.рф
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
