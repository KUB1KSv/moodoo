/* ── MOODOO SHARED LANGUAGE MODULE ─────────────────────────────────────────
   Usage on any page:
     <script src="lang.js"></script>
     Then call: MoodooLang.init();
   Language persists across all pages via localStorage.
   Add data-text="key" to any element to auto-translate it.
   For placeholders: data-placeholder="key"
   For aria-label:   data-aria="key"
────────────────────────────────────────────────────────────────────────── */

window.MoodooLang = (() => {

    const STORAGE_KEY = 'moodoo_lang';

    /* ── ALL STRINGS ────────────────────────────────────────────────────── */
    const strings = {

        cs: {
            /* nav / shared */
            news: 'Novinky',
            categories: 'Kategorie',
            signIn: 'Přihlásit se',
            languageName: 'Čeština',

            /* landing hero */
            heroTitle: 'Příběhy, které se rozhodují s tebou.',
            heroDesc: 'Rozhoduj se jako hrdina — jejich směr určuješ ty.',
            emailPlaceholder: 'Zadejte e-mail',
            heroCta: 'Začít',

            /* landing features */
            sectiontitle: 'Proč zrovna Moodoo?',
            feature1Desc: 'Nejen čteš. Rozhoduješ.',
            feature2Desc: 'Každý příběh má víc konců',
            feature3Desc: 'Mezi knihou a hrou',
            discover: 'Zjistit více',
            showcaseTitle: 'Tohle teď čte každý.',
            footer: 'Prozkoumejte Moodoo — vaši novou domovskou stránku pro filmy a seriály.',

            loginTitle: 'Přihlášení',
            loginSubtitle: 'Zadejte své údaje a pokračujte ke své oblíbené zábavě.',
            labelEmail: 'E-mail',
            emailPlaceholder: 'vas@email.cz',
            labelPassword: 'Heslo',
            passwordPlaceholder: 'Heslo',
            loginBtn: 'Přihlásit se',
            noAccount: 'Nemáte účet?',
            startHere: 'Začněte zde',
            adminHint: 'Admin login: admin@moodoo.cz / moodoo123',
            loginSuccess: 'Přihlášení proběhlo úspěšně. Vítejte, ',
            loginError: 'Nesprávný e-mail nebo heslo. Zkuste to znovu.',

            /* home page */
            trending: '#1 v trendech',
            readBtn: 'Přečíst',
            moreInfo: 'Více informací',
            comicsTitle: 'Komiksy',
            books: 'Knihy',
            destription: 'Popis',
            genres: 'Žánry',
            endings: 'Konce',
            readingTime: 'Doba čtení',
            discussBtn: 'Diskutovat',

            /* search */
            searchTitle: 'Najdi svůj příběh',
            searchPlaceholder: 'Hledat filmy, seriály, komiksy, autory...',
            searchHint: 'Začněte psát pro zobrazení návrhů. Stiskněte Enter pro hledání.',
            popularSearches: 'Oblíbená hledání',
            trendingNow: 'Právě v trendu',
            searchFooter: 'Zadejte hledaný výraz a stiskněte Enter pro průzkum katalogu Moodoo.',

            /* profile settings */
            pageTitle: 'Nastavení profilu',
            pageSubtitle: 'Spravujte svůj účet, předvolby a soukromí.',
            saveBtn: 'Uložit změny',
            uploadPhoto: 'Nahrát fotku',
            removePhoto: 'Odebrat fotku',
            sectionPersonal: 'Osobní údaje',
            labelFirstName: 'Jméno',
            labelLastName: 'Příjmení',
            labelUsername: 'Uživatelské jméno',
            labelEmail: 'E-mailová adresa',
            labelBio: 'Bio',
            bioPlaceholder: 'Řekněte komunitě něco o sobě…',
            sectionSecurity: 'Zabezpečení',
            labelCurrentPw: 'Současné heslo',
            labelNewPw: 'Nové heslo',
            labelConfirmPw: 'Potvrďte nové heslo',
            updatePwBtn: 'Aktualizovat heslo',
            section2FA: 'Dvoufázové ověření',
            toggle2FA: 'Aplikace pro ověřování',
            toggle2FADesc: 'Zabezpečte účet pomocí TOTP 2FA.',
            sectionPrefs: 'Předvolby',
            labelLang: 'Jazyk',
            labelMaturity: 'Věkové omezení obsahu',
            labelReadMode: 'Výchozí režim čtení',
            sectionNotifs: 'Oznámení',
            toggleNewReleases: 'Nová vydání',
            toggleNewReleasesDesc: 'Upozornění při publikování sledovaných autorů.',
            toggleComments: 'Komentáře a odpovědi',
            toggleCommentsDesc: 'Když někdo odpoví na váš komentář.',
            toggleDigest: 'Týdenní přehled',
            toggleDigestDesc: 'Kurátorský souhrn každé pondělí.',
            toggleMarketing: 'Marketingové e-maily',
            toggleMarketingDesc: 'Akce, nabídky a novinky od Moodoo.',
            sectionPrivacy: 'Soukromí',
            togglePublic: 'Veřejný profil',
            togglePublicDesc: 'Kdokoli může vidět vaši čtenářskou aktivitu.',
            toggleOnline: 'Zobrazit online stav',
            toggleOnlineDesc: 'Ostatní uvidí, kdy jste aktivní.',
            toggleRecs: 'Personalizovaná doporučení',
            toggleRecsDesc: 'Používat historii čtení pro návrhy obsahu.',
            toggleAnalytics: 'Analytika a cookies',
            toggleAnalyticsDesc: 'Pomoci vylepšit Moodoo pomocí dat o používání.',
            sectionDanger: 'Nebezpečná zóna',
            exportTitle: 'Exportovat moje data',
            exportDesc: 'Stáhněte kopii všech vašich dat z Moodoo jako ZIP.',
            exportBtn: 'Požádat o export',
            deactivateTitle: 'Deaktivovat účet',
            deactivateDesc: 'Dočasně skryjte profil a pozastavte veškerou aktivitu.',
            deactivateBtn: 'Deaktivovat',
            deleteTitle: 'Trvale smazat účet',
            deleteDesc: 'Všechna vaše data budou vymazána. Tuto akci nelze vrátit.',
            deleteBtn: 'Smazat účet',
            cancelBtn: 'Zrušit',
            confirmPrompt: 'Zadejte heslo pro potvrzení.',
            deleteConfirmPrompt: 'Pro potvrzení napište SMAZAT.',
            toastSaved: 'Změny byly úspěšně uloženy.',
            toastPwOk: 'Heslo aktualizováno.',
            toastExport: 'Export vyžádán — zkontrolujte e-mail.',
            toastDeactivated: 'Účet deaktivován.',
            toastDeleted: 'Účet smazán.',
            toastToggle: 'Předvolba uložena.',
            toastFail: 'Něco se pokazilo. Zkuste to znovu.',
            pwWeak: 'Slabé', pwFair: 'Střední', pwStrong: 'Silné',
            pwMismatch: 'Hesla se neshodují', pwMatch: 'Hesla se shodují',
            emailInvalid: 'Neplatná e-mailová adresa',
        },

        en: {
            news: 'News',
            categories: 'Categories',
            signIn: 'Sign In',
            languageName: 'English',

            heroTitle: 'Stories that evolve with you.',
            heroDesc: 'Decide like a hero — you lead the way.',
            emailPlaceholder: 'Enter your email',
            heroCta: 'Start',

            sectiontitle: 'Why Moodoo?',
            feature1Desc: "Don't just read. Decide.",
            feature2Desc: 'Every story has multiple endings',
            feature3Desc: 'Part book, part game',
            discover: 'Discover more',
            showcaseTitle: 'Trending now',
            footer: 'Explore Moodoo — your new home for movies and series.',

            trending: '#1 in trends',
            readBtn: 'Read',
            moreInfo: 'More info',
            comicsTitle: 'Comics',
            books: 'Books',
            destription: 'Description',
            genres: 'Genres',
            endings: 'Endings',
            readingTime: 'Reading time',
            discussBtn: 'Discuss',

            searchTitle: 'Find your next story',
            searchPlaceholder: 'Search movies, series, comics, authors...',
            searchHint: 'Start typing to see suggestions. Press Enter to search the Moodoo catalog.',
            popularSearches: 'Popular searches',
            trendingNow: 'Trending now',
            searchFooter: 'Type a search term and press Enter to explore the Moodoo catalog.',

            loginTitle: 'Sign in',
            loginSubtitle: 'Enter your details and continue to your favourite entertainment.',
            labelEmail: 'Email',
            emailPlaceholder: 'your@email.com',
            labelPassword: 'Password',
            passwordPlaceholder: 'Password',
            loginBtn: 'Sign in',
            noAccount: 'No account?',
            startHere: 'Start here',
            adminHint: 'Admin login: admin@moodoo.cz / moodoo123',
            loginSuccess: 'Signed in successfully. Welcome, ',
            loginError: 'Incorrect email or password. Please try again.',

            pageTitle: 'Profile Settings',
            pageSubtitle: 'Manage your account, preferences and privacy.',
            saveBtn: 'Save changes',
            uploadPhoto: 'Upload photo',
            removePhoto: 'Remove photo',
            sectionPersonal: 'Personal information',
            labelFirstName: 'First name',
            labelLastName: 'Last name',
            labelUsername: 'Username',
            labelEmail: 'Email address',
            labelBio: 'Bio',
            bioPlaceholder: 'Tell the community a little about yourself…',
            sectionSecurity: 'Security',
            labelCurrentPw: 'Current password',
            labelNewPw: 'New password',
            labelConfirmPw: 'Confirm new password',
            updatePwBtn: 'Update password',
            section2FA: 'Two-factor authentication',
            toggle2FA: 'Authenticator app',
            toggle2FADesc: 'Secure your account with TOTP 2FA.',
            sectionPrefs: 'Preferences',
            labelLang: 'Language',
            labelMaturity: 'Content maturity',
            labelReadMode: 'Default reading mode',
            sectionNotifs: 'Notifications',
            toggleNewReleases: 'New releases',
            toggleNewReleasesDesc: 'Get notified when followed authors publish.',
            toggleComments: 'Comments & replies',
            toggleCommentsDesc: 'When someone replies to your comment.',
            toggleDigest: 'Weekly digest',
            toggleDigestDesc: 'A curated summary every Monday.',
            toggleMarketing: 'Marketing emails',
            toggleMarketingDesc: 'Promotions, offers and news from Moodoo.',
            sectionPrivacy: 'Privacy',
            togglePublic: 'Public profile',
            togglePublicDesc: 'Anyone can view your reading activity.',
            toggleOnline: 'Show online status',
            toggleOnlineDesc: "Let others see when you're active.",
            toggleRecs: 'Personalised recommendations',
            toggleRecsDesc: 'Use my reading history to suggest content.',
            toggleAnalytics: 'Analytics & cookies',
            toggleAnalyticsDesc: 'Help improve Moodoo with usage data.',
            sectionDanger: 'Danger zone',
            exportTitle: 'Export my data',
            exportDesc: 'Download a copy of all your Moodoo data as a ZIP file.',
            exportBtn: 'Request export',
            deactivateTitle: 'Deactivate account',
            deactivateDesc: 'Temporarily hide your profile and pause all activity.',
            deactivateBtn: 'Deactivate',
            deleteTitle: 'Delete account permanently',
            deleteDesc: 'All your data will be erased. This action cannot be undone.',
            deleteBtn: 'Delete account',
            cancelBtn: 'Cancel',
            confirmPrompt: 'Type your password to confirm.',
            deleteConfirmPrompt: 'Type DELETE to confirm.',
            toastSaved: 'Changes saved successfully.',
            toastPwOk: 'Password updated.',
            toastExport: 'Export requested — check your email.',
            toastDeactivated: 'Account deactivated.',
            toastDeleted: 'Account deleted.',
            toastToggle: 'Preference saved.',
            toastFail: 'Something went wrong. Please try again.',
            pwWeak: 'Weak', pwFair: 'Fair', pwStrong: 'Strong',
            pwMismatch: "Passwords don't match", pwMatch: 'Passwords match',
            emailInvalid: 'Invalid email address',
        },

        de: {
            news: 'Neuheiten',
            categories: 'Kategorien',
            signIn: 'Anmelden',
            languageName: 'Deutsch',

            heroTitle: 'Geschichten, die du entscheidest.',
            heroDesc: 'Wähle wie ein Held — du weist ihnen den Weg.',
            emailPlaceholder: 'Gib deine E-Mail ein',
            heroCta: 'Starten',

            sectiontitle: 'Warum Moodoo?',
            feature1Desc: 'Nicht nur lesen. Entscheiden.',
            feature2Desc: 'Jede Geschichte hat mehrere Enden',
            feature3Desc: 'Teil Buch, Teil Spiel',
            discover: 'Entdecke mehr',
            showcaseTitle: 'Aktuelle Toptitel',
            footer: 'Entdecke Moodoo – dein neues Zuhause für Filme und Serien.',

            trending: '#1 in den Trends',
            readBtn: 'Lesen',
            moreInfo: 'Mehr Infos',
            comicsTitle: 'Comics',
            books: 'Bücher',
            destription: 'Beschreibung',
            genres: 'Genres',
            endings: 'Enden',
            readingTime: 'Lesezeit',
            discussBtn: 'Diskutieren',

            searchTitle: 'Finde deine nächste Geschichte',
            searchPlaceholder: 'Filme, Serien, Comics, Autoren suchen...',
            searchHint: 'Beginne mit der Eingabe. Drücke Enter zum Suchen.',
            popularSearches: 'Beliebte Suchen',
            trendingNow: 'Gerade im Trend',
            searchFooter: 'Suchbegriff eingeben und Enter drücken, um den Moodoo-Katalog zu erkunden.',

            loginTitle: 'Anmelden',
            loginSubtitle: 'Geben Sie Ihre Daten ein und fahren Sie mit Ihrer Unterhaltung fort.',
            labelEmail: 'E-Mail',
            emailPlaceholder: 'ihre@email.de',
            labelPassword: 'Passwort',
            passwordPlaceholder: 'Passwort',
            loginBtn: 'Anmelden',
            noAccount: 'Kein Konto?',
            startHere: 'Hier starten',
            adminHint: 'Admin-Login: admin@moodoo.cz / moodoo123',
            loginSuccess: 'Erfolgreich angemeldet. Willkommen, ',
            loginError: 'Falsche E-Mail oder falsches Passwort. Bitte erneut versuchen.',

            pageTitle: 'Profileinstellungen',
            pageSubtitle: 'Verwalten Sie Ihr Konto, Einstellungen und Datenschutz.',
            saveBtn: 'Änderungen speichern',
            uploadPhoto: 'Foto hochladen',
            removePhoto: 'Foto entfernen',
            sectionPersonal: 'Persönliche Informationen',
            labelFirstName: 'Vorname',
            labelLastName: 'Nachname',
            labelUsername: 'Benutzername',
            labelEmail: 'E-Mail-Adresse',
            labelBio: 'Bio',
            bioPlaceholder: 'Erzählen Sie der Community etwas über sich…',
            sectionSecurity: 'Sicherheit',
            labelCurrentPw: 'Aktuelles Passwort',
            labelNewPw: 'Neues Passwort',
            labelConfirmPw: 'Neues Passwort bestätigen',
            updatePwBtn: 'Passwort aktualisieren',
            section2FA: 'Zwei-Faktor-Authentifizierung',
            toggle2FA: 'Authentifikator-App',
            toggle2FADesc: 'Schützen Sie Ihr Konto mit TOTP 2FA.',
            sectionPrefs: 'Einstellungen',
            labelLang: 'Sprache',
            labelMaturity: 'Inhaltsreife',
            labelReadMode: 'Standard-Lesemodus',
            sectionNotifs: 'Benachrichtigungen',
            toggleNewReleases: 'Neue Veröffentlichungen',
            toggleNewReleasesDesc: 'Benachrichtigung wenn verfolgte Autoren veröffentlichen.',
            toggleComments: 'Kommentare & Antworten',
            toggleCommentsDesc: 'Wenn jemand auf Ihren Kommentar antwortet.',
            toggleDigest: 'Wöchentliche Zusammenfassung',
            toggleDigestDesc: 'Eine kuratierte Zusammenfassung jeden Montag.',
            toggleMarketing: 'Marketing-E-Mails',
            toggleMarketingDesc: 'Aktionen, Angebote und Neuigkeiten von Moodoo.',
            sectionPrivacy: 'Datenschutz',
            togglePublic: 'Öffentliches Profil',
            togglePublicDesc: 'Jeder kann Ihre Leseaktivität sehen.',
            toggleOnline: 'Online-Status anzeigen',
            toggleOnlineDesc: 'Andere sehen, wann Sie aktiv sind.',
            toggleRecs: 'Personalisierte Empfehlungen',
            toggleRecsDesc: 'Lesehistorie für Inhaltsvorschläge verwenden.',
            toggleAnalytics: 'Analyse & Cookies',
            toggleAnalyticsDesc: 'Helfen Sie Moodoo mit Nutzungsdaten zu verbessern.',
            sectionDanger: 'Gefahrenzone',
            exportTitle: 'Meine Daten exportieren',
            exportDesc: 'Laden Sie eine Kopie aller Ihrer Moodoo-Daten als ZIP herunter.',
            exportBtn: 'Export anfordern',
            deactivateTitle: 'Konto deaktivieren',
            deactivateDesc: 'Profil vorübergehend ausblenden und alle Aktivitäten pausieren.',
            deactivateBtn: 'Deaktivieren',
            deleteTitle: 'Konto dauerhaft löschen',
            deleteDesc: 'Alle Ihre Daten werden gelöscht. Diese Aktion kann nicht rückgängig gemacht werden.',
            deleteBtn: 'Konto löschen',
            cancelBtn: 'Abbrechen',
            confirmPrompt: 'Passwort zur Bestätigung eingeben.',
            deleteConfirmPrompt: 'Geben Sie LÖSCHEN zur Bestätigung ein.',
            toastSaved: 'Änderungen erfolgreich gespeichert.',
            toastPwOk: 'Passwort aktualisiert.',
            toastExport: 'Export angefordert — E-Mail prüfen.',
            toastDeactivated: 'Konto deaktiviert.',
            toastDeleted: 'Konto gelöscht.',
            toastToggle: 'Einstellung gespeichert.',
            toastFail: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
            pwWeak: 'Schwach', pwFair: 'Mittel', pwStrong: 'Stark',
            pwMismatch: 'Passwörter stimmen nicht überein', pwMatch: 'Passwörter stimmen überein',
            emailInvalid: 'Ungültige E-Mail-Adresse',
        },

        es: {
            news: 'Novedades',
            categories: 'Categorías',
            signIn: 'Iniciar sesión',
            languageName: 'Español',

            heroTitle: 'Historias que tú decides.',
            heroDesc: 'Decide como un héroe: tú marcas el camino.',
            emailPlaceholder: 'Introduce tu correo',
            heroCta: 'Comenzar',

            sectiontitle: '¿Por qué Moodoo?',
            feature1Desc: 'No solo lees. Decides.',
            feature2Desc: 'Cada historia tiene múltiples finales',
            feature3Desc: 'Parte libro, parte juego',
            discover: 'Descubre más',
            showcaseTitle: 'Lo más leído',
            footer: 'Explora Moodoo: tu nuevo hogar para películas y series.',

            trending: '#1 en tendencias',
            readBtn: 'Leer',
            moreInfo: 'Más información',
            comicsTitle: 'Cómics',
            books: 'Libros',
            destription: 'Descripción',
            genres: 'Géneros',
            endings: 'Finales',
            readingTime: 'Tiempo de lectura',
            discussBtn: 'Discutir',

            searchTitle: 'Encuentra tu próxima historia',
            searchPlaceholder: 'Buscar películas, series, cómics, autores...',
            searchHint: 'Empieza a escribir para ver sugerencias. Pulsa Enter para buscar.',
            popularSearches: 'Búsquedas populares',
            trendingNow: 'Tendencias ahora',
            searchFooter: 'Escribe un término y pulsa Enter para explorar el catálogo de Moodoo.',

            loginTitle: 'Iniciar sesión',
            loginSubtitle: 'Introduce tus datos y continúa con tu entretenimiento favorito.',
            labelEmail: 'Correo electrónico',
            emailPlaceholder: 'tu@correo.com',
            labelPassword: 'Contraseña',
            passwordPlaceholder: 'Contraseña',
            loginBtn: 'Iniciar sesión',
            noAccount: '¿No tienes cuenta?',
            startHere: 'Empieza aquí',
            adminHint: 'Admin login: admin@moodoo.cz / moodoo123',
            loginSuccess: 'Sesión iniciada correctamente. Bienvenido/a, ',
            loginError: 'Correo o contraseña incorrectos. Inténtalo de nuevo.',


            pageTitle: 'Configuración de perfil',
            pageSubtitle: 'Gestiona tu cuenta, preferencias y privacidad.',
            saveBtn: 'Guardar cambios',
            uploadPhoto: 'Subir foto',
            removePhoto: 'Eliminar foto',
            sectionPersonal: 'Información personal',
            labelFirstName: 'Nombre',
            labelLastName: 'Apellido',
            labelUsername: 'Nombre de usuario',
            labelEmail: 'Correo electrónico',
            labelBio: 'Bio',
            bioPlaceholder: 'Cuéntale a la comunidad algo sobre ti…',
            sectionSecurity: 'Seguridad',
            labelCurrentPw: 'Contraseña actual',
            labelNewPw: 'Nueva contraseña',
            labelConfirmPw: 'Confirmar nueva contraseña',
            updatePwBtn: 'Actualizar contraseña',
            section2FA: 'Autenticación de dos factores',
            toggle2FA: 'App de autenticación',
            toggle2FADesc: 'Protege tu cuenta con TOTP 2FA.',
            sectionPrefs: 'Preferencias',
            labelLang: 'Idioma',
            labelMaturity: 'Madurez del contenido',
            labelReadMode: 'Modo de lectura predeterminado',
            sectionNotifs: 'Notificaciones',
            toggleNewReleases: 'Nuevos lanzamientos',
            toggleNewReleasesDesc: 'Recibe avisos cuando autores seguidos publiquen.',
            toggleComments: 'Comentarios y respuestas',
            toggleCommentsDesc: 'Cuando alguien responde a tu comentario.',
            toggleDigest: 'Resumen semanal',
            toggleDigestDesc: 'Un resumen curado cada lunes.',
            toggleMarketing: 'Correos de marketing',
            toggleMarketingDesc: 'Promociones, ofertas y noticias de Moodoo.',
            sectionPrivacy: 'Privacidad',
            togglePublic: 'Perfil público',
            togglePublicDesc: 'Cualquiera puede ver tu actividad de lectura.',
            toggleOnline: 'Mostrar estado en línea',
            toggleOnlineDesc: 'Permite que otros vean cuándo estás activo.',
            toggleRecs: 'Recomendaciones personalizadas',
            toggleRecsDesc: 'Usar historial de lectura para sugerir contenido.',
            toggleAnalytics: 'Análisis y cookies',
            toggleAnalyticsDesc: 'Ayuda a mejorar Moodoo con datos de uso.',
            sectionDanger: 'Zona de peligro',
            exportTitle: 'Exportar mis datos',
            exportDesc: 'Descarga una copia de todos tus datos de Moodoo como ZIP.',
            exportBtn: 'Solicitar exportación',
            deactivateTitle: 'Desactivar cuenta',
            deactivateDesc: 'Oculta temporalmente tu perfil y pausa toda actividad.',
            deactivateBtn: 'Desactivar',
            deleteTitle: 'Eliminar cuenta permanentemente',
            deleteDesc: 'Todos tus datos serán borrados. Esta acción no se puede deshacer.',
            deleteBtn: 'Eliminar cuenta',
            cancelBtn: 'Cancelar',
            confirmPrompt: 'Escribe tu contraseña para confirmar.',
            deleteConfirmPrompt: 'Escribe ELIMINAR para confirmar.',
            toastSaved: 'Cambios guardados correctamente.',
            toastPwOk: 'Contraseña actualizada.',
            toastExport: 'Exportación solicitada — revisa tu correo.',
            toastDeactivated: 'Cuenta desactivada.',
            toastDeleted: 'Cuenta eliminada.',
            toastToggle: 'Preferencia guardada.',
            toastFail: 'Algo salió mal. Inténtalo de nuevo.',
            pwWeak: 'Débil', pwFair: 'Regular', pwStrong: 'Fuerte',
            pwMismatch: 'Las contraseñas no coinciden', pwMatch: 'Las contraseñas coinciden',
            emailInvalid: 'Dirección de correo inválida',
        },

        fr: {
            news: 'Actualités',
            categories: 'Catégories',
            signIn: 'Se connecter',
            languageName: 'Français',

            heroTitle: 'Des histoires qui évoluent avec vous.',
            heroDesc: 'Décidez comme un héros — vous tracez le chemin.',
            emailPlaceholder: 'Entrez votre e-mail',
            heroCta: 'Commencer',

            sectiontitle: 'Pourquoi Moodoo ?',
            feature1Desc: 'Pas seulement lire. Décider.',
            feature2Desc: 'Chaque histoire a plusieurs fins',
            feature3Desc: 'Partie livre, partie jeu',
            discover: 'Découvrir plus',
            showcaseTitle: 'Tendances actuelles',
            footer: 'Explorez Moodoo — votre nouvelle maison pour films et séries.',

            trending: '#1 en tendances',
            readBtn: 'Lire',
            moreInfo: 'Plus d\'infos',
            comicsTitle: 'Bandes dessinées',
            books: 'Livres',
            destription: 'Description',
            genres: 'Genres',
            endings: 'Fins',
            readingTime: 'Temps de lecture',
            discussBtn: 'Discuter',

            searchTitle: 'Trouvez votre prochaine histoire',
            searchPlaceholder: 'Rechercher films, séries, BD, auteurs...',
            searchHint: 'Commencez à taper pour voir des suggestions. Appuyez sur Entrée pour chercher.',
            popularSearches: 'Recherches populaires',
            trendingNow: 'Tendances maintenant',
            searchFooter: 'Tapez un terme et appuyez sur Entrée pour explorer le catalogue Moodoo.',

            loginTitle: 'Se connecter',
            loginSubtitle: 'Entrez vos informations et continuez vers votre divertissement préféré.',
            labelEmail: 'Adresse e-mail',
            emailPlaceholder: 'votre@email.fr',
            labelPassword: 'Mot de passe',
            passwordPlaceholder: 'Mot de passe',
            loginBtn: 'Se connecter',
            noAccount: 'Pas de compte ?',
            startHere: 'Commencez ici',
            adminHint: 'Admin login: admin@moodoo.cz / moodoo123',
            loginSuccess: 'Connexion réussie. Bienvenue, ',
            loginError: 'E-mail ou mot de passe incorrect. Veuillez réessayer.',

            pageTitle: 'Paramètres du profil',
            pageSubtitle: 'Gérez votre compte, vos préférences et votre confidentialité.',
            saveBtn: 'Enregistrer les modifications',
            uploadPhoto: 'Télécharger une photo',
            removePhoto: 'Supprimer la photo',
            sectionPersonal: 'Informations personnelles',
            labelFirstName: 'Prénom',
            labelLastName: 'Nom de famille',
            labelUsername: "Nom d'utilisateur",
            labelEmail: 'Adresse e-mail',
            labelBio: 'Bio',
            bioPlaceholder: 'Parlez un peu de vous à la communauté…',
            sectionSecurity: 'Sécurité',
            labelCurrentPw: 'Mot de passe actuel',
            labelNewPw: 'Nouveau mot de passe',
            labelConfirmPw: 'Confirmer le nouveau mot de passe',
            updatePwBtn: 'Mettre à jour le mot de passe',
            section2FA: 'Authentification à deux facteurs',
            toggle2FA: "Application d'authentification",
            toggle2FADesc: 'Sécurisez votre compte avec TOTP 2FA.',
            sectionPrefs: 'Préférences',
            labelLang: 'Langue',
            labelMaturity: 'Maturité du contenu',
            labelReadMode: 'Mode de lecture par défaut',
            sectionNotifs: 'Notifications',
            toggleNewReleases: 'Nouvelles sorties',
            toggleNewReleasesDesc: 'Soyez notifié quand les auteurs suivis publient.',
            toggleComments: 'Commentaires et réponses',
            toggleCommentsDesc: "Quand quelqu'un répond à votre commentaire.",
            toggleDigest: 'Résumé hebdomadaire',
            toggleDigestDesc: 'Un résumé curé chaque lundi.',
            toggleMarketing: 'E-mails marketing',
            toggleMarketingDesc: 'Promotions, offres et actualités de Moodoo.',
            sectionPrivacy: 'Confidentialité',
            togglePublic: 'Profil public',
            togglePublicDesc: 'Tout le monde peut voir votre activité de lecture.',
            toggleOnline: 'Afficher le statut en ligne',
            toggleOnlineDesc: 'Laissez les autres voir quand vous êtes actif.',
            toggleRecs: 'Recommandations personnalisées',
            toggleRecsDesc: "Utiliser l'historique de lecture pour suggérer du contenu.",
            toggleAnalytics: 'Analytique & cookies',
            toggleAnalyticsDesc: "Aidez à améliorer Moodoo avec des données d'utilisation.",
            sectionDanger: 'Zone dangereuse',
            exportTitle: 'Exporter mes données',
            exportDesc: 'Téléchargez une copie de toutes vos données Moodoo en ZIP.',
            exportBtn: "Demander l'export",
            deactivateTitle: 'Désactiver le compte',
            deactivateDesc: 'Masquez temporairement votre profil et pausez toute activité.',
            deactivateBtn: 'Désactiver',
            deleteTitle: 'Supprimer le compte définitivement',
            deleteDesc: 'Toutes vos données seront effacées. Cette action est irréversible.',
            deleteBtn: 'Supprimer le compte',
            cancelBtn: 'Annuler',
            confirmPrompt: 'Entrez votre mot de passe pour confirmer.',
            deleteConfirmPrompt: 'Tapez SUPPRIMER pour confirmer.',
            toastSaved: 'Modifications enregistrées avec succès.',
            toastPwOk: 'Mot de passe mis à jour.',
            toastExport: "Export demandé — vérifiez votre e-mail.",
            toastDeactivated: 'Compte désactivé.',
            toastDeleted: 'Compte supprimé.',
            toastToggle: 'Préférence enregistrée.',
            toastFail: 'Une erreur est survenue. Veuillez réessayer.',
            pwWeak: 'Faible', pwFair: 'Moyen', pwStrong: 'Fort',
            pwMismatch: 'Les mots de passe ne correspondent pas', pwMatch: 'Les mots de passe correspondent',
            emailInvalid: 'Adresse e-mail invalide',
        },
    };

    /* ── INTERNAL STATE ─────────────────────────────────────────────────── */
    let currentLang = 'cs';

    /* ── HELPERS ────────────────────────────────────────────────────────── */
    function get(lang) {
        return strings[lang] || strings['en'];
    }

    function save(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch { }
    }

    function load() {
        try { return localStorage.getItem(STORAGE_KEY) || 'cs'; } catch { return 'cs'; }
    }

    /* ── APPLY to DOM ───────────────────────────────────────────────────── */
    function apply(lang) {
        if (!strings[lang]) return;
        currentLang = lang;
        document.documentElement.lang = lang;

        const s = get(lang);

        // data-text elements
        document.querySelectorAll('[data-text]').forEach(el => {
            const key = el.dataset.text;
            if (s[key] !== undefined) el.textContent = s[key];
        });

        // data-placeholder elements (inputs / textareas)
        document.querySelectorAll('[data-placeholder]').forEach(el => {
            const key = el.dataset.placeholder;
            if (s[key] !== undefined) el.placeholder = s[key];
        });

        // data-aria elements
        document.querySelectorAll('[data-aria]').forEach(el => {
            const key = el.dataset.aria;
            if (s[key] !== undefined) el.setAttribute('aria-label', s[key]);
        });

        // lang-current badge (landing / any page with language picker)
        document.querySelectorAll('.lang-current').forEach(el => {
            el.textContent = s.languageName;
        });

        // lang-item active state
        document.querySelectorAll('.lang-item').forEach(item => {
            item.classList.toggle('active', item.dataset.lang === lang);
        });

        // profile page language select (if present)
        const profileSelect = document.getElementById('languageSelect');
        if (profileSelect) profileSelect.value = lang;

        save(lang);
    }

    /* ── WIRE landing-style picker (lang-toggle / lang-menu) ────────────── */
    function wireLandingPicker() {
        const toggle = document.querySelector('.lang-toggle');
        const menu = document.querySelector('.lang-menu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', e => {
            e.stopPropagation();
            const open = menu.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });

        document.querySelectorAll('.lang-item').forEach(item => {
            item.addEventListener('click', () => {
                apply(item.dataset.lang);
                menu.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', e => {
            if (!e.target.closest('.lang-dropdown')) {
                menu.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ── WIRE profile select ────────────────────────────────────────────── */
    function wireProfileSelect() {
        const sel = document.getElementById('languageSelect');
        if (!sel) return;
        sel.addEventListener('change', () => apply(sel.value));
    }

    /* ── PUBLIC API ─────────────────────────────────────────────────────── */
    function init() {
        const lang = load();
        apply(lang);
        wireLandingPicker();
        wireProfileSelect();
    }

    return {
        init,
        apply,
        get,
        getLang: () => currentLang,
        strings,
    };

})();