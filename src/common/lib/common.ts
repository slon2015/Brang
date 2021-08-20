import moment from "moment";

export function pageDefault() {

  moment.updateLocale('ru', {
    week: {
      dow: 1,
    }
  })
}
