import os
import sys
sys.path.append('/home/c/root/myenv/lib/python3.4/site-packages/')

from flask import Flask, render_template, url_for, redirect
import requests
from bs4 import BeautifulSoup as bs

lang = "ru"

english_news_url = "https://news.google.com/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZqY0hsNUVnSnlkU2dBUAE?hl=en-US&gl=US&ceid=US:en"
russian_news_url = "https://www.coronavirus2020.kz/ru/vaccination"
kazakh_news_url = "https://www.coronavirus2020.kz/kz/vaccination"

class faq_class:
    def __init__(self, q1, a1, q2, a2, q3, a3, q4, a4, tomain, lg):
        self.q1 = q1
        self.q2 = q2
        self.q3 = q3
        self.q4 = q4
        self.a1 = a1
        self.a2 = a2
        self.a3 = a3
        self.a4 = a4
        self.tomain = tomain
        self.lg = lg

class news_sample:
    def __init__(self, title, link):
        self.title = title
        self.link = link

sample_news = [
    news_sample("lol", "lol"),
    news_sample("lol", "lol"),
    news_sample("lol", "lol"),
    news_sample("lol", "lol"),
    news_sample("lol", "lol"),
    news_sample("lol", "lol"),
    news_sample("lol", "lol")
]

faq_russian = faq_class(
    "Кто составлял вопросы?",
    "Кто имеет доступ к результатам теста?",
    "Являются ли результаты теста поводом обратиться к врачу?",
    "Какой штамм вируса рассматривается в тесте?",
    "Вопросы и систему оценивания составляли члены рабочей группы межведомственная комиссия по вопросам распространения коронавирусной инфекции в пределах Республики Казахстан, а также члены рабочей группы по созданию КП клинического протокола Республики Казахстан. Также участие принимали: Проректор медицинского университета Астана по клинической работе - Малтабарова Нурила Амангалиевна и заведующий отделением интенсивной терапии городского инфекционного стационара - Иримбетов Серик Берикович.",
    "Результаты не сохраняются ни в облаке, ни у вас, соответственно доступа к ним нет.",
    "Исходя из эксперимента, с выборкой более чем из 1000 людей (доля подтверждено больных была равной), данный тест имеет точность более 80%.",
    "Так как штаммы являются генетической последовательностью WIV04/2019, их вирулентность отличается не так сильно, из-за чего есть возможность построить тест, основываясь на общих данных, что и было сделано.",
    "На главную",
    "ru"
)

faq_english = faq_class(
    "Who made up the questions?",
    "Who has access to the test results?",
    "Are test results able to be considered as a reason to see a doctor?",
    "Which virus strain is tested?",
    "The questions and the assessment system were composed by the members of the committee of the interdepartmental spreading of coronavirus commission within the Republic of Kazakhstan, as well as the members of the working group on the creation of the clinical guidelines of Kazakhstan. Also took part: Vice-rector of the Medical University of Astana for clinical work - Maltabarova Nurila Amangalievna and the head of the intensive care unit of the city infectious hospital - Irimbetov Serik Berikovich. ",
    "The results are not saved either in the cloud or on your device, so there is no access to them.",
    "Based on the experiment, with a sample of more than 1000 people, this test has an accuracy of approximately 80%.",
    "Since the strains are the genetic sequence of WIV 04 / 2019, their virulence does not differ much, which makes this test universal (suitable for every single strain).",
    "Main page",
    "en"
)

faq_kazakh = faq_class(
    "Кто составлял вопросы?",
    "Кто имеет доступ к результатам теста?",
    "Являются ли результаты теста поводом обратиться к врачу?",
    "Какой штамм вируса рассматривается в тесте?",
    "Вопросы и систему оценивания составляли члены рабочей группы межведомственная комиссия по вопросам распространения коронавирусной инфекции в пределах Республики Казахстан, а также члены рабочей группы по созданию КП клинического протокола Республики Казахстан. Также участие принимали: Проректор медицинского университета Астана по клинической работе - Малтабарова Нурила Амангалиевна и заведующий отделением интенсивной терапии городского инфекционного стационара - Иримбетов Серик Берикович.",
    "Результаты не сохраняются ни в облаке, ни у вас, соответственно доступа к ним нет.",
    "Исходя из эксперимента, с выборкой более чем из 1000 людей (доля подтверждено больных была равной), данный тест имеет точность более 80%.",
    "Так как штаммы являются генетической последовательностью WIV04/2019, их вирулентность отличается не так сильно, из-за чего есть возможность построить тест, основываясь на общих данных, что и было сделано.",
    "На главную",
    "kz"
)

app = Flask(__name__)
application = app


def news_parse(url):
    r = requests.get(url, verify=False)

    html = bs(r.content, 'html.parser')

    news = []

    if url == "base":
        return news

    if url == kazakh_news_url or url == russian_news_url:
        for el in html.select("#lenta > .lenta_news_block"):
            title = el.select(".lenta_news_block > li > .info_cont_news > .lenta_news_title > a")
            href = "https://www.coronavirus2020.kz" + title[0].get('href')
            news.append(news_sample(title[0].text, href))

        return news

    for el in html.select(".xrnccd > article"):
        title = el.select("article > h3 > a")
        href = "https://news.google.com" + title[0].get('href')
        news.append(news_sample(title[0].text, href))

    return news

@app.route('/languages')
def languages_page():
    return render_template("languages.html", news=sample_news)

@app.route('/')
def index():
    return redirect('/languages')

@app.route('/ru')
def redirect_ru():
    lang = "ru"
    return redirect('/ru/test')

@app.route('/en')
def redirect_en():
    lang = "en"
    return redirect('/en/test')

@app.route('/kz')
def redirect_kz():
    lang = "kz"
    return redirect('/kz/test')

@app.route('/en/test')
def english():
    lang = "en"
    return render_template("english.html", news=news_parse(english_news_url), lang=lang)

@app.route('/ru/test')
def russian():
    lang = "ru"
    return render_template("russian.html", news=news_parse(russian_news_url), lang=lang)

@app.route('/kz/test')
def kazakh():
    lang = "kz"
    return render_template("kazakh.html", news=news_parse(kazakh_news_url), lang=lang)

@app.route('/faq')
def faq():
    if lang == "ru":
        return redirect('/ru/faq')
    if lang == "en":
        return redirect('/en/faq')
    if lang == "kz":
        return redirect('/kz/faq')

@app.route('/en/faq')
def faq_en():
    lang = "en"
    return render_template("faq.html", faq_c=faq_english)

@app.route('/ru/faq')
def faq_ru():
    lang = "ru"
    return render_template("faq.html", faq_c=faq_russian)

@app.route('/kz/faq')
def faq_kz():
    lang = "kz"
    return render_template("faq.html", faq_c=faq_kazakh)

if __name__ == "__main__":
    app.run(debug=False)
