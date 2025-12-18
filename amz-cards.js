
console.log("amz-cards loaded");


class AmzCard extends HTMLElement {
  connectedCallback() {
    const badge = this.getAttribute("badge") || "";
    const title = this.getAttribute("title") || "";
    const author = this.getAttribute("author") || "";
    const summary = this.getAttribute("summary") || "";
    const href = this.getAttribute("href") || "#";
    const button = this.getAttribute("button") || "Check price & reviews on Amazon";
    const note = this.getAttribute("note") || "";
    const features = (this.getAttribute("features") || "")
      .split("|").map(s => s.trim()).filter(Boolean);

    this.innerHTML = `
<div class="amz-callout">
  ${badge ? `<div class="amz-badge">${escapeHtml(badge)}</div>` : ""}
  <h3 class="amz-title">${escapeHtml(title)}</h3>
  ${author ? `<p class="amz-author">by ${escapeHtml(author)}</p>` : ""}
  ${summary ? `<p class="amz-summary">${escapeHtml(summary)}</p>` : ""}
  ${features.length ? `<ul class="amz-features">${features.map(f => `<li>${escapeHtml(f)}</li>`).join("")}</ul>` : ""}
  <div class="amz-cta">
    <a href="${escapeAttr(href)}" target="_blank" rel="nofollow sponsored" class="amz-button">
      ${escapeHtml(button)}
    </a>
    ${note ? `<span class="amz-note">${escapeHtml(note)}</span>` : ""}
  </div>
</div>`;
  }
}

function escapeHtml(str){ return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function escapeAttr(str){ return String(str).replace(/"/g, "&quot;"); }

customElements.define("amz-card", AmzCard);

