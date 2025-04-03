import React from 'react'

const FloatingIcon = () => {
  return (
    <div className="floating-icons">
    {/* WhatsApp Floating Button */}
    <a
      href={`https://wa.me/+91${mobile}`}
      className="floating-btn whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp"></i>
    </a>

    {/* Arrow Up Floating Button */}
    {isVisible && (
      <button className="floating-btn arrow-up" onClick={scrollToTop}>
        <i className="fa fa-arrow-up"></i>
      </button>
    )}
  </div>
  )
}

export default FloatingIcon;