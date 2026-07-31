/** Sleek product mockup frame - Ushur-style visual chrome with accent glow. */
export default function ProductVisual({
  product,
  image,
  size = "lg",
  showFloats = true,
  className = "",
}) {
  const src = image || product?.heroImage || product?.cardImage;
  const accent = product?.accent || "#6366F1";

  return (
    <div
      className={`product-visual product-visual--${size}${className ? ` ${className}` : ""}`}
      style={{ "--product-accent": accent }}
    >
      <div className="product-visual-glow" aria-hidden="true" />
      <div
        className="product-visual-glow product-visual-glow--2"
        aria-hidden="true"
      />
      <div className="product-visual-mesh" aria-hidden="true" />
      <div className="product-visual-frame">
        <div className="product-visual-chrome" aria-hidden="true">
          <span />
          <span />
          <span />
          <div className="product-visual-chrome-bar" />
        </div>
        <div
          className="product-visual-screen"
          style={{ backgroundImage: src ? `url(${src})` : undefined }}
          role="img"
          aria-label={
            product ? `${product.name} platform preview` : "Product preview"
          }
        />
        {showFloats && product ? (
          <>
            <div className="product-visual-float product-visual-float--metric">
              <strong>{product.metrics[0]?.value}</strong>
              <span>{product.metrics[0]?.label}</span>
            </div>
            <div className="product-visual-float product-visual-float--tag">
              {product.category}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
