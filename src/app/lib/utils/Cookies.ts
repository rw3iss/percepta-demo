export default class Cookies {

    static set(name: string, value: string, days: number = 7) {
        var expires = "";

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }

        document.cookie = name + "=" + value + expires + "; path=/";
    }

    static get(name: string) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];

            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);

            if (c.indexOf(nameEQ) === 0)
                return c.substring(nameEQ.length, c.length);
        }

        return null;
    }

    static delete(name: string) {
        Cookies.set(name, "", -1);
    }
}