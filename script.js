// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in classes
  const animatedElements = document.querySelectorAll(
    ".fade-in-up, .fade-in-left",
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Form submission
  const leadForm = document.getElementById("leadForm");
  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Terima kasih! Tim kami akan segera menghubungi WhatsApp Anda untuk proses selanjutnya.",
      );
      leadForm.reset();
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        if (otherItem.querySelector(".faq-answer")) {
          otherItem.querySelector(".faq-answer").style.maxHeight = null;
        }
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add("active");
        const answer = item.querySelector(".faq-answer");
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      }
    });
  });

  // Jaringan Distribusi Marquee Data
  const networks = [
    {
      city: "Bandar Lampung",
      role: "Distributor",
      name: "H. Panji",
      phone: "0813-7923-5000",
    },
    {
      city: "Bandung",
      role: "Distributor",
      name: "Marudin",
      phone: "0821-1658-8854",
    },
    {
      city: "Bandung",
      role: "Reseller",
      name: "Rifal",
      phone: "0857-0363-8982",
    },
    { city: "Bandung", role: "Reseller", name: "Tri", phone: "0819-1012-9219" },
    { city: "Bandung", role: "Reseller", name: "Dedi", phone: "0818-2139-64" },
    {
      city: "Bandung",
      role: "Reseller",
      name: "Adini",
      phone: "0857-9411-1416",
    },
    {
      city: "Bandung",
      role: "Reseller",
      name: "M. Ali",
      phone: "0812-9695-4620",
    },
    {
      city: "Bandung",
      role: "Reseller",
      name: "Faqih",
      phone: "0856-2420-7790",
    },
    {
      city: "Bogor",
      role: "Reseller",
      name: "Widodo",
      phone: "0813-1896-3983",
    },
    { city: "Cimahi", role: "Agen", name: "Nia", phone: "0813-2120-5964" },
    {
      city: "Cimahi",
      role: "Reseller",
      name: "Annisa",
      phone: "0821-2650-1303",
    },
    {
      city: "Jakarta Utara",
      role: "Reseller",
      name: "Asep",
      phone: "0857-2303-4624",
    },
    {
      city: "Jambi",
      role: "Distributor",
      name: "H. Dariman",
      phone: "0823-7703-1512",
    },
    {
      city: "Jombang",
      role: "Reseller",
      name: "Joko",
      phone: "0822-3347-7641",
    },
    {
      city: "Ketapang, Kalbar",
      role: "Distributor",
      name: "Pardi",
      phone: "0813-5269-4151",
    },
    {
      city: "Klaten",
      role: "Reseller",
      name: "H. Biky",
      phone: "0821-3689-6430",
    },
    {
      city: "Lampung Selatan",
      role: "Reseller",
      name: "Mustofa",
      phone: "0812-1940-2218",
    },
    {
      city: "Lampung Timur",
      role: "Reseller",
      name: "Nurhudi",
      phone: "0812-5716-3313",
    },
    {
      city: "Magelang",
      role: "Reseller",
      name: "Ibu Ega",
      phone: "0857-7977-2400",
    },
    {
      city: "Makassar",
      role: "Distributor",
      name: "H. Arifin",
      phone: "0899-1343-311",
    },
    {
      city: "Makassar",
      role: "Reseller",
      name: "Mujayanah",
      phone: "0852-9990-8556",
    },
    {
      city: "Palembang",
      role: "Agen",
      name: "H. Mirza",
      phone: "0813-8300-354",
    },
    {
      city: "Polman, Sulbar",
      role: "Reseller",
      name: "Rahmat",
      phone: "0823-4957-1354",
    },
    { city: "Riau", role: "Agen", name: "Ahmad", phone: "0822-8744-4313" },
    {
      city: "Solo",
      role: "Distributor",
      name: "H. Heri",
      phone: "0821-3623-4268",
    },
    {
      city: "Sukoharjo",
      role: "Reseller",
      name: "Sutarno Ar",
      phone: "0852-9098-8354",
    },
    {
      city: "Surabaya",
      role: "Reseller",
      name: "Latif",
      phone: "0823-3312-5504",
    },
    {
      city: "Tangerang",
      role: "Reseller",
      name: "Anshori",
      phone: "0813-9254-3428",
    },
    {
      city: "Yogyakarta",
      role: "Reseller",
      name: "H. Topo",
      phone: "0858-6805-2899",
    },
  ];

  const track = document.getElementById("network-track");
  if (track) {
    const createCard = (item) => {
      const lowerRole = item.role.toLowerCase();
      return `
        <div class="network-card ${lowerRole}">
          <div class="network-city"><i class="ph-fill ph-map-pin"></i> ${item.city}</div>
          <div class="network-role ${lowerRole}">${item.role}</div>
          <div class="network-contact">
            <strong>${item.name}</strong><br>
            <i class="ph-fill ph-whatsapp-logo" style="color:#25D366; margin-right:4px;"></i>${item.phone}
          </div>
        </div>
      `;
    };

    const html = networks.map(createCard).join("");
    // Duplicate for seamless infinite scroll
    track.innerHTML = html + html;
  }
});
