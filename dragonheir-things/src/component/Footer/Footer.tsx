export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

      <div className="footer-tnx">Дякую за участь в розробці:
        <p>Katarina Sforca</p>
      </div>
      <div className="footer-linkbox">
        <a
          href="https://t.me/od1ngamings"
          className="footer-link"
          target="_blank"
        >
          <img src="/telegrampng.png" alt="telegram" />
          <span>спільнота Od1n</span>
        </a>
        <a
          href="https://www.buymeacoffee.com/gookidool"
          className="footer-link"
          target="_blank"
        >
          <img src="/coffeepng.png" alt="telegram" />
          <span>підтримати розробку</span>
        </a>

      </div>
      </div>
    </footer>
  );
};
