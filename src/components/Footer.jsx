import { Link } from "react-router";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div className="mt-32 mb-24 px-[150px] ">
      <div className=" flex flex-row w-full h-[300px] justify-between ">
        <div>
          <h1 className="font-medium">Помощь</h1>
          <div className="mt-[47px] flex flex-col gap-4">
            <Link to="/вопросы">
              <p className="font-light">Частые вопросы</p>
            </Link>
            <Link to="/доставка">
              <p className="font-light">Доставка и самовывоз</p>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-medium">Политика и условия</h1>
          <div className="mt-[47px] space-y-4">
            <p className="font-light">Обмен и возврат</p>
            <p className="font-light">Политика конфиденциальности</p>
            <p className="font-light">Условия предоставления услуг</p>
          </div>
        </div>
        <div>
          <h1 className="font-medium">Служба клиентской поддержки</h1>
          <div className="mt-[47px] space-y-4">
            <p className="font-light">
              support@thesortage.com
              <br />
              {`+7(995)788-00-58`}
            </p>
            <p className="font-light">
              Звонки принимаются ежедневно
              <br />с 10:00 до 22:00 по МСК
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-medium">Адреса складов</h1>
          <div className="mt-[47px] space-y-4">
            <p className="font-light">
              Москва, Кутузовский проспект 48ТЦ
              <br />
              Галереи `Времена Года`, 3 этаж.
            </p>
            <p className="font-light">
              Время работы: ежедневно с 11:00 до 22:00.
            </p>
            <p className="font-light">
              Московская область, деревня Воронки,
              <br />1 к. 4. ТЦ Архангельское Аутлет.
            </p>
            <p className="font-light">
              Время работы: ежедневно с 10:00 до 22:00.
            </p>
          </div>
        </div>
      </div>
      <button className="flex justify-center items-center border-2 bg-white space-x-2 text-black rounded-lg px-4 py-2">
        <img src={logo} alt="buttonLogo" className="w-8 h-6s" />
        <div className="text-left">
          <p>Наш телеграм канал</p>
          <p className="font-extralight text-sm">Telegram web app</p>
        </div>
      </button>
    </div>
  );
}
