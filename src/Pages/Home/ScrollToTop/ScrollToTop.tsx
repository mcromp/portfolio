const ScrollToTop = () => (
 <button
  className="scroll-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
 >
  Scroll to top
 </button>
);

export default ScrollToTop;
