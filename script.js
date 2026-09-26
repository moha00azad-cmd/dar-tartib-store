:root {
  --bg: #f8f3ee;
  --surface: #fffdfb;
  --surface-strong: #f2e7dc;
  --primary: #6d4c3c;
  --primary-dark: #4d352b;
  --primary-soft: #b88e68;
  --accent: #d5b377;
  --text: #2a211d;
  --muted: #6f5d56;
  --border: rgba(109, 76, 60, 0.12);
  --shadow: 0 18px 38px rgba(82, 56, 43, 0.12);
  --success: #1f8f5f;
  --danger: #d84d4d;
  --radius: 22px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Cairo", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 4.5rem 0;
}

.topbar {
  background: var(--primary-dark);
  color: #fff;
  font-size: 0.95rem;
  padding: 0.75rem 0;
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 253, 251, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  gap: 1rem;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 800;
  font-size: clamp(1.3rem, 2vw, 2rem);
  color: var(--primary);
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), var(--primary-soft));
  color: #fff;
  box-shadow: var(--shadow);
  font-size: 1.1rem;
}

.logo-text {
  font-size: 1.7rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-weight: 600;
  color: var(--muted);
}

.main-nav a {
  position: relative;
  transition: color 0.2s ease;
}

.main-nav a:hover {
  color: var(--primary);
}

.main-nav a::after {
  content: "";
  position: absolute;
  inset-inline: 0;
  bottom: -8px;
  height: 2px;
  border-radius: 50px;
  background: var(--accent);
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.main-nav a:hover::after {
  transform: scaleX(1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.icon-btn,
.cart-btn,
.mobile-menu-btn,
.close-cart,
.close-modal,
.admin-toggle {
  border: none;
  background: transparent;
}

.search-trigger,
.cart-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.8);
  color: var(--primary);
  font-weight: 700;
}

.cart-btn {
  position: relative;
  background: var(--primary);
  color: white;
  border: none;
  box-shadow: var(--shadow);
}

.cart-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--primary-dark);
  font-size: 0.8rem;
  font-weight: 800;
}

.mobile-menu-btn {
  display: none;
  font-size: 1.8rem;
  color: var(--primary);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem 1rem;
  background: rgba(255, 255, 255, 0.95);
}

.mobile-menu.open {
  display: flex;
}

.hero {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(242, 231, 220, 0.8));
  padding: 4rem 0 3.5rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 2rem;
}

.badge,
.eyebrow {
  display: inline-block;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  background: rgba(213, 179, 119, 0.18);
  color: var(--primary);
  font-weight: 700;
  border: 1px solid rgba(213, 179, 119, 0.4);
}

.hero-copy h1 {
  margin: 1.15rem 0 0.85rem;
  font-size: clamp(2.1rem, 4vw, 4rem);
  line-height: 1.1;
  font-weight: 800;
}

.hero-copy p {
  max-width: 600px;
  font-size: 1.1rem;
  color: var(--muted);
  margin: 0 0 1.5rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0.8rem 1.4rem;
  border-radius: 14px;
  border: none;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  box-shadow: 0 14px 28px rgba(77, 53, 43, 0.25);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.8);
  color: var(--primary);
  border: 1px solid var(--border);
}

.hero-visual {
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-card-main {
  width: min(100%, 560px);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 6px solid rgba(255, 255, 255, 0.5);
}

.hero-card-main img {
  width: 100%;
  height: 540px;
  object-fit: cover;
}

.floating-box {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(109, 76, 60, 0.09);
  box-shadow: var(--shadow);
  border-radius: 18px;
  padding: 0.9rem 1rem;
  z-index: 2;
}

.floating-box strong,
.floating-box small {
  display: block;
}

.floating-box small {
  color: var(--muted);
}

.floating-box-top {
  top: 28px;
  right: 14px;
}

.floating-box-bottom {
  left: 10px;
  bottom: 28px;
}

.trust-bar {
  background: #fff;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
  padding: 1.5rem 0;
}

.trust-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  text-align: center;
  color: var(--primary-dark);
  font-weight: 700;
}

.trust-item span {
  font-size: 1.6rem;
}

.section-heading {
  margin-bottom: 2rem;
}

.row-between {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
}

.text-center {
  text-align: center;
}

.section-heading h2 {
  margin: 0.7rem 0 0;
  font-size: clamp(1.8rem, 2vw, 2.5rem);
}

.categories-grid,
.products-grid,
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.category-card,
.product-card,
.review-card,
.admin-card,
.compare-card {
  background: rgba(255, 255, 255, 0.78);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: 0 16px 28px rgba(89, 61, 48, 0.06);
  overflow: hidden;
}

.category-card {
  position: relative;
  min-height: 260px;
}

.category-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.category-content {
  padding: 1.2rem;
}

.category-content h3 {
  margin: 0 0 0.35rem;
  font-size: 1.4rem;
}

.category-content p {
  margin: 0;
  color: var(--muted);
}

.product-search-wrap {
  width: min(360px, 100%);
}

.product-search-wrap input {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0.85rem 1rem;
  background: rgba(255, 255, 255, 0.7);
}

.product-card {
  display: flex;
  flex-direction: column;
}

.product-image-wrap {
  position: relative;
  background: #f5f0ea;
}

.product-image-wrap img {
  width: 100%;
  height: 270px;
  object-fit: cover;
}

.product-badge {
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  background: var(--danger);
  color: white;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}

.product-content {
  padding: 1.1rem 1rem 1.2rem;
}

.product-title {
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.product-rating {
  color: var(--accent);
  font-size: 0.92rem;
  font-weight: 700;
}

.product-price-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.9rem;
  flex-wrap: wrap;
}

.old-price {
  color: var(--muted);
  text-decoration: line-through;
  font-size: 0.95rem;
}

.new-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary-dark);
}

.discount-tag {
  background: rgba(31, 143, 95, 0.12);
  color: var(--success);
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.76rem;
  font-weight: 700;
}

.product-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.product-actions .btn {
  min-height: 46px;
  width: 100%;
}

.btn-ghost {
  background: rgba(109, 76, 60, 0.06);
  color: var(--primary);
}

.offer-banner {
  background: linear-gradient(135deg, #f3e7d5, #ead5b8);
}

.offer-inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.8rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(109, 76, 60, 0.08);
  border-radius: 28px;
  padding: 2rem 1.5rem;
}

.eyebrow.light {
  background: rgba(255, 255, 255, 0.55);
}

.offer-copy h2 {
  margin: 0.8rem 0;
  font-size: clamp(2rem, 3vw, 3rem);
}

.offer-pricing {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.countdown-box {
  background: rgba(255, 255, 255, 0.72);
  border-radius: 22px;
  padding: 1.3rem;
  text-align: center;
}

.countdown-box h3 {
  margin: 0 0 0.8rem;
}

.countdown {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
}

.countdown > div {
  background: #fff;
  border-radius: 16px;
  padding: 0.85rem 0.5rem;
  border: 1px solid rgba(109, 76, 60, 0.05);
}

.countdown span {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-dark);
}

.before-after-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;
}

.compare-card {
  overflow: hidden;
}

.compare-head {
  padding: 0.9rem 1rem;
  font-weight: 800;
  background: rgba(109, 76, 60, 0.08);
  color: var(--primary-dark);
}

.compare-head.after {
  background: rgba(31, 143, 95, 0.1);
  color: var(--success);
}

.compare-card img {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.reviews-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.review-card {
  padding: 1.4rem;
}

.review-card .stars {
  color: var(--accent);
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
}

.review-card p {
  margin: 0 0 0.8rem;
  color: var(--muted);
}

.review-author {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  font-weight: 700;
}

.faq-wrap {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: start;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 1rem 1.1rem;
  background: transparent;
  border: none;
  text-align: right;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--primary-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.faq-question::after {
  content: "+";
  font-size: 1.5rem;
  color: var(--primary-soft);
}

.faq-item.active .faq-question::after {
  content: "−";
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: 0 1.1rem;
  color: var(--muted);
}

.faq-item.active .faq-answer {
  max-height: 130px;
  padding-bottom: 1rem;
}

.site-footer {
  background: var(--primary-dark);
  color: rgba(255, 255, 255, 0.92);
  padding: 3rem 0 0.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1fr;
  gap: 2rem;
}

.footer-logo {
  margin-bottom: 1rem;
}

.footer-grid h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.76);
}

.footer-grid p {
  color: rgba(255, 255, 255, 0.76);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

.whatsapp-float,
.call-float {
  position: fixed;
  right: 1rem;
  z-index: 60;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
  font-weight: 800;
}

.whatsapp-float {
  bottom: 1rem;
  background: #25d366;
  color: white;
  padding: 0.9rem 1.15rem;
}

.call-float {
  bottom: 4.8rem;
  background: var(--primary);
  color: white;
  padding: 0.8rem 1rem;
  border: none;
}

.cart-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: min(420px, 100%);
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 25px 0 40px rgba(39, 31, 29, 0.16);
  border-left: 1px solid var(--border);
  z-index: 100;
  transform: translateX(-105%);
  transition: transform 0.28s ease;
  display: flex;
  flex-direction: column;
}

.cart-panel.open {
  transform: translateX(0);
}

.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  border-bottom: 1px solid var(--border);
}

.close-cart,
.close-modal {
  background: rgba(109, 76, 60, 0.06);
  color: var(--primary);
  width: 38px;
  height: 38px;
  border-radius: 999px;
  font-size: 1.1rem;
}

.cart-items {
  flex: 1;
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  gap: 0.8rem;
  background: rgba(242, 231, 220, 0.5);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 0.8rem;
}

.cart-item img {
  width: 78px;
  height: 78px;
  border-radius: 12px;
  object-fit: cover;
}

.cart-item-info {
  flex: 1;
}

.cart-item-head,
.cart-item-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.cart-item h4 {
  margin: 0;
  font-size: 1rem;
}

.quantity-controls {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.2rem 0.5rem;
}

.quantity-controls button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: rgba(109, 76, 60, 0.08);
  color: var(--primary);
  font-weight: 700;
}

.cart-summary {
  border-top: 1px solid var(--border);
  padding: 1rem;
}

.summary-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.08rem;
  font-weight: 700;
}

.full-width {
  width: 100%;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(41, 29, 24, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  padding: 1rem;
}

.modal.open {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  position: relative;
  width: min(900px, 100%);
  background: white;
  border-radius: 28px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  max-height: 90vh;
  overflow: auto;
}

.order-modal-content {
  width: min(620px, 100%);
}

.close-modal {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.modal-body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.modal-product-image {
  border-radius: 20px;
  overflow: hidden;
  background: #f4ece6;
}

.modal-product-image img {
  width: 100%;
  height: 100%;
  min-height: 380px;
  object-fit: cover;
}

.product-detail h2 {
  margin: 0 0 0.5rem;
  font-size: 2rem;
}

.product-detail .rating {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
  color: var(--primary-dark);
}

.product-detail .rating .stars {
  color: var(--accent);
}

.price-block {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.option-group {
  margin-top: 1rem;
}

.option-group h4,
.product-detail h4 {
  margin: 0 0 0.6rem;
}

.option-pills,
.option-sizes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pill,
.size-pill {
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(109, 76, 60, 0.04);
  font-weight: 600;
  color: var(--primary-dark);
}

.pill.active,
.size-pill.active {
  background: rgba(109, 76, 60, 0.12);
  border-color: rgba(109, 76, 60, 0.18);
}

.qty-box {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.4rem 0.7rem;
  margin-top: 0.7rem;
}

.qty-box button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: rgba(109, 76, 60, 0.08);
  color: var(--primary);
}

.detail-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1.2rem 0;
}

.detail-list {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  color: var(--muted);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  font-weight: 600;
  color: var(--primary-dark);
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.85rem 0.95rem;
  color: var(--text);
}

textarea {
  resize: vertical;
}

.toast {
  position: fixed;
  bottom: 1.2rem;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: rgba(25, 31, 31, 0.9);
  color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  font-weight: 700;
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s ease;
  z-index: 250;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.admin-toggle {
  position: fixed;
  left: 1rem;
  top: 6rem;
  background: var(--primary);
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  box-shadow: var(--shadow);
  z-index: 55;
}

.admin-panel {
  display: none;
  background: rgba(242, 231, 220, 0.6);
  padding: 1.5rem 0 4rem;
}

.admin-panel.open {
  display: block;
}

.admin-inner {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--border);
  border-radius: 30px;
  padding: 1.5rem;
}

.admin-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.admin-card {
  padding: 1.2rem;
}

.admin-card h3 {
  margin-top: 0;
}

.admin-card ul {
  margin: 0;
  padding-right: 1.1rem;
  color: var(--muted);
}

@media (max-width: 980px) {
  .main-nav,
  .header-actions .search-trigger {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .hero-inner,
  .offer-inner,
  .faq-wrap,
  .modal-body,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .categories-grid,
  .products-grid,
  .reviews-grid,
  .admin-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .trust-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .categories-grid,
  .products-grid,
  .reviews-grid,
  .before-after-grid,
  .admin-grid,
  .trust-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    font-size: 2.3rem;
  }

  .hero-card-main img {
    height: 420px;
  }

  .product-actions {
    grid-template-columns: 1fr;
  }

  .row-between {
    align-items: flex-start;
    flex-direction: column;
  }

  .cart-btn {
    padding-inline: 0.8rem;
  }

  .cart-btn span:nth-child(2) {
    display: none;
  }
}
