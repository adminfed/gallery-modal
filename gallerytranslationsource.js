
(function () {
  "use strict";

  /* =====================================================
     GALLERY TRANSLATION
     Google Translate + Blogger
  ===================================================== */

  const galleryTranslationImages = [
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaQecTCKkOPsdJSuM3SCjG_wawU00qhrax1S47JR5hpM6-sON5i7vgR34q_VJYnNOSr7LlHQ1f4Y3sB7ADmkXYvx_KYv8HHibbaswYEILmRwOcrxS3bQmRSJaLpgGCydloW8ybCNT3RMkB6PgFlrXZLbEdf-3T4-z_aHALwPVRfT-H3YeeKU6jus3iCqrw/w640-h461/10_1200x864.jpg",
      title: "Villa Entrance with Ambient Night Lighting"
    },

    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbgha_FxabZPQYg68WSYVQzB-F2KcT_LonPJ6mSHzu6eawkLTcOlXeNNq3LjzbyXK-lojsD50yVG5tdbRdOb01koDh5DXYCE_y-U14XTbWvHY8b0sWtZMJOZFMKotf_Cc9t2dgj8pkAdkr1Jbc3sYoYZ4N_XIBU6vd90wlV1h1yYql6CGgVD8GiIEGpzFL/w640-h461/11_1200x864.jpg",
      title: "Modern Foyer with Built-in Shelving"
    },

    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK8xT3RnNjkOdG3OJvTAFuVTxMgpWna-MaCqFeYAE-2kBNj-Fc4eXWMigi0iVnv16PR8M67WPAZb6N1izjjNszvy9HEmQZGDh7cNVA84XoCLlkgNzDqnchiJw6JEGU30mV4C9tVjxXEIkunzLsMRBScX0iuKgAqZDjq7ocUxRQ4pT5IF1PyTNn-sfpVqoJ/w640-h461/12.jpg",
      title: "Clean Interior Corridor with Polished Tile Flooring"
    },

    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSpqYFXuQnWgDJeA_Xwj6j1Ohx9xnT50SLdsCD9CXq-_GKTBm4sIq_13WoiMaILxD4TpiuOHJlvpBVBqcGrI-Qx2QQMR2PbldzxIObaJ5OPThiUsLepe0B3_Esq0C0rzGn0uRGzqSzQ5XbVpBFiSsbfnlWd2ZFqMbFbjQqc5P1OrRMgddj50wbnwNwYGC33/w640-h461/13.jpg",
      title: "Spacious Hallway Connecting Living Areas"
    }
  ];


  /* =====================================================
     CREATE TRANSLATION SOURCE
  ===================================================== */

  function createTranslationSource() {

    if (
      document.getElementById(
        "galleryTranslationSource"
      )
    ) {
      return;
    }

    const box =
      document.createElement("div");

    box.id =
      "galleryTranslationSource";

    box.style.position =
      "absolute";

    box.style.left =
      "-99999px";

    box.style.top =
      "0";

    box.style.width =
      "300px";

    box.style.height =
      "1px";

    box.style.overflow =
      "hidden";

    galleryTranslationImages.forEach(
      function (image, index) {

        const item =
          document.createElement("div");

        item.className =
          "gallery-translation-item";

        item.setAttribute(
          "data-gallery-index",
          index
        );

        item.textContent =
          image.title;

        box.appendChild(item);

      }
    );

    document.body.appendChild(box);
  }


  /* =====================================================
     GET TRANSLATED TITLE
  ===================================================== */

  function getGalleryTranslatedTitle(index) {

    const original =
      galleryTranslationImages[index];

    if (!original) {
      return "";
    }

    const item =
      document.querySelector(
        '.gallery-translation-item[data-gallery-index="' +
        index +
        '"]'
      );

    if (!item) {
      return original.title;
    }

    const text =
      item.textContent.trim();

    return text || original.title;
  }


  /* =====================================================
     PUBLIC FUNCTION
  ===================================================== */

  window.getGalleryTranslatedTitle =
    getGalleryTranslatedTitle;


  /* =====================================================
     GET FILE NAME
  ===================================================== */

  function getFileName(url) {

    if (!url) {
      return "";
    }

    try {

      const cleanUrl =
        url.split("?")[0];

      const parts =
        cleanUrl.split("/");

      return (
        parts[parts.length - 1] || ""
      ).toLowerCase();

    } catch (error) {

      return "";

    }
  }


  /* =====================================================
     FIND CURRENT IMAGE INDEX
  ===================================================== */

  function getCurrentImageIndex() {

    const image =
      document.getElementById(
        "galleryModalImg"
      );

    if (!image) {
      return -1;
    }

    const currentFile =
      getFileName(
        image.currentSrc ||
        image.src
      );

    if (!currentFile) {
      return -1;
    }

    for (
      let i = 0;
      i < galleryTranslationImages.length;
      i++
    ) {

      const sourceFile =
        getFileName(
          galleryTranslationImages[i].src
        );

      if (
        currentFile === sourceFile
      ) {
        return i;
      }
    }

    return -1;
  }


  /* =====================================================
     CHECK WHETHER GOOGLE TRANSLATE HAS TRANSLATED
  ===================================================== */

  function isTranslated(index) {

    const original =
      galleryTranslationImages[index];

    if (!original) {
      return false;
    }

    const item =
      document.querySelector(
        '.gallery-translation-item[data-gallery-index="' +
        index +
        '"]'
      );

    if (!item) {
      return false;
    }

    const current =
      item.textContent.trim();

    if (!current) {
      return false;
    }

    /*
      If text is still exactly the English source,
      Google Translate has not translated it yet.
    */

    return (
      current !== original.title
    );
  }


  /* =====================================================
     APPLY TRANSLATION
  ===================================================== */

  function applyGalleryTranslation() {

    const image =
      document.getElementById(
        "galleryModalImg"
      );

    const title =
      document.getElementById(
        "galleryModalTitle"
      );

    if (!image || !title) {
      return;
    }

    const index =
      getCurrentImageIndex();

    if (index < 0) {
      return;
    }

    /*
      Do not replace English text until
      Google Translate has actually translated
      the hidden source.
    */

    if (!isTranslated(index)) {
      return;
    }

    const translated =
      getGalleryTranslatedTitle(index);

    if (!translated) {
      return;
    }

    /*
      Update visible title
    */

    if (
      title.textContent !==
      translated
    ) {

      title.textContent =
        translated;

    }

    /*
      Update image ALT
    */

    if (
      image.alt !==
      translated
    ) {

      image.alt =
        translated;

    }

    /*
      Update image TITLE
    */

    if (
      image.title !==
      translated
    ) {

      image.title =
        translated;

    }
  }


  /* =====================================================
     START AUTOMATIC CHECK
  ===================================================== */

  function startGalleryTranslation() {

    createTranslationSource();

    /*
      Check repeatedly because:
      - Gallery may change image
      - Gallery may rewrite title
      - Google Translate may finish later
      - Google Translate may change language
    */

    setInterval(
      function () {

        applyGalleryTranslation();

      },
      250
    );
  }


  /* =====================================================
     START
  ===================================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      startGalleryTranslation
    );

  } else {

    startGalleryTranslation();

  }

})();
