<script>
import {locale} from "svelte-i18n";
import {t} from "$lib/i18n";
</script>

<svelte:head>
    <title>{$t("head.title.privacy")}</title>
    <meta name="description" content="Everbuild | Homepage">
</svelte:head>

<div class="pt-12">
    <div class="max-w-[1200px] m-auto p-3 prose pt-6">
        {#if $locale === 'de'}
        <div>
            <h1>Datenschutzerklärung</h1>
            <h2 id="m716">Präambel</h2>
            <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer
                personenbezogenen Daten
                (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten.
                Die
                Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl
                im Rahmen
                der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen
                sowie
                innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend
                bezeichnet
                als "Onlineangebot").</p>
            <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>

            <p>Stand: 7. April 2024</p>
            <h2>Inhaltsübersicht</h2>
            <ul class="index">
                <li><a class="index-link" href="#m716">Präambel</a></li>
                <li><a class="index-link" href="#m3">Verantwortlicher</a></li>
                <li><a class="index-link" href="#mOverview">Übersicht der Verarbeitungen</a></li>
                <li><a class="index-link" href="#m2427">Maßgebliche Rechtsgrundlagen</a></li>
                <li><a class="index-link" href="#m27">Sicherheitsmaßnahmen</a></li>
                <li><a class="index-link" href="#m25">Übermittlung von personenbezogenen Daten</a></li>
                <li><a class="index-link" href="#m24">Internationale Datentransfers</a></li>
                <li><a class="index-link" href="#m10">Rechte der betroffenen Personen</a></li>
                <li><a class="index-link" href="#m317">Geschäftliche Leistungen</a></li>
                <li><a class="index-link" href="#m326">Zahlungsverfahren</a></li>
                <li><a class="index-link" href="#m225">Bereitstellung des Onlineangebots und Webhosting</a></li>
                <li><a class="index-link" href="#m134">Einsatz von Cookies</a></li>
                <li><a class="index-link" href="#m367">Registrierung, Anmeldung und Nutzerkonto</a></li>
                <li><a class="index-link" href="#m432">Community Funktionen</a></li>
                <li><a class="index-link" href="#m451">Single-Sign-On-Anmeldung</a></li>
                <li><a class="index-link" href="#m104">Blogs und Publikationsmedien</a></li>
                <li><a class="index-link" href="#m182">Kontakt- und Anfrageverwaltung</a></li>
                <li><a class="index-link" href="#m263">Webanalyse, Monitoring und Optimierung</a></li>
                <li><a class="index-link" href="#m135">Affiliate-Programme und Affiliate-Links</a></li>
                <li><a class="index-link" href="#m136">Präsenzen in sozialen Netzwerken (Social Media)</a></li>
                <li><a class="index-link" href="#m723">Management, Organisation und Hilfswerkzeuge</a></li>
            </ul>
            <h2 id="m3">Verantwortlicher</h2>
            <p>Nico Weber<br>Fallerweg 7<br>54516 Wittlich<br>Deutschland</p>
            E-Mail-Adresse: <a href="mailto:nico.weber01@everbuild.org">nico.weber01@everbuild.org</a>
            Impressum: <a href="https://everbuild.org/imprint" target="_blank">https://everbuild.org/imprint</a>

            <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
            <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten
                Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
            <h3>Arten der
                verarbeiteten Daten</h3>
            <ul>
                <li>Bestandsdaten.</li>
                <li>Zahlungsdaten.</li>
                <li>Kontaktdaten.</li>
                <li>Inhaltsdaten.</li>
                <li>Vertragsdaten.</li>
                <li>Nutzungsdaten.</li>
                <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
            </ul>
            <h3>Kategorien betroffener Personen</h3>
            <ul>
                <li>Kunden.</li>
                <li>Interessenten.</li>
                <li>Kommunikationspartner.</li>
                <li>Nutzer.</li>
                <li>Geschäfts- und Vertragspartner.</li>
            </ul>
            <h3>Zwecke der Verarbeitung</h3>
            <ul>
                <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.</li>
                <li>Kontaktanfragen und Kommunikation.</li>
                <li>Sicherheitsmaßnahmen.</li>
                <li>Reichweitenmessung.</li>
                <li>Büro- und Organisationsverfahren.</li>
                <li>Konversionsmessung.</li>
                <li>Affiliate-Nachverfolgung.</li>
                <li>Verwaltung und Beantwortung von Anfragen.</li>
                <li>Feedback.</li>
                <li>Marketing.</li>
                <li>Profile mit nutzerbezogenen Informationen.</li>
                <li>Anmeldeverfahren.</li>
                <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                <li>Informationstechnische Infrastruktur.</li>
            </ul>
            <h2 id="m2427">Maßgebliche Rechtsgrundlagen</h2>
            <p><strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im
                Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir
                personenbezogene Daten
                verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
                Datenschutzvorgaben in
                Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere
                Rechtsgrundlagen
                maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.</p>
            <ul>
                <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die betroffene Person hat ihre
                    Einwilligung
                    in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder
                    mehrere
                    bestimmte Zwecke gegeben.
                </li>
                <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> -
                    Die
                    Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist,
                    oder zur
                    Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person
                    erfolgen.
                </li>
                <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> - Die Verarbeitung ist
                    zur
                    Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.
                </li>
                <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - die Verarbeitung ist
                    zur Wahrung
                    der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass
                    die
                    Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener
                    Daten
                    verlangen, nicht überwiegen.
                </li>
            </ul>
            <p><strong>Nationale Datenschutzregelungen in Deutschland: </strong>Zusätzlich zu den Datenschutzregelungen
                der
                DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz
                zum Schutz
                vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das
                BDSG enthält
                insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht,
                zur
                Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur
                Übermittlung
                sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können
                Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.</p>
            <p><strong>Hinweis auf Geltung DSGVO und Schweizer DSG: </strong>Diese Datenschutzhinweise dienen sowohl der
                Informationserteilung nach dem schweizerischen Bundesgesetz über den Datenschutz (Schweizer DSG) als
                auch nach der
                Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund der
                breiteren
                räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt
                der im
                Schweizer DSG verwendeten Begriffe „Bearbeitung" von „Personendaten", "überwiegendes Interesse" und
                "besonders
                schützenswerte Personendaten" werden die in der DSGVO verwendeten Begriffe „Verarbeitung" von
                „personenbezogenen
                Daten" sowie "berechtigtes Interesse" und "besondere Kategorien von Daten" verwendet. Die gesetzliche
                Bedeutung der
                Begriffe wird jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
            </p>

            <h2 id="m27">Sicherheitsmaßnahmen</h2>
            <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des
                Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der
                Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung
                der Rechte und
                Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko
                angemessenes
                Schutzniveau zu gewährleisten.</p>
            <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von
                Daten durch
                Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs,
                der
                Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir
                Verfahren
                eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die
                Gefährdung
                der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
                Entwicklung
                bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
                Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</p>
            <p>Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der
                Nutzer, die
                über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die
                TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport Layer Security (TLS) sind
                die
                Eckpfeiler der sicheren Datenübertragung im Internet. Diese Technologien verschlüsseln die
                Informationen, die
                zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern) übertragen
                werden, wodurch
                die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die weiterentwickelte und sicherere Version
                von SSL,
                gewährleistet, dass alle Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine
                Website durch
                ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in der URL signalisiert.
                Dies dient als
                ein Indikator für die Nutzer, dass ihre Daten sicher und verschlüsselt übertragen werden.</p>

            <h2 id="m25">Übermittlung von personenbezogenen Daten</h2>
            <p>Im Rahmen unserer Verarbeitung von personenbezogenen Daten
                kommt es vor, dass diese an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten
                oder
                Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten
                können z. B.
                mit IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die in eine
                Website
                eingebunden sind. In solchen Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere
                entsprechende
                Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.</p>

            <h2 id="m24">Internationale Datentransfers</h2>
            <p>Datenverarbeitung in Drittländern: Sofern wir Daten in einem Drittland
                (d. h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder
                die
                Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung
                von Daten an
                andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen
                Vorgaben.
                Sofern das Datenschutzniveau in dem Drittland mittels eines Angemessenheitsbeschlusses anerkannt wurde
                (Art. 45
                DSGVO), dient dieser als Grundlage des Datentransfers. Im Übrigen erfolgen Datentransfers nur dann, wenn
                das
                Datenschutzniveau anderweitig gesichert ist, insbesondere durch Standardvertragsklauseln (Art. 46 Abs. 2
                lit. c)
                DSGVO), ausdrückliche Einwilligung oder im Fall vertraglicher oder gesetzlich erforderlicher
                Übermittlung (Art. 49
                Abs. 1 DSGVO). Im Übrigen teilen wir Ihnen die Grundlagen der Drittlandübermittlung bei den einzelnen
                Anbietern aus
                dem Drittland mit, wobei die Angemessenheitsbeschlüsse als Grundlagen vorrangig gelten. Informationen zu
                Drittlandtransfers und vorliegenden Angemessenheitsbeschlüssen können dem Informationsangebot der
                EU-Kommission
                entnommen werden: <a
                        href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de"
                        target="_blank">https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de.</a>
            </p>
            <p>EU-US Trans-Atlantic Data Privacy Framework: Im Rahmen des sogenannten „Data Privacy Framework" (DPF) hat
                die
                EU-Kommission das Datenschutzniveau ebenfalls für bestimmte Unternehmen aus den USA im Rahmen der
                Angemessenheitsbeschlusses vom 10.07.2023 als sicher anerkannt. Die Liste der zertifizierten Unternehmen
                als auch
                weitere Informationen zu dem DPF können Sie der Website des Handelsministeriums der USA unter <a
                        href="https://www.dataprivacyframework.gov/" target="_blank">https://www.dataprivacyframework.gov/</a>
                (in
                Englisch) entnehmen. Wir informieren Sie im Rahmen der Datenschutzhinweise, welche von uns eingesetzten
                Diensteanbieter unter dem Data Privacy Framework zertifiziert sind.</p>

            <h2 id="m10">Rechte der betroffenen Personen</h2>
            <p>Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als
                Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO
                ergeben:</p>
            <ul>
                <li><strong>Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
                    ergeben,
                    jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art.
                    6 Abs. 1
                    lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen
                    gestütztes
                    Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu
                    betreiben, haben
                    Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen
                    Daten zum
                    Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher
                    Direktwerbung in
                    Verbindung steht.</strong></li>
                <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen
                    jederzeit zu
                    widerrufen.
                </li>
                <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
                    betreffende
                    Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie
                    der Daten
                    entsprechend den gesetzlichen Vorgaben.
                </li>
                <li><strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht,
                    die
                    Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen
                    Daten zu
                    verlangen.
                </li>
                <li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der
                    gesetzlichen
                    Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw.
                    alternativ nach
                    Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
                </li>
                <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie
                    uns
                    bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und
                    maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu
                    fordern.
                </li>
                <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen
                    verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
                    Aufsichtsbehörde,
                    insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des
                    Orts des
                    mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
                    personenbezogenen
                    Daten gegen die Vorgaben der DSGVO verstößt.
                </li>
            </ul>

            <h2 id="m317">Geschäftliche Leistungen</h2>
            <p>Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z. B. Kunden
                und Interessenten (zusammenfassend als „Vertragspartner" bezeichnet), im Rahmen von vertraglichen und
                vergleichbaren
                Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Hinblick auf die Kommunikation mit den
                Vertragspartnern
                (oder vorvertraglich), etwa zur Beantwortung von Anfragen.</p>
            <p>Wir verwenden diese Daten, um unsere vertraglichen Verpflichtungen zu erfüllen. Dazu gehören insbesondere
                die
                Pflichten zur Erbringung der vereinbarten Leistungen, etwaige Aktualisierungspflichten und Abhilfe bei
                Gewährleistungs- und sonstigen Leistungsstörungen. Darüber hinaus verwenden wir die Daten zur Wahrung
                unserer Rechte
                und zum Zwecke der mit diesen Pflichten verbundenen Verwaltungsaufgaben sowie der
                Unternehmensorganisation. Zudem
                verarbeiten wir die Daten auf Grundlage unserer berechtigten Interessen sowohl an einer ordnungsgemäßen
                und
                betriebswirtschaftlichen Geschäftsführung als auch an Sicherheitsmaßnahmen zum Schutz unserer
                Vertragspartner und
                unseres Geschäftsbetriebs vor Missbrauch, Gefährdung ihrer Daten, Geheimnisse, Informationen und Rechte
                (z. B. zur
                Beteiligung von Telekommunikations-, Transport- und sonstigen Hilfsdiensten sowie Subunternehmern,
                Banken, Steuer-
                und Rechtsberatern, Zahlungsdienstleistern oder Finanzbehörden). Im Rahmen des geltenden Rechts geben
                wir die Daten
                von Vertragspartnern nur insoweit an Dritte weiter, als dies für die vorgenannten Zwecke oder zur
                Erfüllung
                gesetzlicher Pflichten erforderlich ist. Über weitere Formen der Verarbeitung, etwa zu Marketingzwecken,
                werden die
                Vertragspartner im Rahmen dieser Datenschutzerklärung informiert.</p>
            <p>Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir den Vertragspartnern vor oder im
                Rahmen der
                Datenerhebung, z. B. in Onlineformularen, durch besondere Kennzeichnung (z. B. Farben) bzw. Symbole
                (z. B. Sternchen
                o. Ä.), oder persönlich mit.</p>
            <p>Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, d. h.
                grundsätzlich
                nach vier Jahren, es sei denn, dass die Daten in einem Kundenkonto gespeichert werden, z. B., solange
                sie aus
                gesetzlichen Gründen der Archivierung aufbewahrt werden müssen (etwa für Steuerzwecke im Regelfall zehn
                Jahre).
                Daten, die uns im Rahmen eines Auftrags durch den Vertragspartner offengelegt wurden, löschen wir
                entsprechend den
                Vorgaben und grundsätzlich nach Ende des Auftrags.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                    Kontaktinformationen, Kundennummer, etc.); Zahlungsdaten (z. B. Bankverbindungen, Rechnungen,
                    Zahlungshistorie);
                    Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Vertragsdaten (z. B.
                    Vertragsgegenstand,
                    Laufzeit, Kundenkategorie); Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade,
                    Nutzungsintensität
                    und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und
                    Funktionen). Meta-,
                    Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern,
                    beteiligte
                    Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Kunden; Interessenten. Geschäfts- und Vertragspartner.</li>
                <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung
                    vertraglicher
                    Pflichten; Sicherheitsmaßnahmen; Kontaktanfragen und Kommunikation; Büro- und
                    Organisationsverfahren; Verwaltung
                    und Beantwortung von Anfragen; Konversionsmessung (Messung der Effektivität von Marketingmaßnahmen).
                    Profile mit
                    nutzerbezogenen Informationen (Erstellen von Nutzerprofilen).
                </li>
                <li class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6
                    Abs. 1 S. 1
                    lit. b) DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO). Berechtigte Interessen
                    (Art. 6 Abs.
                    1 S. 1 lit. f) DSGVO).
                </li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul class="m-elements">
                <li><strong>Kundenkonto: </strong>Kunden können innerhalb unseres Onlineangebotes ein Konto anlegen
                    (z. B. Kunden-
                    bzw. Nutzerkonto, kurz "Kundenkonto"). Falls die Registrierung eines Kundenkontos erforderlich ist,
                    werden
                    Kunden hierauf ebenso hingewiesen wie auf die für die Registrierung erforderlichen Angaben. Die
                    Kundenkonten
                    sind nicht öffentlich und können von Suchmaschinen nicht indexiert werden. Im Rahmen der
                    Registrierung sowie
                    anschließender Anmeldungen und Nutzungen des Kundenkontos speichern wir die IP-Adressen der Kunden
                    nebst den
                    Zugriffszeitpunkten, um die Registrierung nachweisen und etwaigem Missbrauch des Kundenkontos
                    vorbeugen zu
                    können. Wurde das Kundenkonto gekündigt, werden die Daten des Kundenkontos nach dem
                    Kündigungszeitpunkt
                    gelöscht, sofern sie nicht für andere Zwecke als die Bereitstellung im Kundenkonto aufbewahrt werden
                    oder aus
                    rechtlichen Gründen aufbewahrt werden müssen (z. B. interne Speicherung von Kundendaten,
                    Bestellvorgängen oder
                    Rechnungen). Es liegt in der Verantwortung der Kunden, ihre Daten bei Kündigung des Kundenkontos zu
                    sichern;
                    <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span>
                </li>
                <li><strong>Wirtschaftliche Analysen und Marktforschung: </strong>Aus betriebswirtschaftlichen Gründen
                    und um
                    Markttendenzen, Wünsche der Vertragspartner und Nutzer erkennen zu können, analysieren wir die uns
                    vorliegenden
                    Daten zu Geschäftsvorgängen, Verträgen, Anfragen, etc., wobei in die Gruppe der betroffenen Personen
                    Vertragspartner, Interessenten, Kunden, Besucher und Nutzer unseres Onlineangebotes fallen können.
                    Die Analysen
                    erfolgen zum Zweck betriebswirtschaftlicher Auswertungen, des Marketings und der Marktforschung
                    (z. B. zur
                    Bestimmung von Kundengruppen mit unterschiedlichen Eigenschaften). Dabei können wir, sofern
                    vorhanden, die
                    Profile von registrierten Nutzern samt ihrer Angaben, z. B. zu in Anspruch genommenen Leistungen,
                    berücksichtigen. Die Analysen dienen alleine uns und werden nicht extern offenbart, sofern es sich
                    nicht um
                    anonyme Analysen mit zusammengefassten, also anonymisierten Werten handelt. Ferner nehmen wir
                    Rücksicht auf die
                    Privatsphäre der Nutzer und verarbeiten die Daten zu den Analysezwecken möglichst pseudonym und,
                    sofern machbar,
                    anonym (z. B. als zusammengefasste Daten); <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                </li>
                <li><strong>Onlineshop, Bestellformulare, E-Commerce und Auslieferung: </strong>Wir verarbeiten die
                    Daten unserer
                    Kunden, um ihnen die Auswahl, den Erwerb, bzw. die Bestellung der gewählten Produkte, Waren sowie
                    verbundener
                    Leistungen, als auch deren Bezahlung und Zustellung, bzw. Ausführung zu ermöglichen. Sofern für die
                    Ausführung
                    einer Bestellung erforderlich, setzen wir Dienstleister, insbesondere Post-, Speditions- und
                    Versandunternehmen
                    ein, um die Lieferung, bzw. Ausführung gegenüber unseren Kunden durchzuführen. Für die Abwicklung
                    der
                    Zahlungsvorgänge nehmen wir die Dienste von Banken und Zahlungsdienstleistern in Anspruch. Die
                    erforderlichen
                    Angaben sind als solche im Rahmen des Bestell- bzw. vergleichbaren Erwerbsvorgangs gekennzeichnet
                    und umfassen
                    die zur Auslieferung, bzw. Zurverfügungstellung und Abrechnung benötigten Angaben sowie
                    Kontaktinformationen, um
                    etwaige Rücksprache halten zu können; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span>
                </li>
                <li><strong>Angebot von Software- und Plattformleistungen: </strong>Wir verarbeiten die Daten unserer
                    Nutzer,
                    angemeldeter und etwaiger Testnutzer (nachfolgend einheitlich als "Nutzer" bezeichnet), um ihnen
                    gegenüber
                    unsere vertraglichen Leistungen erbringen zu können sowie auf Grundlage berechtigter Interessen, um
                    die
                    Sicherheit unseres Angebotes gewährleisten und es weiterentwickeln zu können. Die erforderlichen
                    Angaben sind
                    als solche im Rahmen des Auftrags-, Bestell- bzw. vergleichbaren Vertragsschlusses gekennzeichnet
                    und umfassen
                    die zur Leistungserbringung und Abrechnung benötigten Angaben sowie Kontaktinformationen, um etwaige
                    Rücksprachen halten zu können; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span>
                </li>
            </ul>
            <h2 id="m326">Zahlungsverfahren</h2>
            <p>Im Rahmen von Vertrags- und sonstigen Rechtsbeziehungen, aufgrund gesetzlicher
                Pflichten oder sonst auf Grundlage unserer berechtigten Interessen bieten wir den betroffenen Personen
                effiziente
                und sichere Zahlungsmöglichkeiten an und setzen hierzu neben Banken und Kreditinstituten weitere
                Dienstleister ein
                (zusammenfassend "Zahlungsdienstleister").</p>
            <p>Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören Bestandsdaten, wie z. B. der Name und
                die Adresse,
                Bankdaten, wie z. B. Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen sowie die
                Vertrags-,
                Summen- und empfängerbezogenen Angaben. Die Angaben sind erforderlich, um die Transaktionen
                durchzuführen. Die
                eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister verarbeitet und bei diesen
                gespeichert. D. h.,
                wir erhalten keine konto- oder kreditkartenbezogenen Informationen, sondern lediglich Informationen mit
                Bestätigung
                oder Negativbeauskunftung der Zahlung. Unter Umständen werden die Daten seitens der
                Zahlungsdienstleister an
                Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die Identitäts- und Bonitätsprüfung.
                Hierzu
                verweisen wir auf die AGB und die Datenschutzhinweise der Zahlungsdienstleister.</p>
            <p>Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die Datenschutzhinweise der jeweiligen
                Zahlungsdienstleister, welche innerhalb der jeweiligen Webseiten bzw. Transaktionsapplikationen abrufbar
                sind. Wir
                verweisen auf diese ebenfalls zwecks weiterer Informationen und Geltendmachung von Widerrufs-,
                Auskunfts- und
                anderen Betroffenenrechten.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                    Kontaktinformationen, Kundennummer, etc.); Zahlungsdaten (z. B. Bankverbindungen, Rechnungen,
                    Zahlungshistorie);
                    Vertragsdaten (z. B. Vertragsgegenstand, Laufzeit, Kundenkategorie); Nutzungsdaten (z. B.
                    Seitenaufrufe und
                    Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und
                    Betriebssysteme,
                    Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B.
                    IP-Adressen,
                    Zeitangaben, Identifikationsnummern, beteiligte Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Kunden. Interessenten.</li>
                <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung
                    vertraglicher
                    Pflichten.
                </li>
                <li class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6
                    Abs. 1 S. 1
                    lit. b) DSGVO).
                </li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul class="m-elements">
                <li><strong>Stripe: </strong>Zahlungsdienstleistungen (technische Anbindung von Online-Bezahlmethoden);
                    <strong>Dienstanbieter:</strong>
                    Stripe, Inc., 510 Townsend Street, San Francisco, CA 94103, USA; <span
                            class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); </span><strong>Website:</strong>
                    <a href="https://stripe.com" target="_blank">https://stripe.com</a>;
                    <strong>Datenschutzerklärung:</strong> <a
                            href="https://stripe.com/de/privacy" target="_blank">https://stripe.com/de/privacy</a>.
                    <strong>Grundlage
                        Drittlandtransfers:</strong> Data Privacy Framework (DPF).
                </li>
            </ul>
            <h2 id="m225">Bereitstellung des Onlineangebots und Webhosting</h2>
            <p>Wir verarbeiten die Daten der Nutzer, um ihnen
                unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse
                des Nutzers,
                die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät
                der Nutzer
                zu übermitteln.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer,
                    Klickpfade,
                    Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit
                    Inhalten und
                    Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
                    Identifikationsnummern,
                    beteiligte Personen). Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie
                    die sie
                    betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und
                    Nutzerfreundlichkeit;
                    Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und
                    technischen
                    Geräten (Computer, Server etc.).). Sicherheitsmaßnahmen.
                </li>
                <li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                </li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul class="m-elements">
                <li><strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz: </strong>Für die Bereitstellung
                    unseres
                    Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem
                    entsprechenden
                    Serveranbieter (auch "Webhoster" genannt) mieten oder anderweitig beziehen; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                </li>
                <li><strong>Bereitstellung Onlineangebot auf eigener/ dedizierter Serverhardware: </strong>Für die
                    Bereitstellung
                    unseres Onlineangebotes nutzen wir von uns betriebene Serverhardware sowie den damit verbundenen
                    Speicherplatz,
                    die Rechenkapazität und die Software; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                </li>
                <li><strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der Zugriff auf unser Onlineangebot wird
                    in Form von
                    so genannten "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse und Name der
                    abgerufenen
                    Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über
                    erfolgreichen Abruf,
                    Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite)
                    und im
                    Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu
                    Zwecken der
                    Sicherheit eingesetzt werden, z. B., um eine Überlastung der Server zu vermeiden (insbesondere im
                    Fall von
                    missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server
                    und ihre
                    Stabilität sicherzustellen; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). </span><strong>Löschung
                        von Daten:</strong> Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert
                    und danach
                    gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist,
                    sind bis zur
                    endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
                </li>
                <li><strong>E-Mail-Versand und -Hosting: </strong>Die von uns in Anspruch genommenen
                    Webhosting-Leistungen umfassen
                    ebenfalls den Versand, den Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden die
                    Adressen der
                    Empfänger sowie Absender als auch weitere Informationen betreffend den E-Mailversand (z. B. die
                    beteiligten
                    Provider) sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten Daten können ferner
                    zu Zwecken
                    der Erkennung von SPAM verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im Internet
                    grundsätzlich
                    nicht verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar auf dem Transportweg
                    verschlüsselt, aber
                    (sofern kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf den
                    Servern, von
                    denen sie abgesendet und empfangen werden. Wir können daher für den Übertragungsweg der E-Mails
                    zwischen dem
                    Absender und dem Empfang auf unserem Server keine Verantwortung übernehmen; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                </li>
                <li><strong>Content-Delivery-Network: </strong>Wir setzen ein "Content-Delivery-Network" (CDN) ein. Ein
                    CDN ist ein
                    Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große Mediendateien, wie
                    Grafiken oder
                    Programm-Skripte, mit Hilfe regional verteilter und über das Internet verbundener Server schneller
                    und sicherer
                    ausgeliefert werden können; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                </li>
            </ul>
            <h2 id="m134">Einsatz von Cookies</h2>
            <p>Cookies sind kleine Textdateien bzw. sonstige Speichervermerke, die
                Informationen auf Endgeräten speichern und aus ihnen auslesen. Zum Beispiel, um den Log-in-Status in
                einem
                Nutzerkonto, einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder verwendete Funktionen
                eines
                Onlineangebots zu speichern. Cookies können ferner in Bezug auf unterschiedliche Anliegen Einsatz
                finden, etwa zu
                Zwecken der Funktionsfähigkeit, der Sicherheit und des Komforts von Onlineangeboten sowie der Erstellung
                von
                Analysen der Besucherströme.</p>
            <p><strong>Hinweise zur Einwilligung: </strong>Wir setzen Cookies im Einklang mit den gesetzlichen
                Vorschriften ein.
                Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, es sei denn, sie ist laut
                Gesetzeslage nicht
                gefordert. Eine Erlaubnis ist insbesondere nicht notwendig, wenn das Speichern und das Auslesen der
                Informationen,
                also auch von Cookies, unbedingt erforderlich sind, um den Nutzern einen von ihnen ausdrücklich
                gewünschten
                Telemediendienst (also unser Onlineangebot) zur Verfügung zu stellen. Die widerrufliche Einwilligung
                wird ihnen
                gegenüber deutlich kommuniziert und enthält die Informationen zur jeweiligen Cookie-Nutzung.</p>
            <p><strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: </strong>Auf welcher datenschutzrechtlichen
                Grundlage
                wir die personenbezogenen Daten der Nutzer mithilfe von Cookies verarbeiten, hängt davon ab, ob wir sie
                um eine
                Einwilligung bitten. Falls die Nutzer akzeptieren, ist die Rechtsgrundlage der Verwertung ihrer Daten
                die erklärte
                Einwilligung. Andernfalls werden die mithilfe von Cookies verwerteten Daten auf Grundlage unserer
                berechtigten
                Interessen (z. B. an einem betriebswirtschaftlichen Betrieb unseres Onlineangebots und der Verbesserung
                seiner
                Nutzbarkeit) verarbeitet oder, falls dies im Rahmen der Erfüllung unserer vertraglichen Pflichten
                erfolgt, wenn der
                Einsatz von Cookies erforderlich ist, um unseren vertraglichen Verpflichtungen nachzukommen. Zu welchen
                Zwecken die
                Cookies von uns verwertet werden, darüber klären wir im Laufe dieser Datenschutzerklärung oder im Rahmen
                von unseren
                Einwilligungs- und Verarbeitungsprozessen auf.</p>
            <p><strong>Speicherdauer: </strong>Im Hinblick auf die Speicherdauer werden die folgenden Arten von Cookies
                unterschieden:</p>
            <ul>
                <li><strong>Temporäre Cookies (auch: Session- oder Sitzungscookies):</strong> Temporäre Cookies werden
                    spätestens
                    gelöscht, nachdem ein Nutzer ein Onlineangebot verlassen und sein Endgerät (z. B. Browser oder
                    mobile
                    Applikation) geschlossen hat.
                </li>
                <li><strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des
                    Endgeräts
                    gespeichert. So können beispielsweise der Log-in-Status gespeichert und bevorzugte Inhalte direkt
                    angezeigt
                    werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die mithilfe von Cookies
                    erhobenen
                    Nutzerdaten zur Reichweitenmessung Verwendung finden. Sofern wir Nutzern keine expliziten Angaben
                    zur Art und
                    Speicherdauer von Cookies mitteilen (z. B. im Rahmen der Einholung der Einwilligung), sollten sie
                    davon
                    ausgehen, dass diese permanent sind und die Speicherdauer bis zu zwei Jahre betragen kann.
                </li>
            </ul>
            <p><strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-out): </strong>Nutzer können die von ihnen
                abgegebenen Einwilligungen jederzeit widerrufen und zudem einen Widerspruch gegen die Verarbeitung
                entsprechend den
                gesetzlichen Vorgaben, auch mittels der Privatsphäre-Einstellungen ihres Browsers, erklären.</p>
            <ul class="m-elements">
                <li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                    Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
                </li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul class="m-elements">
                <li><strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: </strong>Wir setzen eine
                    Einwilligungs-Management-Lösung ein, bei der die Einwilligung der Nutzer zur Verwendung von Cookies
                    oder zu den
                    im Rahmen der Einwilligungs-Management-Lösung genannten Verfahren und Anbietern eingeholt wird.
                    Dieses Verfahren
                    dient der Einholung, Protokollierung, Verwaltung und dem Widerruf von Einwilligungen, insbesondere
                    bezogen auf
                    den Einsatz von Cookies und vergleichbaren Technologien, die zur Speicherung, zum Auslesen und zur
                    Verarbeitung
                    von Informationen auf den Endgeräten der Nutzer eingesetzt werden. Im Rahmen dieses Verfahrens
                    werden die
                    Einwilligungen der Nutzer für die Nutzung von Cookies und die damit verbundenen Verarbeitungen von
                    Informationen, einschließlich der im Einwilligungs-Management-Verfahren genannten spezifischen
                    Verarbeitungen
                    und Anbieter, eingeholt. Die Nutzer haben zudem die Möglichkeit, ihre Einwilligungen zu verwalten
                    und zu
                    widerrufen. Die Einwilligungserklärungen werden gespeichert, um eine erneute Abfrage zu vermeiden
                    und den
                    Nachweis der Einwilligung gemäß der gesetzlichen Anforderungen führen zu können. Die Speicherung
                    erfolgt
                    serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie) oder mittels vergleichbarer
                    Technologien, um
                    die Einwilligung einem spezifischen Nutzer oder dessen Gerät zuordnen zu können. Sofern keine
                    spezifischen
                    Angaben zu den Anbietern von Einwilligungs-Management-Diensten vorliegen, gelten folgende allgemeine
                    Hinweise:
                    Die Dauer der Speicherung der Einwilligung beträgt bis zu zwei Jahre. Dabei wird ein pseudonymer
                    Nutzer-Identifikator erstellt, der zusammen mit dem Zeitpunkt der Einwilligung, den Angaben zum
                    Umfang der
                    Einwilligung (z. B. betreffende Kategorien von Cookies und/oder Diensteanbieter) sowie Informationen
                    über den
                    Browser, das System und das verwendete Endgerät gespeichert wird; <span
                            class=""><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).</span>
                </li>
            </ul>
            <h2 id="m367">Registrierung, Anmeldung und Nutzerkonto</h2>
            <p>Nutzer können ein Nutzerkonto anlegen. Im Rahmen der
                Registrierung werden den Nutzern die erforderlichen Pflichtangaben mitgeteilt und zu Zwecken der
                Bereitstellung des
                Nutzerkontos auf Grundlage vertraglicher Pflichterfüllung verarbeitet. Zu den verarbeiteten Daten
                gehören
                insbesondere die Login-Informationen (Nutzername, Passwort sowie eine E-Mail-Adresse).</p>
            <p>Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen sowie der Nutzung des
                Nutzerkontos
                speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt
                auf Grundlage
                unserer berechtigten Interessen als auch jener der Nutzer an einem Schutz vor Missbrauch und sonstiger
                unbefugter
                Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, es sei denn, sie ist zur
                Verfolgung
                unserer Ansprüche erforderlich oder es besteht eine gesetzliche Verpflichtung hierzu.</p>
            <p>Die Nutzer können über Vorgänge, die für deren Nutzerkonto relevant sind, wie z. B. technische
                Änderungen, per E-Mail
                informiert werden.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                    Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                    Telefonnummern);
                    Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden
                    Informationen,
                    wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung). Meta-, Kommunikations- und
                    Verfahrensdaten
                    (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung
                    vertraglicher
                    Pflichten; Sicherheitsmaßnahmen; Verwaltung und Beantwortung von Anfragen. Bereitstellung unseres
                    Onlineangebotes und Nutzerfreundlichkeit.
                </li>
                <li class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6
                    Abs. 1 S. 1
                    lit. b) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                </li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul class="m-elements">
                <li><strong>Registrierung mit Klarnamen: </strong>Aufgrund der Natur unserer Community bitten wir die
                    Nutzer unser
                    Angebot nur unter Verwendung von Klarnamen zu nutzen. D. h. die Nutzung von Pseudonymen ist nicht
                    zulässig;
                    <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span>
                </li>
                <li><strong>Profile der Nutzer sind öffentlich: </strong>Die Profile der Nutzer sind öffentlich sichtbar
                    und
                    zugänglich.
                </li>
                <li><strong>Zwei-Faktor-Authentifizierung: </strong>Die Zwei-Faktor-Authentifizierung bietet eine
                    zusätzliche
                    Sicherheitsebene für Ihr Benutzerkonto und stellt sicher, dass nur Sie auf Ihr Konto zugreifen
                    können, auch,
                    wenn jemand anderes Ihr Passwort kennt. Zu diesem Zweck müssen Sie zusätzlich zu Ihrem Passwort eine
                    weitere
                    Authentifizierungsmaßnahme durchführen (z. B. einen an ein mobiles Gerät gesandten Code eingeben).
                    Wir werden
                    Sie über das von uns eingesetzte Verfahren informieren; <span
                            class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span>
                </li>
                <li><strong>Keine Aufbewahrungspflicht für Daten: </strong>Es obliegt den Nutzern, ihre Daten bei
                    erfolgter
                    Kündigung vor dem Vertragsende zu sichern. Wir sind berechtigt, sämtliche während der Vertragsdauer
                    gespeicherte
                    Daten des Nutzers unwiederbringlich zu löschen; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span>
                </li>
            </ul>
            <h2 id="m432">Community Funktionen</h2>
            <p>Die von uns bereitgestellten Community Funktionen erlauben es Nutzern
                miteinander in Konversationen oder sonst miteinander in einen Austausch zu treten. Hierbei bitten wir zu
                beachten,
                dass die Nutzung der Communityfunktionen nur unter Beachtung der geltenden Rechtslage, unserer
                Bedingungen und
                Richtlinien sowie der Rechte anderer Nutzer und Dritter gestattet ist.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer,
                    Klickpfade,
                    Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit
                    Inhalten und
                    Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
                    Identifikationsnummern,
                    beteiligte Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung
                    vertraglicher
                    Pflichten. Sicherheitsmaßnahmen.
                </li>
                <li class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6
                    Abs. 1 S. 1
                    lit. b) DSGVO).
                </li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul class="m-elements">
                <li><strong>Speicherung von Daten zu Sicherheitszwecken: </strong>Die Beiträge und sonstige Eingaben der
                    Nutzer
                    werden zu Zwecken der Community- und Konversationsfunktionen verarbeitet und, vorbehaltlich
                    gesetzlicher
                    Pflichten oder gesetzlicher Erlaubnis nicht an Dritte herausgegeben. Eine Herausgabepflicht kann
                    insbesondere im
                    Fall von rechtswidrigen Beiträgen zu Zwecken der Rechtsverfolgung entstehen. Wir weisen darauf hin,
                    dass neben
                    den Inhalten der Beiträge auch deren Zeitpunkt und die IP-Adresse der Nutzer gespeichert werden.
                    Dies geschieht,
                    um zum Schutz anderer Nutzer und der Community angemessene Maßnahmen ergreifen zu können; <span
                            class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span>
                </li>
                <li><strong>Recht zur Löschung von Inhalten und Informationen: </strong>Die Löschung von Beiträgen,
                    Inhalten oder
                    Angaben der Nutzer ist nach einer sachgerechten Abwägung im erforderlichen Umfang zulässig soweit
                    konkrete
                    Anhaltspunkte dafür bestehen, dass sie einen Verstoß gegen gesetzliche Regeln, unsere Vorgaben oder
                    Rechte
                    Dritter darstellen; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span>
                </li>
                <li><strong>Schutz eigener Daten: </strong>Die Nutzer entscheiden selbst, welche Daten sie über sich
                    innerhalb
                    unseres Onlineangebotes preisgeben. Zum Beispiel, wenn Nutzer Angaben zur eigenen Person machen oder
                    an
                    Konversationen teilnehmen. Wir bitten die Nutzer ihre Daten zu schützen und persönliche Daten nur
                    mit Bedacht
                    und nur im erforderlichen Umfang zu veröffentlichen. Insbesondere bitten wir die Nutzer zu beachten,
                    dass sie
                    die Zugangsdaten ganz besonders schützen und sichere Passwörter verwenden müssen (d. h. vor allem
                    möglichst
                    lange und zufällige Zeichenkombinationen); <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</span>
                </li>
            </ul>
            <h2 id="m451">Single-Sign-On-Anmeldung</h2>
            <p>Als "Single-Sign-On" oder "Single-Sign-On-Anmeldung bzw.
                "-Authentifizierung" werden Verfahren bezeichnet, die es Nutzern erlauben, sich mit Hilfe eines
                Nutzerkontos bei
                einem Anbieter von Single-Sign-On-Verfahren (z. B. einem sozialen Netzwerk), auch bei unserem
                Onlineangebot,
                anzumelden. Voraussetzung der Single-Sign-On-Authentifizierung ist, dass die Nutzer bei dem jeweiligen
                Single-Sign-On-Anbieter registriert sind und die erforderlichen Zugangsdaten in dem dafür vorgesehenen
                Onlineformular eingeben, bzw. schon bei dem Single-Sign-On-Anbieter angemeldet sind und die
                Single-Sign-On-Anmeldung
                via Schaltfläche bestätigen.</p>
            <p>Die Authentifizierung erfolgt direkt bei dem jeweiligen Single-Sign-On-Anbieter. Im Rahmen einer solchen
                Authentifizierung erhalten wir eine Nutzer-ID mit der Information, dass der Nutzer unter dieser
                Nutzer-ID beim
                jeweiligen Single-Sign-On-Anbieter eingeloggt ist und eine für uns für andere Zwecke nicht weiter
                nutzbare ID (sog
                "User Handle"). Ob uns zusätzliche Daten übermittelt werden, hängt allein von dem genutzten
                Single-Sign-On-Verfahren
                ab, von den gewählten Datenfreigaben im Rahmen der Authentifizierung und zudem davon, welche Daten
                Nutzer in den
                Privatsphäre- oder sonstigen Einstellungen des Nutzerkontos beim Single-Sign-On-Anbieter freigegeben
                haben. Es
                können je nach Single-Sign-On-Anbieter und der Wahl der Nutzer verschiedene Daten sein, in der Regel
                sind es die
                E-Mail-Adresse und der Benutzername. Das im Rahmen des Single-Sign-On-Verfahrens eingegebene Passwort
                bei dem
                Single-Sign-On-Anbieter ist für uns weder einsehbar, noch wird es von uns gespeichert. </p>
            <p>Die Nutzer werden gebeten, zu beachten, dass deren bei uns gespeicherte Angaben automatisch mit ihrem
                Nutzerkonto
                beim Single-Sign-On-Anbieter abgeglichen werden können, dies jedoch nicht immer möglich ist oder
                tatsächlich
                erfolgt. Ändern sich z. B. die E-Mail-Adressen der Nutzer, müssen sie diese manuell in ihrem Nutzerkonto
                bei uns
                ändern.</p>
            <p>Die Single-Sign-On-Anmeldung können wir, sofern mit den Nutzern vereinbart, im Rahmen der oder vor der
                Vertragserfüllung einsetzen, soweit die Nutzer darum gebeten wurden, im Rahmen einer Einwilligung
                verarbeiten und
                setzen sie ansonsten auf Grundlage der berechtigten Interessen unsererseits und der Interessen der
                Nutzer an einem
                effektiven und sicheren Anmeldesystem ein.</p>
            <p>Sollten Nutzer sich einmal entscheiden, die Verknüpfung ihres Nutzerkontos beim Single-Sign-On-Anbieter
                nicht mehr
                für das Single-Sign-On-Verfahren nutzen zu wollen, müssen sie diese Verbindung innerhalb ihres
                Nutzerkontos beim
                Single-Sign-On-Anbieter aufheben. Möchten Nutzer deren Daten bei uns löschen, müssen sie ihre
                Registrierung bei uns
                kündigen.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                    Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                    Telefonnummern);
                    Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz,
                    verwendete
                    Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations-
                    und
                    Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung
                    vertraglicher
                    Pflichten; Sicherheitsmaßnahmen. Anmeldeverfahren.
                </li>
                <li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                </li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul class="m-elements">
                <li><strong>Google Single-Sign-On: </strong>Authentifizierungsdienste für Nutzeranmeldungen,
                    Bereitstellung von
                    Single Sign-On-Funktionen, Verwaltung von Identitätsinformationen und Anwendungsintegrationen;
                    <strong>Dienstanbieter:</strong>
                    Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; <span
                            class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); </span><strong>Website:</strong>
                    <a href="https://www.google.de" target="_blank">https://www.google.de</a>;
                    <strong>Datenschutzerklärung:</strong> <a href="https://policies.google.com/privacy"
                                                              target="_blank">https://policies.google.com/privacy</a>;
                    <strong>Grundlage Drittlandtransfers:</strong> Data Privacy Framework (DPF). <strong>Widerspruchsmöglichkeit
                        (Opt-Out):</strong> Einstellungen für die Darstellung von Werbeeinblendungen: <a
                            href="https://myadcenter.google.com/" target="_blank">https://myadcenter.google.com/</a>.
                </li>
                <li><strong>Microsoft Single-Sign-On: </strong>Authentifizierungsdienste für Nutzeranmeldungen,
                    Bereitstellung von
                    Single Sign-On-Funktionen, Verwaltung von Identitätsinformationen und Anwendungsintegrationen;
                    <strong>Dienstanbieter:</strong>
                    Microsoft Irland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown,
                    Dublin 18,
                    D18 P521, Irland; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); </span><strong>Website:</strong>
                    <a href="https://www.microsoft.com/de-de/security/business/identity-access/azure-active-directory-single-sign-on"
                       target="_blank">https://www.microsoft.com/de-de/security/business/identity-access/azure-active-directory-single-sign-on</a>;
                    <strong>Datenschutzerklärung:</strong> <a
                            href="https://privacy.microsoft.com/de-de/privacystatement"
                            target="_blank">https://privacy.microsoft.com/de-de/privacystatement</a>;
                    <strong>Grundlage Drittlandtransfers:</strong> Data Privacy Framework (DPF). <strong>Weitere
                        Informationen:</strong> <a href="https://www.microsoft.com/de-de/trust-center" target="_blank">https://www.microsoft.com/de-de/trust-center</a>.
                </li>
                <li><strong>OpenID Single-Sign-On: </strong>Authentifizierungsdienste für Nutzeranmeldungen,
                    Bereitstellung von
                    Single Sign-On-Funktionen, Verwaltung von Identitätsinformationen und Anwendungsintegrationen;
                    <strong>Dienstanbieter:</strong>
                    OpenID Foundation, 2400 Camino Ramon, Suite 375, San Ramon, CA 94583, USA; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); </span><strong>Website:</strong>
                    <a href="https://openid.net" target="_blank">https://openid.net</a>;
                    <strong>Datenschutzerklärung:</strong> <a
                            href="https://openid.net/policies/" target="_blank">https://openid.net/policies/</a>.
                    <strong>Grundlage
                        Drittlandtransfers:</strong> Data Privacy Framework (DPF).
                </li>
            </ul>
            <h2 id="m104">Blogs und Publikationsmedien</h2>
            <p>Wir nutzen Blogs oder vergleichbare Mittel der Onlinekommunikation und
                Publikation (nachfolgend "Publikationsmedium"). Die Daten der Leser werden für die Zwecke des
                Publikationsmediums
                nur insoweit verarbeitet, als es für dessen Darstellung und die Kommunikation zwischen Autoren und
                Lesern oder aus
                Gründen der Sicherheit erforderlich ist. Im Übrigen verweisen wir auf die Informationen zur Verarbeitung
                der
                Besucher unseres Publikationsmediums im Rahmen dieser Datenschutzhinweise.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                    Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                    Telefonnummern);
                    Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden
                    Informationen,
                    wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten (z. B.
                    Seitenaufrufe und
                    Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und
                    Betriebssysteme,
                    Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B.
                    IP-Adressen,
                    Zeitangaben, Identifikationsnummern, beteiligte Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung
                    vertraglicher
                    Pflichten; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres
                    Onlineangebotes und
                    Nutzerfreundlichkeit.
                </li>
                <li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                </li>
            </ul>
            <h2 id="m182">Kontakt- und Anfrageverwaltung</h2>
            <p>Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular,
                E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen
                werden die
                Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und
                etwaiger
                angefragter Maßnahmen erforderlich ist.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                    Telefonnummern);
                    Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden
                    Informationen,
                    wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten (z. B.
                    Seitenaufrufe und
                    Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und
                    Betriebssysteme,
                    Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B.
                    IP-Adressen,
                    Zeitangaben, Identifikationsnummern, beteiligte Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
                <li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und
                    Beantwortung von
                    Anfragen; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres
                    Onlineangebotes und
                    Nutzerfreundlichkeit.
                </li>
                <li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                </li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul class="m-elements">
                <li><strong>Kontaktformular: </strong>Wenn Nutzer über unser Kontaktformular, E-Mail oder andere
                    Kommunikationswege
                    mit uns in Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang mitgeteilten Daten zur
                    Bearbeitung des
                    mitgeteilten Anliegens; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                </li>
            </ul>
            <h2 id="m263">Webanalyse, Monitoring und Optimierung</h2>
            <p>Die Webanalyse (auch als „Reichweitenmessung" bezeichnet)
                dient der Auswertung der Besucherströme unseres Onlineangebots und kann Verhalten, Interessen oder
                demografische
                Informationen zu den Besuchern, wie beispielsweise Alter oder Geschlecht, als pseudonyme Werte umfassen.
                Mithilfe
                der Reichweitenanalyse können wir zum Beispiel erkennen, zu welcher Zeit unser Onlineangebot oder dessen
                Funktionen
                beziehungsweise Inhalte am häufigsten genutzt werden, oder zur Wiederverwendung einladen. Ebenso ist es
                uns möglich,
                nachzuvollziehen, welche Bereiche der Optimierung bedürfen. </p>
            <p>Neben der Webanalyse können wir auch Testverfahren einsetzen, um etwa unterschiedliche Versionen unseres
                Onlineangebots oder seiner Bestandteile zu testen und zu optimieren.</p>
            <p>Sofern nachfolgend nicht anders angegeben, können zu diesen Zwecken Profile, also zu einem
                Nutzungsvorgang
                zusammengefasste Daten, angelegt und Informationen in einem Browser bzw. in einem Endgerät gespeichert
                und dann
                ausgelesen werden. Zu den erhobenen Angaben gehören insbesondere besuchte Websites und dort genutzte
                Elemente sowie
                technische Auskünfte, wie etwa der verwendete Browser, das benutzte Computersystem sowie Angaben zu
                Nutzungszeiten.
                Sofern sich Nutzer in die Erhebung ihrer Standortdaten uns gegenüber oder gegenüber den Anbietern der
                von uns
                eingesetzten Dienste einverstanden erklärt haben, ist auch die Verarbeitung von Standortdaten
                möglich.</p>
            <p>Darüber hinaus werden die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir ein IP-Masking-Verfahren
                (d. h.
                Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden die im Rahmen von
                Webanalyse,
                A/B-Testings und Optimierung keine Klardaten der Nutzer (wie z. B. E-Mail-Adressen oder Namen)
                gespeichert, sondern
                Pseudonyme. Das heißt, wir als auch die Anbieter der eingesetzten Software kennen nicht die tatsächliche
                Identität
                der Nutzer, sondern nur die zum Zweck der jeweiligen Verfahren in deren Profilen gespeicherten
                Angaben.</p>
            <p><strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um deren Einwilligung in den Einsatz
                der
                Drittanbieter bitten, stellt die Rechtsgrundlage der Datenverarbeitung die Einwilligung dar. Ansonsten
                werden die
                Nutzerdaten auf Grundlage unserer berechtigten Interessen (d. h. Interesse an effizienten,
                wirtschaftlichen und
                empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die
                Informationen zur
                Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer,
                    Klickpfade,
                    Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit
                    Inhalten und
                    Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
                    Identifikationsnummern,
                    beteiligte Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Reichweitenmessung (z. B. Zugriffsstatistiken, Erkennung
                    wiederkehrender Besucher). Profile mit nutzerbezogenen Informationen (Erstellen von Nutzerprofilen).
                </li>
                <li><strong>Sicherheitsmaßnahmen:</strong> IP-Masking (Pseudonymisierung der IP-Adresse).</li>
            </ul>
            <h2 id="m135">Affiliate-Programme und Affiliate-Links</h2>
            <p>In unser Onlineangebot binden wir sogenannte
                Affiliate-Links oder andere Verweise (zu denen z. B. Suchmasken, Widgets oder Rabatt-Codes gehören
                können) auf die
                Angebote und Leistungen von Drittanbietern ein (zusammenfassend bezeichnet als "Affiliate-Links"). Wenn
                Nutzer den
                Affiliate-Links folgen, bzw. anschließend die Angebote wahrnehmen, können wir von diesen Drittanbietern
                eine
                Provision oder sonstige Vorteile erhalten (zusammenfassend bezeichnet als "Provision").</p>
            <p>Um nachverfolgen zu können, ob die Nutzer die Angebote eines von uns eingesetzten Affiliate-Links
                wahrgenommen haben,
                ist es notwendig, dass die jeweiligen Drittanbieter erfahren, dass die Nutzer einem innerhalb unseres
                Onlineangebotes eingesetzten Affiliate-Link gefolgt sind. Die Zuordnung der Affiliate-Links zu den
                jeweiligen
                Geschäftsabschlüssen oder zu sonstigen Aktionen (z. B. Käufen) dient alleine dem Zweck der
                Provisionsabrechnung und
                wird aufgehoben, sobald sie für den Zweck nicht mehr erforderlich ist.</p>
            <p>Für die Zwecke der vorgenannten Zuordnung der Affiliate-Links können die Affiliate-Links um bestimmte
                Werte ergänzt
                werden, die ein Bestandteil des Links sind oder anderweitig, z. B. in einem Cookie, gespeichert werden
                können. Zu
                den Werten können insbesondere die Ausgangswebseite (Referrer), der Zeitpunkt, eine Online-Kennung der
                Betreiber der
                Webseite, auf der sich der Affiliate-Link befand, eine Online-Kennung des jeweiligen Angebotes, die Art
                des
                verwendeten Links, die Art des Angebotes und eine Online-Kennung des Nutzers gehören.</p>
            <p><strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um deren Einwilligung in den Einsatz
                der
                Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten
                werden die
                Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d. h. Interesse an effizienten,
                wirtschaftlichen und
                empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die
                Informationen zur
                Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Vertragsdaten (z. B. Vertragsgegenstand, Laufzeit,
                    Kundenkategorie);
                    Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz,
                    verwendete
                    Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations-
                    und
                    Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Affiliate-Nachverfolgung.</li>
                <li class=""><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
                    Berechtigte
                    Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                </li>
            </ul>
            <h2 id="m136">Präsenzen in sozialen Netzwerken (Social Media)</h2>
            <p>Wir unterhalten Onlinepräsenzen innerhalb sozialer
                Netzwerke und verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren
                oder
                Informationen über uns anzubieten.</p>
            <p>Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen Union verarbeitet
                werden können.
                Hierdurch können sich für die Nutzer Risiken ergeben, weil so zum Beispiel die Durchsetzung der
                Nutzerrechte
                erschwert werden könnte.</p>
            <p>Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und
                Werbezwecke
                verarbeitet. So können beispielsweise anhand des Nutzungsverhaltens und sich daraus ergebender
                Interessen der Nutzer
                Nutzungsprofile erstellt werden. Letztere finden möglicherweise wiederum Verwendung, um etwa
                Werbeanzeigen innerhalb
                und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Daher
                werden im
                Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die
                Interessen der
                Nutzer gespeichert werden. Zudem können in den Nutzungsprofilen auch Daten unabhängig der von den
                Nutzern
                verwendeten Geräten gespeichert werden (insbesondere, wenn sie Mitglieder der jeweiligen Plattformen und
                dort
                eingeloggt sind).</p>
            <p>Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten
                (Opt-out)
                verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.</p>
            <p>Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin,
                dass diese am
                effektivsten bei den Anbietern geltend gemacht werden können. Nur Letztere haben jeweils Zugriff auf die
                Nutzerdaten
                und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe
                benötigen, dann
                können Sie sich an uns wenden.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                    Telefonnummern);
                    Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden
                    Informationen,
                    wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten (z. B.
                    Seitenaufrufe und
                    Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und
                    Betriebssysteme,
                    Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B.
                    IP-Adressen,
                    Zeitangaben, Identifikationsnummern, beteiligte Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Feedback (z. B. Sammeln
                    von
                    Feedback via Online-Formular). Marketing.
                </li>
                <li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                </li>
            </ul>
            <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
            <ul class="m-elements">
                <li><strong>Instagram: </strong>Soziales Netzwerk; <strong>Dienstanbieter:</strong> Meta Platforms
                    Ireland Limited,
                    Merrion Road, Dublin 4, D04 X2K5, Irland; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); </span><strong>Website:</strong>
                    <a href="https://www.instagram.com" target="_blank">https://www.instagram.com</a>;
                    <strong>Datenschutzerklärung:</strong> <a href="https://instagram.com/about/legal/privacy"
                                                              target="_blank">https://instagram.com/about/legal/privacy</a>.
                    <strong>Grundlage Drittlandtransfers:</strong> Data Privacy Framework (DPF).
                </li>
                <li><strong>TikTok: </strong>Soziales Netzwerk / Video-Plattform; <strong>Dienstanbieter:</strong>
                    TikTok Technology
                    Limited, 10 Earlsfort Terrace, Dublin, D02 T380, Irland und TikTok Information Technologies UK
                    Limited,
                    Kaleidoscope, 4 Lindsey Street, London, United Kingdom, EC1A 9HP; <span
                            class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); </span><strong>Website:</strong>
                    <a href="https://www.tiktok.com" target="_blank">https://www.tiktok.com</a>.
                    <strong>Datenschutzerklärung:</strong> <a href="https://www.tiktok.com/de/privacy-policy"
                                                              target="_blank">https://www.tiktok.com/de/privacy-policy</a>.
                </li>
                <li><strong>YouTube: </strong>Soziales Netzwerk und Videoplattform; <strong>Dienstanbieter:</strong>
                    Google Ireland
                    Limited, Gordon House, Barrow Street, Dublin 4, Irland; <span
                            class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); </span><strong>Datenschutzerklärung:</strong>
                    <a href="https://policies.google.com/privacy"
                       target="_blank">https://policies.google.com/privacy</a>; <strong>Grundlage
                        Drittlandtransfers:</strong> Data Privacy Framework (DPF). <strong>Widerspruchsmöglichkeit
                        (Opt-Out):</strong> <a href="https://myadcenter.google.com/personalizationoff" target="_blank">https://myadcenter.google.com/personalizationoff</a>.
                </li>
            </ul>
            <h2 id="m723">Management, Organisation und Hilfswerkzeuge</h2>
            <p>Wir setzen Dienstleistungen, Plattformen und Software
                anderer Anbieter (nachfolgend bezeichnet als "Drittanbieter") zu Zwecken der Organisation, Verwaltung,
                Planung sowie
                Erbringung unserer Leistungen ein. Bei der Auswahl der Drittanbieter und ihrer Leistungen beachten wir
                die
                gesetzlichen Vorgaben. </p>
            <p>In diesem Rahmen können personenbezogenen Daten verarbeitet und auf den Servern der Drittanbieter
                gespeichert werden.
                Hiervon können diverse Daten betroffen sein, die wir entsprechend dieser Datenschutzerklärung
                verarbeiten. Zu diesen
                Daten können insbesondere Stammdaten und Kontaktdaten der Nutzer, Daten zu Vorgängen, Verträgen,
                sonstigen Prozessen
                und deren Inhalte gehören.</p>
            <p>Sofern Nutzer im Rahmen der Kommunikation, von Geschäfts- oder anderen Beziehungen mit uns auf die
                Drittanbieter bzw.
                deren Software oder Plattformen verwiesen werden, können die Drittanbieter Nutzungsdaten und Metadaten
                zu
                Sicherheitszwecken, zur Serviceoptimierung oder zu Marketingzwecken verarbeiten. Wir bitten daher darum,
                die
                Datenschutzhinweise der jeweiligen Drittanbieter zu beachten.</p>
            <ul class="m-elements">
                <li><strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z. B. textliche oder bildliche Nachrichten
                    und Beiträge
                    sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der
                    Erstellung);
                    Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz,
                    verwendete
                    Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations-
                    und
                    Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).
                </li>
                <li><strong>Betroffene Personen:</strong> Kommunikationspartner. Nutzer (z. B. Webseitenbesucher, Nutzer
                    von
                    Onlinediensten).
                </li>
                <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung
                    vertraglicher
                    Pflichten. Büro- und Organisationsverfahren.
                </li>
            </ul>
        </div>
            {:else}
           <div>
               <h1>Privacy policy</h1>
               <h2 id="m716">Preamble</h2>
               <p>With the following privacy policy, we would like to explain to you what types of your personal data (hereinafter also referred to as "data") we process, for what purposes and to what extent. The privacy policy applies to all processing of personal data carried out by us, both in the context of the provision of our services and, in particular, on our websites, in mobile applications and within external online presences, such as our social media profiles (hereinafter collectively referred to as "online offer").
               <p>The terms used are not gender-specific.</p>
               <p>As of: 7. April 2024</p><h2>Overview</h2> <ul class="index"><li><a class="index-link" href="#m716">Preamble</a></li><li><a class="index-link" href="#m3">Controller</a></li><li><a class="index-link" href="#mOverview">Overview of processing</a></li><li><a class="index- link" href="#m2427">Applicable legal bases</a></li><li><a class="index-link" href="#m27">Security measures</a></li><li><a class="index-link" href="#m25">Transfer of personal data</a></li><li><a class="index- link" href="#m24">International data transfers</a></li><li><a class="index-link" href="#m10">Rights of data subjects</a></li><li><a class="index-link" href="#m317">Commercial services</a></li><li><a class="index- link" href="#m326">Payment methods</a></li><li><a class="index-link" href="#m225">Provision of the online offer and web hosting</a></li><li><a class="index-link" href="#m134">Use of cookies</a></li><li><a class="index-link" href="#m367">Registration, Login and user account</a></li><li><a class="index-link" href="#m432">Community functions</a></li><li><a class="index-link" href="#m451">Single sign-on login</a></li><li><a class="index- link" href="#m104">Blogs and publication media</a></li><li><a class="index-link" href="#m182">Contact and request management</a></li><li><a class="index-link" href="#m263">Web analytics, Monitoring and optimization</a></li><li><a class="index-link" href="#m135">Affiliate programs and affiliate links</a></li><li><a class="index-link" href="#m136">Presence in social networks (social media)</a></li><li><a class="index-link" href="#m723">Management, Organization and support tools</a></li></ul><h2 id="m3">Person responsible</h2><p>Nico Weber<br>Fallerweg 7<br>54516 Wittlich<br>Germany</p>
               E-mail address: <a href="mailto:nico.weber01@everbuild.org">nico.weber01@everbuild.org</a>
               Imprint: <a href="https://everbuild.org/imprint" target="_blank">https://everbuild.org/imprint</a>

               <h2 id="mOverview">Overview of processing</h2><p>The following overview summarizes the types of data processed and the purposes of their processing and refers to the data subjects.</p><h3>Types of data processed</h3>
               <ul><li>Inventory data.</li><li>Payment data.</li><li>Contact data.</li><li>Content data.</li><li>Contract data.</li><li>Usage data. </li><li>Meta, communication and process data.</li></ul><h3>Categories of data subjects</h3><ul><li>Customers.</li><li>Interested parties.</li><li>Communication partners.</li><li>Users. </li><li>Business and contractual partners.</li></ul><h3>Purposes of processing</h3><ul><li>Provision of contractual services and performance of contractual obligations.</li><li>Contact requests and communication.</li><li>Security measures.</li><li>Reach measurement.</li><li>Office and organizational procedures. </li><li>Conversion measurement.</li><li>Affiliate tracking.</li><li>Managing and responding to inquiries.</li><li>Feedback.</li><li>Marketing.</li><li>Profiles with user-related information.</li><li>Subscription process.</li><li>Providing our online offer and user-friendliness. </li><li>Information technology infrastructure.</li></ul><h2 id="m2427">Applicable legal bases</h2><p><strong>Applicable legal bases under the GDPR: </strong>The following is an overview of the legal bases of the GDPR on the basis of which we process personal data. Please note that in addition to the provisions of the GDPR, national data protection regulations may apply in your or our country of residence or domicile. Should more specific legal bases also apply in individual cases, we will inform you of these in the privacy policy.
               <ul><li><strong>Consent (Art. 6 para. 1 sentence 1 lit. a) GDPR)</strong> - The data subject has given their consent to the processing of their personal data for one or more specific purposes.</li><li><strong>Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR)</strong> - Processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract.</li><li><strong>Legal obligation (Art. 6 para. 1 sentence 1 lit. c) GDPR)</strong> - Processing is necessary for compliance with a legal obligation to which the controller is subject.</li><li><strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR)</strong> - processing is necessary for the purposes of the legitimate interests pursued by the controller or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of personal data.</li></ul><p><strong>National data protection regulations in Germany: </strong>In addition to the data protection regulations of the GDPR, national data protection regulations apply in Germany. These include, in particular, the Act on the Protection against Misuse of Personal Data in Data Processing (Federal Data Protection Act - BDSG). In particular, the BDSG contains special regulations on the right to information, the right to erasure, the right to object, the processing of special categories of personal data, processing for other purposes and transmission as well as automated decision-making in individual cases, including profiling. The data protection laws of the individual federal states may also apply.</p>
               <p><strong>Note on the applicability of the GDPR and Swiss FADP: </strong>This data protection notice serves to provide information in accordance with both the Swiss Federal Act on Data Protection (FADP) and the General Data Protection Regulation (GDPR). For this reason, please note that the terms of the GDPR are used due to the broader geographical application and comprehensibility. In particular, instead of the terms "processing" of "personal data", "overriding interest" and "sensitive personal data" used in the Swiss DPA, the terms "processing" of "personal data", "legitimate interest" and "special categories of data" used in the GDPR are used. However, the legal meaning of the terms will continue to be determined in accordance with the Swiss DPA within the scope of application of the Swiss DPA.</p>

               <h2 id="m27">Security measures</h2><p>We take appropriate technical and organizational measures to ensure a level of security appropriate to the risk, taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, in accordance with legal requirements.</p> <p>
               <p>The measures include, in particular, ensuring the confidentiality, integrity and availability of data by controlling physical and electronic access to the data as well as the access, input, disclosure, safeguarding of availability and separation of the data. Furthermore, we have established procedures that ensure the exercise of data subject rights, the deletion of data and responses to data threats. Furthermore, we already take the protection of personal data into account when developing or selecting hardware, software and processes in accordance with the principle of data protection, through technology design and data protection-friendly default settings.</p>
               <p>Securing online connections using TLS/SSL encryption technology (HTTPS): To protect user data transmitted via our online services from unauthorized access, we use TLS/SSL encryption technology. Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are the cornerstones of secure data transmission on the Internet. These technologies encrypt the information transmitted between the website or app and the user's browser (or between two servers), protecting the data from unauthorized access. TLS, as the more advanced and secure version of SSL, ensures that all data transmissions meet the highest security standards. If a website is secured by an SSL/TLS certificate, this is signaled by the display of HTTPS in the URL. This serves as an indicator to users that their data is being transmitted securely and encrypted.</p>
               <h2 id="m25">Transfer of personal data</h2><p>When we process personal data, it may be transferred to other bodies, companies, legally independent organizational units or persons or disclosed to them. The recipients of this data may include, for example, service providers commissioned with IT tasks or providers of services and content that are integrated into a website. In such cases, we observe the legal requirements and, in particular, conclude corresponding contracts or agreements with the recipients of your data that serve to protect your data.</p>

               <h2 id="m24">International data transfers</h2><p>Data processing in third countries: If we process data in a third country (i.e. outside the European Union (EU), the European Economic Area (EEA)) or the processing takes place in the context of the use of third-party services or the disclosure or transfer of data to other persons, bodies or companies, this only takes place in accordance with the legal requirements. If the level of data protection in the third country has been recognized by means of an adequacy decision (Art. 45 GDPR), this serves as the basis for the data transfer. Otherwise, data will only be transferred if the level of data protection is otherwise ensured, in particular through standard contractual clauses (Art. 46 para. 2 lit. c) GDPR), express consent or in the case of contractual or legally required transfer (Art. 49 para. 1 GDPR). In addition, we will inform you of the basis for third country transfers with the individual providers from the third country, whereby the adequacy decisions take precedence. Information on third country transfers and existing adequacy decisions can be found in the information provided by the EU Commission: <a href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de" target="_blank">https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de.</a></p>
               <p>EU-US Trans-Atlantic Data Privacy Framework: As part of the so-called "Data Privacy Framework" (DPF), the EU Commission has also recognized the level of data protection for certain companies from the USA as secure as part of the adequacy decision of 10.07.2023. The list of certified companies and further information on the DPF can be found on the website of the US Department of Commerce at <a href="https://www.dataprivacyframework.gov/" target="_blank">https://www.dataprivacyframework.gov/</a>. As part of the data protection information, we will inform you which service providers we use are certified under the Data Privacy Framework.</p>

               <h2 id="m10">Rights of data subjects</h2><p>Rights of data subjects under the GDPR: As a data subject, you have various rights under the GDPR, which arise in particular from Articles 15 to 21 GDPR:</p><ul><li><strong>Right to object: You have the right to object, on grounds relating to your particular situation, at any time to processing of personal data concerning you which is based on point (e) or (f) of Article 6(1) GDPR, including profiling based on those provisions. If the personal data concerning you are processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for such marketing, which includes profiling to the extent that it is related to such direct marketing.</strong></li><li><strong>Right to withdraw consent:</strong> You have the right to withdraw your consent at any time. </li><li><strong>Right of access:</strong> You have the right to obtain confirmation as to whether or not data in question is being processed and access to this data as well as further information and a copy of the data in accordance with the statutory provisions.</li><li><strong>Right to rectification:</strong> You have the right to request the completion of data concerning you or the rectification of inaccurate data concerning you in accordance with the statutory provisions. </li><li><strong>Right to erasure and restriction of processing:</strong> In accordance with the legal requirements, you have the right to request that data concerning you be erased immediately or, alternatively, to request that the processing of the data be restricted in accordance with the legal requirements.</li><li><strong>Right to data portability:</strong> You have the right to receive data concerning you that you have provided to us in a structured, commonly used and machine-readable format in accordance with the legal requirements or to request that it be transmitted to another controller. </li><li><strong>Complaint to supervisory authority:</strong> Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work or place of the alleged infringement if you consider that the processing of personal data relating to you infringes the provisions of the GDPR.</li></ul>

               <h2 id="m317">Business services</h2><p>We process data of our contractual and business partners, e.g. customers and interested parties (collectively referred to as "contractual partners"), in the context of contractual and comparable legal relationships and related measures and with regard to communication with the contractual partners (or pre-contractual), for example to respond to inquiries.</p>
               <p>We use this data to fulfill our contractual obligations. These include, in particular, the obligations to provide the agreed services, any updating obligations and remedies in the event of warranty and other service disruptions. In addition, we use the data to safeguard our rights and for the purpose of the administrative tasks associated with these obligations and the company organization. We also process the data on the basis of our legitimate interests both in the proper and efficient management of our business and in security measures to protect our contractual partners and our business operations from misuse, threats to their data, secrets, information and rights (e.g. to involve telecommunications, transport and other auxiliary services as well as subcontractors, banks, tax and legal advisors, payment service providers or tax authorities). Within the framework of applicable law, we only pass on the data of contractual partners to third parties to the extent that this is necessary for the aforementioned purposes or to fulfill legal obligations. Contractual partners will be informed about other forms of processing, such as for marketing purposes, as part of this privacy policy.</p>
               <p>We inform the contractual partners which data is required for the aforementioned purposes before or during data collection, e.g. in online forms, by special marking (e.g. colors) or symbols (e.g. asterisks or similar), or personally.</p>
               <p>We delete the data after the expiry of statutory warranty and comparable obligations, i.e. generally after four years, unless the data is stored in a customer account, e.g. as long as it must be retained for legal archiving reasons (e.g. for tax purposes, generally ten years). We delete data disclosed to us by the contractual partner as part of an order in accordance with the specifications and generally after the end of the order.</p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Inventory data (e.g. full name, residential address, contact information, customer number, etc.); payment data (e.g. bank details, invoices, payment history); contact data (e.g. postal and email addresses or telephone numbers) postal and email addresses or telephone numbers); contract data (e.g. subject matter of the contract, duration, customer category); usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Customers; interested parties. Business and contractual partners.</li><li><strong>Purposes of Processing:</strong> Provision of contractual services and performance of contractual obligations; Security measures; Contact requests and communication; Office and organizational procedures; Managing and responding to inquiries; Conversion tracking (Measurement of the effectiveness of marketing activities). Profiles with user-related information (creation of user profiles).</li><li class=""><strong>Legal basis:</strong> Performance of a contract and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR); Legal obligation (Art. 6 para. 1 sentence 1 lit. c) GDPR). Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</li></ul><p><strong>Further information on processing processes, procedures and services:</strong></p><ul class="m-elements"><li><strong>Customer account: </strong>Customers can create an account within our online offering (e.g. customer or user account, "customer account" for short). If the registration of a customer account is required, customers will be informed of this as well as the information required for registration. Customer accounts are not public and cannot be indexed by search engines. As part of the registration process and subsequent logins and use of the customer account, we store the IP addresses of customers together with the access times in order to be able to prove registration and prevent any misuse of the customer account. If the customer account has been terminated, the customer account data will be deleted after the termination date, unless it is stored for purposes other than provision in the customer account or must be stored for legal reasons (e.g. internal storage of customer data, order processes or invoices). It is the customer's responsibility to back up their data when terminating their customer account; <span class=""><strong>legal basis:</strong> performance of a contract and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR).</span></li><li><strong>Economic analyses and market research: </strong>For economic reasons and in order to identify market trends, the wishes of contractual partners and users, we analyze the data available to us on business transactions, contracts, inquiries, etc., The group of data subjects may include contractual partners, interested parties, customers, visitors and users of our online offering. The analyses are carried out for the purpose of business evaluations, marketing and market research (e.g. to determine customer groups with different characteristics). If available, we can take into account the profiles of registered users, including their details, e.g. on services used. The analyses serve us alone and are not disclosed externally, unless they are anonymous analyses with summarized, i.e. anonymized values. Furthermore, we take the privacy of users into account and process the data for analysis purposes as pseudonymously as possible and, if feasible, anonymously (e.g. as summarized data); <span class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR). </span></li><li><strong>Online store, order forms, e-commerce and delivery: </strong>We process the data of our customers to enable them to select, purchase or order the selected products, goods and associated services, as well as their payment and delivery or execution. If necessary for the execution of an order, we use service providers, in particular postal, forwarding and shipping companies, to carry out the delivery or execution for our customers. We use the services of banks and payment service providers to process payment transactions. The required information is marked as such in the order or comparable purchase process and includes the information required for delivery or provision and billing as well as contact information in order to be able to hold any consultation; <span class=""><strong>Legal basis:</strong> Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR). </span></li><li><strong>Provision of software and platform services: </strong>We process the data of our users, registered users and any test users (hereinafter uniformly referred to as "users") in order to be able to provide them with our contractual services and on the basis of legitimate interests in order to ensure the security of our offer and to be able to develop it further. The required information is identified as such in the context of the conclusion of the contract, order or comparable contract and includes the information required for the provision of services and billing as well as contact information in order to be able to hold any consultations; <span class=""><strong>legal basis:</strong> contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR).</span></li></ul>
               <h2 id="m326">Payment procedures</h2><p>In the context of contractual and other legal relationships, due to legal obligations or otherwise on the basis of our legitimate interests, we offer the data subjects efficient and secure payment options and use other service providers in addition to banks and credit institutions (collectively "payment service providers") for this purpose.</p>
               <p>The data processed by the payment service providers includes inventory data, such as the name and address, bank data, such as account numbers or credit card numbers, passwords, TANs and checksums, as well as contract, total and recipient-related information. The information is required to carry out the transactions. However, the data entered is only processed by the payment service providers and stored by them. This means that we do not receive any account or credit card-related information, but only information with confirmation or negative information about the payment. Under certain circumstances, the data may be transmitted by the payment service providers to credit agencies. The purpose of this transmission is to check identity and creditworthiness. Please refer to the payment service provider's terms and conditions and privacy policy for more information.</p>
               <p>The terms and conditions and data protection notices of the respective payment service providers, which are available on the respective websites or transaction applications, apply to payment transactions. We also refer to these for further information and the assertion of rights of revocation, information and other rights of data subjects.</p> <p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Inventory data (e.g. full name, residential address, contact information, customer number, etc.); payment data (e.g. bank details, invoices, payment history); contract data (e.g. subject matter of the contract, duration, customer category); usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Customers. Interested parties.</li><li><strong>Purposes of processing:</strong> Provision of contractual services and fulfillment of contractual obligations.</li><li class=""><strong>Legal basis:</strong> Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR). </li></ul><p><strong>Further information on processing operations, procedures and services:</strong></p><ul class="m-elements"><li><strong>Stripe: </strong>Payment services (technical connection of online payment methods); <strong>Service provider:</strong> Stripe, Inc, 510 Townsend Street, San Francisco, CA 94103, USA; <span class=""><strong>Legal basis:</strong> Performance of a contract and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR); </span><strong>Website:</strong> <a href="https://stripe. com" target="_blank">https://stripe.com</a>; <strong>Privacy Policy:</strong> <a href="https://stripe.com/de/privacy" target="_blank">https://stripe.com/de/privacy</a>. <strong>Basic third country transfers:</strong> Data Privacy Framework (DPF).</li></ul>
               <h2 id="m225">Provision of online services and web hosting</h2><p>We process user data in order to provide them with our online services. For this purpose, we process the user's IP address, which is necessary to transmit the content and functions of our online services to the user's browser or end device.</p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions); meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved). Content data (e.g. text or image messages and contributions and the information relating to them, such as information on authorship or time of creation).</li><li><strong>Persons concerned:</strong> Users (e.g. website visitors, users of online services).</li><li><strong>Purposes of processing:</strong> Provision of our online services and user-friendliness; Information technology infrastructure (operation and provision of information systems and technical devices (computers, servers, etc.)). Security measures.</li><li class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR). </li></ul><p><strong>Further information on processing operations, procedures and services:</strong></p><ul class="m-elements"><li><strong>Provision of online offer on rented storage space: </strong>For the provision of our online offer, we use storage space, computing capacity and software that we rent or otherwise obtain from a corresponding server provider (also called "web host"); <span class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</span></li><li><strong>Provision of online offer on own/ dedicated server hardware: </strong>For the provision of our online offer we use server hardware operated by us as well as the associated storage space, computing capacity and software; <span class=""><strong>legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</span></li><li><strong>Collection of access data and log files: </strong>Access to our online offering is logged in the form of so-called "server log files". The server log files may include the address and name of the web pages and files accessed, the date and time of access, the amount of data transferred, notification of successful access, browser type and version, the user's operating system, referrer URL (the previously visited page) and, as a rule, IP addresses and the requesting provider. The server log files may be used for security purposes, e.g. to avoid overloading the servers (especially in the event of abusive attacks, so-called DDoS attacks) and to ensure the utilization of the servers and their stability; <span class=""><strong>legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR). </span><strong>Deletion of data:</strong> Log file information is stored for a maximum of 30 days and then deleted or anonymized. Data whose further storage is required for evidentiary purposes is excluded from deletion until the respective incident has been finally clarified.</li><li><strong>E-mail dispatch and hosting: </strong>The web hosting services we use also include the dispatch, receipt and storage of e-mails. For these purposes, the addresses of the recipients and senders as well as other information relating to the sending of emails (e.g. the providers involved) and the content of the respective emails are processed. The aforementioned data may also be processed for the purpose of detecting SPAM. Please note that e-mails on the Internet are generally not sent in encrypted form. As a rule, emails are encrypted in transit, but not on the servers from which they are sent and received (unless an end-to-end encryption method is used). We can therefore assume no responsibility for the transmission path of the emails between the sender and receipt on our server; <span class=""><strong>legal basis:</strong> legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</span></li><li><strong>Content Delivery Network: </strong>We use a "Content Delivery Network" (CDN). A CDN is a service with the help of which the content of an online offer, in particular large media files such as graphics or program scripts, can be delivered faster and more securely with the help of regionally distributed servers connected via the Internet; <span class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</span></li></ul>
               <h2 id="m134">Use of cookies</h2><p>Cookies are small text files or other storage notes that store information on end devices and read it from them. For example, to store the log-in status in a user account, the contents of a shopping cart in an e-shop, the content accessed or the functions used in an online offering. Cookies can also be used for various purposes, such as the functionality, security and convenience of online services and the creation of visitor flow analyses.</p>
               <p><strong>Notes on consent: </strong>We use cookies in accordance with the statutory provisions. We therefore obtain prior consent from users, unless this is not required by law. In particular, consent is not required if the storage and reading of information, including cookies, is absolutely necessary in order to provide users with a telemedia service they have expressly requested (i.e. our online offering). The revocable consent is clearly communicated to them and contains the information on the respective use of cookies.</p>
               <p><strong>Notes on legal bases under data protection law: </strong>The legal basis under data protection law on which we process users' personal data using cookies depends on whether we ask for their consent. If the users accept, the legal basis for the processing of their data is the consent given. Otherwise, the data processed using cookies is processed on the basis of our legitimate interests (e.g. in the commercial operation of our online offering and the improvement of its usability) or, if this is done in the context of the fulfillment of our contractual obligations, if the use of cookies is necessary to fulfill our contractual obligations. We explain the purposes for which we use cookies in the course of this privacy policy or as part of our consent and processing procedures.</p> <p>
               <p><strong>Storage period:</strong> A distinction is made between the following types of cookies with regard to the storage period:</p><ul><li><strong>Temporary cookies (also: session cookies):</strong> Temporary cookies are deleted at the latest after a user has left an online service and closed their end device (e.g. browser or mobile application).</li><li><strong>Permanent cookies:</strong> Permanent cookies remain stored even after the end device has been closed. For example, the log-in status can be saved and preferred content can be displayed directly when the user visits a website again. The user data collected with the help of cookies can also be used to measure reach. If we do not provide users with explicit information on the type and storage duration of cookies (e.g. when obtaining consent), they should assume that they are permanent and that the storage duration can be up to two years.</li></ul><p><strong>General information on revocation and objection (opt-out): </strong>Users can revoke the consents they have given at any time and also declare an objection to the processing in accordance with the legal requirements, including by means of the privacy settings of their browser.</p>
               <ul class="m-elements"><li class=""><strong>Legal bases:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR). Consent (Art. 6 para. 1 sentence 1 lit. a) GDPR).</li></ul><p><strong>Further information on processing processes, procedures and services:</strong></p><ul class="m-elements"><li><strong>Processing of cookie data on the basis of consent: </strong>We use a consent management solution in which the consent of users to the use of cookies or to the procedures and providers mentioned in the consent management solution is obtained. This procedure is used to obtain, log, manage and revoke consent, in particular with regard to the use of cookies and comparable technologies that are used to store, read and process information on users' end devices. As part of this procedure, user consent is obtained for the use of cookies and the associated processing of information, including the specific processing and providers mentioned in the consent management procedure. Users also have the option of managing and revoking their consent. The declarations of consent are stored in order to avoid repeated queries and to be able to provide proof of consent in accordance with legal requirements. The storage takes place on the server side and/or in a cookie (so-called opt-in cookie) or by means of comparable technologies in order to be able to assign the consent to a specific user or their device. If no specific information on the providers of consent management services is available, the following general information applies: Consent is stored for up to two years. A pseudonymous user identifier is created, which is stored together with the time of consent, information on the scope of consent (e.g. relevant categories of cookies and/or service providers) and information on the browser, system and device used; <span class=""><strong>legal basis:</strong> consent (Art. 6 para. 1 sentence 1 lit. a) GDPR).</span></li></ul>
               <h2 id="m367">Registration, login and user account</h2><p>Users can create a user account. As part of the registration process, users are provided with the required mandatory information and processed for the purposes of providing the user account on the basis of contractual obligations. The processed data includes in particular the login information (user name, password and an email address).</p>
               <p>We store the IP address and the time of the respective user action as part of the use of our registration and login functions and the use of the user account. The storage is based on our legitimate interests as well as those of the users in protection against misuse and other unauthorized use. This data is not passed on to third parties unless it is necessary to pursue our claims or there is a legal obligation to do so.</p>
               <p>Users can be informed by email about processes that are relevant to their user account, such as technical changes.</p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Inventory data (e.g. full name, residential address, contact information, customer number, etc.); Contact data (e.g. postal and email addresses or telephone numbers); Content data (e.g. text or image messages and contributions as well as the information relating to them, such as information on authorship or time of creation). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Users (e.g. website visitors, users of online services).</li><li><strong>Purposes of processing:</strong> Provision of contractual services and fulfillment of contractual obligations; Security measures; Managing and responding to inquiries. Provision of our online offer and user-friendliness.</li><li class=""><strong>Legal bases:</strong> Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR). Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</li></ul><p><strong>Further information on processing processes, procedures and services:</strong></p><ul class="m-elements"><li><strong>Registration with a clear name: </strong>Because of the nature of our community, we ask users to only use our services using real names. This means that the use of pseudonyms is not permitted; <span class=""><strong>Legal basis:</strong> Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR).</span></li><li><strong>User profiles are public: </strong>User profiles are publicly visible and accessible. </li><li><strong>Two-factor authentication: </strong>Two-factor authentication provides an additional layer of security for your user account and ensures that only you can access your account, even if someone else knows your password. For this purpose, you must perform another authentication measure in addition to your password (e.g. enter a code sent to a mobile device). We will inform you about the procedure we use; <span class=""><strong>Legal basis:</strong> Contract performance and pre-contractual requests (Art. 6 para. 1 sentence 1 lit. b) GDPR).</span></li><li><strong>No obligation to retain data: </strong>It is the responsibility of users to back up their data if they terminate their contract before the end of the contract. We are entitled to irretrievably delete all user data stored during the term of the contract; <span class=""><strong>legal basis:</strong> contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR).</span></li></ul>
               <h2 id="m432">Community functions</h2><p>The community functions provided by us allow users to enter into conversations or otherwise interact with each other. Please note that the use of the community functions is only permitted in compliance with the applicable legal situation, our terms and conditions and guidelines as well as the rights of other users and third parties.</p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Usage data (e.g. page views and dwell time, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Users (e.g. website visitors, users of online services).</li><li><strong>Purposes of processing:</strong> Provision of contractual services and fulfillment of contractual obligations. Security measures.</li><li class=""><strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR). </li></ul><p><strong>Further information on processing processes, procedures and services:</strong></p><ul class="m-elements"><li><strong>Storage of data for security purposes: </strong>The contributions and other user input are processed for the purposes of the community and conversation functions and, subject to legal obligations or legal permission, are not disclosed to third parties. A duty of disclosure may arise in particular in the case of unlawful contributions for the purposes of legal prosecution. We would like to point out that in addition to the content of the posts, the time and IP address of the users are also stored. This is done in order to be able to take appropriate measures to protect other users and the community; <span class=""><strong>legal basis:</strong> contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR). </span></li><li><strong>Right to delete content and information: </strong>The deletion of posts, content or user information is permitted to the extent necessary after proper consideration if there are concrete indications that they constitute a violation of legal regulations, our requirements or the rights of third parties; <span class=""><strong>Legal bases:</strong> Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR).</span></li><li><strong>Protection of personal data: </strong>Users decide for themselves what data they disclose about themselves within our online offering. For example, when users provide information about themselves or participate in conversations. We ask users to protect their data and only publish personal data with caution and only to the extent necessary. In particular, we ask users to take special care to protect their access data and to use secure passwords (i.e. especially long and random character combinations); <span class=""><strong>legal basis:</strong> performance of a contract and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR).</span></li></ul>
               <h2 id="m451">Single sign-on login</h2><p>"Single sign-on" or "single sign-on login or authentication" refers to procedures that allow users to log in to a provider of single sign-on procedures (e.g. a social network), including our online offering, with the help of a user account. The prerequisite for single sign-on authentication is that users are registered with the respective single sign-on provider and enter the required access data in the online form provided for this purpose, or are already registered with the single sign-on provider and confirm the single sign-on registration via a button.
               <p>Authentication takes place directly with the respective single sign-on provider. As part of such authentication, we receive a user ID with the information that the user is logged in to the respective single sign-on provider under this user ID and an ID that cannot be used by us for other purposes (so-called "user handle"). Whether additional data is transmitted to us depends solely on the single sign-on procedure used, on the data releases selected during authentication and also on which data users have released in the privacy or other settings of the user account with the single sign-on provider. Depending on the single sign-on provider and the user's choice, it can be different data, usually the e-mail address and the user name. The password entered with the single sign-on provider as part of the single sign-on procedure is neither visible to us nor stored by us. </p>
               <p>Users are asked to note that their details stored with us can be automatically compared with their user account with the single sign-on provider, but that this is not always possible or actually happens. If, for example, users' email addresses change, they must change them manually in their user account with us.</p>
               <p>If agreed with the users, we may use the single sign-on login as part of or before the fulfillment of the contract, insofar as the users have been asked to do so, process it as part of a consent and otherwise use it on the basis of our legitimate interests and the interests of the users in an effective and secure login system.</p>
               <p>If users decide that they no longer wish to use the link to their user account with the single sign-on provider for the single sign-on procedure, they must remove this link from their user account with the single sign-on provider. If users wish to delete their data with us, they must cancel their registration with us.
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Inventory data (e.g. full name, residential address, contact information, customer number, etc.); Contact data (e.g. postal and email addresses or telephone numbers); Usage data (e.g. page views and duration of visit, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Users (e.g. website visitors, users of online services).</li><li><strong>Purposes of processing:</strong> Provision of contractual services and fulfillment of contractual obligations; security measures. Registration procedure.</li><li class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR). </li></ul><p><strong>Further information on processing operations, procedures and services:</strong></p><ul class="m-elements"><li><strong>Google Single-Sign-On: </strong>Authentication services for user logins, provision of single sign-on functions, management of identity information and application integrations; <strong>Service provider:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; <span class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR); </span><strong>Website:</strong> <a href="https://www.google.de" target="_blank">https://www.google.de</a>; <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>; <strong>Basis for transfers to third countries:</strong> Data Privacy Framework (DPF). <strong>Option to object (opt-out):</strong> Settings for the display of advertisements: <a href="https://myadcenter.google.com/" target="_blank">https://myadcenter.google.com/</a>. </li><li><strong>Microsoft Single-Sign-On: </strong>Authentication services for user logins, provision of single sign-on functions, management of identity information and application integrations; <strong>Service provider:</strong> Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, D18 P521, Ireland; <span class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR); </span><strong>Website:</strong> <a href="https://www.microsoft.com/de-de/security/business/identity-access/azure-active-directory-single-sign-on" target="_blank">https://www.microsoft.com/de-de/security/business/identity-access/azure-active-directory-single-sign-on</a>; <strong>Privacy Policy:</strong> <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank">https://privacy.microsoft.com/de-de/privacystatement</a>; <strong>Basis for transfers to third countries:</strong> Data Privacy Framework (DPF). <strong>Further information:</strong> <a href="https://www.microsoft.com/de-de/trust-center" target="_blank">https://www.microsoft.com/de-de/trust-center</a>. </li><li><strong>OpenID Single-Sign-On: </strong>Authentication services for user logins, provision of single sign-on functions, management of identity information and application integrations; <strong>Service provider:</strong> OpenID Foundation, 2400 Camino Ramon, Suite 375, San Ramon, CA 94583, USA; <span class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR); </span><strong>Website:</strong> <a href="https://openid.net" target="_blank">https://openid.net</a>; <strong>Privacy Policy:</strong> <a href="https://openid.net/policies/" target="_blank">https://openid.net/policies/</a>. <strong>Basic third country transfers:</strong> Data Privacy Framework (DPF).</li></ul>
               <h2 id="m104">Blogs and publication media</h2><p>We use blogs or comparable means of online communication and publication (hereinafter "publication medium"). Readers' data will only be processed for the purposes of the publication medium to the extent necessary for its presentation and communication between authors and readers or for security reasons. For further information, please refer to the information on the processing of visitors to our publication medium in this privacy policy.</p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Inventory data (e.g. full name, residential address, contact information, customer number, etc.); contact data (e.g. postal and email addresses or telephone numbers); content data (e.g. text or image messages and content data (e.g. text or image messages and contributions and the information relating to them, such as information on authorship or time of creation); usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Users (e.g. website visitors, users of online services).</li><li><strong>Purposes of processing:</strong> Provision of contractual services and fulfillment of contractual obligations; feedback (e.g. collecting feedback via online form). Provision of our online services and user-friendliness.</li><li class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</li></ul>
               <h2 id="m182">Contact and inquiry management</h2><p>When contacting us (e.g. by post, contact form, email, telephone or via social media) and as part of existing user and business relationships, the details of the enquiring persons are processed insofar as this is necessary to answer the contact inquiries and any requested measures.</p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Contact data (e.g. postal and email addresses or telephone numbers); Content data (e.g. text or image messages and contributions as well as the information relating to them, such as information on authorship or time of creation); Usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Communication partners.</li><li><strong>Purposes of processing:</strong> Contact requests and communication; Managing and responding to requests; Feedback (e.g. collecting feedback via online form). Provision of our online offering and user-friendliness.</li><li class=""><strong>Legal bases:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR). Fulfilment of contract and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR).</li></ul><p><strong>Further information on processing operations, procedures and services:</strong></p><ul class="m-elements"><li><strong>Contact form: </strong>When users contact us via our contact form, email or other communication channels, we process the data communicated to us in this context to process the communicated request; <span class=""><strong>Legal bases:</strong> Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b) GDPR), Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</span></li></ul>
               <h2 id="m263">Web analysis, monitoring and optimization</h2><p>Web analysis (also referred to as "reach measurement") is used to evaluate the flow of visitors to our online offering and may include behavior, interests or demographic information about visitors, such as age or gender, as pseudonymous values. With the help of reach analysis, we can, for example, recognize at what time our online offer or its functions or content are most frequently used, or invite visitors to reuse them. It also enables us to understand which areas require optimization. </p>
               <p>In addition to web analysis, we may also use test procedures, for example to test and optimize different versions of our online offering or its components.
               <p>Unless otherwise stated below, profiles, i.e. data summarized for a usage process, may be created for these purposes and information may be stored in a browser or end device and then read out. The information collected includes, in particular, websites visited and the elements used there as well as technical information such as the browser used, the computer system used and information on usage times. If users have consented to the collection of their location data from us or from the providers of the services we use, it is also possible to process location data.
               <p>In addition, the IP addresses of users are stored. However, we use an IP masking procedure (i.e. pseudonymization by shortening the IP address) to protect users. In general, no clear user data (such as e-mail addresses or names) is stored in the context of web analysis, A/B testing and optimization, but pseudonyms. This means that neither we nor the providers of the software used know the actual identity of the users, but only the information stored in their profiles for the purpose of the respective processes.</p>
               <p><strong>Notes on legal bases:</strong> If we ask users for their consent to the use of third-party providers, the legal basis for data processing is consent. Otherwise, user data is processed on the basis of our legitimate interests (i.e. interest in efficient, economical and recipient-friendly services). In this context, we would also like to draw your attention to the information on the use of cookies in this privacy policy.</p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Users (e.g. website visitors, users of online services).</li><li><strong>Purposes of processing:</strong> Reach measurement (e.g. access statistics, recognition of returning visitors). Profiles with user-related information (creation of user profiles).</li><li><strong>Security measures:</strong> IP masking (pseudonymization of the IP address).</li></ul>
               <h2 id="m135">Affiliate programs and affiliate links</h2><p>We include so-called affiliate links or other references (which may include, for example, search masks, widgets or discount codes) to the offers and services of third-party providers (collectively referred to as "affiliate links") in our online offer. If users follow the affiliate links or subsequently take advantage of the offers, we may receive a commission or other benefits from these third-party providers (collectively referred to as "commission").</p> <p>
               <p>In order to be able to track whether the users have taken up the offers of an affiliate link used by us, it is necessary for the respective third-party providers to know that the users have followed an affiliate link used within our online offer. The assignment of the affiliate links to the respective business transactions or other actions (e.g. purchases) serves the sole purpose of commission settlement and is canceled as soon as it is no longer necessary for this purpose.
               <p>For the purposes of the aforementioned assignment of affiliate links, certain values can be added to the affiliate links, which are part of the link or can be stored elsewhere, e.g. in a cookie. The values may include, in particular, the source website (referrer), the time, an online identifier of the operator of the website on which the affiliate link was located, an online identifier of the respective offer, the type of link used, the type of offer and an online identifier of the user.
               <p><strong>Notes on legal bases:</strong> If we ask users for their consent to the use of third-party providers, the legal basis for the processing of data is consent. Otherwise, user data is processed on the basis of our legitimate interests (i.e. interest in efficient, economical and recipient-friendly services). In this context, we would also like to draw your attention to the information on the use of cookies in this privacy policy.</p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Contract data (e.g. subject matter of the contract, duration, customer category); usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Users (e.g. website visitors, users of online services).</li><li><strong>Purposes of processing:</strong> Affiliate tracking.</li><li class=""><strong>Legal bases:</strong> Consent (Art. 6 para. 1 sentence 1 lit. a) GDPR). Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR).</li></ul>
               <h2 id="m136">Presence in social networks (social media)</h2><p>We maintain online presences within social networks and process user data in this context in order to communicate with the users active there or to offer information about us.</p>
               <p>We would like to point out that user data may be processed outside the European Union. This may result in risks for users because, for example, it could make it more difficult to enforce user rights.</p> <p>
               <p>Furthermore, user data within social networks is generally processed for market research and advertising purposes. For example, user profiles can be created based on user behavior and the resulting interests of users. The latter may in turn be used, for example, to place advertisements within and outside the networks that presumably correspond to the interests of the users. Cookies are therefore generally stored on the user's computer, in which the user's usage behavior and interests are stored. In addition, data can also be stored in the user profiles independently of the devices used by the users (especially if they are members of the respective platforms and are logged in there).</p>
               <p>For a detailed description of the respective forms of processing and the opt-out options, please refer to the privacy policies and information provided by the operators of the respective networks.
               <p>In the case of requests for information and the assertion of data subject rights, we would also like to point out that these can be asserted most effectively with the providers. Only the latter have access to the user data and can take appropriate measures and provide information directly. If you still need help, you can contact us.</p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Contact data (e.g. postal and email addresses or telephone numbers); Content data (e.g. text or image messages and contributions as well as the information relating to them, such as information on authorship or time of creation); Usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Users (e.g. website visitors, users of online services).</li><li><strong>Purposes of processing:</strong> Contact requests and communication; feedback (e.g. collecting feedback via online form). Marketing.</li><li class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR). </li></ul><p><strong>Further information on processing operations, procedures and services:</strong></p><ul class="m-elements"><li><strong>Instagram: </strong>Social network; <strong>Service provider:</strong> Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Ireland; <span class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR); </span><strong>Website:</strong> <a href="https://www.instagram.com" target="_blank">https://www.instagram.com</a>; <strong>Privacy Policy:</strong> <a href="https://instagram.com/about/legal/privacy" target="_blank">https://instagram.com/about/legal/privacy</a>. <strong>Basic third country transfers:</strong> Data Privacy Framework (DPF). </li><li><strong>TikTok: </strong>Social network / video platform; <strong>Service provider:</strong> TikTok Technology Limited, 10 Earlsfort Terrace, Dublin, D02 T380, Ireland and TikTok Information Technologies UK Limited, Kaleidoscope, 4 Lindsey Street, London, United Kingdom, EC1A 9HP; <span class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f) GDPR); </span><strong>Website:</strong> <a href="https://www.tiktok.com" target="_blank">https://www.tiktok.com</a>. <strong>Privacy Policy:</strong> <a href="https://www.tiktok.com/de/privacy-policy" target="_blank">https://www.tiktok.com/de/privacy-policy</a>.</li><li><strong>YouTube: </strong>Social network and video platform; <strong>Service provider:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; <span class=""><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 p. 1 lit. f) GDPR); </span><strong>Data protection declaration:</strong> <a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>; <strong>Basis for third country transfers:</strong> Data Privacy Framework (DPF). <strong>Option to object (opt-out):</strong> <a href="https://myadcenter.google.com/personalizationoff" target="_blank">https://myadcenter.google.com/personalizationoff</a>.</li></ul>
               <h2 id="m723">Management, organization and auxiliary tools</h2><p>We use services, platforms and software from other providers (hereinafter referred to as "third-party providers") for the purposes of organizing, managing, planning and providing our services. When selecting third-party providers and their services, we observe the legal requirements. </p>
               <p>In this context, personal data may be processed and stored on the servers of the third-party providers. This may affect various data that we process in accordance with this privacy policy. This data may include, in particular, master data and contact data of users, data on transactions, contracts, other processes and their content.</p> <p>
               <p>If users are referred to the third-party providers or their software or platforms in the context of communication, business or other relationships with us, the third-party providers may process usage data and metadata for security purposes, service optimization or marketing purposes. We therefore ask you to observe the data protection notices of the respective third-party providers.</p>
               <ul class="m-elements"><li><strong>Types of data processed:</strong> Content data (e.g. text or image messages and contributions and the information relating to them, such as information on authorship or time of creation); Usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions). Meta, communication and process data (e.g. IP addresses, time data, identification numbers, persons involved).</li><li><strong>Persons concerned:</strong> Communication partners. Users (e.g. website visitors, users of online services).</li><li><strong>Purposes of processing:</strong> Provision of contractual services and fulfillment of contractual obligations. Office and organizational procedures.</li></ul>
            </div>
            {/if}
    </div>
</div>