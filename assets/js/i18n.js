/**
 * Reliant Landing Page — i18n.js
 * Provides English and Spanish translations for the Landing Page and legal pages.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "reliant-language";

  var translations = {
    en: {
      "meta.home.title": "Reliant | HVOF Process Monitoring & Traceability",
      "meta.home.description": "Reliant monitors, traces and documents HVOF thermal-spray recuperation processes so Recuperation Suppliers and Asset Owners can detect deviations early and back quality with data.",
      "meta.terms.title": "Terms & Conditions | Reliant",
      "meta.terms.description": "Terms and Conditions of Service for Reliant, a product by InnovaCorp.",
      "meta.privacy.title": "Privacy Policy | Reliant",
      "meta.privacy.description": "Privacy Policy for Reliant, a product by InnovaCorp.",
      "accessibility.skip": "Skip to main content",
      "accessibility.home": "Reliant home",
      "accessibility.menu": "Toggle navigation menu",
      "accessibility.primary": "Primary navigation",
      "accessibility.footer": "Footer navigation",
      "accessibility.legal": "Legal navigation",
      "accessibility.language": "Language selector",
      "nav.services": "Services",
      "nav.why": "Why Reliant",
      "nav.segments": "Segments",
      "nav.plans": "Plans",
      "nav.how": "How it works",
      "nav.about": "About us",
      "nav.contact": "Contact",
      "nav.signin": "Sign in",
      "nav.start": "Get started",
      "hero.eyebrow": "HVOF recuperation processes, monitored and traceable",
      "hero.title": "Your HVOF processes,<br><span>smarter</span>",
      "hero.subtitle": "Monitor, analyze and connect every stage of your HVOF thermal-spray recuperation processes to gain traceability, detect deviations early and make decisions backed by data.",
      "hero.supplier": "I'm a Recuperation Supplier",
      "hero.owner": "I'm an Asset Owner",
      "hero.metric.sessions": "of spray sessions recorded",
      "hero.metric.alerts": "to flag a recipe deviation",
      "hero.metric.history": "shared history per component",
      "highlight.monitoring.title": "Real-time monitoring",
      "highlight.monitoring.body": "Visualize the critical process parameters during every spray session.",
      "highlight.traceability.title": "Full traceability",
      "highlight.traceability.body": "Link components, recovery orders, recipes and sessions in one history.",
      "highlight.data.title": "Data-driven decisions",
      "highlight.data.body": "Turn process information into useful evidence for quality and reliability.",
      "services.kicker": "Services",
      "services.title": "Everything you need to monitor, control and analyze your HVOF processes.",
      "services.monitor.title": "Monitor",
      "services.monitor.body": "Check process parameters live and detect deviations from the recipe during every session.",
      "services.trace.title": "Traceability",
      "services.trace.body": "Register components, recovery orders, recipes and spray sessions in one shared record.",
      "services.diagnose.title": "Diagnosis",
      "services.diagnose.body": "Identify faults, affected components and the probable causes behind each problem.",
      "services.report.title": "Reports",
      "services.report.body": "Generate quality evidence, certificates and session reports ready for audits.",
      "value.title": "Why choose Reliant?",
      "value.intro": "HVOF process data is still captured by hand in many plants. Reliant replaces scattered logs with a single platform that records, analyzes and certifies each recuperation.",
      "value.benefit1": "Centralized information for operators, supervisors and quality engineers.",
      "value.benefit2": "End-to-end traceability of every component and work order.",
      "value.benefit3": "Fault diagnosis based on real process data.",
      "value.benefit4": "Verifiable quality evidence for Asset Owners.",
      "value.benefit5": "Less dependence on manual records.",
      "segments.kicker": "Segments",
      "segments.title": "Built for both sides of the recuperation process",
      "segments.intro": "Choose your profile to see how Reliant works for you.",
      "segments.supplier.tag": "Recuperation Supplier",
      "segments.supplier.title": "Run every HVOF session under control",
      "segments.supplier.body": "For companies that operate HVOF systems and recover components for their clients: operators, operations supervisors, quality and maintenance engineers.",
      "segments.supplier.benefit1": "Register HVOF systems, subsystems and spray recipes.",
      "segments.supplier.benefit2": "Monitor live readings with nominal, warning and shutdown bands.",
      "segments.supplier.benefit3": "Open fault cases automatically and generate quality certificates.",
      "segments.supplier.cta": "Join as a Recuperation Supplier",
      "segments.owner.tag": "Asset Owner",
      "segments.owner.title": "Know exactly how your components were recovered",
      "segments.owner.body": "For mining and industrial companies that own the components: reliability engineers and procurement analysts who need evidence, not promises.",
      "segments.owner.benefit1": "Consolidated view of your components and their recovery history.",
      "segments.owner.benefit2": "Quality certificates and session reports for every order.",
      "segments.owner.benefit3": "Compare suppliers and spot premature failures early.",
      "segments.owner.cta": "Join as an Asset Owner",
      "plans.kicker": "Plans",
      "plans.title": "Choose the experience designed for your organization.",
      "plans.period": "/ month",
      "plans.includes": "Includes:",
      "plans.cta": "Get started",
      "plans.supplier.desc": "For companies that run HVOF processes",
      "plans.supplier.f1": "Process monitoring",
      "plans.supplier.f2": "HVOF system registry",
      "plans.supplier.f3": "Recipe management",
      "plans.supplier.f4": "Recovery & work order traceability",
      "plans.supplier.f5": "Fault diagnosis",
      "plans.supplier.f6": "Deviation alerts",
      "plans.supplier.f7": "Quality certificates",
      "plans.supplier.f8": "Session reports",
      "plans.owner.desc": "For companies that own the components",
      "plans.owner.f1": "Consolidated component view",
      "plans.owner.f2": "Field performance tracking",
      "plans.owner.f3": "Component return registry",
      "plans.owner.f4": "PCR compliance",
      "plans.owner.f5": "Certificate lookup",
      "plans.owner.f6": "Supplier comparison",
      "plans.owner.f7": "Premature failure identification",
      "steps.kicker": "How it works",
      "steps.title": "From sign-up to certified recuperation in four steps",
      "steps.profile.title": "Create your organization",
      "steps.profile.body": "Sign up as a Recuperation Supplier or an Asset Owner and invite your team with the right roles.",
      "steps.setup.title": "Set up systems and recipes",
      "steps.setup.body": "Register your HVOF systems, subsystems, clients, components and spray recipes with their parameter bands.",
      "steps.track.title": "Run and monitor sessions",
      "steps.track.body": "Open a recovery order, start a session and watch readings live. Deviations open fault cases automatically.",
      "steps.redeploy.title": "Certify and share",
      "steps.redeploy.body": "Analyze the session, generate the quality certificate and share the evidence with the Asset Owner.",
      "about.kicker": "About us",
      "about.title": "Meet the product and the team behind it",
      "about.intro": "Reliant is developed by InnovaCorp, a Peruvian technology startup focused on turning specialized industrial process data into useful information for decision-making.",
      "about.product.title": "About the Product",
      "about.product.body": "A walkthrough of Reliant: live HVOF monitoring, traceability, fault diagnosis and report generation.",
      "about.team.title": "About the Team",
      "about.team.body": "Who we are at InnovaCorp, why we chose this problem and how we work together.",
      "about.video.soon": "Video coming soon",
      "about.mission.title": "Mission",
      "about.mission.body": "Transform industrial process data into actionable information that anticipates failures, guarantees traceability and supports quality with evidence.",
      "about.vision.title": "Vision",
      "about.vision.body": "Become the reference platform in Latin America for monitoring and tracing highly specialized industrial processes.",
      "about.values.title": "Values",
      "about.values.body": "Innovation, commitment, precision and continuous improvement.",
      "cta.title": "Ready to bring your HVOF processes under control?",
      "cta.body": "Create your organization in minutes or write to us and we will walk you through the platform.",
      "cta.start": "Create my account",
      "cta.email": "Write to us",
      "footer.tagline": "Technology and control at the service of your processes. Building a smarter operation.",
      "footer.product": "A product by InnovaCorp.",
      "footer.navigation": "Navigation",
      "footer.contact": "Contact",
      "footer.app": "Open the web application",
      "footer.legal": "Legal",
      "footer.terms": "Terms & Conditions",
      "footer.privacy": "Privacy Policy",
      "footer.copyright": "InnovaCorp — Reliant. All rights reserved.",
      "legal.updated": "Last updated: 13 November 2026",
      "legal.back": "← Back to Reliant",
      "terms.title": "Terms & Conditions",
      "terms.intro": "These Terms & Conditions (\"Terms\") govern access to and use of the Reliant platform (\"Reliant\", \"the Service\"), operated by InnovaCorp (\"we\", \"us\"). By accessing the Landing Page or the Reliant Web Application, you agree to these Terms.",
      "terms.section1.title": "1. Description of the service",
      "terms.section1.body": "Reliant is a platform that connects Recuperation Suppliers and Asset Owners to facilitate the recovery, reconditioning and redeployment of industrial components.",
      "terms.section2.title": "2. Eligibility and accounts",
      "terms.section2.body": "Users must provide accurate registration information and are responsible for maintaining the confidentiality of their account credentials.",
      "terms.section3.title": "3. User responsibilities",
      "terms.section3.body": "Users agree to use the Service lawfully and to provide truthful information about the components, requests and services they list or request through the platform.",
      "terms.section4.title": "4. Limitation of liability",
      "terms.section4.body": "Reliant acts as an intermediary platform. InnovaCorp is not a party to agreements between Recuperation Suppliers and Asset Owners and is not liable for the outcome of such agreements.",
      "terms.section5.title": "5. Changes to these Terms",
      "terms.section5.body": "We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated Terms.",
      "terms.section6.title": "6. Contact",
      "terms.section6.body": "Questions about these Terms can be sent to the InnovaCorp team via the contact channel indicated in the Web Application.",
      "privacy.title": "Privacy Policy",
      "privacy.intro": "This Privacy Policy explains how InnovaCorp (\"we\", \"us\") collects, uses and protects personal data when you use the Reliant Landing Page and Web Application.",
      "privacy.section1.title": "1. Information we collect",
      "privacy.section1.body": "Account information (name, email, company), profile information relevant to your segment (Recuperation Supplier or Asset Owner), and usage data needed to operate the matching and tracking features of the Service.",
      "privacy.section2.title": "2. How we use your information",
      "privacy.section2.body": "To operate and improve the Service, match recovery requests with suppliers, communicate service updates, and comply with legal obligations.",
      "privacy.section3.title": "3. Data sharing",
      "privacy.section3.body": "We share the minimum information necessary between a Recuperation Supplier and an Asset Owner to complete a recovery request. We do not sell personal data to third parties.",
      "privacy.section4.title": "4. Data retention and security",
      "privacy.section4.body": "We retain personal data only as long as necessary for the purposes described in this policy and apply reasonable technical and organizational measures to protect it.",
      "privacy.section5.title": "5. Your rights",
      "privacy.section5.body": "You may request access to, correction of, or deletion of your personal data through the Web Application account settings or by contacting the InnovaCorp team.",
      "privacy.section6.title": "6. Changes to this policy",
      "privacy.section6.body": "We may update this Privacy Policy from time to time. Material changes will be communicated within the Web Application."
    },
    es: {
      "meta.home.title": "Reliant | Monitoreo y trazabilidad de procesos HVOF",
      "meta.home.description": "Reliant monitorea, rastrea y documenta los procesos de recuperación por rociado térmico HVOF para que proveedores de recuperación y propietarios de activos detecten desviaciones a tiempo y respalden la calidad con datos.",
      "meta.terms.title": "Términos y condiciones | Reliant",
      "meta.terms.description": "Términos y condiciones del servicio Reliant, un producto de InnovaCorp.",
      "meta.privacy.title": "Política de privacidad | Reliant",
      "meta.privacy.description": "Política de privacidad de Reliant, un producto de InnovaCorp.",
      "accessibility.skip": "Ir al contenido principal",
      "accessibility.home": "Inicio de Reliant",
      "accessibility.menu": "Abrir o cerrar el menú de navegación",
      "accessibility.primary": "Navegación principal",
      "accessibility.footer": "Navegación del pie de página",
      "accessibility.legal": "Navegación legal",
      "accessibility.language": "Selector de idioma",
      "nav.services": "Servicios",
      "nav.why": "Por qué Reliant",
      "nav.segments": "Segmentos",
      "nav.plans": "Planes",
      "nav.how": "Cómo funciona",
      "nav.about": "Quiénes somos",
      "nav.contact": "Contacto",
      "nav.signin": "Iniciar sesión",
      "nav.start": "Comenzar",
      "hero.eyebrow": "Procesos de recuperación HVOF monitoreados y trazables",
      "hero.title": "Tus procesos HVOF,<br><span>más inteligentes</span>",
      "hero.subtitle": "Monitorea, analiza y conecta cada etapa de tus procesos de recuperación por rociado térmico HVOF para obtener mayor trazabilidad, detectar desviaciones a tiempo y tomar decisiones respaldadas por datos.",
      "hero.supplier": "Soy un proveedor de recuperación",
      "hero.owner": "Soy un propietario de activos",
      "hero.metric.sessions": "de sesiones de rociado registradas",
      "hero.metric.alerts": "para alertar una desviación de receta",
      "hero.metric.history": "historial compartido por componente",
      "highlight.monitoring.title": "Monitoreo en tiempo real",
      "highlight.monitoring.body": "Visualiza los parámetros críticos del proceso durante cada sesión de rociado.",
      "highlight.traceability.title": "Trazabilidad completa",
      "highlight.traceability.body": "Relaciona componentes, órdenes de recuperación, recetas y sesiones en un mismo historial.",
      "highlight.data.title": "Decisiones con datos",
      "highlight.data.body": "Convierte la información del proceso en evidencia útil para calidad y confiabilidad.",
      "services.kicker": "Servicios",
      "services.title": "Todo lo que necesitas para monitorear, controlar y analizar tus procesos HVOF.",
      "services.monitor.title": "Monitorea",
      "services.monitor.body": "Consulta los parámetros del proceso en vivo y detecta desviaciones de la receta durante cada sesión.",
      "services.trace.title": "Trazabilidad",
      "services.trace.body": "Registra componentes, órdenes de recuperación, recetas y sesiones de rociado en un mismo registro.",
      "services.diagnose.title": "Diagnóstico",
      "services.diagnose.body": "Identifica fallas, componentes afectados y las posibles causas detrás de cada problema.",
      "services.report.title": "Reportes",
      "services.report.body": "Genera evidencia de calidad, certificados y reportes de sesión listos para auditorías.",
      "value.title": "¿Por qué elegir Reliant?",
      "value.intro": "En muchas plantas los datos del proceso HVOF todavía se registran a mano. Reliant reemplaza los registros dispersos por una sola plataforma que registra, analiza y certifica cada recuperación.",
      "value.benefit1": "Información centralizada para operadores, supervisores e ingenieros de calidad.",
      "value.benefit2": "Trazabilidad de extremo a extremo de cada componente y orden de trabajo.",
      "value.benefit3": "Diagnóstico de fallas basado en datos reales del proceso.",
      "value.benefit4": "Evidencia verificable de calidad para los propietarios de activos.",
      "value.benefit5": "Menor dependencia de registros manuales.",
      "segments.kicker": "Segmentos",
      "segments.title": "Diseñado para ambos lados del proceso de recuperación",
      "segments.intro": "Selecciona tu perfil para conocer cómo Reliant puede ayudarte.",
      "segments.supplier.tag": "Proveedor de recuperación",
      "segments.supplier.title": "Ejecuta cada sesión HVOF bajo control",
      "segments.supplier.body": "Para empresas que operan sistemas HVOF y recuperan componentes para sus clientes: operadores, supervisores de operaciones, ingenieros de calidad y mantenimiento.",
      "segments.supplier.benefit1": "Registra sistemas HVOF, subsistemas y recetas de rociado.",
      "segments.supplier.benefit2": "Monitorea lecturas en vivo con bandas nominal, de advertencia y de parada.",
      "segments.supplier.benefit3": "Abre casos de falla automáticamente y genera certificados de calidad.",
      "segments.supplier.cta": "Registrarme como proveedor de recuperación",
      "segments.owner.tag": "Propietario de activos",
      "segments.owner.title": "Conoce exactamente cómo se recuperaron tus componentes",
      "segments.owner.body": "Para empresas mineras e industriales dueñas de los componentes: ingenieros de confiabilidad y analistas de procurement que necesitan evidencia, no promesas.",
      "segments.owner.benefit1": "Vista consolidada de tus componentes y su historial de recuperación.",
      "segments.owner.benefit2": "Certificados de calidad y reportes de sesión por cada orden.",
      "segments.owner.benefit3": "Compara proveedores e identifica fallas prematuras a tiempo.",
      "segments.owner.cta": "Registrarme como propietario de activos",
      "plans.kicker": "Planes",
      "plans.title": "Elige la experiencia diseñada para tu organización.",
      "plans.period": "/ mes",
      "plans.includes": "Incluye:",
      "plans.cta": "Comenzar",
      "plans.supplier.desc": "Para empresas que realizan procesos HVOF",
      "plans.supplier.f1": "Monitoreo de procesos",
      "plans.supplier.f2": "Registro de sistemas HVOF",
      "plans.supplier.f3": "Gestión de recetas",
      "plans.supplier.f4": "Trazabilidad de órdenes de recuperación y de trabajo",
      "plans.supplier.f5": "Diagnóstico de fallas",
      "plans.supplier.f6": "Alertas de desviaciones",
      "plans.supplier.f7": "Certificados de calidad",
      "plans.supplier.f8": "Reportes de sesiones",
      "plans.owner.desc": "Para empresas propietarias de los componentes",
      "plans.owner.f1": "Vista consolidada de componentes",
      "plans.owner.f2": "Seguimiento del desempeño en campo",
      "plans.owner.f3": "Registro de retorno de componentes",
      "plans.owner.f4": "Cumplimiento del PCR",
      "plans.owner.f5": "Consulta de certificados",
      "plans.owner.f6": "Comparación de proveedores",
      "plans.owner.f7": "Identificación de fallas prematuras",
      "steps.kicker": "Cómo funciona",
      "steps.title": "Del registro a la recuperación certificada en cuatro pasos",
      "steps.profile.title": "Crea tu organización",
      "steps.profile.body": "Regístrate como proveedor de recuperación o propietario de activos e invita a tu equipo con los roles adecuados.",
      "steps.setup.title": "Configura sistemas y recetas",
      "steps.setup.body": "Registra tus sistemas HVOF, subsistemas, clientes, componentes y recetas de rociado con sus bandas de parámetros.",
      "steps.track.title": "Ejecuta y monitorea sesiones",
      "steps.track.body": "Abre una orden de recuperación, inicia una sesión y observa las lecturas en vivo. Las desviaciones abren casos de falla automáticamente.",
      "steps.redeploy.title": "Certifica y comparte",
      "steps.redeploy.body": "Analiza la sesión, genera el certificado de calidad y comparte la evidencia con el propietario del activo.",
      "about.kicker": "Quiénes somos",
      "about.title": "Conoce el producto y al equipo detrás de él",
      "about.intro": "Reliant es una solución desarrollada por InnovaCorp, una startup tecnológica peruana enfocada en transformar los datos de procesos industriales especializados en información útil para la toma de decisiones.",
      "about.product.title": "About the Product",
      "about.product.body": "Un recorrido por Reliant: monitoreo HVOF en vivo, trazabilidad, diagnóstico de fallas y generación de reportes.",
      "about.team.title": "About the Team",
      "about.team.body": "Quiénes somos en InnovaCorp, por qué elegimos este problema y cómo trabajamos en equipo.",
      "about.video.soon": "Video disponible próximamente",
      "about.mission.title": "Misión",
      "about.mission.body": "Transformar los datos de los procesos industriales en información accionable que permita anticipar fallas, garantizar trazabilidad y sustentar la calidad mediante evidencia.",
      "about.vision.title": "Visión",
      "about.vision.body": "Ser una plataforma de referencia en Latinoamérica para el monitoreo y la trazabilidad de procesos industriales de alta especialización.",
      "about.values.title": "Valores",
      "about.values.body": "Innovación, compromiso, precisión y mejora continua.",
      "cta.title": "¿Listo para tener tus procesos HVOF bajo control?",
      "cta.body": "Crea tu organización en minutos o escríbenos y te mostramos la plataforma.",
      "cta.start": "Crear mi cuenta",
      "cta.email": "Escríbenos",
      "footer.tagline": "Tecnología y control al servicio de tus procesos. Construyendo una operación más inteligente.",
      "footer.product": "Un producto de InnovaCorp.",
      "footer.navigation": "Navegación",
      "footer.contact": "Contacto",
      "footer.app": "Abrir la aplicación web",
      "footer.legal": "Legal",
      "footer.terms": "Términos y condiciones",
      "footer.privacy": "Política de privacidad",
      "footer.copyright": "InnovaCorp — Reliant. Todos los derechos reservados.",
      "legal.updated": "Última actualización: 13 de noviembre de 2026",
      "legal.back": "← Volver a Reliant",
      "terms.title": "Términos y condiciones",
      "terms.intro": "Estos Términos y condiciones (\"Términos\") regulan el acceso y uso de la plataforma Reliant (\"Reliant\", \"el Servicio\"), operada por InnovaCorp (\"nosotros\"). Al acceder al Landing Page o a la aplicación web de Reliant, aceptas estos Términos.",
      "terms.section1.title": "1. Descripción del servicio",
      "terms.section1.body": "Reliant es una plataforma que conecta a proveedores de recuperación y propietarios de activos para facilitar la recuperación, el reacondicionamiento y la reincorporación de componentes industriales.",
      "terms.section2.title": "2. Elegibilidad y cuentas",
      "terms.section2.body": "Los usuarios deben proporcionar información de registro correcta y son responsables de mantener la confidencialidad de las credenciales de sus cuentas.",
      "terms.section3.title": "3. Responsabilidades del usuario",
      "terms.section3.body": "Los usuarios se comprometen a utilizar el Servicio legalmente y a proporcionar información verdadera sobre los componentes, solicitudes y servicios que registren o soliciten mediante la plataforma.",
      "terms.section4.title": "4. Limitación de responsabilidad",
      "terms.section4.body": "Reliant funciona como una plataforma intermediaria. InnovaCorp no forma parte de los acuerdos entre los proveedores de recuperación y los propietarios de activos y no es responsable de sus resultados.",
      "terms.section5.title": "5. Modificaciones de estos Términos",
      "terms.section5.body": "Podemos actualizar estos Términos periódicamente. El uso continuado del Servicio después de una modificación implica la aceptación de los Términos actualizados.",
      "terms.section6.title": "6. Contacto",
      "terms.section6.body": "Las preguntas sobre estos Términos pueden enviarse al equipo de InnovaCorp mediante el canal de contacto indicado en la aplicación web.",
      "privacy.title": "Política de privacidad",
      "privacy.intro": "Esta Política de privacidad explica cómo InnovaCorp (\"nosotros\") recopila, utiliza y protege los datos personales cuando utilizas el Landing Page y la aplicación web de Reliant.",
      "privacy.section1.title": "1. Información que recopilamos",
      "privacy.section1.body": "Información de la cuenta (nombre, correo electrónico y empresa), información del perfil relacionada con tu segmento (proveedor de recuperación o propietario de activos) y datos de uso necesarios para operar las funciones de vinculación y seguimiento del Servicio.",
      "privacy.section2.title": "2. Cómo utilizamos tu información",
      "privacy.section2.body": "Para operar y mejorar el Servicio, vincular solicitudes de recuperación con proveedores, comunicar actualizaciones del servicio y cumplir con obligaciones legales.",
      "privacy.section3.title": "3. Intercambio de datos",
      "privacy.section3.body": "Compartimos únicamente la información necesaria entre el proveedor de recuperación y el propietario del activo para completar una solicitud. No vendemos datos personales a terceros.",
      "privacy.section4.title": "4. Conservación y seguridad de los datos",
      "privacy.section4.body": "Conservamos los datos personales solamente durante el tiempo necesario para los fines descritos en esta política y aplicamos medidas técnicas y organizativas razonables para protegerlos.",
      "privacy.section5.title": "5. Tus derechos",
      "privacy.section5.body": "Puedes solicitar el acceso, la corrección o la eliminación de tus datos personales mediante la configuración de tu cuenta o contactando al equipo de InnovaCorp.",
      "privacy.section6.title": "6. Modificaciones de esta política",
      "privacy.section6.body": "Podemos actualizar esta Política de privacidad periódicamente. Los cambios importantes se comunicarán dentro de la aplicación web."
    }
  };

  function getTranslation(language, key) {
    return translations[language] && translations[language][key]
      ? translations[language][key]
      : translations.en[key] || key;
  }

  function applyLanguage(language) {
    var selectedLanguage = translations[language] ? language : "en";

    document.documentElement.setAttribute("lang", selectedLanguage);

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      element.textContent = getTranslation(selectedLanguage, element.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      element.innerHTML = getTranslation(selectedLanguage, element.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (element) {
      element.setAttribute("content", getTranslation(selectedLanguage, element.getAttribute("data-i18n-content")));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
      element.setAttribute("aria-label", getTranslation(selectedLanguage, element.getAttribute("data-i18n-aria-label")));
    });

    document.querySelectorAll("[data-language]").forEach(function (button) {
      var isActive = button.getAttribute("data-language") === selectedLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try {
      window.localStorage.setItem(STORAGE_KEY, selectedLanguage);
    } catch (error) {
      // The page still works when storage is unavailable.
    }
  }

  function getInitialLanguage() {
    try {
      var savedLanguage = window.localStorage.getItem(STORAGE_KEY);
      if (translations[savedLanguage]) {
        return savedLanguage;
      }
    } catch (error) {
      // Continue with the browser language.
    }

    return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  }

  function initialize() {
    document.querySelectorAll("[data-language]").forEach(function (button) {
      button.addEventListener("click", function () {
        applyLanguage(button.getAttribute("data-language"));
      });
    });

    applyLanguage(getInitialLanguage());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }

  window.ReliantI18n = {
    applyLanguage: applyLanguage
  };
})();
