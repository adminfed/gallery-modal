
(function () {
  "use strict";

  /* =====================================================
     GALLERY TRANSLATION
     Google Translate + Blogger
  ===================================================== */

  const galleryTranslationImages = [
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaQecTCKkOPsdJSuM3SCjG_wawU00qhrax1S47JR5hpM6-sON5i7vgR34q_VJYnNOSr7LlHQ1f4Y3sB7ADmkXYvx_KYv8HHibbaswYEILmRwOcrxS3bQmRSJaLpgGCydloW8ybCNT3RMkB6PgFlrXZLbEdf-3T4-z_aHALwPVRfT-H3YeeKU6jus3iCqrw/w640-h461/10_1200x864.jpg",
      title: "Villa Entrance with Ambient Night Lighting", 
    },
      {  src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbgha_FxabZPQYg68WSYVQzB-F2KcT_LonPJ6mSHzu6eawkLTcOlXeNNq3LjzbyXK-lojsD50yVG5tdbRdOb01koDh5DXYCE_y-U14XTbWvHY8b0sWtZMJOZFMKotf_Cc9t2dgj8pkAdkr1Jbc3sYoYZ4N_XIBU6vd90wlV1h1yYql6CGgVD8GiIEGpzFL/w640-h461/11_1200x864.jpg",
      title: "Modern Foyer with Built-in Shelving",
    },
       {  src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK8xT3RnNjkOdG3OJvTAFuVTxMgpWna-MaCqFeYAE-2kBNj-Fc4eXWMigi0iVnv16PR8M67WPAZb6N1izjjNszvy9HEmQZGDh7cNVA84XoCLlkgNzDqnchiJw6JEGU30mV4C9tVjxXEIkunzLsMRBScX0iuKgAqZDjq7ocUxRQ4pT5IF1PyTNn-sfpVqoJ/w640-h461/12.jpg",
      title: "Clean Interior Corridor with Polished Tile Flooring",
    },
       {  src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSpqYFXuQnWgDJeA_Xwj6j1Ohx9xnT50SLdsCD9CXq-_GKTBm4sIq_13WoiMaILxD4TpiuOHJlvpBVBqcGrI-Qx2QQMR2PbldzxIObaJ5OPThiUsLepe0B3_Esq0C0rzGn0uRGzqSzQ5XbVpBFiSsbfnlWd2ZFqMbFbjQqc5P1OrRMgddj50wbnNwYGC33/w640-h461/13.jpg",
      title: "Spacious Hallway Connecting Living Areas",
    },
     {  src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlunR4OTMjCdi8FMe0QVM7GzLqpic3RJPd8dm2c6NPDZO4MKYvSvfR4LIFYmj5VHChFPrbVLhw1Rt1Vf0UKOteylnjnkZzbfNOWHoYmFjoT4g18-VCKoPvh12Ad90Z0imGvaDrwY4CT2aOFsTQDkx-VjDq-be0-fGSN6KybM6ylvEGQx7p6l6AE3NjNbdN/w640-h461/14.jpg",
      title: "Modern Kitchen Island with Pendant Lighting",
    },
     {  src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUSgT9eM7cPF-zUHUFY-l55KplRhZ26Nc_MhCj9uG0udx5G7fKySArk0qI8KGfR_BNp5IJ5qv2wUdn8MlHUSK_lTkoOlUVUZSQDoLXY4_RK9cgMQgb7LZh1-9neY867v4qq-MtuIU9GFS3uBEUccGGsbCwolhxcSwY09yMkXf6kyQ4Bi3Gb0I2L96bU8hd/w640-h461/15.jpg",
      title: "Kitchen Opening to Private Outdoor Space",
    }, 
     {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPGcZK66IupV3V9rmFuMQWc6_IobWcyworik6LXkUnV2bepNkAN0n6Q85KHjfAN_FqmoCuxSeOx16ZTG96MCUzVDbZ6LTpw3q82IkPmYyBrQekf87OO3HxGcTBobmyXFYWxzSXILxKGS_i0P9JV7qIQt4S2P6x1HJ4ysPGvURwPDPI4bwowExSNoLo7FZP/w640-h461/17.jpg",
      title: "Spacious Kitchen and Dining Area with Island Seating",
    },
      {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLQmhMPdxooZRWwpPfEmoFZTiHnDU_PWwUzOwfTVmZ0t1DfMe1ptd_TlHBc8lUqD7txRxjDYOrpju5ka7MT8YzfZhQHpf61nKd0s1gJNYHrbGz1rtnh7E9HScGofy-CIiTg770bZg-stvwuPdjbxAyzuxQme169n4L7yOW0_YKLKd6zahHguFe1QkGwlwD/w640-h461/18.jpg",
      title: "Compact Kitchen Setup with Gas Cooktopg",
    },
         {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKIhokQrJV1RkERZ-vxYvktHLAyxG34-LvOHYBpZe6M8brLwKGi9iDTej8XECqsAuFMC0kJSnXJ1v_r3Nn0DFGmE2RqMz5KIeBaw-2ilGE4np9GpuCOUrCiHyGJFstdoo8K6k6jXSOED7z1l8oUo8EaL-O3bzvCf9ibIVTAj1YejNfImKEMiYecNJcCS13/w640-h461/19.jpg",
      title: "Cozy Lounge Area with Smart TV Setup",
    },
      {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmgr6AMG8Kf_wQZ8WCKjlTwpyaW8VGgRF3kpUymsG9YrpseDxoIWt_Ee0Ve6Znqbvl-0pZhnEd8scJQ1YNYMoZ4Mka9rC3S3toGpB-aly4SpNq3Xbofph16gfN7Wp3RUShX5MssziwSR8FMwtWYsPDnCZNS6FbnpxgJY70Xn3EN8aQrfFbf5J0KGqgmWNB/w640-h461/20_1200x864.png",
      title: "Contemporary Living Space with Integrated Kitchen and Dining",
    },
      {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibV7hY9y52Dmpykvi42dO48VyHxiFwqSTeOgiqz-kveSf00mf3bexV5WC-pcRz_4277M1llXF3aNGWTaFVu3KYEkCTHUNLC50AICkfT0CFfh78IujHUkRQOtwPFJ7YG9te2Z0Hq67GHsp8apEVaS6Wu46A4PWVq0uqvdJ51TVN9wRzy0YIr4ceKq-Gz9vv/w640-h461/23_1200x864.jpg",
      title: "Elegant Marble Staircase Connecting Two Floors",
    }, 
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg93mSexvlB3Y-1UbCxgeo0IRBc5VPdxR5l8RUkGvuX4iutWcAdjNZwmpjGfq6VavaZSqWWjJhDsW7fUKbkLsPAn-i9aHDgkqXPyAK7Em-BgtiiG5TaE2-mk2IVxwtzC44Nj5CSF7pQ9fJValrGFSsBzKo7nwBh7_8WtWMr0BJE_v-UfScgXbNXQFnBBdLK/w640-h461/25_1200x864.jpg",
      title: "Upper Floor Landing with Bedroom Access",
    },
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifNrcFyL1GzAFNBKabV8Hemk2EB1g5oGBZpxbPIczcrsQWuWaj6ahK7_dGSRNbT0ApslNgBy7VX5YDx35m_KyEcHtG1MCYAFc3cg4RMGniQHdj4JoapsO_cU6B9rjwKqh15IBosf7-j_1YpZAz9DC0HNuaEzEQEFiIA-O0kJmKDEEjKYjOlmB9atDp4ihv/w640-h461/27_1200x864.jpg",
      title: "Master Bedroom with Platform Bed and TV Console",
    },
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipeAEoNuGd98DpBO0Sb0QJza5l-Sb-J6qG_izjlJOXWq950BeuD93vtH1IsPHnSVi-iz93xXN3V2oewwh3g_xST06vDTuKdDRI-iXvlMA3y7t0SRaB565RIfINlAxCAWF6WtoZKLBA29H2eydQ7NTVTwQNvr1jhrCIsOr9dX2ZB2BKv6MaO8hobGGO7vXA/w640-h461/28_1200x864.jpg",
      title: "Bedroom 1 featuring Nautical Wall Art",
    },
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEito3XklzQtqpbYbM6w27yc8tnzfrY_3l-KC07XfFRAig3mjRD0b4_ppjOV8HpzBlR43USgje5ObrGylk_ISOUs09nN5gWiNjehM_uYmhpkVFCPr4R0MPmYUX6UTnLyJk1Cr9MGkEJiHpr9qHpl2TfjKWhFqyYnZXbmkemdSKgH7spncVtTkmPTCg7yPEZQ/w640-h461/30_1200x864.jpg",
      title: "Modern Bathroom with LED Mirror Lighting",
    }, 
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiL7_0vR7RlC5CbUAQVCJ4qV1ItDb8yiNL2-9GKuoAumXEY8ZSRW-c-ULFShOEe1l7hfuHoO2V7TcOuc38hPdoBktG_6l1ctNyhJ8wLjnEwXjMRmbluX5w6nx8KpmWyi2YDre4YrM74JaHhoDF9KKGBwDh1pbktPTD_0ylL2pAQKS45Vrx2EbHtfb1kbGZg/w640-h461/31_1200x864.jpg",
      title: "Glass-enclosed Walk-in Shower",
    },
        {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitADrBrT9RtndF-dsoJOx8adzVFCed4mHIHWbr2zMWPtGJHMJdH1TcMilahD8Hz2AwjdNPB4N4GFa0pH6CgyowYx9_LQTc0gVTw3kT0p7jviBZsoA1HKOk_1pdwwkHxC-OR93rGhSawGCNR10du-BBLGSsWdZiRDQ4C6EwJuqy9Whk0VOhz57sKHtmHI4t/w640-h461/32.jfif",
      title: "Vessel Sink with Marble Countertop",
    },
       {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCC0S8Tsge0n4zSqFsqUjwqQE5mXdWOezsZhix9f8-Jas0JIkrnXup32GqkxNKDo1P2ZiD9S6yDCOXEk0T5FsbEHm9btB1dS1o06-RUq09eezH8PMruVzGvAOnW1AfLKlb2davLgqCvWhFF58eSMmafljE5OqepUl798il1XtApKZmoFOMkrbsHdhYaIb2/w640-h461/33_letterbox_1200x864.jpg",
      title: "Bedroom 2 Hallway with Ambient Lighting",
    },
        {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNQdaDRmncbX6VVjydC8npp9sZdDsbwWutbzgwggFLv2dEF6yzNWgrXV6wEj9px1L_t7Zzu10DkkVClbNXwRP7SFRfV8lH8vrEs3-CrefMLEAgonnk09ePHx8tfCZ6d8A9bDCzYkDamYQxsTc9FuZqWKYhiesuJdSxN2oUjtSZ0ml9D2jfTd8p9BbhujaM/w640-h461/34.jpg",
      title: "Bedroom 2 with Balcony Access",
    },
        {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmrtMfcRtiHtG48IeLOwHi8jD5kwWR6Iy8ycuKD3njF_NIJO1KZi-jAf0W-8wubnTJcmbi0g1qGyv06c4aYXU6u5XqkvRaVFRPJeibd5hb_lzYlcV2FKwYryJoePHuuQ2KXVxqVr2lgfCgWcRZSbOajgJb9UJDcwc64J4iri_wayrcyrmNOAvzKyXXJGQ0/w640-h461/35.jpg",
      title: "Comfortable Second Bedroom with Platform Bed",
    },
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjysB9V6ZUwFqXsCIcywBucCykgq3f2aPdkVtwKciOe-KvgONYyPdW2wFrzfBMpqlmsQh8Euhk7sz8EmxH4dN5XLOdPD_Gofe93m0KFOtA6NhntthO4hRM8hh_h3Y4P2-aIUDrFR_pNBNpt5vYhHnOaWo_oy6SqvrmNvGiACxDGm8qAI5AplODuwFGvJwOc/w640-h461/37_warm_light.jpg",
      title: "Walk-in Shower with Glass Enclosure",
    },
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUyKFpCOuB-QcVowpuoc4c-eDo81kE9HZU4OPFaIQGTDtCgVXhpi5nK9QPVXe38Mge6wFgcXaDRuCBhkPkmJO5XzJ82D5pk1dAl1PrMtM54mvOyNG2eY9vmjO4d61PMnTUe9mYD3LZknr4To1a8Uei6GfwjgrVRh8WUymfihTkJ6oq-oxD2n0oOnUquN_r/w640-h461/38.jpg",
      title: "Bedroom 2 Bathroom with Floating Vanity",
    },
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_YqSxVqO-FttutMva2hZEYVAqPk7J0Y8TRvAjkf93TmYqGTgPn-yXAgklV9qYzGt4KjHnsQ64kJTHlgeEOt_fdW3A6bzP-WhKvVBzrJxxeMstJ_t4rPJuXDnf3xSyiFir-ujMWTsGxaXfDzKb4of68qMiIeMuHaZWxLhRVUqKFrLE3a95TZNxUsB6AbYF/w640-h461/40.jpg",
      title: "Bedroom 3 with Balcony Access and Warm Ambient Lighting",
    },
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNZ5VAa9IypeUZcnIHYnV_ITZX2yhxbA3rlwzSC0KQYxV8a_OV-ChabsNchNPWah1_ug0tdK3qXxfniB_lcw2966RLK_jjJeThWYXQKRxkMPLQ9VwaB59FKw8GuoD1B3DpdBFGj9kWPdEcMhupCFgNdnbNYK_dYTIX66vKB2s6fYIDmK-fV9JBx4Xoilzk/w640-h461/41_1200x864.jpg",
      title: "Third Bedroom Contemporary Furniture",
    },
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsBEtvUHGmudHFWvFJj4foLP6pfGqj97W2kGcRAx86_8yT4E-KkvBt5TeoYlfaIIKSc5R_sX3nyXFTA7peiM7koJeLp3UbEauaWvHM9X8mPaGRjP9lQyBVNxf553JK2Z4IjAhTyQA64dquWDwL-mXplb3xf3kLh9y1fwYqkqebSM28Q1cbKIf8eDku6rHh/w640-h461/43.jpg",
      title: "King Platform Bed with Navy Accents",
    },
      { src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuRRm_k3rR0e86JtHNV4133B4fenrwVO7XgD8Ad6OfkKqLOUTZp4Re53GLOXUvDgRbTY6OG5Oo3IkMW0zBBYQzdRrTHRhGPh6JRRHcsVIGWOFqrFqwcYDRn9sHJo5Sixka73NRgO-zXbUGi-0Jn2C8QhzJC-8AiPst8x-KbzsnpItKHB0NWsLgdZb0f7pO/w640-h461/44.jpg",
      title: "Bedroom 3 Ensuite with Floating Vanity",
    },
        {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjIJQjpA6HdgPACxluQ8mOy9oVsV8A572OKDf2me7tnvdrsiEpbVLexhKPC1FSK0MvLYJk63dpjOs9oIkcF39t8KsINXpjGGt0y4EiVC04l_f4YhRi1wMj3yaTXZMWEMeWGWF84-uReiipprI8McjWTOCKEG3WZ97vvmpF-1S0qjwBqD9CInpvgEbXcW0_/w640-h461/image_4d7ba8_enhanced_2x.jpg",
      title: "Shaded Outdoor Lounge Area by Pool",
    },
        {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghp3E4dh9Rmo_I5psLDfK0iJtPJ5wxRyTmwAv3ENIcz_1BD_10Y1dOxev_8apUWkjrF7VuN9PBJx474EBNxa4psrJqQsfCI2H_I7C-yzBWgpF3EEI6LUi2vaYY9RzXcFmbbShA13-sF4EoJKW02tRxX0kiUJoRW1Kwydu6STapkWI8P3dl7wpWBfwq85Fo/w640-h461/image_4950a5_night_2x.jpg",
      title: "Pool View from Interior Living Space",
    },
        {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAhdJ5sqDjHHY6jfwayEfoZEh9IiObXjtAC6N8YiDn5GzCpbh2TEzcTSpPjjxz0BoTr5FNYdWWzhKHqHf98mgqsIdcX_jnLul2fYBBu3VjiWSQC72dWC2lk0WvCuAjyTa7LTmaC2X3YMSJccUKf3-TRjhDvwUnIDrZgM-rTlOk79qgvYexUbZWvBDhjOJT/w640-h461/image_fb6777_enhanced_2x.jpg",
      title: "Private Pool with Shaded Seating and Garden Setting",
    },    
    {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQyj9IDTY_-jHJX_khLhku5OvzVrbOe_ZbsT-mKCsLX-m_mfWG8TtKvWmQGMjb_GFB4BSqSG0O_HZZREAxqOnAp2pvFz_HU_aszV4tQxOgNeCboc9zwrDtWUOCJbFW8KNBk2WBlU-kHWyfualJTm_Tm6JCl2Y0PcUNSUbyfVa17Illp_pKWPSXA53lXFi0/w640-h461/image_fded5f_enhanced_2x.jpg",
      title: "Private Pool with Garden Views and Stone Decking",
    },
        {  src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw1Ca6YZz-x8F_DiFftllTTujIUTHLIr4u-czBgWSdeSxTgQ8GrdTu02gq-Fo91N4J8qzzMAxpQLtPrclzZYlVczYRG2N2elj9p-nIlhsdpqpKFboRU_b0urtLZ-eCoeJygdgmMx1QJb1BN_2C2SZdXvvPBXFY6qzE1alKSyuHZ5vlAogFzLKDSJWgM1Nd/w640-h461luxury_villa_twilight_1200x864.jpg",
      title: "Two-Story Villa with Pool and Outdoor Terrace",
    },

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
