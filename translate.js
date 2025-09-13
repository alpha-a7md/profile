// الترجمات داخل كائن واحد
const translations = {
  ar: {
    menu: {
      about: "من أنا",
      why: "ليه تختارني",
      works: "أعمالي",
      clients: "عملائي",
      contact: "تواصل"
    },
    hero: {
      title: "احمد ✦ مونتير فيديو",
      subtitle: "المونتاج الإبداعي لجذب جمهورك"
    },
    about: {
      title: "من أنا",
      text: "أنا مونتير فيديو محترف بخبرة في تحرير الفيديوهات، الإعلانات، والمحتوى الرقمي."
    },
    why: {
      title: "ليه تختارني؟",
      q1: "جودة عالية",
      q2: "مرونة وسرعة عالية",
      q3: "اهتمام بالتفاصيل"
    },
    works: {
      title: "بعض اعمالي"
    },
    clients: {
      title: "بعض صناع المحتوى والشركات تم التعامل معهم",
      views: "عدد المشاهدات المحققه :",
      followers: "متابعين",
      names: {
        client1: "عبدالرحمن السموم",
        client2: "بتاع اقتصاد",
        client3: "بلاك هورس"
      }
    },
    contact: {
      whatsapp: "تواصل معنا"
    }
  },
  en: {
    menu: {
      about: "About Me",
      why: "Why Choose Me",
      works: "My Work",
      clients: "Clients",
      contact: "Contact"
    },
    hero: {
      title: "Ahmed ✦ Video Editor",
      subtitle: "Creative editing to engage your audience"
    },
    about: {
      title: "About Me",
      text: "I am a professional video editor with experience in ads, content, and digital media."
    },
    why: {
      title: "Why Choose Me?",
      q1: "High Quality",
      q2: "Flexibility & Fast Delivery",
      q3: "Attention to Detail"
    },
    works: {
      title: "My Works"
    },
    clients: {
      title: "Some Content Creators & Companies I've Worked With",
      views: "Total Views Achieved:",
      followers: "Followers",
      names: {
        client1: "Abdelrahman Alsmom",
        client2: "bta3 ektsad",
        client3: "Black Horse"
      }
    },
    contact: {
      whatsapp: "Contact Me"
    }
  }
};

// تطبيق الترجمات
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const parts = key.split(".");
    let value = translations[lang];
    for (const p of parts) {
      if (!value) break;
      value = value[p];
    }
    if (value !== undefined) el.innerText = value;
  });
}

// التحكم في الزر
const translateBtn = document.querySelector(".translate-btn");

function setLang(lang) {
  applyTranslations(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar" ? "rtl" : "ltr");
  localStorage.setItem("lang", lang);
  translateBtn.innerText = (lang === "ar") ? "عربي / EN" : "EN / عربي";
}

// عند تحميل الصفحة
const saved = localStorage.getItem("lang") || "ar";
setLang(saved);

// تبديل عند الضغط
translateBtn.addEventListener("click", () => {
  const newLang = (document.documentElement.lang === "ar") ? "en" : "ar";
  setLang(newLang);
});
