(function(){
  const strings = {
    en: {
      lang_toggle: "मराठी",
      nav_products: "Products",
      nav_about: "About",
      nav_contact: "Contact",
      hero_title: "Vijay Krushi Avajare",
      hero_sub: "Leaders in agricultural sprayers, power weeders, pumps, seeders and tools.",
      cta_view_products: "View Products",
      cta_whatsapp: "WhatsApp Us",
      feat_quality_title: "Quality Machines",
      feat_quality_desc: "Trusted brands and reliable service.",
      feat_service_title: "Service & Spares",
      feat_service_desc: "After‑sales support and spare parts.",
      feat_expert_title: "Expert Guidance",
      feat_expert_desc: "Get the right product for your farm.",
      products_title: "Products",
      search_placeholder: "Search products...",
      about_title: "About Vijay Krushi Avajare",
      about_desc: "Manufacturer, dealer and service provider for agricultural sprayers, power weeders and tools. Call for price and more info.",
      store_info: "Store Information",
      store_from_brochure: "Details will be taken from brochure; please confirm address and hours.",
      contact_title: "Contact Us",
      contact_reach: "Reach us",
      contact_form: "Enquiry form",
      label_phone: "Phone",
      label_email: "Email",
      label_address: "Address",
      label_hours: "Hours",
      address_from_brochure: "From brochure",
      hours_from_brochure: "From brochure",
      send: "Send",
      call_for_price: "Call for price",
      more_info: "More info",
      view_details: "View details",
      specs: "Specifications",
      category: "Category",
    },
    mr: {
      lang_toggle: "English",
      nav_products: "उत्पादने",
      nav_about: "माहिती",
      nav_contact: "संपर्क",
      hero_title: "विजय कृषी अवजारे",
      hero_sub: "कृषी स्प्रेयर, पॉवर वीडर, पंप, सीडर व साधनांची विश्वासार्ह सेवा.",
      cta_view_products: "उत्पादने पहा",
      cta_whatsapp: "व्हॉट्सअॅप",
      feat_quality_title: "गुणवत्तापूर्ण यंत्रे",
      feat_quality_desc: "विश्वासार्ह ब्रँड व सेवा.",
      feat_service_title: "सेवा व स्पेअर्स",
      feat_service_desc: "विक्रीनंतरची सेवा व स्पेअर पार्ट्स.",
      feat_expert_title: "तज्ञ मार्गदर्शन",
      feat_expert_desc: "आपल्या शेतासाठी योग्य उत्पादने.",
      products_title: "उत्पादने",
      search_placeholder: "उत्पादन शोधा...",
      about_title: "विजय कृषी अवजारे बद्दल",
      about_desc: "कृषी स्प्रेयर, पॉवर वीडर व साधनांचे उत्पादन/विक्री/सेवा. किंमत व अधिक माहितीसाठी कॉल करा.",
      store_info: "दुकानाची माहिती",
      store_from_brochure: "माहिती ब्रोशरमधून घेतली जाईल; कृपया पत्ता व वेळा कळवा.",
      contact_title: "संपर्क",
      contact_reach: "आमच्याशी संपर्क",
      contact_form: "विचारणा फॉर्म",
      label_phone: "फोन",
      label_email: "ईमेल",
      label_address: "पत्ता",
      label_hours: "वेळ",
      address_from_brochure: "ब्रोशरप्रमाणे",
      hours_from_brochure: "ब्रोशरप्रमाणे",
      send: "पाठवा",
      call_for_price: "किंमत जाणून घेण्यासाठी कॉल करा",
      more_info: "अधिक माहिती",
      view_details: "तपशील पहा",
      specs: "तपशील",
      category: "वर्ग",
    }
  };

  function applyI18n(lang){
    document.documentElement.setAttribute('lang', lang === 'mr' ? 'mr' : 'en');
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(strings[lang] && strings[lang][key]) el.textContent = strings[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(strings[lang] && strings[lang][key]) el.setAttribute('placeholder', strings[lang][key]);
    });
  }

  window.I18N = { strings, applyI18n };
})();
