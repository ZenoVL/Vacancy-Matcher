const dutchMessages = {
    ra: {
        action: {
            add_filter: 'Filter toevoegen',
            add: 'Toevoegen',
            back: 'Terug',
            bulk_actions: '1 item geselecteerd |||| %{smart_count} items geselecteerd',
            cancel: 'Annuleren',
            clear_array_input: 'Lijst wissen',
            clear_input_value: 'Waarde wissen',
            clone: 'Klonen',
            confirm: 'Bevestigen',
            create: 'Aanmaken',
            create_item: '%{item} aanmaken',
            delete: 'Verwijderen',
            edit: 'Bewerken',
            export: 'Exporteren',
            list: 'Lijst',
            refresh: 'Vernieuwen',
            remove_filter: 'Filter verwijderen',
            remove_all_filters: 'Alle filters verwijderen',
            remove: 'Verwijderen',
            save: 'Opslaan',
            search: 'Zoeken',
            select_all: 'Selecteer alle',
            select_row: 'Selecteer deze rij',
            show: 'Tonen',
            sort: 'Sorteren',
            undo: 'Ongedaan maken',
            unselect: 'Deselecteer',
            expand: 'Uitvouwen',
            close: 'Sluiten',
            open_menu: 'Menu openen',
            close_menu: 'Menu sluiten',
            update: 'Bijwerken',
            move_up: 'Omhoog',
            move_down: 'Omlaag',
            open: 'Openen',
            toggle_theme: 'Thema wijzigen',
            select_columns: 'Kolommen',
        },
        boolean: {
            true: 'Ja',
            false: 'Nee',
            null: ' ',
        },
        page: {
            create: '%{name} aanmaken',
            dashboard: 'Dashboard',
            edit: '%{name} %{recordRepresentation} bewerken',
            error: 'Er is iets misgegaan',
            list: '%{name}',
            loading: 'Laden',
            not_found: 'Niet gevonden',
            show: '%{name} %{recordRepresentation} tonen',
            empty: 'Nog geen %{name}.',
            invite: 'Wil je er een toevoegen?',
        },
        input: {
            file: {
                upload_several:
                    'Sleep hier bestanden om te uploaden of klik om een bestand te selecteren.',
                upload_single: 'Sleep hier een bestand om te uploaden of klik om een bestand te selecteren.',
            },
            image: {
                upload_several:
                    'Sleep hier afbeeldingen om te uploaden of klik om een afbeelding te selecteren.',
                upload_single:
                    'Sleep hier een afbeelding om te uploaden of klik om een afbeelding te selecteren.',
            },
            references: {
                all_missing: 'Kan geen bijbehorende gegevens vinden.',
                many_missing:
                    'Ten minste een van de gerelateerde referenties lijkt niet langer beschikbaar te zijn.',
                single_missing:
                    'De bijbehorende referentie lijkt niet langer beschikbaar te zijn.',
            },
            password: {
                toggle_visible: 'Wachtwoord verbergen',
                toggle_hidden: 'Wachtwoord weergeven',
            },
        },
        message:{
            about: 'Over',
            are_you_sure: 'Weet je het zeker?',
            auth_error:
                'Er is een fout opgetreden bij het valideren van het authenticatietoken.',
            bulk_delete_content:
                'Wil je deze %{name} verwijderen? |||| Wil je deze %{smart_count} items verwijderen?',
            bulk_delete_title:
                'Verwijder %{name} |||| Verwijder %{smart_count} %{name}',
            bulk_update_content:
                'Weet je zeker dat je deze %{name} wilt bijwerken? |||| Weet je zeker dat je deze %{smart_count} items wilt bijwerken?',
            bulk_update_title:
                'Wijzig %{name} |||| Wijzig %{smart_count} %{name}',
            clear_array_input: 'Weet je zeker dat je de hele lijst wilt wissen?',
            delete_content: 'Wil je dit item verwijderen?',
            delete_title: 'Verwijder %{name} #%{id}',
            details: 'Details',
            error:
                'Er is een fout opgetreden en jouw verzoek kon niet worden voltooid.',

            invalid_form: 'Het formulier is niet geldig. Controleer op fouten',
            loading: 'De pagina wordt geladen, even geduld aub',
            no: 'Nee',
            not_found:
                'Ofwel heb je een verkeerde URL ingetypt, ofwel heb je een slechte link gevolgd.',
            yes: 'Ja',
            unsaved_changes:
                'Sommige van je wijzigingen zijn niet opgeslagen. Weet je zeker dat je ze wilt negeren?',
        },
        navigation: {
            no_results: 'Geen resultaten gevonden',
            no_more_results:
                'Paginanummer %{page} valt buiten de grenzen. Probeer de vorige pagina.',
            page_out_of_boundaries: 'Paginanummer %{page} buiten de grenzen',
            page_out_from_end: 'Kan niet na de laatste pagina gaan',
            page_out_from_begin: 'Kan niet voor pagina 1 gaan',
            page_range_info: '%{offsetBegin}-%{offsetEnd} van %{total}',
            partial_page_range_info:
                '%{offsetBegin}-%{offsetEnd} van meer dan %{offsetEnd}',
            current_page: 'Pagina %{page}',
            page: 'Ga naar pagina %{page}',
            first: 'Ga naar eerste pagina',
            last: 'Ga naar laatste pagina',
            next: 'Ga naar volgende pagina',
            previous: 'Ga naar vorige pagina',
            page_rows_per_page: 'Rijen per pagina:',
            skip_nav: 'Naar inhoud gaan',
        },
        sort: {
            sort_by: 'Sorteren op %{field} %{order}',
            ASC: 'oplopend',
            DESC: 'aflopend',
        },
        auth: {
            auth_check_error: 'Log in om door te gaan',
            user_menu: 'Profiel',
            username: 'Gebruikersnaam',
            password: 'Wachtwoord',
            sign_in: 'Inloggen',
            sign_in_error: 'Authenticatie mislukt, probeer opnieuw',
            logout: 'Uitloggen',
        },
        notification: {
            updated: 'Element bijgewerkt |||| %{smart_count} elementen bijgewerkt',
            created: 'Element aangemaakt',
            deleted: 'Element verwijderd |||| %{smart_count} elementen verwijderd',
            bad_item: 'Onjuist element',
            item_doesnt_exist: 'Element bestaat niet',
            http_error: 'Fout bij servercommunicatie',
            data_provider_error:
                'dataProvider fout. Controleer de console voor details.',
            i18n_error:
                'Kan de vertalingen voor de opgegeven taal niet laden',
            canceled: 'Actie geannuleerd',
            logged_out: 'Uw sessie is verlopen, log opnieuw in.',
            not_authorized: "U bent niet gemachtigd om deze bron te openen.",
        },
        validation: {
            required: 'Verplicht',
            minLength: 'Moet minstens %{min} tekens bevatten',
            maxLength: 'Moet %{max} tekens of minder bevatten',
            minValue: 'Moet ten minste %{min} zijn',
            maxValue: 'Moet %{max} of minder zijn',
            number: 'Moet een nummer zijn',
            email: 'Moet een geldig e-mailadres zijn',
            oneOf: 'Moet een van de volgende waarden bevatten: %{options}',
            regex: 'Moet overeenkomen met een specifiek formaat (regexp): %{pattern}',
        },
        saved_queries: {
            label: 'Opgeslagen zoekopdrachten',
            query_name: 'Naam van zoekopdracht',
            new_label: 'Huidige zoekopdracht opslaan...',
            new_dialog_title: 'Huidige zoekopdracht opslaan als',
            remove_label: 'Opgeslagen zoekopdracht verwijderen',
            remove_label_with_name: 'Zoekopdracht "%{name}" verwijderen',
            remove_dialog_title: 'Opgeslagen zoekopdracht verwijderen?',
            remove_message:
                'Weet u zeker dat u dit item wilt verwijderen uit uw lijst met opgeslagen zoekopdrachten?',
            help: 'Filter de lijst en sla deze zoekopdracht op voor later gebruik',
        },
        configurable: {
            customize: 'Aanpassen',
            configureMode: 'Deze pagina configureren',
            inspector: {
                title: 'Inspecteur',
                content: 'Beweeg over de applicatie-UI-elementen om ze te configureren',
                reset: 'Instellingen herstellen',
                hideAll: 'Alles verbergen',
                showAll: 'Alles weergeven',
            },
            Datagrid: {
                title: 'Gegevensraster',
                unlabeled: 'Kolom zonder label #%{column}',
            },
            SimpleForm: {
                title: 'Formulier',
                unlabeled: 'Input zonder label #%{input}',
            },
            SimpleList: {
                title: 'Lijst',
                primaryText: 'Primaire tekst',
                secondaryText: 'Secundaire tekst',
                tertiaryText: 'Tertiaire telt',
            },
        },
    },
};

export default dutchMessages;