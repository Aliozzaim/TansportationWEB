import Image from "next/image";
import Link from "next/link";
import HeaderIcon from "../../public/assets/images/truck.svg";

const Footer = () => {
  return (
    <footer className="border-t border-solid border-gray-700 py-[36px] bg-[#1A1A1A]">
      <div className="max-w-[942px] flex justify-start pl-[2rem] gap-[9rem] footer_t1">
        <div className="w-1/4">
          <a href="/">
            <Image src={HeaderIcon} alt="apple" />
          </a>
          <p className="mt-[24px] opacity-50 ">
            Nakilport 2023<br></br>Tüm hakları saklıdır
          </p>
        </div>
        <div className="flex justify-between w-full">
          <ul className="flex flex-col gap-4">
            <li>
              <a className="opacity-50 " href="#">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#">Gizlilik Sözleşmesi</a>
            </li>
            <li>
              <a href="#">Bize Ulaşın</a>
            </li>
            <li>
              <a href="#">Kullanıcı Sözleşmesi</a>
            </li>
          </ul>
          <ul className="flex items-start flex-col gap-4">
            <li>
              <a className="opacity-50 " href="#">
                Sosyal Medya
              </a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
          </ul>
          <ul className="flex items-start flex-col gap-4 mr-4 ">
            <li>
              <a className="opacity-50 " href="#">
                Şimdi Yükle
              </a>
            </li>
            <li>
              <a href="#">Google Play</a>
            </li>
            <li>
              <a href="#">App Store</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
