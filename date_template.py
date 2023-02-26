from datetime import date, timedelta


def get_date(date_in):
    month_list = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    date_split = str(date_in).split('-')
    day = date_split[2]
    month = month_list[int(date_split[1])-1]
    return f'{day} {month}'


deadlines = {'today': get_date(date.today()), 'three_days': get_date(date.today() + timedelta(days=3)),
             'four_weeks': get_date(date.today() + timedelta(weeks=4)),
             'six_months': get_date(date.today() + timedelta(weeks=24))}








