import { L10n, loadCldr, setCulture, setCurrencyCode } from "@syncfusion/ej2-base";
import * as gregorian from "cldr-data/main/fa/ca-gregorian.json";
import * as numbers from "cldr-data/main/fa/numbers.json";
import * as timeZoneNames from "cldr-data/main/fa/timeZoneNames.json";
import * as numberingSystems from "cldr-data/supplemental/numberingSystems.json";
import * as weekData from "cldr-data/supplemental/weekData.json";

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData);

// تنظیم فرهنگ و زبان
setCulture("fa");
setCurrencyCode("IRR");

L10n.load({
  fa: {
    schedule: {
      day: "روز",
      week: "هفته",
      workWeek: "هفته کاری",
      month: "ماه",
      agenda: "برنامه‌ریزی",
      today: "امروز",
      noEvents: "رویدادی یافت نشد",
      emptyContainer: "رویدادی برای این روز موجود نیست.",
      allDay: "تمام روز",
      start: "شروع",
      end: "پایان",
      more: "بیشتر",
      close: "بستن",
      cancel: "لغو",
      noTitle: "(بدون عنوان)",
      save: "ذخیره",
      deleteButton: "حذف",
      newEvent: "رویداد جدید",
      editEvent: "ویرایش رویداد",
      editFollowingEvent: "رویداد بعدی را ویرایش کن",
      editSeries: "ویرایش سری",
      deleteEvent: "حذف رویداد",
      deleteFollowingEvent: "رویداد بعدی را حذف کن",
      deleteSeries: "حذف کل سری",
      moreDetails: "جزئیات بیشتر",
      subject: "عنوان",
      location: "محل",
      description: "توضیحات",
      startTime: "زمان شروع",
      endTime: "زمان پایان",
    },
    recurrenceeditor: {
      none: "هیچ‌کدام",
      daily: "روزانه",
      weekly: "هفتگی",
      monthly: "ماهانه",
      every: "هر",
      end: "پایان",
      until: "تا",
      count: "تعداد",
      first: "اول",
      second: "دوم",
      third: "سوم",
      fourth: "چهارم",
      last: "آخر",
      repeat: "تکرار",
      on: "رو",
      day: "روز",
      week: "هفته",
      month: "ماه",
      year: "سال",
    },
  },
});
