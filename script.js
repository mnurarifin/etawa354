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

      const inputs = leadForm.querySelectorAll("input");
      const nama = inputs[0].value;
      const wa = inputs[1].value;
      const kota = inputs[2].value;
      const jenis = leadForm.querySelector("select").value;

      // Nomor Admin (Pastikan format 62...)
      const adminWhatsApp = "6281234567890";

      let actionText = "bergabung menjadi mitra";
      if (jenis === "Eceran") {
        actionText = "memesan produk ETAWA 354";
      } else if (
        jenis === "Reseller" ||
        jenis === "Agen" ||
        jenis === "Distributor"
      ) {
        actionText = `mendaftar sebagai ${jenis}`;
      }

      const message = `Halo Admin ETAWA 354,%0A%0ASaya tertarik untuk ${actionText}.%0A%0A*Nama:* ${nama}%0A*No. WA:* ${wa}%0A*Asal Kota/Negara:* ${kota}%0A*Jenis Pesanan:* ${jenis}%0A%0AMohon panduan selanjutnya. Terima kasih.`;

      const waUrl = `https://api.whatsapp.com/send?phone=${adminWhatsApp}&text=${message}`;

      // Buka WA di tab baru
      window.open(waUrl, "_blank");

      // Kosongkan form setelah dikirim
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

  // Jaringan Distribusi Map Logic
  const provinceData = {
    Lampung: [
      {
        city: "Bandar Lampung",
        role: "Distributor",
        name: "H. Panji",
        phone: "0813-7923-5000",
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
    ],
    "Jawa Barat": [
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
      {
        city: "Bandung",
        role: "Reseller",
        name: "Tri",
        phone: "0819-1012-9219",
      },
      {
        city: "Bandung",
        role: "Reseller",
        name: "Dedi",
        phone: "0818-2139-64",
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
      {
        city: "Cimahi",
        role: "Agen",
        name: "Nia",
        phone: "0813-2120-5964",
      },
    ],
    Riau: [
      {
        city: "Dumai",
        role: "Reseller",
        name: "Warsito",
        phone: "0812-7600-7000",
      },
      {
        city: "Riau",
        role: "Distributor",
        name: "Ahmad",
        phone: "0822-8744-4313",
      },
    ],
    "Jawa Tengah": [
      {
        city: "Grobogan",
        role: "Reseller",
        name: "Suyatman",
        phone: "0896-9774-4774",
      },
      {
        city: "Klaten",
        role: "Reseller",
        name: "Samijo",
        phone: "-",
      },
      {
        city: "Magelang",
        role: "Reseller",
        name: "Ibu Ega",
        phone: "0857-7977-2400",
      },
      {
        city: "Pemalang",
        role: "Reseller",
        name: "Siti",
        phone: "0853-1150-2523",
      },
      {
        city: "Purwokerto",
        role: "Reseller",
        name: "H. Jazair",
        phone: "0821-8779-8254",
      },
      {
        city: "Sragen",
        role: "Distributor",
        name: "Iwan",
        phone: "0881-3910-153",
      },
      {
        city: "Sukoharjo",
        role: "Reseller",
        name: "Sutarno Ar",
        phone: "0852-9098-8354",
      },
    ],
    Jambi: [
      {
        city: "Jambi",
        role: "Distributor",
        name: "H. Dariman",
        phone: "0823-7703-1512",
      },
      {
        city: "Jambi",
        role: "Agen",
        name: "H. Rosi",
        phone: "082211080350",
      },
      {
        city: "Jambi",
        role: "Reseller",
        name: "Ihwan",
        phone: "081299295016",
      },
      {
        city: "Jambi",
        role: "Reseller",
        name: "Muhaimin",
        phone: "082319171142",
      },
      {
        city: "Jambi",
        role: "Reseller",
        name: "Indah",
        phone: "082239778009",
      },
      {
        city: "Jambi",
        role: "Reseller",
        name: "H. Munir",
        phone: "082214208685",
      },
    ],
    Aceh: [
      {
        city: "Aceh",
        role: "Reseller",
        name: "Dedi",
        phone: "082261059622",
      },
    ],
    "Kalimantan Barat": [
      {
        city: "Ketapang, Kalimantan Barat",
        role: "Distributor",
        name: "Pardi",
        phone: "0813-5269-4151",
      },
    ],
    "Sulawesi Selatan": [
      {
        city: "Makassar",
        role: "Distributor",
        name: "H. Arifin",
        phone: "0899-1343-311",
      },
      {
        city: "Makassar",
        role: "Agen",
        name: "Mujayanah",
        phone: "0852-9990-8556",
      },
    ],
    "Sumatera Selatan": [
      {
        city: "Palembang",
        role: "Agen",
        name: "H. Mirza",
        phone: "0813-8300-354",
      },
    ],
    "Sulawesi Tengah": [
      {
        city: "Palu",
        role: "Reseller",
        name: "Rina",
        phone: "0813-4103-7043",
      },
    ],
    "Sulawesi Barat": [
      {
        city: "Polman (Sulawesi Barat)",
        role: "Reseller",
        name: "Rahmat",
        phone: "0823-4957-1354",
      },
    ],
    "Jawa Timur": [
      {
        city: "Surabaya",
        role: "Distributor",
        name: "Devi",
        phone: "0822-2995-0131",
      },
      {
        city: "Surabaya",
        role: "Reseller",
        name: "Hendri",
        phone: "0851-7744-7166",
      },
      {
        city: "Surabaya",
        role: "Reseller",
        name: "Latif",
        phone: "0823-3312-5504",
      },
    ],
    Banten: [
      {
        city: "Tangerang",
        role: "Reseller",
        name: "Anshori",
        phone: "0813-9254-3428",
      },
      {
        city: "Tangerang",
        role: "Reseller",
        name: "Sulastri",
        phone: "0813-1120-5336",
      },
    ],
    Yogyakarta: [
      {
        city: "Yogyakarta",
        role: "Reseller",
        name: "H. Topo",
        phone: "0858-6805-2899",
      },
    ],
  };

  const mapContainer = document.getElementById("map-container");
  const modal = document.getElementById("distributorModal");
  const modalClose = document.querySelector(".modal-close");
  const modalTitle = document.getElementById("modalProvinceTitle");
  const modalList = document.getElementById("modalDistributorList");

  if (mapContainer) {
    // SVG Map is already embedded in HTML
    const paths = mapContainer.querySelectorAll("path");

    // Map Tooltip Logic
    const tooltip = document.createElement("div");
    tooltip.className = "map-tooltip";
    document.body.appendChild(tooltip);

    paths.forEach((path) => {
      const provName = path.getAttribute("name");

      // Override nama SVG agar lebih familiar
      let displayName = provName;
      if (provName === "Jakarta Raya") displayName = "DKI Jakarta";
      if (provName === "Yogyakarta") displayName = "DI Yogyakarta";

      // Add hover tooltip for all provinces
      if (provName) {
        path.addEventListener("mouseenter", (e) => {
          tooltip.textContent = displayName;
          tooltip.style.opacity = "1";
        });

        path.addEventListener("mousemove", (e) => {
          tooltip.style.left = e.pageX + 15 + "px";
          tooltip.style.top = e.pageY + 15 + "px";
        });

        path.addEventListener("mouseleave", () => {
          tooltip.style.opacity = "0";
        });
      }

      if (provinceData[provName]) {
        path.classList.add("has-distributor");

        // Add click listener
        path.addEventListener("click", () => {
          openModal(displayName, provinceData[provName]);
        });
      }
    });
  }

  function openModal(province, distributors) {
    modalTitle.textContent = `Mitra di ${province}`;
    modalList.innerHTML = "";

    const roleOrder = {
      Distributor: 1,
      Agen: 2,
      Reseller: 3,
    };

    const sortedDistributors = [...distributors].sort((a, b) => {
      const orderA = roleOrder[a.role] || 99;
      const orderB = roleOrder[b.role] || 99;
      return orderA - orderB;
    });

    sortedDistributors.forEach((item) => {
      const lowerRole = item.role.toLowerCase();

      let waNumber = item.phone.replace(/\D/g, "");
      if (waNumber.startsWith("0")) {
        waNumber = "62" + waNumber.substring(1);
      }

      const card = document.createElement("div");
      card.className = `network-card ${lowerRole}`;
      card.innerHTML = `
        <div class="network-city"><i class="ph-fill ph-map-pin"></i> ${item.city}</div>
        <div class="network-role ${lowerRole}">${item.role}</div>
        <div class="network-contact" style="margin-top: 12px;">
          <strong>${item.name}</strong><br>
          <div style="font-size: 0.95rem; margin: 6px 0 12px 0;">${item.phone}</div>
          <a href="https://wa.me/${waNumber}" target="_blank" class="wa-btn">
            <i class="ph-fill ph-whatsapp-logo"></i> Hubungi WhatsApp
          </a>
        </div>
      `;
      modalList.appendChild(card);
    });

    modal.classList.add("show");
  }

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  }

  // Close modal when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});
