const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ЗИП-Центр. Все права защищены.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="mailto:sales@sipzentr.ru"
              className="font-mono text-sm text-muted-foreground hover:text-foreground/60 transition-colors duration-300"
            >
              sales@sipzentr.ru
            </a>
            <a 
              href="https://шлифовальнаятехника.рф" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted-foreground hover:text-foreground/60 transition-colors duration-300"
            >
              шлифовальнаятехника.рф
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
