# HouseOfKickz-Frontend
Dieses README dokumentiert die Schritte, die notwendig sind, um das HouseOfKickz-Frontend lokal zum Laufen zu bringen.

# Systemarchitektur
Die Systemarchitektur des HouseOfKickz-Frontends basiert auf dem atomaren Design, das von Brad Frost eingeführt wurde.

![image](https://user-images.githubusercontent.com/69903847/177051749-15000f71-4a75-44e3-85d2-d2f8c1b5265f.png)


## Verfügbare Skripte

Im Projektverzeichnis können Sie folgendes ausführen:

### `yarn start`

Startet die App im Entwicklungsmodus.\
Öffnen Sie [http://localhost:3000](http://localhost:3000), um sie im Browser zu betrachten.

Die Seite wird neu geladen, wenn Sie Änderungen vornehmen.\
Sie werden auch alle Lint-Fehler in der Konsole sehen.

### `yarn test`

Startet den Test Runner im interaktiven Überwachungsmodus.\
Weitere Informationen finden Sie im Abschnitt über [Tests ausführen] (https://facebook.github.io/create-react-app/docs/running-tests).

### `yarn build`

Baut die Anwendung für die Produktion in den `build` Ordner.\
Es bündelt React korrekt im Produktionsmodus und optimiert den Build für die beste Leistung.

Der Build ist minified und die Dateinamen enthalten die Hashes.\
Ihre App ist bereit für das Deployment!

Siehe den Abschnitt über [deployment](https://facebook.github.io/create-react-app/docs/deployment) für weitere Informationen.

### `yarn eject`

**Hinweis: Dies ist ein einseitiger Vorgang. Sobald Sie `eject` gemacht haben, können Sie nicht mehr zurück!

Wenn Sie mit der Wahl des Build-Tools und der Konfiguration nicht zufrieden sind, können Sie jederzeit `eject` ausführen. Mit diesem Befehl wird die einzelne Build-Abhängigkeit aus Ihrem Projekt entfernt.

Stattdessen werden alle Konfigurationsdateien und die transitiven Abhängigkeiten (webpack, Babel, ESLint, etc.) direkt in Ihr Projekt kopiert, so dass Sie die volle Kontrolle über sie haben. Alle Befehle mit Ausnahme von "eject" funktionieren weiterhin, aber sie verweisen auf die kopierten Skripte, so dass Sie sie anpassen können. An diesem Punkt sind Sie auf sich allein gestellt.

Sie müssen `eject` nicht mehr verwenden. Der kuratierte Funktionssatz ist für kleine und mittlere Einsätze geeignet, und Sie sollten sich nicht verpflichtet fühlen, diese Funktion zu nutzen. Wir verstehen jedoch, dass dieses Tool nicht nützlich wäre, wenn Sie es nicht anpassen könnten, wenn Sie dazu bereit sind.

### `yarn install`
Installiert alle Dependencies, die im package.json erwähnt sind, damit das Frontend mit all seinen Funktionen funktioniert.

# Setup
Clonen Sie dieses Projekt auf ihren Rechner. Öffnen Sie das Projekt mit Visual Studio Code.
Da alle Dependencies noch nicht heruntergeladen ist, müssen Sie einen `yarn install` vornehmen. Nachdem der vorher erwähnte Code durchgeführt worden ist, können Sie nun mit `yarn start` das Frontend starten. Jetzt wird das Frontend richtig gestartet. Stellen Sie sicher das das Backend lauft, damit alle Daten im Frontend erscheinen.

Öffnen Sie Ihren Browser und geben Sie: localhost:3000 ein.
Nun sehen Sie die HouseOfKickz-Seite mit allen Daten.

## Mehr erfahren

Sie können mehr in der [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) erfahren.

Um React zu lernen, schauen Sie sich die [React-Dokumentation](https://reactjs.org/) an.
