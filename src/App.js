import React from 'react';
import Home from './pages/home';

function App() {
  return (
    <div className="container">
      <h1>React Developers Team</h1>
      <div>
        <p>
          Этот сайт был создан участниками хакатона, проходившего в октябре 2021
          года, в рамках образовательной программы по совершенствованию навыков
          JavaScript и React разработки.
        </p>
        <p>
          Команда разработчиков из разных стран мира в течение двух дней
          постаралась реализовать предложенное организаторами хакатона задание и
          максимально раскрыть свой технический и творческий потенциал.
        </p>
        <p>
          Для реализации проекта нами были использована библиотека React, CSS
          фреймворк Bootstrap и лучшие технологические решения.
        </p>
        <p>
          То, что нам удалось сделать за столь короткое время, вы можете оценить
          по достоинству переходя по ссылкам сайта, нажимая на восхитительные,
          радующие взгляд искушенного зрителя кнопочки, наслаждаясь изысканным
          дизайном bootstrap-компонентов.
        </p>
        <p>
        Посещайте наш замечательный сайт как можно чаще. Здесь вряд ли что-то когда-нибудь поменяется в будущем и поэтому приходя сюда снова и снова вы будете ощущать себя в привычной для вас обстановке и тихо созерцая причудливые линии веб-компонентов размышлять о чем-то великом. 
        </p>
        <p>
        Добавьте ссылку на наше приложение в закладки браузера и не забудьте отправить ее своим друзьям, мы думаем им будет приятно.
        </p>
        <p>Всегда ваша команда реакт-разработчиков.</p>
      </div>
      <Home />
    </div>
  );
}

export default App;
