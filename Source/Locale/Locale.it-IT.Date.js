/*
---

name: Locale.it-IT.Date

description: Date messages for Italian.

license: MIT-style license.

authors:
  - Andrea Novero
  - Valerio Proietti

requires:
  - /Locale

provides: [Locale.it-IT.Date]

...
*/

Locale.define('it-IT', 'Date', {

	months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
	months_abbr: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
	days: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
	days_abbr: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],

	// Culture's date order: DD/MM/YYYY
	dateOrder: ['date', 'month', 'year'],
	shortDate: '%d/%m/%Y',
	shortTime: '%H.%M',
	AM: 'AM',
	PM: 'PM',

	// Date.Extras
	ordinal: 'º',

	lessThanMinuteAgo: 'meno di un minuto fa',
	minuteAgo: 'circa un minuto fa',
	minutesAgo: 'circa {delta} minuti fa',
	hourAgo: "circa un'ora fa",
	hoursAgo: 'circa {delta} ore fa',
	dayAgo: 'circa 1 giorno fa',
	daysAgo: 'circa {delta} giorni fa',

	lessThanMinuteUntil: 'tra meno di un minuto',
	minuteUntil: 'tra circa un minuto',
	minutesUntil: 'tra circa {delta} minuti',
	hourUntil: "tra circa un'ora",
	hoursUntil: 'tra circa {delta} ore',
	dayUntil: 'tra circa un giorno',
	daysUntil: 'tra circa {delta} giorni'

});
