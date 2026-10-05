/**
 * Reliant Landing Page — i18n.js
 * Provides English and Spanish translations for the Landing Page and legal pages.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "reliant-language";

  var translations = {
    en: {
      "meta.home.title": "Reliant | Industrial Component Recuperation Platform",
      "meta.home.description": "Reliant connects Recuperation Suppliers and Asset Owners to recover, recondition and redeploy industrial components faster and more sustainably.",
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
      "nav.why": "Why Reliant",
      "nav.segments": "Segments",
      "nav.how": "How it works",
      "nav.contact": "Contact",
      "nav.start": "Get started",
      "hero.eyebrow": "Industrial component recuperation, simplified",
      "hero.title": "Give idle industrial components a second life — faster, traceable, sustainable.",
      "hero.subtitle": "Reliant connects <strong>Recuperation Suppliers</strong> who recover and recondition industrial components with <strong>Asset Owners</strong> who need reliable components back in operation quickly, cutting downtime and reducing waste.",
      "hero.supplier": "I'm a Recuperation Supplier",
      "hero.owner": "I'm an Asset Owner",
      "hero.metric.time": "Avg. recovery time",
      "hero.metric.components": "Components diverted from landfill",
      "value.title": "Why teams choose Reliant",
      "value.intro": "One platform to list, discover, evaluate and track industrial components across their full recuperation lifecycle.",
      "value.traceability.title": "Traceability",
      "value.traceability.body": "Every component is tracked from intake through reconditioning to redeployment, so Asset Owners always know the history and condition of what they receive.",
      "value.matching.title": "Faster matching",
      "value.matching.body": "Reliant matches recovery requests with available Recuperation Suppliers by component type, location and turnaround time, cutting downtime for critical assets.",
      "value.sustainable.title": "Sustainable by design",
      "value.sustainable.body": "Recovering and redeploying components instead of scrapping them reduces waste and supports circular-economy goals for both sides of the marketplace.",
      "segments.title": "Built for two segments",
      "segments.intro": "Choose your profile to see how Reliant works for you.",
      "segments.supplier.tag": "Recuperation Supplier",
      "segments.supplier.title": "Grow your recovery business",
      "segments.supplier.body": "List your recuperation capabilities, receive matched recovery requests from Asset Owners, and manage every job from intake to delivery in one place.",
      "segments.supplier.benefit1": "Get discovered by Asset Owners searching for your component specialty.",
      "segments.supplier.benefit2": "Manage requests, quotes and status updates from a single dashboard.",
      "segments.supplier.benefit3": "Build a verifiable track record that wins you repeat business.",
      "segments.supplier.cta": "Join as a Recuperation Supplier",
      "segments.owner.tag": "Asset Owner",
      "segments.owner.title": "Get critical components back faster",
      "segments.owner.body": "Submit a recovery request, compare matched suppliers by turnaround and track record, and follow your component's progress until it's back in operation.",
      "segments.owner.benefit1": "Reduce downtime with faster access to qualified recuperation suppliers.",
      "segments.owner.benefit2": "Compare options transparently by cost, timeline and history.",
      "segments.owner.benefit3": "Track every request from submission to delivery.",
      "segments.owner.cta": "Join as an Asset Owner",
      "steps.title": "How Reliant works",
      "steps.profile.title": "Create a profile",
      "steps.profile.body": "Sign up as a Recuperation Supplier or an Asset Owner and set up your profile.",
      "steps.discover.title": "Post or discover",
      "steps.discover.body": "Asset Owners post recovery requests; Recuperation Suppliers get matched to relevant ones.",
      "steps.track.title": "Track progress",
      "steps.track.body": "Follow every component through recuperation with shared, transparent status updates.",
      "steps.redeploy.title": "Redeploy",
      "steps.redeploy.body": "Receive the recovered component and put it back into operation with full traceability.",
      "cta.title": "Ready to recover more value from your industrial components?",
      "cta.body": "Join Reliant today — it only takes a few minutes to get started.",
      "footer.product": "A product by InnovaCorp.",
      "footer.terms": "Terms & Conditions",
      "footer.privacy": "Privacy Policy",
      "footer.copyright": "InnovaCorp — Reliant. All rights reserved.",
      "legal.updated": "Last updated: [DD Month YYYY]",
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
      "meta.home.title": "Reliant | Plataforma de recuperación de componentes industriales",
      "meta.home.description": "Reliant conecta a proveedores de recuperación y propietarios de activos para recuperar, reacondicionar y reincorporar componentes industriales de forma rápida y sostenible.",
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
      "nav.why": "Por qué Reliant",
      "nav.segments": "Segmentos",
      "nav.how": "Cómo funciona",
      "nav.contact": "Contacto",
      "nav.start": "Comenzar",
      "hero.eyebrow": "Recuperación de componentes industriales simplificada",
      "hero.title": "Dale una segunda vida a los componentes industriales inactivos: de forma rápida, trazable y sostenible.",
      "hero.subtitle": "Reliant conecta a los <strong>proveedores de recuperación</strong> que recuperan y reacondicionan componentes industriales con los <strong>propietarios de activos</strong> que necesitan reincorporarlos rápidamente a sus operaciones, reduciendo el tiempo de inactividad y los residuos.",
      "hero.supplier": "Soy un proveedor de recuperación",
      "hero.owner": "Soy un propietario de activos",
      "hero.metric.time": "Tiempo promedio de recuperación",
      "hero.metric.components": "Componentes desviados de vertederos",
      "value.title": "Por qué los equipos eligen Reliant",
      "value.intro": "Una plataforma para registrar, descubrir, evaluar y rastrear componentes industriales durante todo su ciclo de recuperación.",
      "value.traceability.title": "Trazabilidad",
      "value.traceability.body": "Cada componente se rastrea desde su recepción y reacondicionamiento hasta su reincorporación, de modo que los propietarios de activos siempre conozcan su historial y condición.",
      "value.matching.title": "Vinculación más rápida",
      "value.matching.body": "Reliant vincula las solicitudes de recuperación con proveedores disponibles según el tipo de componente, la ubicación y el tiempo de entrega, reduciendo la inactividad de los activos críticos.",
      "value.sustainable.title": "Sostenible desde el diseño",
      "value.sustainable.body": "Recuperar y reincorporar componentes en lugar de desecharlos reduce los residuos y contribuye con los objetivos de economía circular de ambos segmentos.",
      "segments.title": "Diseñado para dos segmentos",
      "segments.intro": "Selecciona tu perfil para conocer cómo Reliant puede ayudarte.",
      "segments.supplier.tag": "Proveedor de recuperación",
      "segments.supplier.title": "Haz crecer tu negocio de recuperación",
      "segments.supplier.body": "Registra tus capacidades, recibe solicitudes de propietarios de activos y administra cada trabajo desde la recepción hasta la entrega en un solo lugar.",
      "segments.supplier.benefit1": "Sé encontrado por propietarios de activos que buscan tu especialidad.",
      "segments.supplier.benefit2": "Administra solicitudes, cotizaciones y estados desde un único panel.",
      "segments.supplier.benefit3": "Construye un historial verificable que genere nuevas oportunidades comerciales.",
      "segments.supplier.cta": "Registrarme como proveedor de recuperación",
      "segments.owner.tag": "Propietario de activos",
      "segments.owner.title": "Recupera tus componentes críticos más rápido",
      "segments.owner.body": "Envía una solicitud, compara proveedores según su tiempo de entrega e historial y sigue el progreso del componente hasta su reincorporación a la operación.",
      "segments.owner.benefit1": "Reduce el tiempo de inactividad accediendo rápidamente a proveedores calificados.",
      "segments.owner.benefit2": "Compara opciones de forma transparente por costo, tiempo e historial.",
      "segments.owner.benefit3": "Rastrea cada solicitud desde su creación hasta la entrega.",
      "segments.owner.cta": "Registrarme como propietario de activos",
      "steps.title": "Cómo funciona Reliant",
      "steps.profile.title": "Crea un perfil",
      "steps.profile.body": "Regístrate como proveedor de recuperación o propietario de activos y configura tu perfil.",
      "steps.discover.title": "Publica o descubre",
      "steps.discover.body": "Los propietarios publican solicitudes y los proveedores reciben aquellas que coinciden con sus capacidades.",
      "steps.track.title": "Sigue el progreso",
      "steps.track.body": "Sigue cada componente durante su recuperación mediante estados compartidos y transparentes.",
      "steps.redeploy.title": "Reincorpora",
      "steps.redeploy.body": "Recibe el componente recuperado y reincorpóralo a la operación con trazabilidad completa.",
      "cta.title": "¿Listo para recuperar más valor de tus componentes industriales?",
      "cta.body": "Únete a Reliant hoy. Empezar solo toma unos minutos.",
      "footer.product": "Un producto de InnovaCorp.",
      "footer.terms": "Términos y condiciones",
      "footer.privacy": "Política de privacidad",
      "footer.copyright": "InnovaCorp — Reliant. Todos los derechos reservados.",
      "legal.updated": "Última actualización: [DD de mes de AAAA]",
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
