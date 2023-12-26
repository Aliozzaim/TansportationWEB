import React from "react";
import Link from "next/link";

const SideNavigation = ({ user }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/anasayfa">
            <a>Anasayfa</a>
          </Link>
        </li>
        <li>
          <Link href="/teklifler">
            <a>Teklifler</a>
          </Link>
        </li>
        <li>
          <Link href="/mesajlar">
            <a>Mesajlar</a>
          </Link>
        </li>
        <li>
          {user && (
            <>
              <div>{user.name}</div>
              <div>{user.phoneNumber}</div>
              <div>{user.profilePhoto}</div>
            </>
          )}
        </li>
        <li>
          <Link href="/profil-duzenle">
            <a>Profili Düzenle</a>
          </Link>
        </li>
        <li>
          <Link href="/destek">
            <a>Destek</a>
          </Link>
        </li>
        <li>
          <Link href="/ilanlarim">
            <a>İlanlarım</a>
          </Link>
        </li>
        <li>
          <Link href="/araclarim">
            <a>Araçlarım</a>
          </Link>
        </li>
        <li>
          <Link href="/degerlendirmelerim">
            <a>Değerlendirmelerim</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;
